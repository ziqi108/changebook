#!/usr/bin/env node
/**
 * strip-course-cn.mjs — 课程数据英文化转换器（Spec i18n-purification-seo / Task 2）
 * 默认 dry-run；加 --apply 写回 lib/course-details.ts。
 */

import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'lib/course-details.ts';
const APPLY = process.argv.includes('--apply');
const CJK = /[一-鿿　-ㄯ]/;
const hasCjk = (s) => CJK.test(s);

/** 全角标点转半角（仅用于保留下来的英文行） */
function normPunct(s) {
  return s
    .replace(/。/g, '.')
    .replace(/，/g, ',')
    .replace(/；/g, ';')
    .replace(/：/g, ':')
    .replace(/？/g, '?')
    .replace(/！/g, '!')
    .replace(/（/g, '(').replace(/）/g, ')')
    .replace(/「|」/g, '"');
}

/** 去掉英文行中的汉字注释：括号组、破折号组、**中文 (English)** 标签、零散汉字 */
function cleanEnglishLine(line) {
  let s = line;
  // **中文 (English)** / **English (中文)** 粗体标签
  s = s.replace(/\*\*([^*\n]+)\*\*/g, (_, inner) => `**${cleanHeadingInner(inner)}**`);
  // 破折号包裹的中文注释： — 乾为天 —
  s = s.replace(/\s*[—–-][^—–\-\n]*[一-鿿][^—–\-\n]*[—–-]/g, ' ');
  // 含汉字的括号组
  s = s.replace(/\s*[（(][^)）\n]*[一-鿿][^)）\n]*[)）]/g, '');
  // "Commentary on 乾:" → "Commentary:"（精准：on/of + 汉字 + 冒号）
  s = s.replace(/\b(on|of)\s+[一-鿿]+\s*[:：]\s*/g, ': ');
  // 汉字后紧跟 " (Pinyin)"：汉字去掉，保留括号拼音
  // 名字前后都有逗号（"1, 乾 (Qián), is"）→ 去前逗号；否则保留前逗号
  s = s.replace(/,\s*[一-鿿]+\s+([（(][^)）]+[)）])\s*,/g, ' $1,');
  s = s.replace(/,\s*[一-鿿]+\s+([（(][^)）]+[)）])/g, ', $1');
  s = s.replace(/[一-鿿]+\s+([（(][^)）]+[)）])/g, ' $1');
  // 孤立汉字串
  s = s.replace(/[一-鿿]+/g, '');
  s = normPunct(s)
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/\(\s+/g, '(').replace(/\s+\)/g, ')')
    // "(Qián), is the 1st" → "(Qián) is the 1st"
    .replace(/\)\s*,\s+(is|are|was|were|has|have)\b/g, ') $1')
    // "The Image: (heaven over heaven)." → "The Image: heaven over heaven."
    .replace(/:\s+\(([^()]+)\)\./g, ': $1.')
    // 列表标签后中文被删形成的悬空标点：**Label**:. → **Label**
    .replace(/(\*\*)\s*[:：][\s.。]*$/, '$1')
    .replace(/^([-*]\s+\s*)/, '$1');
  return s.trimEnd();
}

/** 处理粗体/标题内部：中文 (English) → English；English (中文) → English */
function cleanHeadingInner(inner) {
  const groups = [...inner.matchAll(/[（(]([^)）]+)[)）]/g)];
  const cjkParen = groups.find((g) => hasCjk(g[1]));
  const enParen = groups.find((g) => !hasCjk(g[1]));
  const outside = inner.replace(/[（(][^)）]+[)）]/g, '').trim();
  if (hasCjk(outside)) {
    // 中文 (English)
    if (enParen) return enParen[1].trim();
    return inner; // 无英文组，交歧义处理
  }
  if (cjkParen) {
    // English (中文)
    return outside.trim();
  }
  return inner;
}

function isChineseLine(line) {
  const cjk = (line.match(/[一-鿿]/g) || []).length;
  const letters = (line.match(/[A-Za-z]/g) || []).length;
  return cjk >= 4 && letters < cjk * 1.5;
}

function transformDescription(raw) {
  const ambiguous = [];
  const removedZh = [];
  const headings = [];

  // 全角空格先行规范化（否则会被 CJK 检测误判）
  raw = raw.replace(/　/g, ' ');
  const sections = raw.split(/(\n\n---\n\n)/);
  const out = [];
  for (const section of sections) {
    if (section === '\n\n---\n\n') { out.push(section); continue; }
    const blocks = section.split(/\n\n/);
    const keptBlocks = [];
    for (let block of blocks) {
      block = block.trim();
      if (!block) continue;

      // 单行标题
      const hm = block.match(/^\*\*(.+?)\*\*$/);
      if (hm) {
        const cleaned = cleanHeadingInner(hm[1]);
        if (cleaned !== hm[1]) headings.push(`${hm[1]}  =>  **${cleaned}**`);
        if (hasCjk(cleaned)) ambiguous.push({ type: 'heading', text: block });
        keptBlocks.push(`**${cleaned}**`);
        continue;
      }

      // 多行块（列表/引用）：逐行处理
      const lines = block.split(/\n/);
      const keptLines = [];
      for (const rawLine of lines) {
        if (isChineseLine(rawLine)) {
          removedZh.push(rawLine.trim().slice(0, 70));
          continue;
        }
        let kept;
        if (hasCjk(rawLine)) {
          const cleanedLine = cleanEnglishLine(rawLine);
          if (hasCjk(cleanedLine)) {
            ambiguous.push({ type: 'line', text: rawLine.trim().slice(0, 200) });
            kept = rawLine;
          } else {
            kept = /^\s/.test(rawLine) ? cleanedLine : cleanedLine.trimStart();
          }
        } else {
          kept = rawLine.trimEnd();
        }
        // 丢弃空行与空引用符行（含汉字移除后变空的行）
        if (/^\s*>\s*$/.test(kept) || !kept.trim()) continue;
        keptLines.push(kept);
      }
      let nb = keptLines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
      // 整块只剩引用符/列表符/空白则丢弃
      const meaningful = nb.replace(/[\s>*\-#0-9.\s]/g, '');
      if (meaningful.length < 3) {
        if (meaningful.length > 0) removedZh.push('[structure-only] ' + nb.slice(0, 50));
        continue;
      }
      keptBlocks.push(nb);
    }
    if (keptBlocks.length) out.push(keptBlocks.join('\n\n'));
  }

  let result = out
    .join('')
    .replace(/^(\n\n---\n\n)+/, '')
    .replace(/(\n\n---\n\n)+$/g, '')
    .replace(/(\n\n---\n\n){2,}/g, '\n\n---\n\n');

  return { result, ambiguous, removedZh, headings };
}

/** 从解码后的课程内容提取"英文句子"（仅英文主导行；规范化去汉字注释） */
function englishSentences(decoded) {
  const out = [];
  decoded = decoded.replace(/　/g, ' ');
  for (const block0 of decoded.split(/\n\n/)) {
    for (const line0 of block0.split(/\n/)) {
      const line = line0.trim();
      if (!line || isChineseLine(line)) continue;
      if (!/[A-Za-z]/.test(line)) continue;
      const norm = /[一-鿿]/.test(line) ? cleanEnglishLine(line) : normPunct(line);
      for (const m of norm.matchAll(/[A-Za-z0-9“"][^.!?\n]*[.!?]+/g)) {
        const s = m[0].replace(/\s+/g, ' ').replace(/^[#>*\-\d.\s]+/, '').trim();
        if (s.length > 12) out.push(s);
      }
    }
  }
  return out;
}

/* ---------------- main ---------------- */
const ts = readFileSync(FILE, 'utf8');

// 先收集每个 description 的原始英文句子
const beforeSentences = [];
for (const line of ts.split(/\r?\n/)) {
  const m = line.match(/^\s*"description":\s*"(.*)"\s*,?$/);
  if (m) beforeSentences.push(...englishSentences(JSON.parse(`"${m[1]}"`)));
}

const ambiguousAll = [];
const removedAll = [];
const headingLog = [];
const titleLog = [];

let out = ts.split(/\r?\n/).map((line) => {
  const m = line.match(/^(\s*"description":\s*)"(.*)"(\s*,?)$/);
  if (!m) return line;
  const decoded = JSON.parse(`"${m[2]}"`);
  const r = transformDescription(decoded);
  ambiguousAll.push(...r.ambiguous);
  removedAll.push(...r.removedZh);
  headingLog.push(...r.headings);
  return `${m[1]}${JSON.stringify(r.result)}${m[3]}`;
}).join('\r\n');

// ---- 标题转换 ----
const lessonOuter = new Map();
out = out.replace(
  /"title":\s*"((Lesson \d+) · [^"\n（）()]+ \(([^"\n]+)\))"/g,
  (_, _full, num, en) => {
    const clean = `${num} · ${en.trim()}`;
    lessonOuter.set(num, clean);
    titleLog.push(`${_full.slice(0, 70)}  =>  ${clean}`);
    return `"title": ${JSON.stringify(clean)}`;
  }
);
out = out.replace(
  /"title":\s*"((Lesson \d+) · [^"\n（）()]+?)"\s*,/g,
  (whole, _full, num, off) => {
    const en = lessonOuter.get(num);
    if (en && hasCjk(_full)) { titleLog.push(`${_full}  =>  ${en}`); return `"title": ${JSON.stringify(en)},`; }
    if (hasCjk(_full)) ambiguousAll.push({ type: 'lesson-title', text: _full });
    return whole;
  }
);
out = out.replace(
  /"title":\s*"Hexagram (\d+) · [一-鿿]+ \(([A-Za-zāÁ-ỹ\s.]+)\) — ([^"\n（）()]+?)(?:\s*\([^)）]*[一-鿿][^)）]*\))?"/g,
  (whole, n, py, en) => {
    const clean = `Hexagram ${n} (${py.trim()}) — ${en.trim()}`;
    titleLog.push(`${whole.replace('"title": ', '').slice(0, 70)}  =>  ${clean}`);
    return `"title": ${JSON.stringify(clean)}`;
  }
);

// ---- 保真校验 ----
const afterSentences = [];
for (const line of out.split(/\r?\n/)) {
  const m = line.match(/^\s*"description":\s*"(.*)"\s*,?$/);
  if (m) afterSentences.push(...englishSentences(JSON.parse(`"${m[1]}"`)));
}
const multiset = (arr) => {
  const map = new Map();
  for (const s of arr) map.set(s, (map.get(s) || 0) + 1);
  return map;
};
const bSet = multiset(beforeSentences);
const aSet = multiset(afterSentences);
const missing = [];
const added = [];
for (const [s, c] of bSet) for (let i = 0; i < c - (aSet.get(s) || 0); i++) missing.push(s);
for (const [s, c] of aSet) for (let i = 0; i < c - (bSet.get(s) || 0); i++) added.push(s);

const cjkResidual = (out.match(/"(?:title|description)":\s*"[^"]*[一-鿿][^"]*"/g) || []);

// ---- 写前语法门禁：每个 title/description 行必须能被 JSON.parse ----
let syntaxBad = 0;
for (const line of out.split(/\r?\n/)) {
  const sm = line.match(/^\s*"(title|description)":\s*(".*")(,?)$/);
  if (!sm) continue;
  try {
    JSON.parse(sm[2]);
  } catch (e) {
    syntaxBad++;
    console.log('SYNTAX BAD: ' + line.slice(0, 120));
  }
}

console.log(`=== TITLE CHANGES: ${titleLog.length} ===`);
titleLog.slice(0, 8).forEach((t) => console.log('  ' + t.slice(0, 150)));
console.log(`  （其余 ${Math.max(0, titleLog.length - 8)} 条略）`);
console.log(`\n=== HEADING/LABEL CHANGES: ${headingLog.length} ===`);
[...new Set(headingLog.map((h) => h.replace(/\s+=>.*/, '')))].slice(0, 20)
  .forEach((h) => console.log('  ' + h.slice(0, 120)));
console.log(`\n=== REMOVED CHINESE LINES: ${removedAll.length} ===`);
console.log(`\n=== AMBIGUOUS: ${ambiguousAll.length} ===`);
[...new Set(ambiguousAll.map((a) => a.text))].slice(0, 20)
  .forEach((t) => console.log('  ' + t.slice(0, 180)));
console.log(`\n=== SENTENCE FIDELITY ===`);
console.log(`before=${beforeSentences.length} after=${afterSentences.length} missing=${missing.length} added=${added.length}`);
missing.slice(0, 15).forEach((s) => console.log('  MISSING: ' + s.slice(0, 170)));
added.slice(0, 15).forEach((s) => console.log('  ADDED:   ' + s.slice(0, 170)));
console.log(`\n=== RESIDUAL CJK title/description LINES: ${cjkResidual.length} ===`);
cjkResidual.slice(0, 10).forEach((h) => console.log('  ' + h.slice(0, 200)));
console.log(`\n=== SYNTAX GATE: ${syntaxBad === 0 ? 'PASS' : syntaxBad + ' BAD'} ===`);

if (APPLY && syntaxBad === 0) {
  writeFileSync(FILE, out, 'utf8');
  console.log('\nWRITTEN: ' + FILE);
} else if (syntaxBad > 0) {
  console.log(`\nABORTED: ${syntaxBad} unparsable title/description lines`);
  process.exit(1);
} else {
  console.log('\nDRY-RUN (use --apply to write)');
}
