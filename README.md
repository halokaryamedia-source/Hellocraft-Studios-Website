# Hellocraft Studios Website

Official website project for **Hellocraft Studios**, a game studio focused on Minecraft.

## Current state

```text
FOUNDATION_BASELINE_ESTABLISHED
TECHNICAL_SCAFFOLD_SOURCE_CREATED
INFORMATION_ARCHITECTURE_APPROVED
PAGE_ARCHITECTURE_SOURCE_CREATED
CONTENT_SLOT_MODEL_READY
PORTFOLIO_CONTENT_PENDING
STUDIO_CONTENT_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED
HOSTING_DEFERRED
```

The repository now contains the route/page/content architecture so later work can focus primarily on inserting authoritative text, project data, and media rather than repeatedly redesigning structure.

## Route architecture

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

No dedicated Services page and no portfolio filters/categories are created initially.

## Content ownership

```text
src/lib/content/site.ts
→ identity + navigation

src/lib/content/pages.ts
→ page copy slots + optional/empty collections

src/lib/content/projects.ts
→ approved public projects only

src/lib/content/types.ts
→ shared content contracts
```

Pending copy uses searchable placeholders such as:

```text
[[HOME_HERO_TITLE]]
[[WORK_HERO_BODY]]
[[STUDIO_APPROACH_BODY]]
[[CAREERS_HERO_TITLE]]
[[CONTACT_INQUIRY_BODY]]
```

Do not replace placeholders with invented marketing copy or unsupported facts.

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
rendering              = static/prerender-first, server-where-needed
backend                = SvelteKit server only when needed
database               = none initially
```

## Current development boundary

The project owner currently wants **architecture/content preparation before local testing or hosting work**.

Therefore these remain deferred until explicitly reopened:

```text
bun install / bun.lock
bun run validate
local preview / browser dry-run
hosting/provider selection
production adapter
```

Do not fabricate runtime/build/deployment proof.

## Canonical documentation

```text
docs/foundation/01-project-overview.md
→ product purpose / audience / positioning

docs/foundation/02-product-requirements.md
→ product and technical requirements

docs/foundation/03-media-performance-policy.md
→ media/performance ownership

docs/foundation/04-visual-direction.md
→ Playful editorial game studio visual baseline

docs/foundation/05-discoverability-metadata-policy.md
→ metadata/discoverability policy

docs/foundation/07-information-content-architecture.md
→ route/page/content-slot architecture

docs/knowledge/content-intake-contract.md
→ evidence-safe content intake

docs/knowledge/next-action.md
→ active continuation
```

Working authority is branch **`Local`**.
