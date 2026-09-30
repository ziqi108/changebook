# CONTENT_TODO.md

> Updated: 2026-09-30. Status of real business information that cannot be fabricated. Items are either **Verified** (confirmed from source), **Resolved by owner decision** (2026-09-30), or **Open** (owner must supply before the claim is published).

## Verified from source (this audit)

- **Intermediate course is a complete 64-hexagram curriculum.** `lib/course-details.ts` contains 64 chapters `hex-01` … `hex-64`, each with one lesson (verified via grep, count = 64, last entry `hex-64` at line 862). The course page includes-list states "Translation and commentary on all 64 hexagrams" — this is **true and retained**. The homepage card does **not** display a lesson count (per the "不得显示 64 Lessons" instruction; duration "12 weeks" also hidden as unverified).
- **Beginner course actually has 3 lessons** (`lesson-01`, `lesson-02`, `lesson-03` in `lib/course-details.ts`), **not** the 22 previously claimed in `MODULES`. The fabricated "22" is removed and the count is hidden on the card. `MODULES.lessons` set to the real value `3` for data accuracy (not displayed).
- **No analytics integration exists.** Grep for `gtag`, `google-analytics`, `@vercel/analytics`, `plausible`, `fathom`, `umami`, `googletagmanager` → 0 matches. The Cookie Policy has been corrected to state "no third-party analytics cookies are currently deployed".
- **No newsletter signup mechanism exists.** The 5 files mentioning "newsletter" contain only text references (no `<input type="email">` form, no provider embed). Per owner decision, text references are retained but no form is added.
- **Google Search Console verification file exists:** `public/google5014ded934957857.html` (verified). Sitemap can be submitted in GSC.
- **No PWA manifest / service worker** exists (no client-side cache to manage).

## Resolved by owner decision (2026-09-30)

- **Reflection Sessions** → keep as `Currently Unavailable`. No booking/payment flow exists or is being added now. Educational Notice retained on `/educational-disclaimer` and FAQ.
- **Newsletter** → keep text references ("join the newsletter") with no signup form, until a provider is chosen.
- **Legal entity** → no formal entity; keep the generic "the site operator" wording in `/terms` and `/privacy`. No fabricated entity name or jurisdiction.
- **Social media** → no verifiable official accounts; social links stay removed from Footer and JSON-LD `sameAs`.
- **Cohort schedules** → beginner & intermediate `nextCohort` kept as `Open enrollment` (the previous dates were in the past). Advanced `TBA`, consult `Currently unavailable`.
- **Refund policy** → no paid products; `/refund-policy` states honestly that no payment is collected. No refund process published.

## Open — owner action still required

- [ ] **OG images / logo.** `public/` currently contains **only** the Google verification file. Metadata and JSON-LD reference `/og-image.png` (`app/layout.tsx`), `/og-course.png` (`lib/seo.ts`), `/og-article.png` (`app/articles/[slug]/page.tsx`), and `/logo.png` (JSON-LD Organization) — **none of these files exist** (social sharing shows no preview; platforms degrade gracefully). Owner must provide branded assets, or the references should be removed. Auto-generation was attempted but the image endpoint required unavailable authentication.
- [ ] **Real contact email** for `/contact` and privacy/data requests. Currently `/contact` points to the newsletter text and states an email will be published once verified.
- [ ] **Liu Xize public title.** Currently "I Ching Practical Mentor" (`lib/instructors.ts`, `app/about/page.tsx`). Owner to confirm this is the desired title and that the "15 years" experience claim is accurate, or provide a corrected title/bio.
- [ ] **Beginner lesson count display.** Verified = 3 lessons. Currently hidden (conservative). If the owner wants it shown, set `ModuleGrid` to display the verified count; until then it stays hidden.
- [ ] **Cohort dates**, if scheduled cohorts (not open enrollment) are intended — provide real future dates for beginner/intermediate.

## Notes for paid-program introduction (future)

If paid courses or paid Reflection Sessions are introduced, the owner MUST — **before** collecting any payment — provide: real price/currency, payment provider, a complete executable refund process, and updated `/refund-policy`, `/terms`, and `/educational-disclaimer` copy reviewed by legal counsel.
