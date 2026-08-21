# Hellocraft Studios Website — Current Context

Stable orientation for branch `Local`.

Active continuation belongs in `docs/knowledge/next-action.md`; durable project meaning belongs in `docs/foundation/`; detailed task routing belongs in `AGENTS.md`.

## Product identity

Hellocraft Studios is a **game studio focused on Minecraft**.

The official website is intended to provide:

- clear studio/company identity;
- portfolio/proof of work;
- client discoverability/acquisition;
- collaboration and recruitment paths;
- an experience understandable to both Minecraft-native and non-Minecraft-native visitors.

Priority:

```text
clarity + credibility + real evidence + useful client path
+
strong visual quality + lightweight delivery
>
feature breadth + decorative complexity
```

## Approved route architecture

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Primary navigation:

```text
Work
Studio
Careers
Contact
```

Home is accessed through the Hellocraft brand/logo.

No dedicated Services route and no portfolio filters/categories are part of the initial architecture. They are added only if real content later proves them useful.

Canonical owner:

```text
docs/foundation/07-information-content-architecture.md
```

## Current content mode

The project owner explicitly approved temporary dummy content so website presentation can be built before final text/data/media arrives.

Current source contains:

```text
src/lib/content/pages.ts
→ temporary development copy

src/lib/content/projects.ts
→ clearly-labelled Demo Project entries

src/lib/content/demo-data.ts
→ demo proof + demo career items

src/lib/content/demo.ts
→ contentIsDemo = true

src/lib/content/demo-copy.ts
→ visible development-content notice
```

Dummy content is never portfolio/company evidence. Fake clients, metrics, testimonials, real-looking contact channels, or live hiring claims must not be created.

While demo mode is active the root layout emits `noindex, nofollow`.

Real content later enters through `docs/knowledge/content-intake-contract.md`.

## Current visual direction

Canonical baseline:

> **Playful editorial game studio**

Source direction currently uses:

```text
warm-white canvas
+ near-black structural sections
+ temporary Hellocraft cyan accent
+ large editorial typography
+ restrained star/brand motifs
+ large project-media surfaces
+ CSS-native interaction/motion
```

The logo supplied by the project owner is authoritative brand evidence. The current cyan and CSS star are development approximations only until the authoritative original/vector logo source is supplied.

Canonical owner:

```text
docs/foundation/04-visual-direction.md
```

Current visual source implementation covers Header, Footer, Home, Work, Project Detail, Studio, Careers, and Contact.

## Brand/media replacement surfaces

Current source centralizes development placeholders so real assets do not require route rewrites:

```text
src/lib/components/brand/BrandLockup.svelte
→ current development header/footer lockup
→ future authoritative wordmark/logo replacement owner

src/lib/components/brand/BrandSymbol.svelte
→ current decorative brand-symbol placeholder

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ current development project-media placeholder
→ must be replaced/extended when real project assets arrive
```

Development media placeholders are decorative and hidden from assistive technology. Real content-bearing project images/video must receive semantics based on the actual media.

## Approved technical baseline

```text
framework              = SvelteKit
UI/runtime             = Svelte 5 + TypeScript
Svelte convention      = modern runes-first
package manager        = Bun
styling                = native CSS + Svelte scoped styles
shared tokens          = CSS Custom Properties
quality gate           = bun run validate
local raster pipeline  = @sveltejs/enhanced-img
architecture           = static/prerender-first, server-where-needed
backend                = SvelteKit server only when needed
separate backend       = none initially
database               = none initially
```

No Tailwind, SCSS, CSS-in-JS, component library, animation library, CMS, database, auth, analytics, image CDN, or media CDN is part of the initial baseline.

## Media/performance baseline

Canonical owner:

```text
docs/foundation/03-media-performance-policy.md
```

Key rules:

- application-referenced local assets use imported/Vite-processed ownership by default;
- `static/` is for stable passthrough URLs only;
- local responsive raster media may use `@sveltejs/enhanced-img`;
- LCP media is not lazy-loaded;
- below-fold media uses native lazy loading when appropriate;
- video is poster-first and user-initiated by default;
- webfonts are self-hosted WOFF2 when licensed/selected;
- permanent byte budgets are calibrated after representative real media exists.

## Accessibility source state

Current source follows native HTML landmarks/controls, has a skip link, `lang="en"` for current English development copy, reduced-motion handling, explicit focus treatment, and semantic heading correction for project cards.

Current audit owner:

```text
docs/knowledge/accessibility-source-audit.md
```

This is source evidence only. Browser keyboard behavior, computed contrast, zoom/reflow, assistive-technology behavior, and rendered accessibility remain unproven while runtime testing is deferred.

## Current project-owner deferrals

The project owner currently does **not** want the following work run/prioritized:

```text
bun install
bun.lock generation
bun run validate
local preview
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Do not repeatedly push these as the active next step until explicitly re-authorized.

Hosting research already exists but is inactive and non-authoritative for current work.

## Real content still pending

Still awaiting authoritative owner-supplied data:

- real Portfolio/Project inventory and media;
- final Studio/About facts and copy;
- real public contact channels;
- real Careers/opening information;
- authoritative logo/vector/brand files;
- exact final typography and production brand values.

Do not recover old conversation project names and treat them as portfolio authority.

## Current development state

```text
technical scaffold source       = created
information architecture         = approved + implemented
content-owner architecture       = implemented
clearly-labelled dummy content   = populated
visual source system             = implemented
source accessibility audit       = completed/current pass
brand replacement surface        = ready
project-media placeholder owner  = ready
runtime/build acceptance          = deferred/unproven
hosting                            = deferred
real public content               = pending
```

Use `docs/knowledge/next-action.md` for the immediate continuation.
