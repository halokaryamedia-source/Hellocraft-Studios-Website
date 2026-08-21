# Hellocraft Studios Website — Current Context

Stable orientation for the Hellocraft Studios Website on branch `Local`.

Active continuation belongs in `docs/knowledge/next-action.md`; durable project meaning belongs in `docs/foundation/`; detailed work routing belongs in `AGENTS.md`.

## Product identity

Hellocraft Studios is a **game studio focused on Minecraft**.

The website is the studio's official web presence. Its current approved purposes are:

- company profile / official studio identity;
- portfolio / proof of work;
- discoverability and client acquisition;
- helping relevant visitors understand what Hellocraft can provide;
- recruitment/careers when real openings or application context exist.

## Current route architecture

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

A dedicated Services route and Work filters/categories are intentionally absent initially.

## Current visual direction

The project owner selected **Hazelight Studios** as the visual lead and **Blind Squirrel Games** as the structural/business reference for the Homepage direction.

Current thesis:

> **Professional Minecraft game studio** — cinematic, clean, confident, and game-first. Use Hazelight-style media confidence and restraint with Blind-Squirrel-style project/capability credibility, while retaining Hellocraft's own cyan/logo identity and Minecraft focus.

Adopted source characteristics:

```text
concise confident hero statement
game/project media as immediate visual evidence
large project surfaces
varied project composition rather than uniform cards
strong but restrained dark/light contrast
clear studio and capability credibility
minimal decorative UI around game work
restrained Hellocraft cyan accent
```

Rejected generic/reference-copy patterns include split-hero decoration, numbered chapter progression, repeated editorial chapter treatments, uniform card grids, repeated star motifs, pill-heavy UI, fake KPI strips, glassmorphism, bento-by-default, manufactured asymmetry, and Minecraft inventory/pixel UI as site chrome.

Hazelight and Blind Squirrel are inspiration references, not templates. Do not copy their slogans, assets, exact layouts, branding, numbering systems, or project presentation verbatim.

## Brand / content state

The current Hellocraft logo supplied by the project owner is authoritative brand evidence, but the production vector/original asset is still pending.

Current source uses temporary development copy and explicit Demo Project / demo careers / demo proof data so the full site presentation can be developed before final content arrives.

```text
contentIsDemo = true
```

While demo mode remains active, the site retains a development notice and `noindex, nofollow` guard.

Real public contact channels are not fabricated.

## Content replacement owners

```text
src/lib/content/pages.ts
→ Home / Work / Studio / Careers / Contact / footer copy

src/lib/content/projects.ts
→ project list/detail data

src/lib/content/demo-data.ts
→ temporary proof and careers data

src/lib/content/site.ts
→ site identity, navigation, approved public/social links

src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
→ authoritative logo replacement surface

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ development media surface; replace/extend with real project media later
```

The architecture is now intended to remain stable while final text/data/media replaces these owners.

## Approved technical baseline

```text
full-stack framework = SvelteKit
UI/runtime language   = Svelte 5 + TypeScript
Svelte convention     = modern runes-first
package manager       = Bun
styling               = native CSS + Svelte scoped styles
shared design tokens  = CSS Custom Properties
quality gate          = Prettier + ESLint + svelte-check + SvelteKit/Vite build
local raster pipeline = Vite imports + @sveltejs/enhanced-img
architecture          = static/prerender-first, server-where-needed
backend boundary      = SvelteKit server functionality when required
separate backend      = none initially
database              = none initially
```

## Media / performance baseline

Canonical owner:

```text
docs/foundation/03-media-performance-policy.md
```

Current approved direction:

- imported/local application assets by default;
- `@sveltejs/enhanced-img` for responsive local raster media when useful;
- real LCP images must not be lazy-loaded;
- below-fold media may use native lazy loading;
- project crops/focal points are decided from real media;
- video is poster-first/user-initiated by default;
- self-hosted WOFF2 fonts, minimal families/weights;
- no heavy WebGL/3D/particle dependency without strong evidence;
- performance measured later from built/browser output.

## Validation / accessibility state

Project-specific visual specialist:

```text
web-ui-design-development
```

Support/evidence skills:

```text
context7-documentation-validation
svelte-development-validation
web-accessibility-validation
chrome-devtools-validation
```

Source-level accessibility review has already hardened headings, focus intent, reflow guards, demo media semantics, and demo noindex behavior.

Rendered keyboard, reflow, contrast, visual hierarchy, build, and performance proof remain pending.

## Current project-owner boundary

The project owner explicitly deferred:

```text
bun install
bun.lock generation
bun run validate
local runtime/browser acceptance
hosting/provider selection
production adapter selection
```

Do not repeatedly push those as the active next step until explicitly re-authorized.

## Current maturity state

```text
technical foundation                    = established
route architecture                      = approved
content owner model                     = approved
content replacement guide               = ready
dummy content mode                      = active
Hazelight + Blind Squirrel direction    = approved
Homepage source redesign                = implemented for review
brand replacement surface               = ready
project media surface                   = ready
real text/data/media                    = pending
Homepage rendered visual acceptance     = pending
remaining-route visual propagation      = blocked until Homepage approval
hosting/runtime proof                   = deferred
```

The project is now primarily a **Homepage visual-review → content/media replacement workflow**, not an architecture-planning workflow.
