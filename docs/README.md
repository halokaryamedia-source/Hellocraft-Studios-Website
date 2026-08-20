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
| `docs/foundation/` | durable project/product definition |
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

Owns current observable requirements, including communication, content, portfolio evidence, client acquisition, recruitment, quality, accessibility/compatibility requirements when later defined, and acceptance/proof boundaries.

Keep responsibilities together while one owner remains clear. Split only when a distinct durable responsibility actually appears.

## Foundation expansion gate

Create another Foundation file only when keeping the responsibility inside Overview or Requirements would mix distinct jobs, hide an independent contract, or make several project areas depend on unclear rules.

Possible future owners are **not pre-approved**. Architecture, content model, visual standard, SEO, analytics, security/privacy, deployment, or validation documents must be earned by actual project requirements.

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

The user will provide the project/portfolio list later. Until then, project inventory, project attribution, portfolio taxonomy, case-study model, services/capabilities taxonomy, final IA, visual direction, and technical architecture remain unresolved.

Do not create placeholder documents for those future topics.
