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

## Approved visual direction

The project owner selected **Hazelight Studios** as the visual lead and **Blind Squirrel Games** as the structural/business reference.

Current thesis:

> **Professional Minecraft game studio** — cinematic, clean, confident, and game-first. Use Hazelight-style media confidence and restraint with Blind-Squirrel-style project/capability credibility, while retaining Hellocraft's own cyan/logo identity and Minecraft focus.

Adopted characteristics:

```text
concise confident hero statements
game/project media as primary visual evidence
large project surfaces where project evidence warrants them
content-led hierarchy rather than decorative systems
clear studio and capability credibility
minimal decorative UI around game work
restrained Hellocraft cyan accent
responsive layouts that simplify cleanly on mobile
```

Rejected patterns:

```text
numbered chapter progression
repeated editorial chapter treatments
uniform card grids when content hierarchy differs
fake KPI strips
glassmorphism / bento-by-default / pill-heavy UI
manufactured asymmetry
fake HUD / coordinates / inventory UI
Minecraft pixel UI as global site chrome
literal copying of Hazelight or Blind Squirrel layouts/assets
fabricated client, award, team-size, contact, or recruitment claims
```

## Accepted route baselines

The project owner has accepted the direction sufficiently to continue propagation through:

```text
Homepage
Work
Project Detail
Studio
```

Homepage remains the primary visual grammar. Work, Project Detail, and Studio are route-specific interpretations of that grammar.

Do not redesign accepted routes from model taste while finishing the remaining pages.

## Current Careers state

`src/routes/careers/+page.svelte` has now been visually propagated.

Current Careers composition:

```text
restrained Careers introduction
→ studio/culture statement on neutral secondary surface
→ compact Open roles section
→ approved real openings render as editorial rows
→ simple How to apply closing
```

Important publication safety:

```text
contentIsDemo = true
→ demoCareerOpenings remain development data only
→ demo roles are NOT rendered as public vacancies
→ Careers shows the approved empty state instead
```

Careers is implemented and pending project-owner visual approval.

Contact remains the only route not yet visually propagated.

## Brand / content state

The current Hellocraft logo supplied by the project owner is authoritative brand evidence, but the production vector/original asset is still pending.

Current source uses temporary development copy and demo project/career/proof data so presentation can be developed before final content arrives.

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
→ site identity, navigation, approved public/social/contact values

src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
→ authoritative logo replacement surface

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ development media surface; replace/extend with real project media later
```

The route/content architecture should remain stable while final text/data/media replaces these owners.

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

Source-level accessibility foundations are present. Rendered keyboard, reflow, contrast, final visual hierarchy, build, and performance proof remain pending.

## Current project-owner boundary

The project owner explicitly deferred:

```text
bun install
bun.lock generation
bun run validate
full local runtime/browser acceptance
hosting/provider selection
production adapter selection
```

Do not repeatedly push those as the active next step until explicitly re-authorized.

## Current maturity state

```text
technical foundation                 = established
route architecture                   = approved
content owner model                  = approved
content replacement guide            = ready
dummy content mode                   = active
Hazelight + Blind Squirrel direction = approved
Homepage visual baseline             = APPROVED
Work visual baseline                 = APPROVED
Project Detail direction             = accepted to continue
Studio direction                     = accepted to continue
Careers visual propagation           = implemented / review-ready
Contact visual propagation           = pending
brand replacement surface            = ready
real text/data/media                 = pending
hosting/runtime proof                = deferred
```

The project is now primarily a **finish route propagation → production content/media → final QA/deployment workflow**, not an architecture-planning or visual-direction-discovery workflow.
