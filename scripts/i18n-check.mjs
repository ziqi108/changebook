/**
 * i18n 一致性检查脚本
 *
 * 在 `next build` 之后运行：node scripts/i18n-check.mjs
 *
 * 检查项：
 * 1. 每对已发布的中英文页面（lib/i18n.ts ROUTE_MAP）：
 *    - 预渲染 HTML 中 canonical 自引用正确（英文不自指中文、反之亦然）
 *    - 双向 hreflang：en / zh-Hans / x-default 三条齐全、URL 为绝对地址且正确
 * 2. hreflang 不得指向 noindex 页面（检查目标页面预渲染 HTML 的 robots meta）
 * 3. hreflang 不得指向 404（检查目标 HTML 文件存在）
 * 4. sitemap.xml：包含所有已发布页面、不包含 noindex 页面、URL 全部为绝对地址
 * 5. <html lang> 属性：英文页面 en，中文页面 zh-CN
 *
 * 任一检查失败以非零码退出（可用于 CI）。
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const SERVER_DIR = join(ROOT, '.next', 'server', 'app');
const SITE_URL = 'https://www.yiwisdom.org';

/** 与 lib/i18n.ts ROUTE_MAP 保持一致（脚本不 import TS，避免依赖编译步骤） */
const ROUTE_MAP = [
  { en: '/', zh: '/zh' },
  { en: '/about', zh: '/zh/about' },
  { en: '/contact', zh: '/zh/contact' },
  { en: '/privacy', zh: '/zh/privacy' },
  { en: '/terms', zh: '/zh/terms' },
  { en: '/cookie-policy', zh: '/zh/cookie-policy' },
  { en: '/refund-policy', zh: '/zh/refund-policy' },
  { en: '/educational-disclaimer', zh: '/zh/educational-disclaimer' },
];

/** noindex 页面：不得出现在 hreflang 目标和 sitemap 中 */
const NOINDEX_PATHS = ['/zh/articles'];

const htmlPath = (route) =>
  join(SERVER_DIR, route === '/' ? 'index.html' : `${route}.html`);

const errors = [];
const ok = [];

function loadHtml(route) {
  const p = htmlPath(route);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8');
}

function extractCanonical(html) {
  const m = html.match(/<link rel="canonical" href="([^"]+)"/i);
  return m ? m[1] : null;
}

function extractHreflang(html) {
  const out = {};
  // React SSR 输出 hrefLang（HTML 属性名大小写不敏感，此处用 /i 兼容）
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)) {
    out[m[1]] = m[2];
  }
  return out;
}

function isNoindex(html) {
  return /<meta name="robots" content="[^"]*noindex[^"]*"/i.test(html);
}

// —— 1/2/3. 中英文配对页面：canonical + hreflang 双向一致性 ——
for (const pair of ROUTE_MAP) {
  const enUrl = `${SITE_URL}${pair.en === '/' ? '' : pair.en}`;
  const zhUrl = `${SITE_URL}${pair.zh}`;

  const enHtml = loadHtml(pair.en);
  const zhHtml = loadHtml(pair.zh);

  if (!enHtml) errors.push(`[MISSING] 预渲染 HTML 不存在: ${pair.en}`);
  if (!zhHtml) errors.push(`[MISSING] 预渲染 HTML 不存在: ${pair.zh}`);
  if (!enHtml || !zhHtml) continue;

  // canonical 自引用
  const enCanon = extractCanonical(enHtml);
  const zhCanon = extractCanonical(zhHtml);
  if (enCanon !== enUrl) errors.push(`[CANONICAL] ${pair.en} canonical 应为 ${enUrl}，实际 ${enCanon}`);
  if (zhCanon !== zhUrl) errors.push(`[CANONICAL] ${pair.zh} canonical 应为 ${zhUrl}，实际 ${zhCanon}`);

  // hreflang 双向
  for (const [label, html, selfUrl, otherUrl] of [
    ['en', enHtml, enUrl, zhUrl],
    ['zh', zhHtml, zhUrl, enUrl],
  ]) {
    const alt = extractHreflang(html);
    if (alt['en'] !== enUrl) errors.push(`[HREFLANG] ${label} 页 hreflang=en 应为 ${enUrl}，实际 ${alt['en']}`);
    if (alt['zh-Hans'] !== zhUrl) errors.push(`[HREFLANG] ${label} 页 hreflang=zh-Hans 应为 ${zhUrl}，实际 ${alt['zh-Hans']}`);
    if (alt['x-default'] !== enUrl) errors.push(`[HREFLANG] ${label} 页 hreflang=x-default 应为 ${enUrl}，实际 ${alt['x-default']}`);
  }

  // <html lang>
  if (!/<html lang="en"/i.test(enHtml)) errors.push(`[LANG] ${pair.en} 的 <html lang> 不是 en`);
  if (!/<html lang="zh-CN"/i.test(zhHtml)) errors.push(`[LANG] ${pair.zh} 的 <html lang> 不是 zh-CN`);

  ok.push(`pair ${pair.en} <-> ${pair.zh}`);
}

// —— 2/3. hreflang 不得指向 noindex / 404 ——
for (const route of [...ROUTE_MAP.flatMap((p) => [p.en, p.zh])]) {
  const html = loadHtml(route);
  if (!html) continue;
  for (const [, href] of html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/gi)) {
    const targetPath = href.replace(SITE_URL, '') || '/';
    if (NOINDEX_PATHS.includes(targetPath)) {
      errors.push(`[HREFLANG→NOINDEX] ${route} 的 hreflang 指向 noindex 页面 ${targetPath}`);
    }
    const targetHtml = loadHtml(targetPath);
    if (targetHtml === null) {
      errors.push(`[HREFLANG→404] ${route} 的 hreflang 指向无预渲染页面的 ${targetPath}`);
    } else if (isNoindex(targetHtml)) {
      errors.push(`[HREFLANG→NOINDEX] ${route} 的 hreflang 指向 noindex 页面 ${targetPath}`);
    }
  }
}

// —— 4. sitemap.xml 校验 ——
const sitemapPath = join(ROOT, '.next', 'server', 'app', 'sitemap.xml.body');
if (existsSync(sitemapPath)) {
  const xml = readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urls.some((u) => !u.startsWith('http'))) errors.push('[SITEMAP] 存在非绝对 URL');
  for (const noindex of NOINDEX_PATHS) {
    if (urls.includes(`${SITE_URL}${noindex}`)) errors.push(`[SITEMAP] noindex 页面被收录: ${noindex}`);
  }
  // 404 页面不得收录
  if (urls.includes(`${SITE_URL}/404`) || urls.some((u) => u.endsWith('/_not-found')))
    errors.push('[SITEMAP] 404 页面被收录');
  // 已配对页面必须成对收录
  for (const pair of ROUTE_MAP) {
    const enIn = urls.includes(`${SITE_URL}${pair.en === '/' ? '' : pair.en}`);
    const zhIn = urls.includes(`${SITE_URL}${pair.zh}`);
    if (enIn !== zhIn) errors.push(`[SITEMAP] 配对不完整: ${pair.en}=${enIn}, ${pair.zh}=${zhIn}`);
  }
  ok.push(`sitemap.xml 共 ${urls.length} 条 URL`);
} else {
  errors.push('[SITEMAP] 未找到 .next/server/app/sitemap.xml.body（请先 next build）');
}

console.log('—— i18n 一致性检查 ——');
for (const line of ok) console.log(`  ✓ ${line}`);
if (errors.length) {
  console.error(`\n${errors.length} 个问题:`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
} else {
  console.log('  ✓ 全部通过');
}
