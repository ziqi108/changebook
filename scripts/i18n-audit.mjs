#!/usr/bin/env node
/**
 * i18n-audit.mjs — 语言残留渲染层扫描器（Spec: i18n-purification-seo）
 *
 * 用法：
 *   node scripts/i18n-audit.mjs                 # 渲染 HTML 扫描（默认 http://localhost:3000）
 *   node scripts/i18n-audit.mjs --base http://localhost:3000
 *   node scripts/i18n-audit.mjs --source        # 源码辅助扫描（剥离注释，按目录分组）
 *
 * 规则：
 * - 英文路由（sitemap 中非 /zh 的全部 URL）：可见文本与 head meta 中不允许汉字；
 *   白名单：语言切换器原生语种名「简体中文」（仅 body 可见文本）。
 * - 中文路由（/zh 前缀）：可见文本与 head meta 中拉丁词组仅允许
 *   Yi Wisdom / Cookie / English（切换器原生语种名）。
 *
 * 退出码：存在违规 = 1；全部通过 = 0。
 */

const BASE = (() => {
  const i = process.argv.indexOf('--base');
  return i >= 0 ? process.argv[i + 1].replace(/\/$/, '') : 'http://localhost:3000';
})();
const SOURCE_MODE = process.argv.includes('--source');

const CJK = /[一-鿿㐀-䶿]/g;
const LATIN_WORD = /[A-Za-z][A-Za-z’'-]{1,}/g;

const EN_BODY_ALLOW = new Set(['简体中文']);
const ZH_WORD_ALLOW = new Set(['Yi', 'Wisdom', 'Cookie', 'English', 'yi', 'wisdom']);

const ROUTES_EN = [
  '/',
  '/beginner-course',
  '/intermediate-course',
  '/advanced-course',
  '/consult',
  '/articles',
  '/about',
  '/privacy',
  '/terms',
  '/cookie-policy',
  '/refund-policy',
  '/educational-disclaimer',
  '/contact',
  '/login',
  '/register',
];

const ROUTES_ZH = [
  '/zh',
  '/zh/about',
  '/zh/contact',
  '/zh/articles',
  '/zh/privacy',
  '/zh/terms',
  '/zh/cookie-policy',
  '/zh/refund-policy',
  '/zh/educational-disclaimer',
  '/zh/beginner-course',
  '/zh/intermediate-course',
  '/zh/advanced-course',
  '/zh/articles/yin-yang-in-modern-life',
  '/zh/articles/the-eight-trigrams-explained',
  '/zh/articles/hexagram-11-flow',
];

/** 从 /articles 索引页发现全部英文文章详情路由 */
async function discoverArticleRoutes() {
  try {
    const html = await fetchHtml(BASE + '/articles');
    const slugs = new Set();
    for (const m of html.matchAll(/href=["']\/articles\/([a-z0-9-]+)["']/g)) {
      slugs.add('/articles/' + m[1]);
    }
    return [...slugs];
  } catch {
    return [];
  }
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'i18n-audit/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

/** 剔除 script/style/注释/标签，得到可见文本 */
function visibleText(html) {
  let t = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  return decodeEntities(t);
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/** 提取 head 中语言相关字段（title/description/OG/Twitter） */
const HEAD_VALUE_KEYS = new Set([
  'title',
  'description',
  'keywords',
  'og:title',
  'og:description',
  'og:site_name',
  'twitter:title',
  'twitter:description',
]);

function headFields(html) {
  const out = {};
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  out.title = title ? decodeEntities(title[1].trim()) : '';
  for (const m of html.matchAll(
    /<meta[^>]*(?:name|property)="([^"]+)"[^>]*content="([^"]*)"/gi
  )) {
    const key = m[1].toLowerCase();
    if (HEAD_VALUE_KEYS.has(key)) {
      out[key] = decodeEntities(m[2]);
    }
  }
  return out;
}

/** head 语言检查只看描述类字段的值（不看 url/字段名） */
function headText(fields) {
  return Object.entries(fields)
    .filter(([k]) => HEAD_VALUE_KEYS.has(k))
    .map(([, v]) => v)
    .join(' | ');
}

function contextSnippet(text, idx, radius = 24) {
  return text.slice(Math.max(0, idx - radius), idx + radius).replace(/\s+/g, ' ').trim();
}

/** 在文本中查找汉字命中，返回 [{char, ctx}]，可选短语白名单（命中点所在子串包含白名单词则跳过） */
function findCjk(text, allowPhrases = []) {
  const hits = [];
  for (const m of text.matchAll(CJK)) {
    const ctx = contextSnippet(text, m.index);
    if (allowPhrases.some((p) => ctx.includes(p))) continue;
    hits.push({ char: m[0], ctx });
  }
  return hits;
}

function findLatin(rawText) {
  // 剔除 URL / 域名 / 邮箱（品牌域名不属于语言残留）
  const text = rawText
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[\w.-]+\.(?:org|com|net|cn|io|edu|gov)\b/gi, ' ')
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, ' ');
  const hits = [];
  for (const m of text.matchAll(LATIN_WORD)) {
    if (ZH_WORD_ALLOW.has(m[0])) continue;
    hits.push({ word: m[0], ctx: contextSnippet(text, m.index) });
  }
  return hits;
}

async function auditRendered() {
  let violations = 0;

  const enRoutes = ROUTES_EN.concat(await discoverArticleRoutes());

  for (const route of enRoutes) {
    const html = await fetchHtml(BASE + route);
    const body = visibleText(html);
    const head = headFields(html);
    const bodyHits = findCjk(body, [...EN_BODY_ALLOW]);
    const headScan = headText(head);
    const headHits = findCjk(headScan, []);
    if (bodyHits.length || headHits.length) {
      violations++;
      console.log(`\n[EN] ${route}  bodyCJK=${bodyHits.length} headCJK=${headHits.length}`);
      bodyHits.slice(0, 12).forEach((h) => console.log(`   body: ${h.char}  …${h.ctx}…`));
      headHits.slice(0, 12).forEach((h) => console.log(`   head: ${h.char}  …${h.ctx}…`));
      if (bodyHits.length > 12) console.log(`   … 另有 ${bodyHits.length - 12} 处 body 命中`);
    } else {
      console.log(`[EN] ok   ${route}`);
    }
  }

  for (const route of ROUTES_ZH) {
    const html = await fetchHtml(BASE + route);
    const body = visibleText(html);
    const head = headFields(html);
    const bodyHits = findLatin(body);
    const headHits = findLatin(headText(head));
    if (bodyHits.length || headHits.length) {
      violations++;
      console.log(`\n[ZH] ${route}  bodyLatin=${bodyHits.length} headLatin=${headHits.length}`);
      bodyHits.slice(0, 12).forEach((h) => console.log(`   body: ${h.word}  …${h.ctx}…`));
      headHits.slice(0, 12).forEach((h) => console.log(`   head: ${h.word}  …${h.ctx}…`));
      if (bodyHits.length > 12) console.log(`   … 另有 ${bodyHits.length - 12} 处 body 命中`);
    } else {
      console.log(`[ZH] ok   ${route}`);
    }
  }

  console.log(`\n=== ${violations === 0 ? 'PASS' : 'FAIL'}: ${violations} 个页面存在语言残留 ===`);
  return violations === 0;
}

/* ---------------- 源码辅助扫描 ---------------- */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const SOURCE_DIRS = ['app/(en)', 'app/(zh)', 'components', 'lib'];

function stripComments(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/\/\/[^\n]*/g, (m) => m.replace(/[^\n]/g, ' '));
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.next') continue;
      walk(p, acc);
    } else if (['.ts', '.tsx', '.js', '.mjs'].includes(extname(name))) {
      acc.push(p);
    }
  }
  return acc;
}

function auditSource() {
  let total = 0;
  for (const dir of SOURCE_DIRS) {
    const files = walk(dir);
    for (const file of files) {
      const raw = readFileSync(file, 'utf8');
      const code = stripComments(raw);
      const lines = code.split(/\r?\n/);
      lines.forEach((line, i) => {
        if (CJK.test(line)) {
          total++;
          console.log(`${file}:${i + 1}: ${line.trim().slice(0, 110)}`);
        }
      });
    }
  }
  console.log(`\n=== source scan: ${total} 行含汉字（已剥离注释；含 locale 中文文案数据，属预期） ===`);
}

const ok = SOURCE_MODE ? (auditSource(), true) : await auditRendered();
process.exit(ok ? 0 : 1);
