# Report A — What Is Good With Our Current Website

**Site:** `D:\Products\ShahFin\site\` (7 pages: index, nri-investing, wealth-planning, retirement, resources, about, contact)
**Audit date:** 2026-11-18 · All claims below were verified against the built HTML files on disk, not inferred.

---

## 1. Content integrity — the strongest asset

| Check | Result |
|---|---|
| NAP details (address, phone, email) | Real, consistent across all pages and inside the JSON-LD Organization schema (Durga Towers, Begumpet, Hyderabad 500016 · +91-98492-80280 · contact@shahfin.com) |
| Mandatory mutual-fund disclaimer | Present: "Mutual fund investments are subject to market risks, read all scheme related documents carefully" — required by the AMFI Code of Conduct for distributors |
| AMFI / ARN / EUIN regulatory blocks | Structured and visibly placed on the About page regulatory charter; placeholder ARN value is clearly marked as "fill real value before launch" — no fabricated registration numbers are presented as fact |
| Role description | Correctly describes a *mutual fund distributor / investment advisor service*, not a "fiduciary" or SEBI-registered RIA claim we cannot evidence |
| Claims discipline | Marketing copy ported from the Bolt reference was truth-checked: the "fiduciary" wording and the "response within one business day" SLA were **rejected** during the port because they were unverifiable |

**Why it matters:** for a financial-advisory site, one fabricated registration number or wrong legal term is a compliance incident, not a typo. Our site has none shipped.

## 2. Function — everything on the page actually works

- **Link graph: 534 / 534 valid** (`_tools/stitch_verify.mjs`, re-run 2026-11-18: `scanned=534 bad=0` across all 7 files) — every anchor and every same-page fragment resolves.
- **Forms validated in-browser**, not just styled: booking form, newsletter, and contact inputs have real client-side validation with accessible error states.
- **Interactive tools work:** timezone widget for NRI investors and the retirement calculator inputs/outputs were exercised with actual browser automation.
- **Booking is designed for a real pipeline:** the form maps to the planned Zoho Bookings + CRM wiring (open item), so it is a genuine capture path — unlike a decorative form that sends nothing.
- **Active navigation** (`aria-current`), injected mobile menu, and toast notifications all verified in a real browser session.

## 3. SEO + GEO (AI answer-engine optimization)

- **Server-rendered, crawlable HTML on every page.** No empty JavaScript shell — the content is in the document itself, which is exactly what both search crawlers and AI crawlers (Gemini, ChatGPT, AI Overviews) require to cite us. Google's official AI-optimization guidance confirms there is no separate AI-SEO protocol: crawlability + unique content + E-E-A-T is the playbook, and we followed that (no llms.txt hacks, no artificial chunking).
- **Per-page unique titles + meta descriptions** (60–220 chars, verified programmatically by `_tools/seo_raw_check.mjs`).
- **Canonical URLs** on all 7 pages pointing at `https://www.shahfin.com/...` (production-domain confirmation is the one open item).
- **Open Graph + Twitter cards** with a purpose-built 1200×630 `og-image.jpg`.
- **JSON-LD `@graph`:** Organization (with real PostalAddress), WebSite, BreadcrumbList, and FAQPage built from **19 real FAQs** extracted from the pages' own `<details>` accordions — schema that matches visible content, not boilerplate.
- **Question-shaped H2/H3 headings with 40–80 word direct answers underneath** — the answer-shaped passage format AI engines prefer to quote.
- **sitemap.xml, robots.txt, favicon** all present and returned 200 in the raw check.

## 4. Performance and code hygiene

- **Tailwind Play CDN replaced with a compiled 48 KB `tailwind.css`** — the runtime JIT compiler (~3.3 KB removed per page as inline `<script>` plus the CDN fetch itself) is gone. Render-blocking JS reduced to one small deferred `site.js`.
- **Zero console messages** after the CDN swap (verified via browser console listing).
- **Core Web Vitals budget respected by construction:** no hero image bloat, no third-party scripts in the shipped build, font loading limited to two families.
- **Accessibility:** 11/11 text-on-color pairs measured pass WCAG AA (`_tools/contrast_check.mjs`) — gold-on-navy 10.90:1, body-on-navy 15.71:1, gold-ink-on-surface 6.14:1.

## 5. Design discipline

- **One hero system across all 7 pages** — radial glow treatment, consistent vertical rhythm, identical accent-word pattern (gold `#ffc974` emphasis words on navy, `#7e5708` gold-ink on light), so brand consistency no longer depends on each Stitch screen's mood.
- **Bolt's persuasive copy ported** into our hero sections (e.g. "Wealth built with *discipline*, managed with *care*.") while keeping our factual content untouched.
- Scroll reveals and card-lift hover states with a full `prefers-reduced-motion` opt-out.
- Everything is generated by small, re-runnable Node scripts (`_tools/`) — the design layer is *derived* from source screens, so content edits never get lost by re-running the build.

## 6. Known open items (tracked, not hidden)

1. Real ARN/EUIN values to replace the marked placeholders.
2. Confirm the production domain so canonicals/sitemap are final.
3. Wire the booking form to Zoho Bookings + CRM.
4. Slider-style upgrade for the retirement calculator.
5. Download the Stitch-hosted (`aida-public`) images to local assets before launch.

---

### Sources
- [AMFI Master Circular for MF Distributors](https://www.amfiindia.com/uploads/AMFI_Master_Cicular_for_MF_Ds_3c7f5ee44f.pdf)
- [Revised AMFI Code of Conduct for Mutual Fund Distributors (2022)](https://www.amfiindia.com/uploads/Revised_Codeof_Conductfor_Mutual_Fund_Distributors_April2022_57d91fe1c4.pdf)
- [AMFI — Role of MFDs FAQ](https://www.amfiindia.com/Themes/Theme1/downloads/FAQsonRoleofMFDsAdvts.pdf)
- [SEBI/AMFI rules for mutual fund distributors (summary)](https://www.jezzmoney.com/blog/sebi-amfi-rules-mutual-fund-distributors)
- [Google — Optimize your website for AI Search (official guide)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [SEO vs GEO: differences explained](https://www.an-digital.com/en/insights/articles/seo-and-geo-all-the-differences-explained/)
- [GEO checklist & strategy 2026](https://www.fragments-studio.com/en/blog/post/seo-geo-checklist-strategy-2026)
