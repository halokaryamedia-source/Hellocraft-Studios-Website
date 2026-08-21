# Hellocraft Studios Website — Current Context

Stable orientation for the Hellocraft Studios Website on branch `Local`.

Active continuation belongs in `docs/knowledge/next-action.md`; durable project meaning belongs in `docs/foundation/`; detailed work routing belongs in `AGENTS.md`.

## Product identity

Hellocraft Studios is a **game studio focused on Minecraft**.

The website is the studio's official web presence. Its approved purposes are:

- company profile / official identity;
- portfolio / proof of work;
- discoverability and client acquisition;
- helping visitors understand what Hellocraft can provide;
- recruitment/careers when real openings exist.

## Canonical public route architecture

Use standard public page names. Do not introduce unusual navigation labels merely for style.

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Primary navigation:

```text
Portfolio
About
Careers
Contact
```

The Hellocraft logo links to Home, so `Home` does not need a separate primary-navigation item.

Legacy routes remain only for compatibility:

```text
/work          → /portfolio
/work/[slug]   → /portfolio/[slug]
/studio        → /about
```

Public terminology decision:

```text
Work   → Portfolio
Studio → About
```

`Hellocraft Studios` remains the company/brand name; only the page/navigation terminology was normalized.

A dedicated Services route and Portfolio filters/categories are intentionally absent initially.

## Approved visual direction

Reference roles:

```text
Hazelight Studios
→ visual lead
→ game-first confidence
→ media prominence
→ restraint / whitespace / typography behavior

Blind Squirrel Games
→ structural/business reference
→ company credibility
→ project + capability communication
→ client-facing game-development professionalism
```

Current thesis:

> **Professional Minecraft game studio** — cinematic, clean, confident, and game-first. Use media confidence and restraint with clear project/capability credibility, while retaining Hellocraft's cyan/logo identity and Minecraft focus.

Adopted characteristics:

```text
concise confident hero statements
game/project media as primary visual evidence
large project surfaces where evidence warrants them
content-led hierarchy rather than decorative systems
clear About / capability credibility
minimal decorative UI
restrained Hellocraft cyan accent
responsive layouts that simplify cleanly on mobile
```

Rejected patterns:

```text
numbered chapter progression
repeated editorial chapter treatments
uniform card grids when hierarchy differs
fake KPI strips
glassmorphism / bento-by-default / pill-heavy UI
manufactured asymmetry
fake HUD / coordinates / inventory UI
Minecraft pixel UI as global site chrome
literal copying of reference layouts/assets
fabricated client, award, team-size, contact, or recruitment claims
unusual public page names where standard labels are clearer
```

## Approved route baselines

The project owner approved/accepted the completed route-level visual system:

```text
Home
Portfolio
Project Detail
About
Careers
Contact
```

Home remains the primary visual grammar. Other routes are route-specific interpretations of it.

Route-level visual discovery is now **closed**. Do not casually redesign accepted routes from model taste.

Real media may later justify bounded crop/proportion/spacing corrections, but should not automatically reopen the visual direction.

## Production content phase

The project is in **production content/media intake and replacement**.

Canonical production inventory:

```text
docs/knowledge/production-content-inventory.md
```

Operational intake contract:

```text
docs/knowledge/content-intake-contract.md
```

Replacement guide:

```text
docs/knowledge/content-replacement-guide.md
```

Core rule:

```text
record all supplied material first
→ verify evidence
→ separate publication permission from truth
→ record unknowns/conflicts
→ only then choose what appears publicly
```

`not used` does not mean `not recorded`.

## Current production evidence state

The website repository has been audited.

Current asset inventory contains only development brand raster assets:

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

The repository currently does **not** contain real project screenshots/renders/video.

Current project, proof, careers, and page-text content remains development/demo content.

Current public channel state:

```text
contactMethods = []
socialLinks    = []
```

Sibling repositories under the same GitHub owner are not automatically publishable portfolio evidence. Project identity, Hellocraft contribution, client relationship, and publication permission must still be established through intake.

## Brand / content state

The current Hellocraft logo is accepted as development brand evidence, but the production vector/original asset is still pending.

```text
contentIsDemo = true
```

While demo mode remains active, the site retains a development notice and `noindex, nofollow` guard.

Real public contact channels are not fabricated.

## Content replacement owners

```text
src/lib/content/pages.ts
→ Home / Portfolio / About / Careers / Contact / footer copy

src/lib/content/projects.ts
→ project list/detail data

src/lib/content/demo-data.ts
→ temporary proof and careers data

src/lib/content/site.ts
→ identity, navigation, approved public/social/contact values

src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
→ authoritative logo replacement surface

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ development media surface; replace/extend with real project media later
```

The content architecture should remain stable while final text/data/media replaces these owners.

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
- no heavy WebGL/3D/particle dependency without strong evidence.

## Validation / accessibility state

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
canonical public naming              = Portfolio / About / Careers / Contact
route architecture                   = approved
legacy route redirects               = established
content owner model                  = approved
content replacement guide            = ready
Hazelight + Blind Squirrel direction = approved
route-level visual system            = APPROVED / FROZEN
production content inventory         = established
website production evidence audit    = completed
real portfolio facts                 = pending authoritative sources
real project media                   = pending authoritative sources
final public copy                    = pending
real contact/social channels         = pending
real current careers                 = pending if applicable
production brand / typography        = pending
responsive/accessibility/perf QA     = pending
hosting/runtime proof                = deferred
```

The project is now primarily a **production content/media intake → replacement → final QA/deployment workflow**.
