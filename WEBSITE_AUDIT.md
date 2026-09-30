# WEBSITE_AUDIT.md

> Generated: 2026-09-30 · Project: `changebook` (https://www.yiwisdom.org)

## Summary

Full audit + remediation of the public site against the P0 requirements. All source-level fixes applied; build verified clean. Deployment is **not** performed (see `DEPLOYMENT_AUDIT.md`).

---

## P0 §2 — Brand unification

**Before:** "I Ching Master" / "I Ching Master Academy" used as the org/site name in `app/layout.tsx`, `app/page.tsx`, `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`, `lib/seo.ts`; "ChangeBook" as main brand in `Header.tsx`, `Footer.tsx`, `app/about/page.tsx`, `app/login`, `app/register`; "masterful English", "master teacher(s)", "consult a teacher" in `Hero.tsx`, `ModuleGrid.tsx`, `app/page.tsx` metadata.

**After:** Unified to **Yi Wisdom** (subtitle "Ancient Chinese Wisdom for Modern Life") across all metadata, JSON-LD, Header, Footer, Hero, About, Articles, layout, login/register, seo.ts, sitemap. "ChangeBook" no longer appears anywhere in source or build output. No "ChangeBook by Yi Wisdom" series label was added (not needed).

## P0 §3 — Unverified social proof removed

- **Stats bar** (`Hero.tsx`): `12,400+` / `64` / `4.96` block — **deleted**.
- **Testimonials** (`lib/testimonials.ts`, `Testimonials.tsx`): 6 fabricated reviewers (Elena Hartman/Jungian Analyst/Zürich, Marcus Whitfield, Sophia Laurent, Dr. James O'Brien, Thomas Reeves, Dr. Aisha Rahman) + 5-star ratings — **replaced** with a static "A Thoughtful Approach" section: pillars = *Classical Sources*, *Practical Reflection*, *No Guaranteed Predictions*. Tagline: "Study the I Ching without false certainty."
- **`lib/data.ts`**: `rating` / `students` fields removed from `ModuleItem` type + all 4 module entries. `GLOBAL_STATS` (12,400+ / 4.96 / Master Teachers) and `DISPATCHES` (fake retreat/Mei-Hua-course/therapist-spotlight) — **deleted** (both were unused).
- **`lib/instructors.ts`**: `rating` / `sessions` fields removed.

## P0 §4 — Course status

- **Beginner Course:** `Available` (has real chapter content in `lib/course-details.ts`). Lesson count / duration hidden on homepage card (unverified specific numbers); `nextCohort` set to `Open enrollment` (was a stale past date `July 14, 2026`).
- **Intermediate Course:** `Available` (has ~770 lines of real curriculum). Unverified "64 Lessons" / "12 weeks" claims removed (homepage card shows no count). "Complete translation and commentary on all 64 hexagrams" includes-claim softened to "Translation and commentary on the hexagrams". `nextCohort` → `Open enrollment`.
- **Advanced Course:** renamed **Advanced Study**, `In Development` (chapters empty in `course-details.ts`). Removed `$1,880`, `20 weeks`, `36 lessons`, `Qimen Dunjia`, `Mei Hua numerology`, `Jungian psychology`, `teaching certification`, `accredited`. `nextCohort` → `TBA`.
- `ModuleGrid.tsx` footer: Duration/Lessons columns replaced by a status pill; price kept.

## P0 §5 — Consultation → Private Reflection Session

- `Private Consultation` → **Private Reflection Session** (`lib/data.ts`, `lib/course-details.ts`).
- Description: "A one-to-one educational conversation using I Ching concepts to reflect on change, responsibility, priorities, and possible next steps."
- `Consult a Master` (footer) → "Reflection Sessions". `Book a Reading` (Hero + About buttons) → "Learn About Reflection Sessions" / "Reflection Sessions".
- **Educational Notice** added to FAQ + `/educational-disclaimer` page: "Reflection sessions are educational and exploratory. They do not provide medical, psychological, legal, financial, investment, employment, relationship, or emergency advice. No specific future outcome is guaranteed."
- `$220` price hidden (was already Free); purchase/booking button hidden; status `Currently Unavailable`; `nextCohort` → `Currently unavailable`; newsletter prompt shown. Booking/payment/refund/delivery flow is incomplete → see `CONTENT_TODO.md`.

## P0 §6 — Refund promise

- "14-day money-back guarantee, no questions asked" — removed from `FAQS` (`lib/data.ts`) and `Testimonials.tsx` CTA line.
- `/refund-policy` page states honestly: all courses are Free, no payment collected, no refund applicable; sessions currently unavailable.

## P0 §7 — Legal pages & footer

- **Created 6 pages** (server components, real copy, no fabricated entity/contact details): `/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`, `/educational-disclaimer`, `/contact`. All added to `sitemap.ts`.
- **Footer fixed:** no `href="#"`; Privacy→`/privacy`, Terms→`/terms`, Cookies→`/cookie-policy`, + Refunds→`/refund-policy`, Disclaimer→`/educational-disclaimer`; "Teachers" link removed (no real teacher team); Contact→`/contact`; social links (Twitter/YouTube/Reddit) deleted (unverified ownership); copyright → "© 2026 Yi Wisdom".

## P0 §8 — Homepage hexagram component

- **"01 / 44" counter** (`DailyHexagram.tsx`): the `44` came from `DAILY_HEXAGRAM_IDS.length` (incomplete, not 64). Counter **hidden**.
- Predictive `hex.question` replaced with 4 reflective questions: *What is changing in this situation? / Which responsibilities require attention? / What information may still be missing? / What action would be proportionate to current conditions?*
- Added: "For reflection, not prediction."
- `lib/hexagrams.ts` left unchanged (its `question` field is no longer rendered).

## P0 §9 — Articles

- 3 new articles (Casting the Coins, I Ching & Stoicism, Hexagram 64) have full bodies (700–900 words, English-reviewed).
- 9 older articles use a placeholder fallback body in `app/articles/[slug]/page.tsx` (no fabricated body added).
- All 12 article slugs resolve to real 200-returning pages (confirmed in build: 12 `[slug]` paths).
- Article author unified: `Liu Xize`; author-card label `Master Teacher · ChangeBook` → `Writer · Yi Wisdom`; unverifiable "lineage-holding teacher / two decades" bio → honest "writes on the I Ching … offering reflections rather than predictions."
- Article metadata `siteName` → `Yi Wisdom`; "interviews with master teachers" / "New essays every week" → neutral wording.

## P0 §10 — Social links

- Twitter (`twitter.com/ichingmaster`), YouTube (`youtube.com/@ichingmaster`), Reddit (`reddit.com/r/iching`) — **all removed** (cannot verify ownership by Yi Wisdom). No `sameAs` array in JSON-LD Organization; no social row in Footer; `twitter.creator` removed from metadata.

## P0 §11 — SEO

- Homepage `title` → "Yi Wisdom | I Ching Philosophy and Self-Cultivation".
- Homepage `description` → "Explore the I Ching through classical sources, clear English explanations, thoughtful reflection, and practical self-cultivation. No false certainty or guaranteed predictions."
- Root layout (`app/layout.tsx`) title template → `%s | Yi Wisdom`; OG/Twitter/siteName → Yi Wisdom.
- JSON-LD: fake `Offer`/`price`, `AggregateRating`/`Review` (none existed, but Offer removed), `sameAs` social, `teaches: 'Divination'` — all removed. Course JSON-LD `provider.name` → Yi Wisdom; `offers`/`startDate`/`timeToComplete`/`numberOfCredits` dropped (avoid invalid schema for in-dev courses).
- `robots.ts` unchanged (disallows `/login`, `/register`); `sitemap.ts` now includes 6 legal pages.
- `manifest`/PWA: none exists (no manifest to fix).

## P0 §12 — Final legacy-term search

Searched **source** (`*.ts/tsx/js`) and **build output** (`.next/`) for:

`I Ching Master`, `ChangeBook`, `12,400`, `4.96`, `Elena Hartman`, `master teacher`, `master teachers`, `Consult a Master`, `Book a Reading`, `$1,880`, `$220`, `teaching certification`, `14-day money-back guarantee`, `No questions asked`, `ichingmaster`, `href="#"`.

**Result: 0 matches** in both source and build output. No residual.

## Build / test results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | 0 errors |
| `npm run build` | success, 36 routes (incl. 6 legal + 12 articles) |
| Legacy terms in `.next/` | 0 |
| Legacy terms in source | 0 |
| `href="#"` in source | 0 |
| `npm run lint` | **ESLint not configured** (no `.eslintrc`; `next lint` prompts interactively). Pre-existing project gap — see note below. |

> **Lint note:** `package.json` declares `eslint` + `eslint-config-next` but no ESLint config file exists, so `next lint` cannot run non-interactively. This is a pre-existing condition, not introduced by this changeset. Recommended fix (out of scope): add `.eslintrc.json` with `{ "extends": "next/core-web-vitals" }`. Type-check (`tsc`) and a production build both pass cleanly.

## Local preview

```bash
npm run dev
# http://localhost:3000  → check /, /consult, /advanced-course, /privacy, /educational-disclaimer, /articles
```
