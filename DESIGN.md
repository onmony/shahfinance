# Design system — Shah Financial

This site already had a coherent Material-3-derived design system before this revision. The
brief was explicit: **fix the issues and port the verified content, do not redesign.** So the
palette, type scale, spacing and layout patterns below are documented as found, and every
change is recorded with the measurement that justified it.

## 1. What the site is

- Business: AMFI-registered mutual fund **distributor** and financial planning practice,
  Begumpet, Hyderabad, India. Not a SEBI-registered investment adviser.
- Audiences: families in Hyderabad/Secunderabad, and NRIs (GCC, UK, US, SG/AU).
- One primary conversion goal: **Book Consultation** (`cta.primary` in `src/data/site.json`).
- Regulated: yes — AMFI/SEBI distribution rules. See `docs/content-ledger.md`.

## 2. Palette (as shipped, `tailwind.config.js`)

Deep navy + ivory + one bronze accent. Hue meaning below is a **hypothesis, not evidence**:
navy is conventionally read as institutional/stable, ivory as paper/ledger, bronze as a
non-alarmist highlight. What is not a hypothesis: the measured contrast ratios in §5.

| Role | Token | Value | Used for |
| --- | --- | --- | --- |
| Ink / brand | `primary` | `#000615` | headings on light, `bg-primary` bands |
| Brand panel | `primary-container` | `#0b1f3a` | dark cards, icon circles |
| Light brand | `primary-fixed` | `#d6e3ff` | pill fills, active nav chip |
| On brand | `on-primary` | `#ffffff` | text on dark bands |
| Accent | `secondary` | `#7e5708` | accent words, step dots, focus ring, links |
| Accent light | `secondary-container` / `secondary-fixed` | `#ffc974` / `#ffddaf` | eyebrows, accents on dark |
| Canvas | `background` / `surface` | `#fcf9f2` | page and section bands |
| Raised card | `surface-container-lowest` | `#ffffff` | cards on surface |
| Body copy | `on-surface` / `on-surface-variant` | `#1c1c18` / `#44474d` | text / secondary text |
| Hairline | `outline-variant` | `#c4c6ce` (at 20% alpha) | card borders |
| Error | `error` / `error-container` | `#ba1a1a` / `#ffdad6` | form failures only |

60-30-10 in practice: ivory canvas ~60%, navy ink/bands ~30%, bronze accent ~10% and never as
a large fill. The **primary CTA is navy `bg-primary` + white text**, not the accent — chosen by
isolation against the section it sits in, and left exactly as the original site had it.

## 3. Typography

Two text families plus an icon font, all from Google Fonts (`index.html`):

- `Playfair Display` 400/500/600/700 + italic 400 → `font-headline` (h1, h2, h3, stat numbers)
- `Inter` 300/400/500/600/700 → body, labels, UI
- `Material Symbols Outlined` → icon glyphs only, never as a text substitute

Fluid scale (fixed px in `fontSize`): `headline-xl` 56/68 -0.02em, `headline-lg` 40/48,
`headline-md` 28/36, `headline-sm` 22/30 (600), `body-lg` 18/30, `body-md` 15/25, `body-sm`
13/20, `label-md` 12/16 0.08em 600, `regulatory-legal` 11/16.

Language coverage: English only — sufficient for the current audience; Hindi/Gujarati versions
would need a different font stack (Devanagari) and are out of scope.

## 4. Layout, motion, a11y

- Container `max-w-page` = 1200px; gutters 16px mobile / 24px desktop; header offset via
  `--header-height` / `--header-height-mobile` custom properties.
- Radii 4/8/12/full; section rhythm `py-16 md:py-24` with alternating `surface` /
  `surface-container-low` / dark bands.
- Motion: `Reveal` (IntersectionObserver, one staged fade-up per section, `delay` multiples of
  50-100ms), `card-lift` hover (translateY + shadow), `animate-fade-down` for the mobile menu.
  Transform/opacity only.
- `@media (prefers-reduced-motion: reduce)` — added in this revision (it was missing despite the
  audit crediting it): kills the hidden pre-state of `.section-fade`, smooth scroll and hover lift.
- `@media (scripting: none)` — reveals all content when JS is off.
- `:focus-visible` global 2px bronze outline; `aria-current` on nav, `aria-invalid` +
  `aria-describedby` + `role="alert"` on the enquiry form, `aria-pressed` on the resource filters,
  `aria-labelledby`/`aria-valuetext` on the calculator sliders.
- `<details>` for FAQs so answers ship in HTML and work without JS.

## 5. Measured contrast (WCAG AA)

Method: in-browser pass over every painted leaf text node in the hydrated DOM of each pre-rendered
document, resolving the full background stack (ancestor `rgba()` compositing plus every Tailwind
gradient stop, worst case taken) and the element's own alpha and inherited `opacity`. Thresholds:
**4.5:1** normal text, **3.0:1** large text (≥24px, or ≥18.66px bold) and icon glyphs. Run twice, at
1280×900 and 360×740: **1,033 nodes and 966 nodes respectively, 0 failures**. The pass needs a live
DOM, so it is driven from the browser (dev server or `npm run preview`), not from a file; numbers
below are the 1280px run and the 360px minimums are identical except `404` icons (19.26 vs 20.25).

| Document | text nodes | min normal | min large | min icon | AA failures |
| --- | --- | --- | --- | --- | --- |
| `/` | 151 | 4.68 | 3.58 | 5.42 | 0 |
| `/wealth-planning/` | 108 | 4.68 | 5.82 | 5.82 | 0 |
| `/nri-investing/` | 169 | 4.54 | 5.82 | 6.45 | 0 |
| `/retirement/` | 116 | 4.59 | 5.82 | 7.78 | 0 |
| `/resources/` | 176 | 4.68 | 5.82 | 5.82 | 0 |
| `/about/` | 124 | 4.68 | 5.82 | 6.45 | 0 |
| `/contact/` | 133 | 4.68 | 3.46 | 6.45 | 0 |
| `404.html` | 56 | 4.68 | 3.58 | 20.25 | 0 |

Lowest values by class, each traced to the element that holds it: `4.54` = the 13px fund-house
acceptance note on `/nri-investing/`; `4.68` = the 11px footer line `text-primary-fixed-dim/60`
("ARN and EUIN values shown above…"), present on every page; `3.46`–`3.58` = the ghost step numerals
(fixed below); `5.42` = a 36px Material Symbols glyph drawn as `text-primary-fixed` at `opacity-60`
over a dark navy band.

Three failures were found and fixed; all three were alpha-token misuses, not layout changes:

1. **Hero `Pill`** (`src/components/ui.tsx`): `#000615` text on `bg-primary-fixed/40` laid over the
   dark hero gradient = **3.09:1** at 13px. Fill raised to `/70` → **5.87:1**.
2. **`DeskCoverage`** (`src/components/DeskCoverage.tsx`): `text-on-primary-container` `#7587a7` on
   `bg-tertiary-container/90` blended over the ivory page = **3.44:1** for 6 body paragraphs. Card
   made opaque and body text switched to `text-primary-fixed-dim` `#b5c7ea` → **9.67:1**.
3. **Ghost step numerals** (`Home.tsx:197`, `Contact.tsx:147` `text-secondary/40`; `NotFound.tsx:8`
   `text-secondary/30`): `#7e5708` at 40%/30% over ivory = **1.82–1.85:1** and **1.57:1** for 30px and
   96px text, against a 3.0 floor. Alpha raised to `/75` → **3.46–3.58:1**, which keeps them visibly
   quieter than the headings around them. An earlier scan of the same build reported these clean; the
   scan has since been widened to include low-alpha decorative nodes, which is what caught them.

No horizontal overflow at either width (`scrollWidth` 1272 at 1280; 352–359 at 360), so nothing
depends on panning to reach low-contrast or any other text.


## 6. Differentiation pass

Against the three reference/competitor patterns (global-AM style sites, aggregator listicles, and
generic adviser templates) this site differs on one axis: it **publishes the compensation and exit
mechanics as primary content** (`/about#regulatory-charter`, `/about#compensation`, the trail
commission disclosure and the out-of-scope list) instead of burying them in a footer link. It keeps
the serif-display + ivory register that reads as a practice, not a fintech app. No gradient-blob
hero, no cream-and-serif cliché doubling, no purple.

## 7. What deliberately did not change

Palette, type scale, hero composition, section order, card patterns, and the accent-word rhythm in
headings are the original Bolt design. Report B's own verdict was that the visuals were sound; the
failures were in claims, the empty HTML shell, and a form that did not send.
