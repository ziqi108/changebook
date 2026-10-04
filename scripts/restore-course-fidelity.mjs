// Restore English content fidelity in lib/course-details.ts:
//  A. rebuild the 384 line labels in the 64 hexagram "The Lines" sections
//  B. repair systematic grammar defects from naive CJK stripping
//  C. restore the garbled lesson-01 astronomy paragraph
// Dry-run by default; --apply writes back. JSON syntax gate before write.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const APPLY = process.argv.includes('--apply');
const FILE = 'lib/course-details.ts';
const head = execSync('git show HEAD:' + FILE, { encoding: 'utf8' });
let now = readFileSync(FILE, 'utf8');

const squash = (s) =>
  s
    .replace(/\p{Script=Han}/gu, '')
    .replace(/[（）()，。、；：！？·—–\-]/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

function descriptions(src) {
  const out = [];
  const idRe = /"id":\s*"([^"]+)"/g;
  const ids = [];
  let m;
  while ((m = idRe.exec(src))) ids.push({ id: m[1], at: m.index });
  const re = /"description":\s*"/g;
  while ((m = re.exec(src))) {
    const start = m.index + m[0].length;
    let i = start;
    let raw = '';
    while (i < src.length) {
      const ch = src[i];
      if (ch === '\\') { raw += ch + src[i + 1]; i += 2; continue; }
      if (ch === '"') break;
      raw += ch; i++;
    }
    const end = i; // closing quote position
    let id = '(course)';
    for (const x of ids) if (x.at < m.index) id = x.id; else break;
    out.push({ id, start, end, raw, text: JSON.parse('"' + raw + '"') });
  }
  return out;
}

const oldDesc = descriptions(head);
const newDesc = descriptions(now);
const oldById = new Map(oldDesc.map((d) => [d.id, d]));

const stats = { labelsRestored: 0, sectionsRebuilt: 0, returnToFixed: 0, parenFixed: 0, paragraphsRestored: 0 };
const warnings = [];

for (const d of newDesc) {
  let text = d.text;
  const orig = text;

  // ---- A. rebuild "The Lines" for hexagram lessons ----
  if (/^hex-\d{2}-1$/.test(d.id)) {
    const o = oldById.get(d.id);
    // HEAD pairs: - **CJK (English Label)**: cjk\n   > *english quote*
    const pairs = [];
    const bulletRe = /- \*\*[^*]*\(([^)]+)\)\*\*[：:]?[^\n]*\n\s*> \*([^*]+)\*/g;
    let bm;
    while ((bm = bulletRe.exec(o.text))) pairs.push({ label: bm[1].trim(), quote: bm[2].trim() });

    // current quotes inside The Lines section
    const secMatch = text.match(/\*\*The Lines\*\*([\s\S]*?)(?=\n\n\*\*|$)/);
    if (!secMatch) warnings.push(`${d.id}: no The Lines section`);
    else {
      const curQuotes = [...secMatch[1].matchAll(/>\s*\*([^*]+)\*/g)].map((x) => x[1].trim());
      if (curQuotes.length !== pairs.length) {
        warnings.push(`${d.id}: quote count HEAD ${pairs.length} vs NEW ${curQuotes.length}`);
      } else {
        let mismatch = false;
        for (let i = 0; i < pairs.length; i++) {
          if (squash(pairs[i].quote) !== squash(curQuotes[i])) {
            warnings.push(`${d.id}: quote #${i + 1} mismatch\n   OLD: ${pairs[i].quote.slice(0, 120)}\n   NEW: ${curQuotes[i].slice(0, 120)}`);
            mismatch = true;
          }
        }
        if (!mismatch) {
          const block =
            '**The Lines**\n\n' +
            pairs.map((p) => `- **${p.label}** — *${p.quote}*`).join('\n');
          text = text.slice(0, secMatch.index) + block + text.slice(secMatch.index + secMatch[0].length);
          stats.sectionsRebuilt++;
          stats.labelsRestored += pairs.length;
        }
      }
    }

    // ---- B1. "return to [Han] again and again" -> use pinyin name ----
    const titleAt = now.lastIndexOf('"title":', d.start);
    const titleM = now.slice(titleAt, d.start).match(/"title":\s*"Hexagram \d+ \(([^)]+)\)/);
    const pinyin = titleM ? titleM[1] : null;
    if (pinyin) {
      const before = text;
      text = text.replace(/return to again and again/g, `return to ${pinyin} again and again`);
      if (text !== before) stats.returnToFixed++;
    } else {
      warnings.push(`${d.id}: pinyin not found in title`);
    }

    // ---- B2. dangling "(English Name) corresponds/advises" ----
    text = text.replace(/\(([A-Z][A-Za-z' ]+?)\) (corresponds|advises)/g, (_, name, verb) => {
      stats.parenFixed++;
      return `${name} ${verb}`;
    });
  }

  // ---- C. restore garbled lesson-01 astronomy paragraph ----
  if (d.id === 'lesson-01-1') {
    const garbled =
      'The constellations number twenty eight constellations, thereby inferring their influence on Earth and humanity.';
    const restored =
      'The constellations number twenty-eight, distributed across the four directions: east, south, west, and north. This discourse discusses not only the matters governed by each constellation but also the relationships between the sun, moon, and five planets (the "Seven Governments") and the twenty-eight constellations, thereby inferring their influence on Earth and humanity.';
    if (!text.includes(garbled)) warnings.push('lesson-01-1: garbled paragraph pattern not found');
    else {
      text = text.replace(garbled, restored);
      stats.paragraphsRestored++;
    }
  }

  if (text !== orig) {
    const encoded = JSON.stringify(text).slice(1, -1);
    now = now.slice(0, d.start) + encoded + now.slice(d.end);
    // positions shift; recompute spans for subsequent descriptions
    const delta = encoded.length - d.raw.length;
    for (const later of newDesc) if (later.start > d.start) { later.start += delta; later.end += delta; }
  }
}

// ---- syntax gate: every description must JSON-parse ----
for (const d of descriptions(now)) {
  try {
    JSON.parse('"' + d.raw + '"');
  } catch (e) {
    console.error('SYNTAX GATE FAIL', d.id, e.message);
    process.exit(1);
  }
}

console.log('stats:', JSON.stringify(stats));
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  for (const w of warnings.slice(0, 80)) console.log('!', w);
} else {
  console.log('no warnings.');
}
if (APPLY && warnings.length === 0) {
  writeFileSync(FILE, now);
  console.log('WRITTEN', FILE);
} else if (!APPLY) {
  console.log('dry-run only (pass --apply to write)');
}
