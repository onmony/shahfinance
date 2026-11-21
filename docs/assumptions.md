# Assumptions (labelled, not verified)

Anything here that turns out to be wrong is a content bug, not a code bug. Ordered by blast radius.

1. **Production domain is `https://www.shahfin.com`.** Every canonical, OG URL, sitemap `<loc>` and
   JSON-LD `@id` is built from `siteUrl` in `src/data/site.json`. If the site is served from another
   host (or the older `shahfinancial.in`), change that one key and rebuild; nothing else references
   an absolute URL.
2. **The practice is an AMFI-registered mutual fund distributor and nothing more.** No SEBI RIA,
   no insurance IRDAI broker licence, no RNRTS real-estate, no PMS/AIF. Every page states this, and
   the footer disclaimer is the negation form ("not as a SEBI-registered investment adviser"). If
   an RIA registration exists, several pages become *under*-claiming and should be raised.
3. **Verified facts were taken from the live static site at `D:\Products\ShahFin\site\`** (7 HTML
   pages + `_tools/`), which the owner maintains. NAP, phone, WhatsApp, hours, desk coverage, 19
   FAQ answers, compensation model and directions were copied from there, not invented. Facts that
   site also lacked (ARN, EUIN, AUM, family count, grievance SLA) remain bracketed placeholders —
   see `content-ledger.md`.
4. **One primary conversion: Book Consultation.** Secondary: the enquiry form on `/contact`. The
   phone and WhatsApp links are treated as the same conversion, not competing CTAs.
5. **No Gen-AI chatbot is in scope.** Phase 6 of the method was skipped by decision, so the
   chatbot checks in the verification gate are not applicable rather than failed.
6. **Hosting is GitLab Pages** (see `.gitlab-ci.yml`). The build emits real files
   (`dist/<route>/index.html`), and Pages serves them as-is: `/about` redirects to `/about/` and
   then answers `about/index.html`, and an unknown path gets `dist/404.html` with a real HTTP 404
   (both per Pages documentation; the codes are unobserved until the first push),
   so no SPA fallback rewrite is configured. Any other host must still be pointed at
   `404.html` itself - a static file cannot set its own status code. The asset prefix comes
   from `CI_PAGES_URL`, so either `https://<host>/` (unique or custom domain) or
   `https://<namespace>.gitlab.io/shahfinance/` (shared domain) is assumed.
7. **Enquiries go out by `mailto:` unless `VITE_ENQUIRY_ENDPOINT` is configured.** The form does not
   claim delivery in that mode: it says "Nothing has reached us until you do". Wiring the Zoho/inbox
   endpoint is an owner task; when it is set, the success panel only appears on an HTTP 2xx.
8. **English is the only interface language** for now (owner's standing instruction), including all
   generated docs and code comments.

## Contradictions between the two input reports — reported, not silently repaired

- **Report B issue #7 says the Bolt site has "no calculators".** It does not: `src/pages/Retirement.tsx`
  already shipped a working four-slider corpus/withdrawal model, which this revision only made
  accessible (`id="calculator"`, `aria-valuetext`, visible assumptions). Report A meanwhile lists that
  slider as an *upgrade it wants*. Both reports are wrong about this, in opposite directions.
- **The verified static site's FAQPage JSON-LD uses `questionName` instead of `name`** and truncates
  several answers mid-sentence. Porting it verbatim would have ported a schema error, so the JSON-LD
  here uses the valid `Question`/`acceptedAnswer` shape with the full answer text as rendered.
- **The verified static site shows 5-star rows next to an unfilled `[Google rating]` placeholder.**
  Stars without a verifiable rating are exactly what the content policy forbids, so the ported pages
  emit no `AggregateRating` and no `Review` at all, and the invented testimonial and team members
  were deleted rather than placeholdered.
- **Report B credited Bolt with respecting `prefers-reduced-motion`.** The CSS had no such rule. Added.
