# CHANGELOG_SITE_FIX.md

> Generated: 2026-09-30 · Branch: `main` (uncommitted — awaiting owner review & deploy)

## Changed files

### Data layer
- **`lib/data.ts`**
  - `ModuleItem` type: removed `rating`, `students`; added `status: 'Available' | 'In Development' | 'Currently Unavailable'`.
  - Beginner: `status: 'Available'` (rating/students removed).
  - Intermediate: tagline → "The Hexagram Path"; description neutralised (no "all sixty-four"); `lessons: 0`, `duration: ''`, `features: []`, `status: 'Available'` (real curriculum exists; unverified count hidden).
  - Advanced: title → "Advanced Study"; `status: 'In Development'`; `lessons: 0`, `duration: ''`, `features: []` (Qimen/Mei Hua/Jungian/certification removed).
  - Consult: title → "Private Reflection Session"; tagline → "Currently Unavailable"; educational description; `status: 'Currently Unavailable'`; booking features cleared.
  - `FAQS`: removed "14-day money-back guarantee"; replaced "master teachers" mentions; consultation FAQ rewritten to educational description; multi-course FAQ updated for In-Development programs.
  - Deleted unused `DISPATCHES` / `DispatchItem` (unverified retreat/Mei-Hua/therapist claims).
  - Deleted unused `GLOBAL_STATS` / `StatItem` (12,400+ / 4.96 / Master Teachers).
- **`lib/testimonials.ts`** — full rewrite: `TESTIMONIALS` (6 fake reviewers) → `APPROACH_PILLARS` (Classical Sources / Practical Reflection / No Guaranteed Predictions).
- **`lib/instructors.ts`** — removed `rating` / `sessions` fields + values.
- **`lib/seo.ts`** — `siteName`/`provider.name` → "Yi Wisdom"; removed fake `offers`/`startDate`/`timeToComplete`/`numberOfCredits` from Course JSON-LD; deleted unused `formatStartDate`.
- **`lib/course-details.ts`**
  - Beginner: `nextCohort` stale date → `Open enrollment`.
  - Intermediate: `nextCohort` stale date → `Open enrollment`; includes "Complete… all 64 hexagrams" → "Translation and commentary on the hexagrams"; "master teacher" → "instructor".
  - Advanced: title → "Advanced Study"; subtitle → "In Development"; `price` → `Free`; `currency` → `''`; `nextCohort` → `TBA`; chapters already empty.
  - Consult: title → "Private Reflection Session"; educational subtitle; `nextCohort` → `Currently unavailable`; booking `includes` cleared.

### Components
- **`components/layout/Header.tsx`** — brand "ChangeBook" → "Yi Wisdom" (×2); aria-label updated; nav "Consult" → "Reflect".
- **`components/layout/Footer.tsx`** — brand + copyright → Yi Wisdom; description rewritten; social row deleted; "Consult a Master" → "Reflection Sessions"; "Teachers" removed; Contact → `/contact`; legal links → real routes (no `href="#"`); added Refunds + Disclaimer links.
- **`components/home/Hero.tsx`** — "masterful English" → "clear English"; "consult a teacher" → "reflect with its help"; "Book a Reading" → "Learn About Reflection Sessions"; stats bar (12,400+/4.96) deleted.
- **`components/home/ModuleGrid.tsx`** — "master teachers" → "for self-cultivation"; Duration/Lessons footer replaced by status pill + price.
- **`components/home/DailyHexagram.tsx`** — predictive `hex.question` → 4 reflective questions; added "For reflection, not prediction."; removed "01 / 44" counter.
- **`components/home/Testimonials.tsx`** — full rewrite: testimonial carousel → static "A Thoughtful Approach" section using `APPROACH_PILLARS`; removed money-back CTA line.
- **`components/course/CourseComponents.tsx`** — CTA now branches on `nextCohort` (Currently unavailable / TBA → status panel + Educational Disclaimer link; otherwise → "Begin studying" + "Begin Free Study"); removed "Join the next cohort"/"Starts ·" cohort framing.

### Pages
- **`app/layout.tsx`** — root metadata title/description/template/OG/Twitter/siteName → Yi Wisdom.
- **`app/page.tsx`** — homepage metadata + JSON-LD → Yi Wisdom; removed `sameAs` social; removed `teaches: 'Divination'`; removed `twitter.creator`.
- **`app/about/page.tsx`** — "ChangeBook"/"master teacher"/"38 countries"/"her decades" → Yi Wisdom neutral copy; "Book a Reading" → "Reflection Sessions".
- **`app/articles/page.tsx`** — description "master teachers"/"every week" removed; `siteName` → Yi Wisdom.
- **`app/articles/[slug]/page.tsx`** — JSON-LD publisher → Yi Wisdom; author card "Master Teacher · ChangeBook" → "Writer · Yi Wisdom"; bio de-claimed.
- **`app/login/page.tsx`**, **`app/register/page.tsx`** — brand "ChangeBook" → "Yi Wisdom".
- **`app/sitemap.ts`** — added 6 legal pages.
- **`app/robots.ts`** — unchanged (disallows `/login`, `/register`).

### New pages (legal)
- **`app/privacy/page.tsx`** — `/privacy`
- **`app/terms/page.tsx`** — `/terms`
- **`app/cookie-policy/page.tsx`** — `/cookie-policy`
- **`app/refund-policy/page.tsx`** — `/refund-policy`
- **`app/educational-disclaimer/page.tsx`** — `/educational-disclaimer`
- **`app/contact/page.tsx`** — `/contact`

### Scripts
- **`scripts/generate-hexagrams.js`** — synchronised generator output for Advanced ($1,880→Free, Mei Hua/Qimen/certification removed, title→Advanced Study) and Consult ($220→Free, master teacher→educational, title→Private Reflection Session). Prevents regression if the generator is re-run.

## Verification

- `npx tsc --noEmit` → 0 errors.
- `npm run build` → success, 36 routes.
- Legacy-term search in `.next/` and source → 0 matches.
