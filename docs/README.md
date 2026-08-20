# Documentation Architecture

This file owns the documentation structure and readiness rules for the Hellocraft Studios Website.

## Principle

```text
real current responsibility
→ one current owner

no current responsibility
→ no file
```

Current documentation describes current truth. Git history owns ordinary historical versions.

## Layers

| Layer | Responsibility |
|---|---|
| `README.md` | human project entrypoint |
| `CONTEXT.md` | compact stable cross-session orientation |
| `docs/foundation/` | durable project/product/technical definition |
| `docs/knowledge/` | current development navigation/continuation |
| `.agents/skills/` | reusable project-definition/development procedures |
| source | actual website behavior once implementation exists |

## Current Foundation owners

### `docs/foundation/01-project-overview.md`

Owns:

- what the website is for;
- studio positioning;
- audiences;
- current scope/non-goals;
- source/evidence boundaries;
- success boundary;
- high-impact unknowns.

### `docs/foundation/02-product-requirements.md`

Owns current observable requirements, including communication, content, portfolio evidence, client acquisition, recruitment, quality, accessibility/compatibility requirements when later defined, the approved core stack/quality gate, and acceptance/proof boundaries.

### `docs/foundation/03-media-performance-policy.md`

Owns the durable technical contract for:

- imported/build-processed assets versus `static/` passthrough assets;
- local responsive raster-image delivery;
- `@sveltejs/enhanced-img` usage boundary;
- image loading/crop/layout-stability rules;
- video poster/preload/autoplay rules;
- font hosting/format/loading rules;
- media performance measurement and later budget calibration.

This owner is justified because media delivery is a recurring independent technical responsibility for a visual studio portfolio and cannot remain a short paragraph inside general Product Requirements without hiding implementation/acceptance rules.

## Foundation expansion gate

Create another Foundation file only when keeping the responsibility inside an existing owner would mix distinct jobs, hide an independent contract, or make several project areas depend on unclear rules.

Possible future owners are **not pre-approved**. Content model, final visual standard, SEO, analytics, security/privacy, deployment, or other architecture documents must be earned by actual project requirements.

## Knowledge navigation

`docs/knowledge/next-action.md` is the only baseline Knowledge owner.

Add another Knowledge owner only if a real cross-session navigation problem exists that Foundation/source/next-action cannot answer cleanly.

Do not create generic backlog, worklog, completion-report, session-memory, review archive, roadmap, or TODO documents as parallel current owners.

## Documentation readiness

Before non-trivial implementation, verify at minimum that the affected scope has:

- clear purpose and primary audience;
- enough authoritative content/evidence to avoid invention;
- current scope and exclusions;
- observable requirements;
- material content/information flow decisions required before implementation;
- quality and acceptance requirements;
- any architecture, data, privacy, integration, or operational decision that genuinely constrains implementation;
- no unresolved high-impact decision that would force the developer to invent product meaning.

If a required responsibility is undefined:

```text
DO NOT IMPLEMENT THAT BEHAVIOR
→ return to Project Definition
→ resolve/update Foundation
→ re-check readiness
```

## Current Hellocraft boundary

The user will provide the project/portfolio list later. Until then, project inventory, project attribution, portfolio taxonomy, case-study model, services/capabilities taxonomy, final IA, and final visual direction remain unresolved.

The content-agnostic technical foundation now has approved SvelteKit/Bun/TypeScript, Svelte 5, native CSS/token, quality-gate, and media/performance policies. That is sufficient to create and validate the **minimal technical scaffold only**. It does not authorize inventing page content, portfolio structure, final navigation, or final art direction.
