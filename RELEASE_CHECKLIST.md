# RELEASE_CHECKLIST.md

> Pre-deployment checklist for the Yi Wisdom site fix. Do **not** deploy until every item is ticked.

## Code

- [x] `npx tsc --noEmit` passes (0 errors)
- [x] `npm run build` succeeds (36 routes)
- [x] 0 legacy terms in build output (`.next/`)
- [x] 0 legacy terms in source (`*.ts/tsx/js`)
- [x] 0 `href="#"` in source
- [ ] `npm run lint` runs (blocked: ESLint not configured — pre-existing; optional: add `.eslintrc.json` `{ "extends": "next/core-web-vitals" }`)
- [ ] Spot-check locally: `npm run dev` → `/`, `/consult`, `/advanced-course`, `/intermediate-course`, `/beginner-course`, `/articles`, `/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`, `/educational-disclaimer`, `/contact`

## Content gates (must be true at deploy)

- [x] Brand is "Yi Wisdom" everywhere (no "I Ching Master", no "ChangeBook" as main brand)
- [x] No fabricated social proof (no 12,400+, no 4.96, no Elena/Marcus/Sophia/etc., no star ratings)
- [x] Advanced Course marked In Development; no $1,880 / 20 weeks / 36 lessons / Qimen / Mei Hua / Jungian / certification
- [x] Consult = Private Reflection Session; $220 hidden; booking button hidden; "Currently Unavailable"; Educational Notice present
- [x] No "14-day money-back guarantee" / "No questions asked"
- [x] 6 legal pages exist and are in sitemap
- [x] Footer has no `href="#"`; no "Teachers" link; Contact → `/contact`
- [x] DailyHexagram: no "01 / 44" counter; reflective questions; "For reflection, not prediction."
- [x] SEO: homepage title/description, JSON-LD (no fake Offer/Review/AggregateRating, no sameAs social, no 'Divination')
- [x] Social links removed (unverified)

## Open content items (see CONTENT_TODO.md — must NOT be fabricated)

- [ ] Real contact email
- [ ] Legal entity name / jurisdiction
- [ ] Newsletter signup mechanism (referenced but not implemented)
- [ ] Beginner lesson count / Intermediate 64-completeness confirmation
- [ ] Real cohort schedules (currently "Open enrollment")
- [ ] Consultation booking/payment/delivery flow (currently unavailable)
- [ ] OG images / logo reflect Yi Wisdom brand

## Deploy steps (owner executes)

1. `git add app/ components/ lib/ scripts/` (and the 5 new `.md` docs if desired)
2. `git commit -m "fix: unify brand to Yi Wisdom, remove unverified social proof, add legal pages, mark incomplete courses In Development"`
3. `git push origin main`
4. Wait for Vercel auto-build to finish (dashboard → Deployments)

## Post-deploy verify

- [ ] `curl.exe -sI https://www.yiwisdom.org/` → `X-Vercel-Cache: MISS`/`Age: 0`
- [ ] `curl.exe -s https://www.yiwisdom.org/ | findstr /i "Yi Wisdom"` → matches
- [ ] `curl.exe -s https://www.yiwisdom.org/ | findstr /i "Elena 12,400 4.96 money-back masterful"` → no matches
- [ ] `/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`, `/educational-disclaimer`, `/contact` → 200
- [ ] `/sitemap.xml` lists the 6 legal pages
- [ ] Submit sitemap + request re-index in Google Search Console & Bing Webmaster
