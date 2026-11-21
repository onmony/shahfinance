# Content ledger

Counts are measured from the built output with `node scripts/count-placeholders.mjs` (text of
`dist/**/index.html` + `404.html`), not from memory: **8 distinct bracketed placeholders, 66 rendered
occurrences**. `scripts/lint_site.py dist --profile finance --strict` reports the same 66.

Stored once in `src/data/site.json` (`regulatory.*`, `placeholders.*`) and read from there by every
component, so one edit fills every instance.

## Owed facts

| Placeholder | Occurrences | Where it renders | Who owes it | Source to quote |
| --- | --- | --- | --- | --- |
| `[ARN 1]` | 12 | footer regulatory line (all 8 docs), About `#regulatory-standing`, contact block | Practice principal | AMFI ARN registration certificate / amfi.amfiindia.com search |
| `[ARN 2]` | 12 | same | Practice principal | second AMFI ARN, or delete the token and the `| ARN-` clause with it |
| `[validity]` | 16 | every ARN mention, footer line ×8 | Practice principal | validity dates printed on the ARN certificate |
| `[EUIN]` | 11 | footer line, About, Contact | Practice principal | EUIN issued with the ARN |
| `[grievance resolution timeline]` | 9 | footer line, About `#grievance`, contact block | Practice principal | the SEBI/AMFI complaint-handling timeline the firm actually commits to |
| `[4 working hours]` | 2 | About FAQ answer, Contact "What happens after you send it" step 1 | Practice principal | own acknowledgement SLA — bracketed because the number was never confirmed |
| `[AUM]` | 2 | Home stats band, About facts band | Practice principal | own books, as at a stated date, with the date |
| `[N families]` | 2 | Home stats band, About facts band | Practice principal | own books |

`placeholders.note` ("Values in brackets are filled from the AMFI registry and our own books before
launch. They are not estimates.") renders next to both stat bands so a visitor is never misled by an
empty-looking number.

## Deleted rather than placeholdered

These were in the Bolt build and could not be traced to any source. They are gone, and must not come
back without evidence:

- `₹500 Cr+ AUM`, `250+ families served`, `98% client retention`, `15+ years of experience`,
  `Founded 2011`, `4-member CFA/CFP team` with invented names and photographs.
- The testimonial attributed to "Rajesh & Meera Patel".
- Dated "article" cards (e.g. a 12 Feb 2025 post) that linked to nothing.
- `fiduciary-first` / `SEBI Registered Investment Adviser` positioning and the `INA0000` placeholder
  registration number in `index.html`.
- Mumbai and Bengaluru offices, and the `hello@shahfinancial.in` address.
- Three footer social icons pointing at `href="#"`.
- The Unsplash hotlink behind the hero panel → replaced by `public/img/hero-panel.svg`, a local
  illustrative compounding curve labelled "Illustrative SIP compounding / Not a projection of returns".

## Claims that need a compliance read before launch

General in nature, each flagged for professional review, none of them a promise:

1. The negation sentence in the footer scope paragraph (distributor, not SEBI RIA) — confirm it
   matches how the firm is actually registered today.
2. `regulatory.compensation` (trail commission out of TER, no retainers, no upfront billing) —
   confirm nothing is charged to clients in practice.
3. `regulatory.consent` ("your details are never shared with any third party") — confirm no AMC or
   platform receives the enquiry data.
4. The `/nri-investing#nri-faqs` FEMA / DTAA / TDS answers — 19 answers ported from the owner's
   verified static site; confirm the rate and threshold numbers against the current Finance Act
   before publishing, and keep the "rules vary by AMC and by country; confirmed on the call" notice.
5. `out-of-scope` referrals (estate/trust drafting, hedging, tax harvesting, insurance placement) —
   confirm each is genuinely not offered.

## Verified facts and where they came from

NAP, phone `+91 98492 80280`, WhatsApp, `contact@shahfin.com`, `grievance@shahfin.com`, hours
Mon–Sat 9:00–19:00 IST, the desk-coverage matrix, the metro/parking/airport directions, the 19 FAQ
answers, the compensation model, the ownership-and-exit text and the market-risk disclaimer were all
taken from the owner's live static site at `D:\Products\ShahFin\site\` (`about.html`,
`nri-investing.html`, `contact.html`). Link-label tails that pointed at pages which do not exist
("See DTAA computation matrix", "Review our active US/Canada AMC roster", "Step-by-step repatriation
procedure") were stripped from the ported answers instead of being turned into dead links.
9.5 MB of internal design specs and screenshots (`public/extracted/`, the Stitch zip) were moved out
of the served web root to `_reference/` rather than published.
