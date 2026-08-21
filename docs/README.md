# Documentation Architecture

Current documentation ownership for the Hellocraft Studios Website.

## Principle

```text
real current responsibility
→ one current owner

no current responsibility
→ no file
```

Git history owns ordinary historical versions. Current files describe current truth.

## Layers

| Layer | Responsibility |
|---|---|
| `README.md` | human project entrypoint |
| `CONTEXT.md` | stable cross-session orientation |
| `docs/foundation/` | durable project/product/technical/design architecture |
| `docs/knowledge/` | current operational evidence, audits, references, and continuation |
| `.agents/skills/` | reusable project development/validation procedures |
| `src/` | current website source behavior/presentation |

## Current Foundation owners

```text
docs/foundation/01-project-overview.md
→ purpose, positioning, audience, scope, evidence boundaries

docs/foundation/02-product-requirements.md
→ observable product/technical requirements and acceptance boundaries

docs/foundation/03-media-performance-policy.md
→ asset/media ownership, image/video/font delivery, performance proof

docs/foundation/04-visual-direction.md
→ durable Playful Editorial Game Studio art-direction baseline

docs/foundation/05-discoverability-metadata-policy.md
→ title/meta/canonical/sitemap/robots/structured-data rules

docs/foundation/06-deployment-production-requirements.md
→ provider-neutral future deployment requirements; hosting track currently deferred

docs/foundation/07-information-content-architecture.md
→ routes, navigation, page responsibilities, demo-content boundary, content-source ownership
```

## Current Knowledge owners

```text
docs/knowledge/next-action.md
→ active continuation and current deferred/ready state

docs/knowledge/frontend-reference-inventory.md
→ complete supplied frontend/design reference audit

docs/knowledge/content-intake-contract.md
→ authoritative content evidence/publication/editorial intake rules

docs/knowledge/visual-source-implementation.md
→ current source-level visual implementation notes

docs/knowledge/accessibility-source-audit.md
→ current non-runtime semantic/accessibility source audit

docs/knowledge/deployment-provider-comparison.md
→ time-sensitive provider research only; not current hosting authority
```

Do not create generic worklogs/backlogs/review archives as parallel owners.

## Current implementation boundary

The project owner currently wants:

```text
architecture + presentation first
→ temporary clearly-labelled demo content allowed
→ real text/data/media later
```

The project owner currently defers:

```text
local/runtime testing
bun install / bun.lock generation
browser acceptance
hosting/provider selection
production adapter selection
```

Source-level work may continue where correctness can be established from current project authority and source inspection. Do not relabel source inspection as build/browser/runtime proof.

## Demo-content rule

Temporary demo content may be used to shape layout only when it is clearly separated from real Hellocraft evidence.

Real-looking clients, metrics, testimonials, public contact details, or other factual claims must never be fabricated.

`contentIsDemo = true` remains the publication guard until real public content replaces development content.
