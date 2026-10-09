// 构建期生成器：content/（CMS 事实源）→ lib/generated/*.generated.ts
// 由 package.json 的 predev / prebuild 生命周期自动执行，请勿手改产物。
// 用法：node scripts/generate-content.mjs
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const articlesDir = path.join(root, 'content', 'articles');
const coursesDir = path.join(root, 'content', 'courses');
const genDir = path.join(root, 'lib', 'generated');

/** ISO '2026-05-28' → EN 展示串 'May 28, 2026'（必须 UTC，避免服务器时区偏移） */
const fmtEn = (iso) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));

function readMatter(file) {
  // 剥 BOM：Windows 手改文件易带 BOM，js-yaml 会抛错
  const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
  return matter(raw);
}

/** js-yaml 可能把未加引号的日期解析成 Date 对象，统一转回 ISO 字符串 */
function normalizeDate(v) {
  if (typeof v === 'string') return v;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  throw new Error(`非法 date 字段: ${JSON.stringify(v)}`);
}

/**
 * markdown 正文 → ArticleBlock[] 块数组（与站内渲染器约定一致）：
 * - 空行分段；行首 ">" 的段为 quote
 * - "## " → h2，"### " → h3
 * - "- " 连续行 → ul，"1. " 连续行 → ol
 * - ":::callout ... :::" → callout
 * - 段内软换行折叠为空格；不做 inline markdown 解析（渲染层处理 **bold** 等）
 */
function parseBlocks(md) {
  const blocks = [];
  // 统一 Windows 换行符为 \n，确保空行分段正则正确匹配
  const normalized = md.replace(/\r\n/g, '\n');
  for (const raw of normalized.split(/\n{2,}/)) {
    const chunk = raw.trim();
    if (!chunk) continue;
    const lines = chunk.split('\n');

    // h2
    if (/^##\s+/.test(lines[0]) && lines.length === 1) {
      blocks.push({ type: 'h2', text: lines[0].replace(/^##\s+/, '').trim() });
      continue;
    }
    // h3
    if (/^###\s+/.test(lines[0]) && lines.length === 1) {
      blocks.push({ type: 'h3', text: lines[0].replace(/^###\s+/, '').trim() });
      continue;
    }
    // callout: :::callout ... :::
    if (/^:::callout\b/.test(lines[0])) {
      const text = lines.slice(1).join(' ').replace(/:::$/, '').replace(/\s+/g, ' ').trim();
      blocks.push({ type: 'callout', text });
      continue;
    }
    // quote
    if (lines.every((l) => /^\s*>/.test(l))) {
      blocks.push({
        type: 'quote',
        text: lines.map((l) => l.replace(/^\s*>\s?/, '')).join(' ').replace(/\s+/g, ' ').trim(),
      });
      continue;
    }
    // ul: 全部以 "- " 开头
    if (lines.every((l) => /^\s*[-*]\s+/.test(l))) {
      blocks.push({
        type: 'ul',
        items: lines.map((l) => l.replace(/^\s*[-*]\s+/, '').trim()),
      });
      continue;
    }
    // ol: 全部以 "N. " 开头
    if (lines.every((l) => /^\s*\d+\.\s+/.test(l))) {
      blocks.push({
        type: 'ol',
        items: lines.map((l) => l.replace(/^\s*\d+\.\s+/, '').trim()),
      });
      continue;
    }
    // 普通段落
    blocks.push({ type: 'p', text: chunk.replace(/\s*\n\s*/g, ' ').trim() });
  }
  return blocks;
}

function loadLocaleArticles(suffix, localeValue) {
  const files = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(`.${suffix}.md`))
    .map((f) => f.slice(0, -(`.${suffix}.md`.length)));

  const manifest = JSON.parse(
    fs.readFileSync(path.join(articlesDir, '_order.json'), 'utf8')
  );
  // 清单序（= 站点展示序）优先；CMS 新建、不在清单中的文章按日期降序追加末尾
  const known = manifest[suffix].filter((s) => files.includes(s));
  const extra = files.filter((s) => !manifest[suffix].includes(s));
  extra.sort((a, b) => {
    const da = readMatter(path.join(articlesDir, `${a}.${suffix}.md`)).data.date;
    const db = readMatter(path.join(articlesDir, `${b}.${suffix}.md`)).data.date;
    return String(db).localeCompare(String(da));
  });

  return [...known, ...extra]
    .map((slug) => {
      const { data, content } = readMatter(path.join(articlesDir, `${slug}.${suffix}.md`));
      // 守卫：Decap 保存某语言时会自动创建另一语言的空占位文件（仅含 duplicate 字段）。
      // 无 title/excerpt = 翻译尚未撰写，视为未发布，不进站点数据。
      if (!data.title || !data.excerpt) return null;
      const iso = normalizeDate(data.date);
      const blocks = parseBlocks(content);
      const article = {
        slug,
        title: data.title,
        subtitle: data.subtitle,
        excerpt: data.excerpt,
        coverGradient: data.coverGradient,
        // EN 页面直接展示 date 字符串：转成与历史数据一致的 en-US 长格式
        date: localeValue === 'en' ? fmtEn(iso) : iso,
        // ISO 原文保留：metadata / JSON-LD / sitemap 需要机器可读日期
        dateIso: iso,
        // i18n 字段在新建语言版本时若留空，Decap 会整字段省略，按站点惯例兜底；
        // readTime 兜底为空串（不编造时长，提示编辑在后台补填）
        readTime: data.readTime ?? '',
        // 标签列表留空时 Decap 会整字段省略，兜底为空数组（Article.tags 必填）
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: data.author ?? (localeValue === 'zh-CN' ? '刘锡泽' : 'Liu Xize'),
        authorInitials: data.authorInitials ?? (localeValue === 'zh-CN' ? '刘' : 'LX'),
      };
      if (data.featured) article.featured = true;
      if (blocks.length) article.body = blocks;
      article.locale = localeValue;
      // multiple_files 结构下文件 basename 即中英对应键（与原 translationKey 语义一致）
      article.translationKey = slug;
      return article;
    })
    .filter(Boolean);
}

/**
 * 课程数据规范化：CMS 嵌套 list 允许「加了章节但没加课时」「课时字段留空」等半成品状态，
 * 构建绝不能因编辑误操作而失败。缺失的字符串兜底为空串，缺失的数组兜底为空数组。
 */
function normalizeCourse(raw) {
  const str = (v) => (typeof v === 'string' ? v : '');
  return {
    slug: str(raw.slug),
    title: str(raw.title),
    subtitle: str(raw.subtitle),
    heroImage: str(raw.heroImage),
    level: str(raw.level),
    levelZh: str(raw.levelZh),
    includes: Array.isArray(raw.includes) ? raw.includes.map(str) : [],
    objectives: Array.isArray(raw.objectives) ? raw.objectives.map(str) : [],
    price: str(raw.price),
    currency: str(raw.currency),
    nextCohort: str(raw.nextCohort),
    chapters: (Array.isArray(raw.chapters) ? raw.chapters : []).map((ch) => ({
      id: str(ch?.id),
      title: str(ch?.title),
      lessons: (Array.isArray(ch?.lessons) ? ch.lessons : []).map((l) => ({
        id: str(l?.id),
        title: str(l?.title),
        duration: str(l?.duration),
        description: str(l?.description),
      })),
    })),
  };
}

function loadCourses(suffix) {
  const map = {};
  for (const f of fs.readdirSync(coursesDir)) {
    if (!f.endsWith(`.${suffix}.json`)) continue;
    const slug = f.slice(0, -(`.${suffix}.json`.length));
    const raw = JSON.parse(
      fs.readFileSync(path.join(coursesDir, f), 'utf8').replace(/^\uFEFF/, '')
    );
    map[slug] = normalizeCourse(raw);
  }
  return map;
}

fs.mkdirSync(genDir, { recursive: true });

const articles = [
  ...loadLocaleArticles('en', 'en'),
  ...loadLocaleArticles('zh', 'zh-CN'),
];

fs.writeFileSync(
  path.join(genDir, 'articles.generated.ts'),
  `/* 由 scripts/generate-content.mjs 自动生成 ← content/articles/。请勿手改，改内容请编辑 content/ 下的源文件。 */\nimport type { Article } from '../data';\n\nexport const ARTICLES: Article[] = ${JSON.stringify(articles, null, 2)};\n`,
  'utf8'
);

const coursesEn = loadCourses('en');
const coursesZh = loadCourses('zh');
fs.writeFileSync(
  path.join(genDir, 'courses.generated.ts'),
  `/* 由 scripts/generate-content.mjs 自动生成 ← content/courses/。请勿手改，改内容请编辑 content/ 下的源文件。 */\nimport type { CourseDetail } from '../course-details';\n\nexport const COURSE_DETAILS_DATA: Record<string, CourseDetail> = ${JSON.stringify(coursesEn, null, 2)};\n\nexport const COURSE_DETAILS_ZH_DATA: Record<string, CourseDetail> = ${JSON.stringify(coursesZh, null, 2)};\n`,
  'utf8'
);

console.log(
  `generate-content: 文章 ${articles.length} 篇（en ${articles.filter((a) => a.locale === 'en').length} + zh ${articles.filter((a) => a.locale === 'zh-CN').length}），课程 en ${Object.keys(coursesEn).length} 门 + zh ${Object.keys(coursesZh).length} 门 → lib/generated/`
);
