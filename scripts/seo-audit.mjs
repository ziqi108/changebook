// Rendered on-page SEO auditor (zero-dep).
// Usage: node scripts/seo-audit.mjs [--base http://localhost:3000] [--links]
// Checks: status, title, description, h1/heading order, canonical, hreflang,
// robots, JSON-LD parse, og/twitter, html lang, img alt.
// --links additionally status-checks every unique internal href (slow).
import { argv, exit } from 'node:process';

const BASE = (() => {
  const i = argv.indexOf('--base');
  return i >= 0 ? argv[i + 1] : 'http://localhost:3000';
})();
const CHECK_LINKS = argv.includes('--links');

const EN_CORE = [
  '/', '/beginner-course', '/intermediate-course', '/advanced-course', '/consult',
  '/articles', '/about', '/privacy', '/terms', '/cookie-policy', '/refund-policy',
  '/educational-disclaimer', '/contact', '/login', '/register',
];
const ZH_ROUTES = [
  '/zh', '/zh/about', '/zh/contact', '/zh/articles', '/zh/privacy', '/zh/terms',
  '/zh/cookie-policy', '/zh/refund-policy', '/zh/educational-disclaimer',
  '/zh/beginner-course', '/zh/intermediate-course', '/zh/advanced-course',
  '/zh/articles/yin-yang-in-modern-life',
  '/zh/articles/the-eight-trigrams-explained',
  '/zh/articles/hexagram-11-flow',
];
const PAIRED_EN = [
  '/', '/about', '/contact', '/privacy', '/terms', '/cookie-policy', '/refund-policy', '/educational-disclaimer',
  '/beginner-course', '/intermediate-course', '/advanced-course',
  '/articles/yin-yang-in-modern-life', '/articles/the-eight-trigrams-explained', '/articles/hexagram-11-flow',
];
const PAIRED = new Set([
  ...PAIRED_EN,
  ...PAIRED_EN.map((p) => (p === '/' ? '/zh' : `/zh${p}`)),
]);
const NOINDEX = new Set(['/login', '/register']);

async function get(route) {
  const res = await fetch(BASE + route);
  const html = await res.text();
  return { status: res.status, html };
}

function meta(html, attr, key) {
  const m = html.match(new RegExp(`<meta\\s+${attr}=["']${key}["']\\s+content=["']([^"']*)"`, 'i'))
    || html.match(new RegExp(`<meta\\s+content=["']([^"']*)["']\\s+${attr}=["']${key}["']`, 'i'));
  return m ? m[1] : null;
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&ldquo;|&rdquo;/g, '“');

async function discoverArticles() {
  const { html } = await get('/articles');
  const set = new Set();
  for (const m of html.matchAll(/href=["']\/articles\/([a-z0-9-]+)["']/g)) set.add('/articles/' + m[1]);
  return [...set];
}

function auditPage(route, html) {
  const issues = [];
  const warns = [];
  const titleM = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleM ? decode(titleM[1]) : null;
  const desc = meta(html, 'name', 'description');
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) || [])[1]
    || (html.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i) || [])[1]
    || null;
  const hreflangs = [...html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']*)["']\s+href=["']([^"']*)["']/gi)].map((m) => [m[1], m[2]]);
  const robots = meta(html, 'name', 'robots');
  const lang = (html.match(/<html[^>]*\lang=["']([^"']*)["']/i) || [])[1] || null;

  if (!title || !title.trim()) issues.push('missing title');
  else if (title.length < 10) issues.push(`title too short (${title.length})`);
  else if (title.length > 65) warns.push(`title long (${title.length}): ${title.slice(0, 60)}…`);
  const isZhRoute = route === '/zh' || route.startsWith('/zh/');
  const descMin = isZhRoute ? 30 : 50;
  if (!desc) issues.push('missing meta description');
  else if (desc.length < descMin) issues.push(`description short (${desc.length})`);
  else if (desc.length > 165) warns.push(`description long (${desc.length})`);

  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1.length !== 1) issues.push(`h1 count = ${h1.length}`);
  const heads = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1])).sort((a, b) => a - b);
  // heading-order walk in document order (h1 -> h3 without h2 is a skip)
  const seq = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  let lastLvl = 0;
  const skips = new Set();
  for (const lvl of seq) {
    if (lvl > lastLvl + 1 && !skips.has(`${lastLvl}->${lvl}`)) {
      issues.push(`heading skip h${lastLvl} -> h${lvl}`);
      skips.add(`${lastLvl}->${lvl}`);
    }
    lastLvl = lvl;
  }

  if (!lang) issues.push('html lang missing');
  if (!canonical) issues.push('missing canonical');
  const selfNeedle = route === '/' ? 'yiwisdom.org' : `yiwisdom.org${route}`;
  if (canonical && !canonical.includes(selfNeedle)) {
    issues.push(`canonical not self: ${canonical}`);
  }
  if (PAIRED.has(route)) {
    const langs = new Map(hreflangs.map(([l, h]) => [l, h]));
    for (const need of ['en', 'zh-Hans', 'x-default']) {
      if (!langs.has(need)) issues.push(`missing hreflang ${need}`);
    }
  } else if (hreflangs.length) {
    warns.push(`unexpected hreflang on unpaired route (${hreflangs.length})`);
  }

  if (NOINDEX.has(route)) {
    if (!/noindex/i.test(robots || '')) issues.push('expected noindex robots meta');
  } else if (/noindex/i.test(robots || '')) {
    issues.push('indexable page has noindex');
  }

  // OG / twitter
  const ogTitle = meta(html, 'property', 'og:title');
  const ogType = meta(html, 'property', 'og:type');
  const ogUrl = meta(html, 'property', 'og:url');
  const ogImage = meta(html, 'property', 'og:image');
  const twCard = meta(html, 'name', 'twitter:card');
  if (!ogTitle) issues.push('missing og:title');
  if (!ogType) warns.push('missing og:type');
  if (!ogUrl) warns.push('missing og:url');
  if (!twCard) warns.push('missing twitter:card');
  if (!ogImage) warns.push('missing og:image');

  // JSON-LD
  const ldBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [i, b] of ldBlocks.entries()) {
    try {
      const json = JSON.parse(b[1].trim());
      const graphs = Array.isArray(json) ? json : json['@graph'] || [json];
      for (const g of graphs) {
        if (g['@type'] === 'Course' && (!g.author || !g.author.name)) {
          issues.push('Course JSON-LD missing author.name');
        }
      }
    } catch (e) {
      issues.push(`JSON-LD #${i + 1} parse error: ${e.message.slice(0, 80)}`);
    }
  }

  // img alt (decorative may use alt="" — present is enough)
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  let imgNoAlt = 0;
  for (const tag of imgs) {
    if (!/\salt=/i.test(tag)) imgNoAlt++;
  }
  if (imgNoAlt) issues.push(`${imgNoAlt} <img> without alt`);

  // internal links
  const links = new Set();
  for (const m of html.matchAll(/href=["']([^"']+)["']/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    links.add(href.split('#')[0] || '/');
  }

  return {
    title, descLen: desc ? desc.length : 0, canonical, h1: h1.length,
    heads: heads.join(''), jsonLd: ldBlocks.length, imgs: imgs.length, links,
    issues, warns,
  };
}

const articles = await discoverArticles();
const routes = [...EN_CORE, ...articles, ...ZH_ROUTES];
console.log(`SEO audit ${BASE} — ${routes.length} routes (${articles.length} articles discovered)\n`);

const rows = [];
const allLinks = new Map();
let hardFail = 0;
for (const route of routes) {
  const { status, html } = await get(route);
  if (status !== 200) {
    console.log(`FAIL ${route} status ${status}`);
    hardFail++;
    continue;
  }
  const r = auditPage(route, html);
  rows.push({ route, ...r });
  for (const l of r.links) {
    if (!allLinks.has(l)) allLinks.set(l, new Set());
    allLinks.get(l).add(route);
  }
  if (r.issues.length) hardFail += r.issues.length;
}

for (const r of rows) {
  const flag = r.issues.length ? 'FAIL' : r.warns.length ? 'WARN' : ' ok ';
  console.log(`[${flag}] ${r.route} | h1=${r.h1} h=[${r.heads}] ld=${r.jsonLd} img=${r.imgs} t=${r.title ? r.title.length : 0} d=${r.descLen}`);
  for (const x of r.issues) console.log(`       ! ${x}`);
  for (const x of r.warns) console.log(`       ~ ${x}`);
}

// title uniqueness
const seen = new Map();
for (const r of rows) {
  if (!r.title) continue;
  if (seen.has(r.title)) console.log(`[FAIL] duplicate title on ${r.route} & ${seen.get(r.title)}`), hardFail++;
  seen.set(r.title, r.route);
}

if (CHECK_LINKS) {
  console.log(`\nlink check: ${allLinks.size} unique internal hrefs`);
  let linkFail = 0;
  for (const [path] of [...allLinks].sort()) {
    try {
      const res = await fetch(BASE + path, { method: 'GET', redirect: 'manual' });
      if (res.status >= 400) {
        console.log(`[FAIL] link ${path} -> ${res.status} (from ${[...allLinks.get(path)].slice(0, 3).join(',')})`);
        linkFail++;
      }
    } catch (e) {
      console.log(`[FAIL] link ${path} error ${e.message}`);
      linkFail++;
    }
  }
  if (!linkFail) console.log('all internal links 2xx/3xx');
  hardFail += linkFail;
}

console.log(`\n${hardFail === 0 ? 'PASS: no hard failures' : `FAILURES: ${hardFail}`}`);
exit(hardFail ? 1 : 0);
