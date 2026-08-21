# Visual Direction

Canonical visual-direction baseline for the Hellocraft Studios Website.

This file owns durable art-direction rules. Product meaning remains in Product Requirements, media delivery remains in `03-media-performance-policy.md`, and rendered acceptance remains owned by `web-ui-design-development` plus browser proof when later authorized.

## Status

```text
VISUAL_DIRECTION_BASELINE_ESTABLISHED
BLIND_SQUIRREL_PRIMARY_REFERENCE_ADOPTED
PROFESSIONAL_GAME_STUDIO_DIRECTION_ADOPTED
PROJECT_FIRST_MEDIA_DIRECTION_ADOPTED
HELLOCRAFT_BRAND_IDENTITY_RETAINED
HELLOCRAFT_SIGNATURE_GRAMMAR_ADOPTED
EDITORIAL_RAIL_ADOPTED
CUT_CORNER_MEDIA_LANGUAGE_ADOPTED
CYAN_STRUCTURAL_RAIL_ADOPTED
AI_GENERIC_LANDING_PAGE_PATTERNS_REJECTED
EXACT_PRODUCTION_VALUES_NOT_FINAL
RENDERED_VISUAL_ACCEPTANCE_PENDING
```

## Primary visual thesis

> **Professional cinematic game studio with a Hellocraft-specific structural identity** — confident, project-first, technically credible, and visually restrained enough for publishers/partners/brands while retaining Hellocraft's own approachable Minecraft identity.

Hellocraft must feel like a serious game-development studio, not a SaaS/creative-agency landing page with Minecraft images added afterward.

## Primary external reference

The project owner selected **Blind Squirrel Games** as the primary external visual reference.

Use it as evidence for:

- confident oversized studio typography;
- project/media-first presentation;
- numbered editorial page progression;
- strong dark/light contrast;
- straightforward service/studio communication;
- professional game-industry tone;
- restrained interface decoration around visually rich game work.

Do **not** copy Blind Squirrel's logo, slogans, page layouts, project naming, visual assets, trademark language, or exact component styling. Hellocraft identity remains authoritative.

## Hellocraft brand anchor

The supplied Hellocraft logo remains the primary brand evidence.

Observed characteristics:

```text
palette      → cyan + white + charcoal/black
symbol       → star containing a hand motif + small star accents
wordmark     → chunky, irregular, friendly uppercase lettering
personality  → energetic, approachable, game-oriented
```

Translate those characteristics with restraint. The logo can remain expressive while the surrounding UI becomes more mature and structured.

## Hellocraft-specific signature grammar

The site must not depend on Blind Squirrel-like studio conventions alone. Hellocraft needs its own repeatable grammar.

### Editorial rail

Major sections may use a narrow structural metadata rail beside the main content area.

The rail carries small section/index labels and a cyan rule. Its purpose is hierarchy and continuity, not decoration.

```text
section number / label
│ cyan structural line
│
└→ primary content field
```

On narrow screens the vertical rail may collapse into a horizontal metadata row.

### Cut-corner media frame

Important project/media surfaces may use restrained diagonal cuts on selected corners rather than generic rounded cards.

This geometry is an abstraction of angular transitions in the Hellocraft star mark, not a literal repetition of the star.

Use it mainly for important media surfaces. Do not apply the cut to every control/text block.

### Cyan structural rail

Hellocraft cyan should often appear as a narrow structural signal:

- rail;
- active line;
- project metadata rule;
- selected edge;
- small interaction emphasis.

Large cyan fields require a stronger content/hierarchy reason.

### Surface language

Prefer:

```text
hard / near-square edges
thin rules
warm neutral canvas
near-black fields
cut media corners
cyan structural accents
```

This signature layer differentiates Hellocraft from a generic professional-game-studio template while preserving the maturity learned from Blind Squirrel.

## Adopted composition language

Prefer:

```text
large decisive headline
→ concise supporting copy
→ cinematic media surface
→ editorial project sequence
→ disciplined studio/capability explanation
→ restrained proof
→ strong closing contact surface
```

Use:

- substantial whitespace rather than decorative filler;
- large real project media once assets exist;
- alternating or editorial project compositions rather than uniform card grids;
- thin rules and numbered section markers for structure;
- full-width dark/light fields when they clarify hierarchy;
- small amounts of cyan for brand emphasis, not entire-page coloring;
- square/near-square edges and restrained radii rather than rounded-everything styling.

## Rejected AI-generic patterns

Do not default to:

- split hero with decorative shape on the right merely because the layout feels balanced;
- generic centered hero + two CTA buttons;
- equal three-card feature grids;
- capability rows made from four decorative icons unless real content specifically earns that pattern;
- fake KPI/metric strips merely to look corporate;
- pill navigation and pill controls everywhere;
- repeated star decoration in every section;
- large cyan blocks without a hierarchy/content reason;
- bento grids without a real content relationship;
- glassmorphism, glow, mesh gradients, or neon gaming UI;
- Minecraft inventory/pixel UI as global site chrome;
- stock illustrations competing with real Minecraft/project work.

## Typography

Typography should feel confident and game-industry professional.

Direction:

- display headlines may be very large and compact;
- display rhythm should use short line lengths and strong line-height;
- body copy remains neutral and easy to read;
- navigation/metadata uses compact uppercase or structured labels when useful;
- the Hellocraft wordmark remains the most playful typographic asset;
- avoid cartoon/pixel fonts as the website default;
- avoid typography mixing merely to manufacture editorial sophistication.

Exact production fonts remain unresolved until licensing, WOFF2 cost, actual rendering, and logo fit are reviewed.

## Color

Use a restrained structural palette:

```text
near-black
warm off-white / neutral surface
Hellocraft cyan
real project imagery
```

Rules:

- dark/neutral fields carry most structural contrast;
- cyan is primarily an accent, rule, small marker, interaction detail, or selected brand field;
- project imagery supplies most secondary color richness;
- do not invent a multi-color UI palette before real need exists;
- exact cyan must later come from authoritative brand/vector assets, not the compressed conversation raster.

## Brand motif

The Hellocraft symbol should be used sparingly.

Default rule:

```text
logo / brand lockup
+ rare deliberate signature use
> repeated decorative star pattern
```

Do not attach a star to every heading, project card, CTA, footer item, or section marker.

## Project presentation

Projects are the primary credibility surface.

Prefer:

- large media frames;
- project title and summary with clear hierarchy;
- small metadata/category/client/year only when real and useful;
- sequence/number markers as navigation rhythm rather than decorative badges;
- alternating editorial composition when it improves pacing;
- flexible project detail pages capable of both short showcases and deeper cases.

Do not force every project into identical card proportions/content amounts.

## Studio / capabilities

Capability communication should feel direct and confident.

Prefer text hierarchy, lists, or editorial grouping over generic icon-feature cards. A dedicated Services route remains unnecessary unless real content later proves it useful.

## Proof

Proof must come from real evidence.

Until real metrics/testimonials/clients exist, development-only proof may exercise layout but must remain clearly demo. The final site should not keep a KPI strip merely because it looks professional.

## Interaction and motion

Motion character:

```text
fast
controlled
subtle
functional
```

Use motion for feedback and continuity. Avoid ambient floating, constant parallax, custom cursors, or spectacle without a product reason.

Native CSS/Svelte/browser behavior remains first choice. Respect reduced-motion preferences.

## Responsive direction

Responsive layout should preserve hierarchy rather than shrink desktop composition.

- large type scales down deliberately;
- alternating project layouts collapse to clear reading order;
- navigation may simplify but must remain understandable and keyboard-operable;
- project imagery remains dominant without clipping important content;
- no horizontal document scrolling for normal reading;
- hover is never required to reveal essential information.

## Accessibility direction

- native semantic structure first;
- visible keyboard focus;
- sufficient contrast in actual final palette;
- decorative brand/media placeholders remain hidden from duplicate announcement;
- real project media receives real content-aware alternatives later;
- reduced-motion behavior preserves all tasks/information.

## Implementation boundary

Use the approved native stack:

```text
Svelte 5 / SvelteKit
TypeScript
native scoped CSS
CSS Custom Properties
```

Do not install a component library, styling framework, or motion library merely to reproduce reference aesthetics.

## Production values still unresolved

Still waiting for real evidence/rendered approval:

- authoritative vector logo variants;
- exact brand cyan and supporting neutrals;
- production font family/weights;
- final image crops/focal points;
- final media assets;
- exact spacing values after rendered review;
- actual client/project proof;
- final browser visual acceptance.

## Proof boundary

This document establishes visual intent and prevents generic drift. It does not prove the implementation looks correct in a browser. Rendered acceptance remains pending until local/runtime/browser work is re-authorized by the project owner.
