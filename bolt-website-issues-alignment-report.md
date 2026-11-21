# Report B — Issues With the Bolt Website, and How to Bring It in Line With Ours

**Reference site:** `D:\Products\shahfinance\` (React/Vite source) as served at `https://html-screenshot-web-yqhv.bolt.host`
**Audit date:** 2026-11-18 · Every finding below was verified against the **served raw HTML** (curl with a browser UA) and live browser sessions — not against screenshots or summaries.

---

## 1. The issues

| # | Issue (verified) | Risk | Alignment action |
|---|---|---|---|
| 1 | **Fabricated business data** — placeholder NAP, invented contact details in the Organization schema | Compliance + trust: AI engines and Google cross-check entity facts; wrong registration data on an MF distributor site is an AMFI/SEBI exposure | Replace with our real, verified facts (Durga Towers, Begumpet, Hyderabad 500016 · +91-98492-80280 · contact@shahfin.com); keep schema identical to visible content |
| 2 | **Fake booking form** — submit handler fires with no network request; the visitor's enquiry goes nowhere | Lost leads + false conversion promise | Wire to our real pipeline (Zoho Bookings + CRM, our planned integration); keep client-side validation + accessible error states |
| 3 | **Empty HTML shell** — SPA delivers `<div id="root"></div>` with content only after JS runs | Crawlers and AI answer engines see no quotable content; near-zero organic/GEO surface | Pre-render or migrate to static per-page HTML like ours — content must be in the document at first byte |
| 4 | **Uniform `<title>` and meta description across all routes** | Search sees one page; per-intent ranking impossible | Adopt our per-page unique titles/descriptions (60–220 chars), one search intent per page |
| 5 | **Missing mandatory mutual-fund disclaimer** on served pages; **ARN shown as "ARN-XXXXXX"** | Regulatory non-compliance for an AMFI-registered distributor — the disclaimer and real ARN/EUIN are required disclosures | Port our disclaimer block + AMFI/EUIN/ARN section from `about.html#regulatory-charter`; never launch with placeholder ARN |
| 6 | **"Fiduciary" wording and an invented "one business day" SLA** in marketing copy | Legally wrong self-description for an MFD (distributor ≠ fiduciary advisor) + unverifiable promise | Use our truth-checked copy: we ported Bolt's persuasive hero lines but **rejected** these two claims |
| 7 | **Thin content** — no FAQ passages, no calculators, no timezone widget, resources page is a list of stubs | Weak E-E-A-T, nothing for AI engines to cite, no micro-conversions | Fold in our substantive content: 19 real FAQs (already in our JSON-LD FAQPage), retirement calculator, NRI timezone widget |
| 8 | **SEO infrastructure gaps** — no XML sitemap, no canonicals, soft-404 behavior on unknown routes, no OG images | Crawl budget wasted, duplicate-parameter URLs indexed, links share as blank cards | Copy our setup: sitemap.xml + robots.txt, canonical per page, 404 route that returns real 404, purpose-built `og-image.jpg` (1200×630) |

## 2. What Bolt does well (worth keeping)

- **Visual consistency** — one hero composition and accent-word rhythm across pages (`<em className="text-secondary-container">` gold words); we already ported this design layer into our static site.
- **Persuasive headline copy** — strong awareness→decision framing; ported with the truth-checks above.
- **Micro-interactions** — reveal-on-scroll, card lift, reduced-motion respected; replicated in our `site.css`/`site.js`.
- **Clean component architecture** — good naming and palette tokens (identical color values to our Stitch source), worth mirroring in any future React rebuild.

## 3. Recommended strategy

**Keep our static site (`D:\Products\ShahFin\site\`) as the source of truth; do not adopt the Bolt SPA.**

1. Bolt's only genuine advantages are design and copy — both are now ported into our site, so pulling its code would reintroduce issues #1–#8 to regain nothing.
2. If a React rebuild is ever wanted, rebuild **our** verified content into Bolt's component shell, not the reverse: content pipeline, then SEO injection, then design — each step verified against served HTML as it was here.
3. Before either site launches: fill real ARN/EUIN, confirm the production domain (canonicals currently assume `https://www.shahfin.com`), localize the Stitch-hosted images, and re-run `_tools/stitch_verify.mjs` + `_tools/seo_raw_check.mjs` as the launch gate.

## 4. Verification commands used

```bash
# link + fragment graph (current result: scanned=534 bad=0)
node _tools/stitch_verify.mjs

# served-HTML SEO checks (titles, canonicals, JSON-LD, robots, sitemap)
node _tools/seo_raw_check.mjs

# WCAG AA contrast on the actual palette pairs (11/11 pass)
node _tools/contrast_check.mjs
```

## Sources
- [AMFI Master Circular for MF Distributors](https://www.amfiindia.com/uploads/AMFI_Master_Cicular_for_MF_Ds_3c7f5ee44f.pdf)
- [Revised AMFI Code of Conduct for Mutual Fund Distributors (2022)](https://www.amfiindia.com/uploads/Revised_Codeof_Conductfor_Mutual_Fund_Distributors_April2022_57d91fe1c4.pdf)
- [AMFI — Find a distributor (ARN/EUIN registry)](https://www.amfiindia.com/distributor)
- [AMFI Role of MFDs FAQ](https://www.amfiindia.com/Themes/Theme1/downloads/FAQsonRoleofMFDsAdvts.pdf)
- [Google — Optimize your website for AI Search (official guide)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [SEO vs GEO: differences explained](https://www.an-digital.com/en/insights/articles/seo-and-geo-all-the-differences-explained/)
- [GEO checklist & strategy 2026](https://www.fragments-studio.com/en/blog/post/seo-geo-checklist-strategy-2026)
