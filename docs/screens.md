# Screen manifest

Section order is what the DOM contains (verified by grep against `src/pages/*.tsx`). Hero type
follows the rule: full band for home and the three service pages, compact band for the
informational pages, and `/contact` keeps its form above the fold. Titles and descriptions are the
single source in `src/data/site.json`; the pre-render step rewrites `<title>`, description,
`og:*`, `twitter:*` and canonical per document, and `Seo.tsx` repeats the same values on client
navigation.

| # | Route (`file`) | Job / persona / stage | Hero | Sections in order | Primary CTA | `<title>` | JSON-LD |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `/` (`index.html`) | Capture a first-time local + NRI visitor / Awareness | Full band, dark navy gradient, illustration panel right | Hero · Trust bar · Stats · Services · Process (4 steps) · Charter statement · Answers and tools preview · CTA | Book Consultation | Shah Financial \| AMFI MF Distributor, Begumpet Hyderabad | Organization, WebSite, BreadcrumbList |
| 2 | `/wealth-planning` | Explain the reviewable service / Consideration | Full band | Hero · Pillars (4 foundations) · Review scope (6) · `#out-of-scope` (4 referrals) · CTA | Book Consultation | Wealth Planning & Portfolio Health Check \| Shah Financial | + Service (CAS-based portfolio health check) |
| 3 | `/nri-investing` | Remove cross-border blockers / Consideration | Full band with desk-coverage panel | Hero · Challenges (4) · Account types (NRE/NRO/FCNR) · `#nri-faqs` routes · FAQ accordion (13) · CTA | Book Consultation | NRI Mutual Fund Investing in India \| Shah Financial | + Service, FAQPage |
| 4 | `/retirement` | Show the number, not a promise / Consideration | Full band | Hero · `#calculator` (inputs + results + stated assumptions) · Life stages (4) · Income sources (8) · CTA | Book Consultation | Retirement Planning & Corpus Calculator \| Shah Financial | + Service (corpus and withdrawal planning) |
| 5 | `/resources` | Retain and cite / Retention | Compact | Hero · `#interactive-tools` (4, all marked live) · `#faq-accordion` question index over all 19 FAQs with category filter · `#statutory-downloads` (AMFI primary sources) · CTA | Book Consultation | Resources & Knowledge Hub \| Shah Financial | Organization, WebSite, BreadcrumbList |
| 6 | `/about` | Prove the practice / Consideration → Decision | Compact | Hero · Facts (2 real + 2 bracketed) · Our Practice · Operating tenets (4) · `#regulatory-charter` → `#regulatory-standing`, `#compensation`, `#ownership-and-exit`, `#grievance` · `#faq-section` (6) · CTA | Book Consultation | About Us & Regulatory Charter \| Shah Financial | + FAQPage |
| 7 | `/contact` | Convert / Decision | Compact | Hero + `EnquiryForm` (above the fold) · Reach the desk directly · Begumpet chambers + directions + Maps · `DeskCoverage` live IST · "What happens after you send it" (3) · regulatory line | Form submit: "Book my free 20-minute call" | Contact & Book a Consultation \| Shah Financial | Organization, WebSite, BreadcrumbList |
| 8 | `404.html` | Do not lose the visitor | none | Not-found copy · phone + email escape hatch · "Nothing was charged or submitted." | Call | Page Not Found \| Shah Financial | none + `noindex, follow` |

## Shared chrome (defined once)

- `Navbar.tsx` — 7 links, `aria-current="page"` on the active one (path normalised so `/about/` and
  `/about` both light up), sticky, transparent over the hero then solid on scroll, mobile drawer,
  and the single header CTA repeating `cta.primary`.
- `Footer.tsx` — org description, `<address>` NAP, tel/WhatsApp/email channels, Services, Company,
  Legal (`/about#regulatory-charter`, `/about#compensation`), `regulatoryLine`, the market-risk
  disclaimer, the distributor-not-adviser paragraph, and a line saying the ARN/EUIN values are
  placeholders until filled.
- `ui.tsx` — `SectionHeader`, `StatCard`, `ServiceCard`, `Pill`; `Reveal.tsx` for staged entry;
  `FaqAccordion.tsx` (native `<details>`); `JsonLd.tsx`, `Seo.tsx`.
- `EnquiryForm.tsx` — the only form on the site.
- `ScrollToTop.tsx` — jumps to `location.hash` when present, otherwise to top.

## Placeholders in the UI

Every bracketed token is listed with its owner in `content-ledger.md`. They render inside the same
card slots as real numbers, so filling them changes no layout.
