# CONTENT_TODO.md

> Real business information that **cannot be confirmed from the source** and must be supplied by the site owner before publication of the corresponding claims. Nothing below was fabricated into the site; these items are intentionally left as honest placeholders / "currently unavailable" until verified.

## 1. Contact & identity

- [ ] **Real contact email** for `/contact` and privacy/data requests. Currently `/contact` points to the newsletter on the home page and states a contact email will be published once verified.
- [ ] **Legal entity name & jurisdiction** for `/terms` and `/privacy`. Currently the pages use the generic "Yi Wisdom" / "the site operator" wording rather than a registered entity name.
- [ ] **Data controller / privacy contact** if different from the general contact.

## 2. Teacher / instructor credentials

- [ ] Verify **Liu Xize**'s title/role. Currently shown as "I Ching Practical Mentor" (from `lib/instructors.ts` / `app/about/page.tsx`). Confirm this is the desired public title and that the experience claim ("15 years") is accurate.
- [ ] The About page no longer claims "38 countries" or a "master teacher" — confirm the revised mission/story copy is acceptable.
- [ ] If additional real teachers exist, provide verified names/titles/bios before re-adding a "Teachers" section (currently removed from Footer and About).

## 3. Course details

- [ ] **Beginner Course lesson count:** `MODULES` previously claimed "22 lessons" / "4 weeks"; the count is now hidden on the homepage card. Confirm the actual lesson count in `lib/course-details.ts` and whether "4 weeks" is a real schedule before re-displaying.
- [ ] **Intermediate Course completeness:** `lib/course-details.ts` contains ~770 lines of real curriculum, but it is **not confirmed** whether all 64 hexagrams are covered. The homepage no longer claims "64 Lessons"/"12 weeks" and the includes no longer says "all 64 hexagrams". Confirm scope and update copy if the full 64 are complete (or mark scope explicitly if partial).
- [ ] **Cohort schedules:** Beginner & Intermediate `nextCohort` were stale past dates (Jul/Aug 2026); set to `Open enrollment`. If scheduled cohorts exist, provide real future dates.
- [ ] **Advanced Study:** currently `In Development` with empty chapters. When content is ready, populate `lib/course-details.ts` and flip `status` to `Available` with a real `nextCohort`.

## 4. Reflection sessions (consultation)

- [ ] **Booking flow:** no booking mechanism exists (the "Enroll"/"Book" button is non-functional). Currently shown as `Currently Unavailable`. If/when sessions reopen, provide a real booking path.
- [ ] **Payment / pricing:** sessions are Free / no payment taken. If a paid model is introduced, define price, currency, payment provider, and a real refund process, then update `/refund-policy` **before** collecting payment.
- [ ] **Delivery & scheduling:** session length, format (video?), languages available, lead time, and follow-up deliverables — all currently removed/unspecified. Provide verified details before re-adding to the `includes` list.
- [ ] **Educational Notice** is present (FAQ + `/educational-disclaimer`). Confirm the disclaimer wording with legal counsel if the service is offered commercially.

## 5. Refund policy

- [ ] No paid products exist, so no refund process is published. `/refund-policy` states this honestly. If paid programs are introduced, publish a complete, executable refund policy **before** any purchase.

## 6. Newsletter

- [ ] The site references "join the newsletter" in several places (Hero, FAQ, course CTAs, consult page), but **no newsletter signup mechanism** exists in the codebase. Owner must provide a real newsletter embed/provider (e.g., a form endpoint or third-party widget) before relying on this as a contact/update channel.

## 7. Social media

- [ ] All social links were removed (Twitter/YouTube/Reddit could not be verified as owned by Yi Wisdom). If official accounts exist, provide verified URLs before re-adding them to the Footer or JSON-LD `sameAs`.

## 8. Analytics & cookies

- [ ] `/cookie-policy` describes essential + analytics cookies generically. Confirm which analytics tool (if any) is actually deployed and update the cookie list to match. No advertising/tracking cookies are in use.

## 9. Assets

- [ ] `og-image.png`, `og-course.png`, `og-article.png`, and `logo.png` are referenced in metadata/JSON-LD. Verify these files exist in `/public` and reflect the "Yi Wisdom" brand (not "I Ching Master"). Update imagery if outdated.
