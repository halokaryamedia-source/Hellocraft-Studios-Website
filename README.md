# Hellocraft Studios Website

Official website project for **Hellocraft Studios**, a game studio focused on Minecraft.

## Current purpose

The website is intended to:

- present Hellocraft Studios clearly and credibly;
- show approved real work through a portfolio;
- help relevant visitors understand what Hellocraft can provide;
- support discoverability and client acquisition;
- provide business, collaboration, and recruitment paths when those product surfaces are defined.

## Current positioning

> **Hellocraft Studios is a game studio focused on Minecraft.**

This is the positioning baseline, not final homepage copy.

## Current project state

```text
FOUNDATION_BASELINE_ESTABLISHED
TECHNICAL_FOUNDATION_APPROVED
CONTENT_AGNOSTIC_SCAFFOLD_SOURCE_CREATED
BUN_INSTALL_AND_LOCK_PENDING
SCAFFOLD_VALIDATION_PENDING
PORTFOLIO_EVIDENCE_PENDING
PAGE_IMPLEMENTATION_NOT_READY
```

The repository now contains the minimal SvelteKit technical scaffold. It intentionally does **not** contain final page architecture, portfolio content, services taxonomy, navigation, or final visual design.

The first verified Bun install still needs to generate `bun.lock`, after which the mandatory technical gate must pass before the integration dry-run or page-specific implementation begins.

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

## Local commands

After Bun is available:

```bash
bun install
bun run dev
bun run validate
```

`bun run validate` is the mandatory non-mutating acceptance gate:

```text
format:check
→ lint
→ svelte-check
→ build
```

Do not treat `bun run format` or another source-mutating fixer as completion proof.

## Repository authority

- Working/development authority: `Local`.
- Do not silently use the repository default branch or another ref for current work.
- Durable product/technical policy belongs in `docs/foundation/`.
- Active continuation belongs in `docs/knowledge/next-action.md`.
- Stable cross-session orientation belongs in `CONTEXT.md`.
- Detailed task/skill routing belongs in `AGENTS.md`.

## Current documentation

```text
docs/foundation/01-project-overview.md
→ durable project purpose, audience, positioning, scope, and unknowns

docs/foundation/02-product-requirements.md
→ current website requirements, technical baseline, and negative requirements

docs/foundation/03-media-performance-policy.md
→ image/video/font ownership, delivery, and performance-proof policy

docs/knowledge/next-action.md
→ one active continuation point
```

Do not invent project content, services, product behavior, dependencies, or additional architecture merely to make the repository look complete.
