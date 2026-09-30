# DEPLOYMENT_AUDIT.md

> Generated: 2026-09-30 · Domain: https://www.yiwisdom.org

## 1. Deployment topology

| Item | Value | Source |
|---|---|---|
| Production domain | `https://www.yiwisdom.org` | live fetch |
| Hosting platform | **Vercel** | `Server: Vercel`, `X-Vercel-Id: hkg1::...` |
| CDN / edge cache | Vercel Edge Network | `X-Vercel-Cache: HIT`, `Age: 1458` |
| Source repository | `github.com/ziqi108/changebook` | `git remote -v` |
| Production branch | `main` | `origin/HEAD -> origin/main` |
| Latest commit on `origin/main` | `0b9a310` — "feat: 全模块价格改为 Free，并新增 Journal 3 篇易经文章" | `git log` |
| Build framework | Next.js 14.2.5 (App Router, no `output: 'export'`) | `package.json`, `next.config.js` |
| Build command | `next build` (produces SSG/SSR hybrid, 36 routes) | `package.json` |

## 2. Root cause: "public crawl still shows old content"

The public site is **consistent with `origin/main @ 0b9a310`**. This is **not** a CDN cache or stale-HTML problem. The previous owner modification (price → Free + 3 new Journal articles) **is** deployed and visible. The "old content" that still appears — "masterful English", "12,400+ Students worldwide", "4.96 Average rating", "Elena Hartman", "14-day money-back guarantee", "01 / 44", "master teachers", "Book a Reading", "Consult a Master", "Private Consultation", "ChangeBook" branding — was **never addressed in any prior commit**; it lived in the source at `0b9a310` and was therefore present in the production build.

**Conclusion:** No rollback, orphaned `index.html`, or stale static export was found. The fix is source-level (this changeset) → commit → push → Vercel auto-rebuild → edge cache auto-purge.

## 3. Cache / service-worker / pre-render check

- **Service Worker / PWA:** No `manifest.ts`, no SW registration, no `public/sw.js`. No client-side cache layer to purge.
- **Pre-rendered HTML:** Next.js SSG; pages are pre-rendered at build time. A new build replaces them.
- **Page source vs. rendered DOM:** Confirmed consistent — the pre-rendered HTML served by Vercel matches what the crawl saw (no client-only hydration hides the legacy text; it was in the server HTML).
- **Search-engine-visible tags:** `title`, `meta description`, JSON-LD, Open Graph, Twitter Card all came from the old source metadata (`app/layout.tsx`, `app/page.tsx`, `lib/seo.ts`). All are fixed in this changeset.

## 4. Local changeset state (this audit)

- Working tree: **modified, uncommitted** (see `CHANGELOG_SITE_FIX.md` for the full file list).
- `npx tsc --noEmit` → 0 errors.
- `npm run build` → success, 36 routes, all 6 legal pages + 12 article paths present.
- Legacy-term search across `.next/` (build output) → **0 matches** for: `I Ching Master`, `ChangeBook`, `12,400`, `4.96`, `Elena`, `master teacher`, `masterful`, `Consult a Master`, `Book a Reading`, `$1,880`, `$220`, `teaching certification`, `money-back`, `No questions asked`, `ichingmaster`, `href="#"`.
- Legacy-term search across source (`*.ts/tsx/js`) → **0 matches** for the same set.

## 5. Deployment steps (NOT auto-executed)

> The site owner must perform these. Do not deploy automatically.

1. Review this changeset locally:
   ```bash
   git status
   git diff
   npm run build      # confirm 36 routes, 0 errors
   npm run dev        # spot-check /, /consult, /advanced-course, /privacy, /educational-disclaimer
   ```
2. Commit (new commit — do NOT amend `0b9a310`):
   ```bash
   git add app/ components/ lib/ scripts/
   git commit -m "fix: unify brand to Yi Wisdom, remove unverified social proof, add legal pages, mark incomplete courses In Development"
   ```
3. Push to `main`:
   ```bash
   git push origin main
   ```
4. Vercel detects the push and builds automatically (project is linked to `ziqi108/changebook` → `main`).

## 6. CDN cache flush steps

- Vercel **automatically purges** the edge cache for all paths when a new production deployment completes (`X-Vercel-Cache` flips from `HIT` to `MISS` then re-populates).
- To force-verify after deploy:
  ```bash
  curl.exe -sI https://www.yiwisdom.org/ | findstr /i "x-vercel-cache age"
  ```
  A fresh deploy shows `X-Vercel-Cache: MISS` (then `HIT` on subsequent requests) and `Age: 0`.
- If a specific path still serves stale HTML, trigger a redeploy in the Vercel dashboard → Deployments → Redeploy, or:
  ```bash
  # if Vercel CLI is installed and authenticated
  vercel --prod
  ```
- Hard-refresh in a browser (Ctrl+Shift+R) to bypass any local browser cache.

## 7. Search-engine re-crawl suggestions

- **Google Search Console** (if `yiwisdom.org` is verified — a Google verification file was committed in `6345919`): request re-indexing of `/`, `/consult`, `/advanced-course`, `/articles`, and submit the updated `sitemap.xml`.
- **Submit sitemap:** `https://www.yiwisdom.org/sitemap.xml` (now includes `/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`, `/educational-disclaimer`, `/contact`).
- **robots.txt:** `https://www.yiwisdom.org/robots.txt` disallows `/login`, `/register` (unchanged; these pages now read "Yi Wisdom" but remain noindex-by-robots).
- **Bing Webmaster Tools:** submit the same sitemap and request re-crawl of the homepage.
- Expect 1–7 days for Google to reflect the new title/description/JSON-LD; the legacy snippets in search results will be replaced after re-crawl.

## 8. Post-deploy verification checklist

- [ ] `curl.exe -sI https://www.yiwisdom.org/` shows `X-Vercel-Cache: MISS`/`Age: 0` shortly after deploy.
- [ ] `curl.exe -s https://www.yiwisdom.org/ | findstr /i "Yi Wisdom"` returns matches.
- [ ] `curl.exe -s https://www.yiwisdom.org/ | findstr /i "Elena 12,400 4.96 money-back"` returns nothing.
- [ ] `/privacy`, `/terms`, `/cookie-policy`, `/refund-policy`, `/educational-disclaimer`, `/contact` all return 200.
- [ ] `/sitemap.xml` lists the 6 legal pages.
- [ ] `/robots.txt` still disallows `/login`, `/register`.
