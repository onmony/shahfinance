# Changelog

## 2026-11-18 — Issues from `bolt-website-issues-alignment-report.md`, strengths from
`current-website-strengths-report.md`

Constraint for the whole round: keep the existing design system, hero composition and layout; change
claims, data, build and SEO only. Nothing below touched the palette except the two token misuses that
failed measured AA.

### Truth layer (Report B #1, #5, #6)
- **Added** `src/data/site.json` (single source for NAP, phone, hours, CTA wording, regulatory
  values, per-route title/description), `src/data/faqs.json` (19 answers ported from the verified
  static site), `src/data/facts.ts` (typed accessors + `regulatoryLine` + `canonicalPath`).
- **Rewrote claims** in `Home`, `About`, `Contact`, `NriInvesting`, `WealthPlanning`, `Retirement`,
  `Resources`, `Footer` to what an AMFI distributor can state: invented AUM/families/retention/years/
  team deleted, the "Rajesh & Meera Patel" testimonial replaced by a quoted line from the regulatory
  charter, fake dated articles replaced by real in-site destinations, the process steps rewritten to
  the actual CAS / remote-KYC / you-keep-your-own-folios model.
- **Added** `/about#regulatory-charter` with `#regulatory-standing`, `#compensation`,
  `#ownership-and-exit`, `#grievance`; `/wealth-planning#out-of-scope` naming the four registered
  professionals needed instead; the distributor-not-RIA scope paragraph in the footer.
- Home h1 "managed with care" → "looked after with care"; Home services heading "Comprehensive wealth
  management" → "What the desk does, day to day"; NRI "specialized solutions" → "plain answers" —
  discretionary-management language is not available to a distributor.
- "100% legal ownership" → "held in your own name, in your own folios" in 4 places (`lint_site`
  bans the `100%` construction; the claim itself was fine but not defensible in that shape).
- "Assets Under Advice" → "Assets Under Distribution" (2 stat labels); "advice is qualified" →
  "guidance is qualified" (NRI routes subtitle); retirement calculator subtitle "will not run dry" →
  stated-assumption wording; "inflation-protected" → "inflation-aware".

### Real capture path (Report B #2)
- **Added** `src/components/EnquiryForm.tsx`: validates before submitting, focuses the first invalid
  field by id, `aria-invalid`/`aria-describedby`/`role="alert"` on every error, radio group for the
  topic, consent gate, disclaimer inside the form. POSTs to `VITE_ENQUIRY_ENDPOINT` when configured
  (success panel only on `response.ok`; failure panel keeps the typed text and offers phone/email);
  with no endpoint it opens a pre-filled `mailto:` draft and says so plainly. Verified in the browser:
  5 alerts + focus move on empty submit; correct mailto body via a stubbed `location.assign`;
  "Enquiry submitted" only after the mock endpoint logged the POST; "not submitted: responded 500"
  on failure with the form intact.
- **Added** `src/vite-env.d.ts` typing for `VITE_ENQUIRY_ENDPOINT`.

### Crawlable HTML (Report B #3, #4, #8)
- **Added** static pre-render: `src/App.tsx` split into `Pages`/`AppShell`/`App`/`StaticRoute`,
  `src/entry-server.tsx`, `scripts/prerender.mjs`, and
  `build = vite build && vite build --ssr && node scripts/prerender.mjs`. Each route now serves
  Each route now serves real text and its own `<title>`/description/canonical/OG/Twitter/JSON-LD in the
  first byte (measured visible text on the final build: 550–1,620 words per route; `404.html` 259);
  `src/main.tsx` hydrates when markup is present.
- **Added** `src/components/Seo.tsx` (same head values on client navigation),
  `src/components/JsonLd.tsx` (`@graph`: Organization with the real PostalAddress, WebSite,
  BreadcrumbList, Service, FAQPage; deliberately no AggregateRating/Review), `public/robots.txt`,
  generated `dist/sitemap.xml`, `dist/404.html` with `noindex, follow`.
- **Fixed** `canonicalPath()`: `/about/` and `/about` now resolve to the same route meta — before it,
  hydration overwrote every trailing-slash page title with "Page Not Found" and dropped the nav
  `aria-current`.
- `Reveal` no longer strands content invisible where IntersectionObserver is absent; `index.css`
  gained `prefers-reduced-motion` and `@media (scripting: none)` fallbacks and a global
  `:focus-visible` ring; `ScrollToTop` honours `#hash`.

### Ported strengths (Report A)
- **Added** `FaqAccordion` (native `<details>`, so answers are in served HTML) on About (6) and NRI
  (13); `DeskCoverage` with a live IST clock on Contact and NRI; the regulatory-acceptance notice;
  the verified directions and Maps link; a question index with a category filter on Resources; AMFI
  primary sources under `#statutory-downloads`.
- **Replaced** the Unsplash hero photo with local `public/img/hero-panel.svg`; copied the owned
  `og-image.jpg` (1200×630) and `favicon.svg`.
- Moved `public/extracted/` and the Stitch zip out of the web root to `_reference/`.

### Measured fixes found by the gate, not by the reports
- Hero `Pill` (`ui.tsx`): `bg-primary-fixed/40` gave **#3.09** for 13px text over the dark gradient →
  `/70` = **5.87**.
- `DeskCoverage`: `text-on-primary-container` over `bg-tertiary-container/90` gave **#3.44** for 6
  body paragraphs → opaque card + `text-primary-fixed-dim` = **9.67**.
- `DeskCoverage` and the footer year were hydration-mismatch candidates (clock/date rendered
  server-side); clock now starts blank, year has `suppressHydrationWarning`.

### Deferred / owner decisions
- Fill the 8 bracketed placeholders (see `content-ledger.md`); confirm the production domain that
  `siteUrl` assumes; set `VITE_ENQUIRY_ENDPOINT`; configure the host so unknown paths return HTTP 404
  with `404.html`; decide on the 3 remote Google font families (the method prefers ≤2 self-hosted);
  the unused `@supabase/supabase-js` dependency is still in `package.json`.

## 2026-11-21 — final verification round: 1 contrast defect, 1 reproducible gate

### Contrast recount caught what the earlier scan missed
The 11-18 round recorded "**all 7 routes AA-clean**" at both widths. Re-running the pass over the
rebuilt bundle on all 8 documents (7 routes + `404.html`) found **8 failing text nodes**, so that
earlier verdict was wrong: the scan then in use did not resolve low-alpha decorative text.

- **Fixed** `Home.tsx:197` and `Contact.tsx:147`: ghost step numerals `text-secondary/40` =
  **#1.85 / #1.82** for 30px semibold against the 3.0 large-text floor.
- **Fixed** `NotFound.tsx:8`: `404` at `text-secondary/30` = **#1.57** for 96px text.
- All three now `text-secondary/75` → **#3.46–3.58**. This is the only visual change in the whole
  engagement beyond the two token fixes above: same hue, same size, same position, just a stronger
  alpha. Revert each to `/40` (`/30` on 404) to restore the previous look and accept a documented
  AA exception instead — the numerals duplicate the `bg-secondary` badge beside them, which passes at
  #6.14.

### Added `scripts/check_dist.mjs`
The SEO/structured-data assertions in this round were being re-derived by hand each time; they are
now one script that exits non-zero: per-document unique title/description (≤160 chars)/canonical/
`og:*`/`twitter:card`, one `<h1>`, `og:description` agreeing with `description`, exactly one parseable
JSON-LD `@graph` per indexable route with no `AggregateRating`/`Review`, `noindex, follow` on
`404.html` only, no `href="#"`, every local `<img src>` present in `dist`, and every `sitemap.xml`
`<loc>` backed by a file. Result: **8 documents, 0 problems**.
Its own first version was wrong — a single-line regex for `<meta name="description" content=…>` that
missed the source's wrapped tags and reported all 8 pages as having no description. Fixed by matching
whole `<meta>` tags first, then reading attributes; a "missing content" claim was checked against the
built HTML before touching the site.

### Gate results, final build
`rm -rf dist dist-ssr && npm run typecheck && npm run lint && npm run build` → clean, no output.
Final weights: JS `284,147 B` (gzip `84,515`), CSS `26,480 B` (gzip `5,706`), `og-image.jpg` 51,257 B,
hero SVG 2,684 B, per-document HTML 12,716–47,877 B, whole `dist/` 607,176 B.
`lint_site.py dist --profile finance --strict` → **8 pages | 0 errors | 0 warnings | 66 [placeholders]**.
`node scripts/count-placeholders.mjs` → **distinct=8 total=66 documents=8** (same 66, independently).
`node scripts/check_dist.mjs dist` → **0 problems**.
Visible text served in the first byte per route: 550–1,620 words (`404.html` 259); one `<h1>` each;
zero `href="#"`.
Browser (final bundle): 0 console messages on `/contact/` load and after client-side navigation to
`/about`; head values (title, description, canonical, `og:title`, `og:url`) and nav `aria-current`
all follow the route without a reload. Empty submit → 5 `role="alert"` messages and focus moved to
`#enq-name`. The DeskCoverage clock fills client-side with no hydration mismatch (this line used to read
`renders 19:00 IST`, corrected in the entry below). No
horizontal overflow: `scrollWidth` 1272 at 1280px, 352–359 at 360px.
Lighthouse is not installed here (`npx --no-install lighthouse` → missing), so page weight is
reported above instead, and 3 remote Google font families remain a known cost.

## 2026-11-21 — GitLab Pages deploy support (subpath-safe build)

### Changed
- `vite.config.ts` - `base` is derived from `CI_PAGES_URL` (`VITE_BASE` overrides it), so one build is
  correct both at a domain root and under `https://<namespace>.gitlab.io/shahfinance/`.
- `src/App.tsx` - `<BrowserRouter basename>` from `import.meta.env.BASE_URL`. Without it every route
  resolves one level above the project path.
- `src/pages/Home.tsx` - the hero image was `src="/img/hero-panel.svg"`. Vite prefixes only the refs it
  rewrites inside `index.html`, never a URL typed in JSX, so under a subpath the hero 404s. It is now
  `` `${import.meta.env.BASE_URL}img/hero-panel.svg` `` - byte-identical at root.
- `.gitlab-ci.yml` (new) - `node:24`, then `npm ci` / typecheck / lint / build / `check:dist` /
  `check:placeholders`; `pages: { publish: dist }` (the GitLab >= 17.9 form; the legacy `pages` job with
  a `public` artifact is not used). Runs on `feature_merge` and the default branch.
- `docs/assumptions.md` item 6 - the hosting assumption now names GitLab Pages instead of "a static host
  that must be configured to return `404.html`", which is the open decision it was waiting on.

### Added to `scripts/check_dist.mjs`
Local asset refs in every document must sit under the base the bundle itself uses and resolve on disk;
a base with no leading slash, or with whitespace in it, is a failure on its own. Three falsifications,
each of which the gate before this change passed silently:
- a build whose `VITE_BASE` was mangled to `C:/Program Files/Git/shahfinance/` by MSYS path conversion
  -> `1 problem: "/img/hero-panel.svg" is missing the deploy base`;
- `dist/img/hero-panel.svg` moved out of the way -> `1 problem: missing in dist`;
- correct builds at base `/` and at base `/shahfinance/` -> `0 problems` each.

### Verification, base = `/shahfinance/` (`CI_PAGES_URL=https://ashwinshah.gitlab.io/shahfinance`)
`typecheck`, `lint`, `build`, `check:dist`, `check:placeholders` all exit 0; **8 documents | 0
problems**; placeholders unchanged at `distinct=8 total=66 documents=8`.
`vite preview` cannot verify a subpath build: with a non-root `base` it answers *every* request -
including `/shahfinance/assets/index-*.js` and `/shahfinance/sitemap.xml` - with `dist/index.html`
(200, `text/html`). That is how the mangled build first looked like a pass. `dist/` was served instead
by a static mirror rooted one level above the project path: `/shahfinance/about` -> 301 -> `/about/` ->
200 with the About title; `/contact/`, `/resources/` likewise; assets 200 as `text/javascript` /
`text/css`; `sitemap.xml` 200 `text/xml`; unknown path 404.
Browser at `http://127.0.0.1:4199/shahfinance/`: hero `currentSrc` = `/shahfinance/img/hero-panel.svg`;
nav click -> `/shahfinance/about` with the About title, `h1` "A desk built on objectivity and
discipline." and `aria-current` on `/about`, then `/shahfinance/contact` with the form and
`mailto:contact@shahfin.com`; a deep load of `/shahfinance/about/` hydrates and navigates back to
`/shahfinance`; **0 console messages**.
Root-base regression build (no env, `base=/`): refs stay `/assets/index-*.js` and `/img/hero-panel.svg`,
`check:dist` -> 0 problems, `lint_site.py dist --profile finance --strict` ->
**8 pages | 0 errors | 0 warnings | 66 [placeholders]**.

### Not verified here
Nothing has been pushed to GitLab, so the Pages status codes above come from its documentation and a
local static mirror, not from the platform. Canonicals, `og:url` and `sitemap.xml` still point at
`https://www.shahfin.com` on purpose while Pages is a preview host; if Pages becomes the home, `siteUrl`
in `src/data/site.json` must change and the sitemap rebuild with it. `_reference/` (9,850,925 B of
Stitch exports) is committed on `feature_merge`; it stays out of the Pages artifact but not out of the
repository.
