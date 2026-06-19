// lib/content-validator.ts
// Utilities for sanitizing course content:
//  - Trim / drop accidental stray characters at the end of titles
//    (e.g. "F Opposition" -> "Opposition", garbled letters from encoding glitches)
//  - Normalize mixed / duplicate punctuation (e.g. "Uprightness.。" -> "Uprightness。")
//
// These helpers are intentionally pure and dependency-free so they can also
// be consumed from plain-JavaScript scripts under scripts/ (via .cjs shim).
//
// --- EXTENDING THE SANITIZER ---
// New garbled-text formats should be added as *rules* in the `TITLE_RULES`
// array below. Each rule is a small, pure object:
//
//   interface SanitizeRule {
//     name: string;
//     test: (input: string) => boolean;      // returns true when the rule applies
//     apply: (input: string) => string;       // returns the cleaned string
//     skipOthers?: boolean;                   // if true, stop processing after this rule
//   }
//
// Rules run in order. To add a new format, simply push a new rule. Example:
//   {
//     name: 'Remove Markdown Artifacts',
//     test: (s) => /[*_#]+/.test(s),
//     apply: (s) => s.replace(/[*_#]+/g, ''),
//   }
// Rules are easy to unit-test in isolation and cheap to audit.

const PUNCT_CHARS = new Set([
  '.', '。', '!', '！', '?', '？', '…', '·', '•', '、',
  ',', '，', ';', '；', ':', '：', ')', ')', ']', '】', '}', '】',
  '>', '<', '"', '"', "'", "'",
]);

// Common "garbled" character patterns that accidentally appear at the start or
// end of otherwise valid text. Letters outside the A-Z/a-z set are generally
// preserved so we do not damage Chinese / pinyin content.
const GARBLED_START_RE = /^[^A-Za-z0-9\u4e00-\u9fff]+/;
const GARBLED_END_RE = /[^A-Za-z0-9\u4e00-\u9fff]+$/;

// Whitelist of common single-letter English words that should be preserved
// even if they match the "stray leading letter" heuristic.
const PRESERVED_SINGLE_LETTERS = new Set(['I', 'a', 'A']);

/**
 * A single pluggable sanitization rule. Rules are evaluated in order by
 * `sanitizeTitle`. Returning `true` from `test` opts the string into
 * `apply`; set `skipOthers` to stop processing after a successful rule.
 */
export interface SanitizeRule {
  name: string;
  test: (input: string) => boolean;
  apply: (input: string) => string;
  skipOthers?: boolean;
}

/**
 * Default rule set for title sanitization. Add new entries here when new
 * garbled-text formats are discovered (see the top-of-file docstring).
 */
export const TITLE_RULES: SanitizeRule[] = [
  {
    name: 'trim-boundary-garbage',
    test: (s) => GARBLED_START_RE.test(s) || GARBLED_END_RE.test(s),
    apply: (s) => s.replace(GARBLED_START_RE, '').replace(GARBLED_END_RE, ''),
  },
  {
    name: 'remove-stray-prefix-letter',
    // Matches "F Opposition", "Z The Great" but preserves "A New View",
    // "The I Ching" via PRESERVED_SINGLE_LETTERS.
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

/**
 * Remove stray / garbled characters at the boundaries of a title by
 * running the configured `TITLE_RULES` pipeline in order.
 *
 * To extend the sanitizer with a new format, add a rule to `TITLE_RULES`
 * (see the module docstring for examples).
 */
export function sanitizeTitle(input: string, rules: SanitizeRule[] = TITLE_RULES): string {
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

/**
 * Collapse duplicated or mixed CJK / ASCII punctuation at the tail of a string.
 *   "Uprightness.。"       -> "Uprightness。"
 *   "Uprightness.."        -> "Uprightness."
 *   "Uprightness. 。"      -> "Uprightness。"
 *   "Hello!!"              -> "Hello!"
 *
 * If an ASCII terminator is the ONLY trailing punctuation, it is kept
 * unchanged (callers that need the CJK variant should use ensureTerminator).
 */
export function normalizePunctuation(input: string): string {
  if (typeof input !== 'string') return '';
  let out = input;

  // Merge CJK + ASCII same-class punctuation runs into a single CJK mark.
  out = out.replace(/[。！？]\s*[.!?]+/g, (m) => {
    if (/[。]/.test(m)) return '。';
    if (/[！]/.test(m)) return '！';
    if (/[？]/.test(m)) return '？';
    return m;
  });

  // Merge ASCII duplicates ("..", "!!", "??") into a single one.
  out = out.replace(/([.!?])\s*\1+/g, '$1');

  // Collapse trailing whitespace-only punctuation runs.
  out = out.replace(/[\s]+$/g, '');

  // Trim any trailing mixed punctuation run down to the first terminator
  // already present, but leave the terminator itself intact.
  out = out.replace(/([。！？.!?])\s*[。！？.!?]+$/g, '$1');

  return out;
}

/**
 * Apply both title sanitization and punctuation normalization to a raw string.
 * Use this as the single entry-point when producing user-facing content
 * (course titles, lesson titles, judgments, commentary clauses).
 */
export function sanitizeContent(input: string): string {
  return normalizePunctuation(sanitizeTitle(input));
}

const ASCII_TO_CJK: Record<string, string> = { '.': '。', '!': '！', '?': '？' };

/**
 * Append the provided terminator (usually "。") exactly once, avoiding
 * duplication if the input already ends with it. A trailing ASCII terminator
 * of the same class (e.g. "." when the requested terminator is "。") is
 * normalized to the CJK variant instead of producing a double terminator.
 */
export function ensureTerminator(input: string, terminator = '。'): string {
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

/**
 * Return true when the input already ends with the provided terminator
 * (typically CJK "。/！/？") so the caller can decide whether to append one.
 */
export function hasTerminator(input: string, terminator = '。'): boolean {
  if (typeof input !== 'string') return false;
  return normalizePunctuation(input).endsWith(terminator);
}

/**
 * Convenience helpers used by the generation pipeline for each field.
 */
export const validators = {
  hexEnTitle: (en: string): string => sanitizeTitle(en),
  judgmentClause: (clause: string): string => ensureTerminator(clause, '。'),
  commentaryBody: (body: string): string => normalizePunctuation(body),
};

export default validators;
