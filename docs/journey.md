# Customer journey and sitemap

Derived before the page edits. Each page has one job and one funnel stage; nothing here was
inferred from the design, it was inferred from what a distributor with a physical Begumpet desk can
actually promise.

## Personas

| Persona | Situation | Dominant fear | What makes them act |
| --- | --- | --- | --- |
| **Dual-income Hyderabad family, 32-48** | Already holds 5-15 funds bought from a bank or an agent | "Am I paying for something that gives me nothing?" | A review of what they already own, in writing, with no obligation |
| **NRI, GCC / UK / US** | Has NRE/NRO accounts and old inheritted folios; remote-uncertain about FEMA and repatriation | "Will I be able to get the money out, and will I be taxed twice?" | Someone who answers on their timezone and states the rules plainly, including what they cannot do |
| **Pre-retiree, 50-62** | Needs an income number, not a return number | "Will it run out?" | The corpus model shown with its assumptions on screen |

## Stage map

| Stage | Visitor question | Page | Micro-conversion | Exit risk | Lever used |
| --- | --- | --- | --- | --- | --- |
| Awareness | "Is this for someone like me?" | `/` hero + trust bar | Scroll to the 4-step process; tap phone | Reads as a generic adviser template; no proof of registration | Answer first, then the real address, real hours, AMFI line with bracketed ARN |
| Awareness | "What is actually being offered?" | `/wealth-planning`, `/nri-investing`, `/retirement` | Open an FAQ (`<details>`) | Over-promise (estate trusts, hedging, tax harvesting) then discover it is a distributor | Scope honesty: an explicit out-of-scope panel naming the CA/trustee/lawyer |
| Consideration | "How do you get paid, and can I leave?" | `/about#regulatory-charter`, `/about#compensation` | Read the trail-commission paragraph | Vague "fee-only" language that a regulator would flag | Primary-source disclosure + ownership/exit text + grievance route |
| Consideration | "Does he know my timezone / my block?" | `/contact` (desk coverage, directions) | Copy phone / open WhatsApp | No sign of a real place to visit | Metro pillar C1315, basement parking, 45 min from RGIA, live IST clock |
| Decision | "What do I have to give you?" | `/contact` enquiry form | Submit → mailto draft or endpoint POST | A form that silently does nothing | Validation before submit, honest confirmation copy, phone/WhatsApp as parallel paths |
| Retention | "Where is my plan written down?" | `/resources` (tools, FAQ index, statutory sources) | Bookmark / return to the calculator | A "blog" of fake dated articles | Real destinations only, with AMFI as the primary source |
| Advocacy | "Who do I tell?" | `/contact` | Forward the number | — | Nothing fabricated is askable of a visitor; left as a warm-handoff by phone |

## Sitemap (8 documents, 7 indexable)

```
/                      Awareness   full-band hero        Book Consultation
/wealth-planning       Consideration full-band hero      Book Consultation
/nri-investing         Consideration full-band hero      Book Consultation
/retirement            Consideration full-band hero      Book Consultation
/about                 Consideration compact hero        Book Consultation
/resources             Retention   compact hero          Book Consultation
/contact               Decision    compact hero          enquiry form (primary CTA = submit)
404.html               —           no hero               phone + email escape hatch, noindex
```

`/contact` is the only page whose primary CTA is the form submit; every other page's single primary
CTA is `cta.primary` = "Book Consultation", repeated verbatim in the header button, the mobile bar
and the footer, which is allowed. All secondary actions are quiet text links.

## Retention/advocacy debt

No newsletter, no client login, no article library: the practice does not yet have content the owner
can publish without writing it himself. `/resources` therefore points at tools, answers and
AMFI sources instead of pretending to a blog.
