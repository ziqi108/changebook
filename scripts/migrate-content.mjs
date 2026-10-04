// 一次性迁移脚本：lib/*.ts 硬编码数据 → content/（Decap CMS 事实源）。
// 用法：node scripts/migrate-content.mjs
// 产出：
//   content/articles/<slug>.en.md | .zh.md   （frontmatter + markdown 正文）
//   content/courses/<slug>.en.json | .zh.json
//   content/articles/_order.json             （展示顺序清单，数组序 = 站点展示序）
// 幂等：重复执行无 diff；结尾做回读校验。
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import matter from 'gray-matter';

const root = process.cwd();

/** 用项目自带 typescript 把 lib/*.ts 转译成 CJS 并求值（不新增依赖） */
function loadTsModule(rel) {
  const src = fs.readFileSync(path.join(root, rel), 'utf8');
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ModuleKind.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  new Function('exports', 'require', 'module', js)(mod.exports, () => ({}), mod);
  return mod.exports;
}

/** 'May 28, 2026' / '2026-05-28' → '2026-05-28'（时区无关，避免 UTC+8 本地解析丢一天） */
const MONTHS = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};
function isoDate(v) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  const m = String(v).match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (m) {
    const month = MONTHS[m[1].toLowerCase()];
    if (month !== undefined) {
      const d = new Date(Date.UTC(Number(m[3]), month, Number(m[2])));
      return d.toISOString().slice(0, 10);
    }
  }
  throw new Error(`无法解析日期: ${v}`);
}

/** ArticleBlock[] → markdown（quote → 行首 "> "，块间空行） */
function blocksToMarkdown(body) {
  return body
    .map((b) =>
      b.type === 'quote'
        ? b.text.split('\n').map((l) => `> ${l}`).join('\n')
        : b.text
    )
    .join('\n\n');
}

const data = loadTsModule('lib/data.ts');
const articles = data.FEATURED_ARTICLES;
const coursesEn = loadTsModule('lib/course-details.ts').COURSE_DETAILS;
const coursesZh = loadTsModule('lib/course-details-zh.ts').COURSE_DETAILS_ZH;

const articlesDir = path.join(root, 'content', 'articles');
const coursesDir = path.join(root, 'content', 'courses');
fs.mkdirSync(articlesDir, { recursive: true });
fs.mkdirSync(coursesDir, { recursive: true });

const gradients = new Set();
const order = { en: [], zh: [] };

// —— 文章 ——
for (const a of articles) {
  const suffix = a.locale === 'zh-CN' ? 'zh' : 'en';
  const iso = isoDate(a.date);
  const fm = {
    title: a.title,
    subtitle: a.subtitle,
    excerpt: a.excerpt,
    coverGradient: a.coverGradient,
    date: iso, // 加引号写出的 ISO 字符串
    readTime: a.readTime,
    tags: a.tags,
    author: a.author,
    authorInitials: a.authorInitials,
  };
  if (a.featured) fm.featured = true;
  const body = a.body?.length ? blocksToMarkdown(a.body) : '';
  const file = path.join(articlesDir, `${a.slug}.${suffix}.md`);
  fs.writeFileSync(file, matter.stringify(body, fm), 'utf8');
  order[suffix].push(a.slug);
  gradients.add(a.coverGradient);
}

// —— 课程 ——
for (const [slug, c] of Object.entries(coursesEn)) {
  fs.writeFileSync(path.join(coursesDir, `${slug}.en.json`), JSON.stringify(c, null, 2) + '\n', 'utf8');
  gradients.add(c.heroImage);
}
const zhSlugs = [];
for (const [slug, c] of Object.entries(coursesZh)) {
  fs.writeFileSync(path.join(coursesDir, `${slug}.zh.json`), JSON.stringify(c, null, 2) + '\n', 'utf8');
  zhSlugs.push(slug);
}

// —— 顺序清单 ——
const orderPath = path.join(articlesDir, '_order.json');
fs.writeFileSync(
  orderPath,
  JSON.stringify(
    {
      _note:
        '文章显示顺序清单（数组序 = 站点展示序）。在 CMS 新建的文章默认追加到对应语言列表末尾；如需调整位置，把 slug 移到合适数组位置即可（改完无需发版，下次部署生效）。',
      en: order.en,
      zh: order.zh,
    },
    null,
    2
  ) + '\n',
  'utf8'
);

// —— 回读校验 ——
let checked = 0;
for (const a of articles) {
  const suffix = a.locale === 'zh-CN' ? 'zh' : 'en';
  const file = path.join(articlesDir, `${a.slug}.${suffix}.md`);
  const parsed = matter(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
  const expect = {
    title: a.title,
    subtitle: a.subtitle,
    excerpt: a.excerpt,
    coverGradient: a.coverGradient,
    date: isoDate(a.date),
    readTime: a.readTime,
    tags: a.tags,
    author: a.author,
    authorInitials: a.authorInitials,
    ...(a.featured ? { featured: true } : {}),
  };
  for (const [k, v] of Object.entries(expect)) {
    const got = typeof parsed.data[k] === 'string' && k === 'date'
      ? parsed.data.date
      : parsed.data[k];
    if (JSON.stringify(got) !== JSON.stringify(v)) {
      throw new Error(`字段不一致 ${a.slug}.${suffix} ${k}: ${JSON.stringify(got)} !== ${JSON.stringify(v)}`);
    }
  }
  const expectBody = a.body?.length ? blocksToMarkdown(a.body) : '';
  if (parsed.content.trim() !== expectBody.trim()) {
    throw new Error(`正文不一致: ${a.slug}.${suffix}`);
  }
  checked++;
}
let courseCount = 0;
for (const [slug, c] of Object.entries(coursesEn)) {
  const back = JSON.parse(fs.readFileSync(path.join(coursesDir, `${slug}.en.json`), 'utf8'));
  if (JSON.stringify(back) !== JSON.stringify(c)) throw new Error(`课程不一致: ${slug}.en`);
  courseCount++;
}
for (const slug of zhSlugs) {
  const c = coursesZh[slug];
  const back = JSON.parse(fs.readFileSync(path.join(coursesDir, `${slug}.zh.json`), 'utf8'));
  if (JSON.stringify(back) !== JSON.stringify(c)) throw new Error(`课程不一致: ${slug}.zh`);
  courseCount++;
}

console.log(`迁移完成：文章 ${checked} 篇（en ${order.en.length} + zh ${order.zh.length}），课程 ${courseCount} 门（en ${Object.keys(coursesEn).length} + zh ${zhSlugs.length}）`);
console.log('EN 顺序:', order.en.join(', '));
console.log('ZH 顺序:', order.zh.join(', '));
console.log('coverGradient/heroImage 取值集合（供 config.yml select 用）:');
console.log([...gradients].map((g) => `  - ${g}`).join('\n'));
