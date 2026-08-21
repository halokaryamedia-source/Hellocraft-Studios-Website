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

The project owner selected **Blind Squirrel Games** as the primary external visual reference.

Current thesis:

> **Professional cinematic game studio** — confident, project-first, high-contrast, and restrained, while retaining Hellocraft's own cyan/logo identity and Minecraft focus.

Adopted source characteristics:

```text
oversized confident typography
numbered editorial progression
strong dark/light fields
large project surfaces
alternating project presentation
restrained cyan accent
minimal decorative UI around game work
```

Rejected generic patterns include split-hero decoration, uniform card grids, repeated star motifs, pill-heavy UI, fake KPI strips, glassmorphism, bento-by-default, and Minecraft inventory/pixel UI as site chrome.

Blind Squirrel is an inspiration reference, not a template. Do not copy its slogans, assets, exact layouts, branding, or project presentation verbatim.

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
technical foundation          = established
route architecture            = approved
content owner model           = approved
content replacement guide     = ready
dummy content mode            = active
Blind-Squirrel-inspired source= implemented
brand replacement surface     = ready
project media surface         = ready
real text/data/media          = pending
rendered visual acceptance    = deferred
hosting/runtime proof         = deferred
```

The project is now primarily a **content/media replacement + visual-review workflow**, not an architecture-planning workflow.
