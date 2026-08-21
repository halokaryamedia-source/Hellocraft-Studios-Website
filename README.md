# Hellocraft Studios Website

Official website project for **Hellocraft Studios**, a game studio focused on Minecraft.

## Current project state

```text
TECHNICAL_SCAFFOLD_SOURCE_CREATED
INFORMATION_ARCHITECTURE_APPROVED
DEMO_CONTENT_MODE_ACTIVE
VISUAL_SOURCE_SYSTEM_IMPLEMENTED
SOURCE_ACCESSIBILITY_PASS_COMPLETED
REAL_CONTENT_AND_MEDIA_PENDING
LOCAL_RUNTIME_TESTING_DEFERRED
HOSTING_DEFERRED
```

The current priority is to prepare the complete website architecture/presentation first so final work is mostly replacing temporary text/data/media with approved Hellocraft content.

## Route architecture

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Primary navigation is `Work / Studio / Careers / Contact`. Home is reached through the Hellocraft brand.

## Development content

Temporary copy, Demo Projects, demo proof items, and demo career items are intentionally present for layout/design development.

They are **not** public Hellocraft facts.

The root layout displays a development-content notice and emits `noindex, nofollow` while `contentIsDemo` remains true.

Real public contact channels are not fabricated even in demo mode.

## Content owners

```text
src/lib/content/pages.ts
→ page copy

src/lib/content/projects.ts
→ project entries

src/lib/content/demo-data.ts
→ development-only proof/career collections

src/lib/content/site.ts
→ site identity/navigation
```

Final content should replace these owners without rewriting route structure unless real content proves a structural problem.

## Brand/media replacement surfaces

```text
src/lib/components/brand/BrandLockup.svelte
→ header/footer development lockup; future authoritative logo/wordmark owner

src/lib/components/brand/BrandSymbol.svelte
→ decorative development brand symbol

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ development project-media surface
```

## Technical baseline

```text
SvelteKit
Svelte 5 + TypeScript
Bun
Native CSS + scoped Svelte styles
CSS Custom Properties
@sveltejs/enhanced-img
Prettier + ESLint + svelte-check + build quality gate
static/prerender-first, server-where-needed
```

No Tailwind, SCSS, CSS-in-JS, component kit, CMS, database, auth, animation library, or separate backend is part of the initial architecture.

## Current deferred work

The project owner currently defers:

```text
bun install
bun.lock generation
bun run validate
local preview/browser tests
hosting/provider selection
production adapter selection
```

Do not claim build/browser/runtime acceptance until those are re-authorized and actually run.

## Documentation entrypoints

```text
CONTEXT.md
→ stable current orientation

docs/foundation/07-information-content-architecture.md
→ routes/content architecture

docs/foundation/04-visual-direction.md
→ visual direction

docs/knowledge/accessibility-source-audit.md
→ current source semantic/accessibility audit

docs/knowledge/next-action.md
→ immediate continuation
```
