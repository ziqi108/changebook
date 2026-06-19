// scripts/content-validator.cjs
// JavaScript (CommonJS) port of lib/content-validator.ts.
// Kept in sync with the TypeScript source so that both the Next.js
// application (TypeScript) and generator scripts (Node.js) use the same
// sanitization rules for titles and punctuation.
//
// --- EXTENDING THE SANITIZER ---
// New garbled-text formats should be added as *rules* in the `TITLE_RULES`
// array below. Each rule is a small, pure object:
//
//   { name, test: (s) => bool, apply: (s) => string, skipOthers?: bool }
//
// Rules run in order. See the TypeScript source file for detailed examples.

const GARBLED_START_RE = /^[^A-Za-z0-9\u4e00-\u9fff]+/;
const GARBLED_END_RE = /[^A-Za-z0-9\u4e00-\u9fff]+$/;
const PRESERVED_SINGLE_LETTERS = new Set(['I', 'a', 'A']);

/** @typedef {{ name: string, test: (s: string) => boolean, apply: (s: string) => string, skipOthers?: boolean }} SanitizeRule */

/** @type {SanitizeRule[]} */
const TITLE_RULES = [
  {
    name: 'trim-boundary-garbage',
    test: (s) => GARBLED_START_RE.test(s) || GARBLED_END_RE.test(s),
    apply: (s) => s.replace(GARBLED_START_RE, '').replace(GARBLED_END_RE, ''),
  },
  {
    name: 'remove-stray-prefix-letter',
    test: (s) => /(^|\s)[A-Za-z]\s+[A-Z][A-Za-z]+/.test(s),
    apply: (s) =>
      s.replace(/(^|\s)([A-Za-z])\s+([A-Z][A-Za-z]+)/g, (_m, pre, stray, rest) =>
        PRESERVED_SINGLE_LETTERS.has(stray) ? `${pre}${stray} ${rest}` : `${pre}${rest}`,
      ),
  },
  // --- Add new rules below when a new garbled format is discovered ---
  // {
  //   name: 'remove-utf8-bom',
  //   test: (s) => s.charCodeAt(0) === 0xfeff,
  //   apply: (s) => s.slice(1),
  //   skipOthers: true,
  // },
];

function sanitizeTitle(input, rules = TITLE_RULES) {
  if (typeof input !== 'string') return '';
  let out = input.trim();

  for (const rule of rules) {
    if (rule.test(out)) {
      out = rule.apply(out).trim();
      if (rule.skipOthers) break;
    }
  }

  return out;
}

function normalizePunctuation(input) {
  if (typeof input !== 'string') return '';
  let out = input;

  // Merge CJK + ASCII same-class punctuation runs into a single CJK mark.
  out = out.replace(/[。！？]\s*[.!?]+/g, (m) => {
    if (/[。]/.test(m)) return '。';
    if (/[！]/.test(m)) return '！';
    if (/[？]/.test(m)) return '？';
    return m;
  });

  // Merge ASCII duplicates.
  out = out.replace(/([.!?])\s*\1+/g, '$1');

  out = out.replace(/[\s]+$/g, '');

  // Collapse trailing punctuation runs down to the first terminator kind.
  out = out.replace(/([。！？.!?])\s*[。！？.!?]+$/g, '$1');

  return out;
}

function sanitizeContent(input) {
  return normalizePunctuation(sanitizeTitle(input));
}

const ASCII_TO_CJK = { '.': '。', '!': '！', '?': '？' };

function ensureTerminator(input, terminator = '。') {
  if (typeof input !== 'string') return terminator;
  const normalized = normalizePunctuation(input).replace(/[\s]+$/g, '');
  if (normalized.endsWith(terminator)) return normalized;

  // Map a same-class ASCII terminator to the requested CJK terminator so
  // that "Uprightness." + terminator "。" yields "Uprightness。" rather
  // than the old buggy "Uprightness.。".
  const last = normalized.slice(-1);
  if (last in ASCII_TO_CJK && ASCII_TO_CJK[last] === terminator) {
    return normalized.slice(0, -1) + terminator;
  }
  return normalized + terminator;
}

const validators = {
  hexEnTitle: (en) => sanitizeTitle(en),
  judgmentClause: (clause) => ensureTerminator(clause, '。'),
  commentaryBody: (body) => normalizePunctuation(body),
};

module.exports = {
  TITLE_RULES,
  sanitizeTitle,
  normalizePunctuation,
  sanitizeContent,
  ensureTerminator,
  validators,
};
module.exports.default = validators;
