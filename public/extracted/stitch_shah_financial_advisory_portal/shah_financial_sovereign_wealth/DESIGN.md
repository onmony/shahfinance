---
name: Shah Financial Sovereign Wealth
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#44474d'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#75777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4d5f7d'
  primary: '#000615'
  on-primary: '#ffffff'
  primary-container: '#0b1f3a'
  on-primary-container: '#7587a7'
  inverse-primary: '#b5c7ea'
  secondary: '#7e5708'
  on-secondary: '#ffffff'
  secondary-container: '#ffc974'
  on-secondary-container: '#795203'
  tertiary: '#000713'
  on-tertiary: '#ffffff'
  tertiary-container: '#00203d'
  on-tertiary-container: '#6e89ac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7ea'
  on-primary-fixed: '#071c36'
  on-primary-fixed-variant: '#364764'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#f3be6a'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#adc9ef'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#2d4869'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 25px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  regulatory-legal:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system expresses the quiet authority, discretion, and fiduciary permanence of an elite private family office. Tailored for global Non-Resident Indians (NRIs) and generational affluent families based in Hyderabad, the aesthetic avoids any association with consumer retail brokerage, loud fintech gamification, or high-velocity trading platforms.

The design movement combines **Minimalism with Tactile Heritage Luxury**:
- Grounded, architectural balance relying on deliberate whitespace and strict vertical cadence.
- Editorial typographic restraint influenced by classical monetary certificates and legacy private banking ledgers.
- Utmost respect for regulatory compliance, displaying statutory information with institutional pride rather than burying it.
- Tactile warmth introduced through ivory, stone, and delicate metallic accents, deliberately rejecting the clinical sterility of pure digital whites (`#FFFFFF`).

## Colors

The palette establishes an environment of generational stability and understated elegance:

- **Primary Brand (`#0B1F3A` - Deep Navy):** Anchors headers, footers, immersive hero segments, high-level structural bands, and dominant typography on light grounds.
- **Secondary Dark Surface (`#12304F` - Ink Blue):** Used for nested containers within dark panels, high-tier navigation menus, and elevated states against primary navy backdrops.
- **Accent Warm Gold (`#B8893B`):** Reserved strictly for high-priority CTA actions, delicate 1px architectural dividers, key metric accents, and fine line iconography. **Never** use this token for vast flood fills, full-screen backgrounds, or heavy container blocks.
- **Soft Gold (`#E9D8B0`):** Deployed for subtle badge surfaces, secondary button hover states, micro-rule highlights, and focus borders.
- **Main Canvas (`#FAF7F0` - Ivory):** A tactile, warm, paper-inspired neutral ground that replaces default digital white.
- **Alternate Section Ground (`#EFEAE0` - Stone):** Provides horizontal structure across alternating narrative blocks, testimonial panels, and financial data grids.
- **Body Text (`#4A5568` - Slate):** Delivers balanced optical contrast with zero harshness against Ivory and Stone backgrounds.
- **System States:** Operational feedback leverages institutional-grade hues: Success Green (`#2F7D5B`) and Alert Red (`#B3261E`).

## Typography

Typographic hierarchy enforces dignity and clear legibility:
- **Headlines (`Playfair Display`):** Must always be set in standard sentence case or headline case; **never** in full uppercase. Never attach emojis, glyph icons, or decorative sparkles to headings.
- **Body & Numerical Interface (`Inter`):** Driven by an intentional line height ratio (~1.65) to maximize effortless reading for complex wealth narratives, estate tax considerations, and portfolio allocations.
- **Tabular Figures:** For returns, portfolio balances, and asset weights, enforce OpenType `tnum` (tabular lining numbers) to ensure vertical column alignment across reporting screens.
- **Section Labels:** Small uppercase or tracked standard labels (`label-md`) are paired with hairline Warm Gold dividers to anchor structural sections.

## Layout & Spacing

The layout is built around an architectured container with an absolute maximum content width of `1200px`:
- **Desktop (1024px+):** 12-column symmetrical fluid grid inside the 1200px boundary, featuring 24px (`1.5rem`) gutters and a minimum outer margin of 32px (`2rem`).
- **Tablet (768px - 1023px):** 8-column grid with 20px gutters and 24px margins. Two-tier service highlights reflow into clean 2-column blocks.
- **Mobile (320px - 767px):** 4-column layout with 16px (`1rem`) gutters and margins. Dense comparison grids collapse into vertically stacked narrative cards.
- **Vertical Spacing Rhythm:** Generous vertical intervals (`space-2xl` and `space-3xl`) are preserved between conceptual chapters (e.g., Family Governance -> NRI Cross-Border Capabilities -> AMFI Licensing) to communicate composure and unhurried advisory.

## Elevation & Depth

Visual hierarchy prioritizes surface craft and delicate optical separation over dramatic drop shadows:
- **Card Separation:** Cards on light grounds rely predominantly on a subtle 1px border colored in `#EFEAE0` (Stone) combined with a soft, warm ambient drop shadow: `0 4px 20px -2px rgba(11, 31, 58, 0.04)`.
- **Active / Elevated Cards:** On hover or interaction, elevate slightly with a refined warm shadow: `0 12px 32px -4px rgba(11, 31, 58, 0.08)` and an accented `#E9D8B0` border tint.
- **Dark Inverted Panels (Deep Navy `#0B1F3A`):** Modals, dropdown menus, and nested cards inside dark surfaces employ tonal depth via Ink Blue (`#12304F`) backgrounds with 1px hairline borders of `rgba(233, 216, 176, 0.15)` (Soft Gold at 15% opacity).
- **Glassmorphism Restraint:** Backdrops for the sticky header and floating communication hubs utilize a frosted Ivory blur (`rgba(250, 247, 240, 0.88)` with `backdrop-filter: blur(12px)` and a subtle 1px bottom border `#EFEAE0`).

## Shapes

The geometric framework balances contemporary precision with classical restraint:
- Core UI cards, inputs, and advisory containers use a strict radius of `12px` (level 2).
- Micro-elements such as tags, badges, and segmented toggles utilize `6px` or full pill-capsules where contextual hierarchy demands soft classification.
- Primary and secondary buttons adopt an elegant, controlled `8px` corner radius, retaining structured institutional composure rather than bubbly toy-like pills.

## Components

### 1. Navigation & Sticky Top Header
- **Structure:** Anchored at the top with frosted Ivory surface (`#FAF7F0` at 88% opacity, 12px blur) and a crisp 1px Stone baseline.
- **Client Login Dropdown:** A distinguished primary interactive element. Clicking or hovering reveals an Ink Blue (`#12304F`) dropdown menu with two separated tiers:
  - *Tier 1: Mutual Funds Portal* (transaction execution, valuation reports, CAS imports).
  - *Tier 2: Full Wealth View Portal* (holistic multi-asset, family trust, PMS, and global asset tracking).
- **Primary Header CTA:** 'Book a Private Consultation' styled with a solid Warm Gold (`#B8893B`) surface, `#0B1F3A` text, and 8px radius.

### 2. Buttons & CTAs
- **Primary Button:** Background Warm Gold (`#B8893B`), text Deep Navy (`#0B1F3A`), semi-bold. On hover: shifts smoothly to `#C99B4D` with soft gold ambient glow.
- **Secondary Button:** Outlined with 1px Deep Navy (`#0B1F3A`) or Soft Gold (`#E9D8B0`), transparent fill, text Deep Navy.
- **Text Action:** Playfair or Inter with an animated hairline underline anchored 4px below text baseline.

### 3. Advisory Cards & Section Dividers
- **Cards:** Ivory or pure white surface set over Stone `#EFEAE0` alternate bands. Enclosed by 1px Stone border, 12px corner radius, and 32px internal padding.
- **Section Headers:** Include an overline label in Deep Navy or Warm Gold (`label-md`), followed immediately by a delicate 1px Warm Gold divider line extending 48px horizontally beneath the title.

### 4. Input Fields & Selectors
- **Input Textures:** Warm Ivory field fill, 1px `#D9D2C5` border, 12px radius, with labels set in Inter regular.
- **Focus State:** 1px solid Warm Gold (`#B8893B`) outline with a 3px outer glow ring of `rgba(184, 137, 59, 0.15)`.

### 5. Floating Assistance & Mobile Bottom Bar
- **WhatsApp Concierge:** Floating discreet disc in bottom-right corner utilizing a muted prestige palette (Deep Navy disc with fine Warm Gold WhatsApp insignia ring, avoiding harsh neon greens).
- **Sticky Mobile Action Bar:** Positioned at viewport bottom on screens under 768px. Features a quick dial action and a direct 'Book Call' trigger, separated with 1px border over frosted Ivory.

### 6. Regulatory & Compliance Strip (Footer)
- Formatted as an institutional legal ledger in deep `#0B1F3A` with `#FAF7F0` and muted Slate text.
- Prominently showcases ARN (AMFI Registration Number), EUIN, and SEBI categorization disclosures.
- Mutual fund disclaimer displayed in an enclosed, low-contrast 1px border box (`regulatory-legal` typography) ensuring 100% regulatory compliance with effortless legibility.