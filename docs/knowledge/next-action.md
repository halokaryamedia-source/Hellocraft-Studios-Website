# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
PORTFOLIO_EVIDENCE_DEFERRED
STUDIO_PROFILE_DEFERRED
FRONTEND_TECHNICAL_PLANNING_ACTIVE
SVELTEKIT_FRONTEND_APPROVED
WEB_UI_DESIGN_SPECIALIST_READY
FRONTEND_SKILL_BASELINE_READY
SERVICES_TAXONOMY_NOT_DEFINED
INFORMATION_ARCHITECTURE_NOT_DEFINED
VISUAL_DIRECTION_NOT_DEFINED
TECHNICAL_ARCHITECTURE_PARTIAL
NOT DEVELOPMENT READY
```

Working authority: **`Local`**.

## Completed definition

Current approved baseline:

- Hellocraft Studios is a **game studio focused on Minecraft**.
- The website serves company-profile, portfolio, discoverability/client-acquisition, and client-understanding purposes.
- Primary audiences are Marketplace publishers/partners, server/platform operators, brands seeking Minecraft experiences, and public/cultural/event clients including museums, galleries/exhibitions, and festivals.
- Collaboration audiences include Minecraft creators, publishers, agencies, and production partners.
- Recruitment is important; current talent scope includes builders/level-design talent, developers, and 3D art/modeling/texturing/animation talent.
- General visitors include Minecraft players, creators, and community members.
- The site must communicate clearly to both Minecraft-native and non-Minecraft-native visitors.
- Industry studio websites are reference evidence only; Hellocraft must not inherit their claims/taxonomy automatically.
- **SvelteKit is the approved frontend framework.**

## Corrected planning boundary

Earlier speculative service structures were rejected.

Do not currently lock:

- Adventure Map / Minigame / Multiplayer as separate services;
- Marketplace / Server / Brand / Event as separate services;
- Game Development / Level Design / 3D Art as automatic top-level service cards;
- World Building as a peer service separate from Level Design;
- a dedicated Services page;
- final Home / Work / About / Careers / Contact navigation merely because it is common in reference sites.

These may become useful later only if real Hellocraft evidence supports them.

## Content definition — deferred by project owner

The project owner has explicitly chosen to postpone both:

- Project & Evidence Inventory / portfolio content;
- Studio Profile / About content.

These remain required before their dependent public claims and final page content are locked, but they are **not blockers for frontend technical planning that can be made independently of those contents**.

Do not fill either area from old chats, MIVUBI history, client history, or assumptions.

## Frontend skill baseline

The uploaded/frontend reference set has been fully inventoried in `docs/knowledge/frontend-reference-inventory.md`.

A single project-specific visual specialist owns the recurring visual frontend boundary:

```text
.agents/skills/web-ui-design-development/SKILL.md
```

It consolidates reference-grounded design, Design DNA decomposition, Genjutsu establish-vs-align thinking, Taste anti-generic judgment, motion-design principles, mature design-system research, responsive/accessibility craft, and source-vs-rendered proof discipline.

It remains intentionally separate from framework architecture. Selecting SvelteKit does not turn the visual specialist into a generic Svelte expert.

Normal frontend engineering uses `development-brief` alone. Visual frontend work uses:

```text
development-brief
+
web-ui-design-development
```

## Approved frontend framework boundary

**SvelteKit is selected.**

This does not yet decide:

- exact Svelte/SvelteKit versions;
- TypeScript/project-language conventions;
- rendering strategy (prerender/static, SSR, hybrid);
- adapter/hosting provider;
- styling system;
- UI/component library;
- animation dependency;
- CMS;
- analytics/forms.

Those decisions must be curated separately and should use SvelteKit's native capabilities before adding dependencies.

## Current safe continuation — SvelteKit frontend foundation

The next technical work is not page implementation. First curate the smallest SvelteKit development/tooling baseline that will govern future coding.

Evaluate:

- Svelte/SvelteKit project conventions that materially prevent recurring errors;
- whether TypeScript is the project default;
- formatter/linter/type-checking setup;
- unit/component/E2E test boundaries;
- styling and design-token approach;
- image/video/static-asset handling;
- Svelte-native state/component/motion patterns before third-party libraries;
- accessibility and rendered-browser proof workflow;
- rendering/prerender strategy only far enough to avoid blocking the scaffold;
- adapter/hosting only when deployment requirements justify it.

Do **not** create a generic `svelte-expert` skill merely because SvelteKit is selected. Add project-specific Svelte guidance only when it represents recurring Hellocraft development rules that official documentation and source-local ownership cannot cover cleanly.

## Development boundary

The repository is still not ready for full website implementation. A bounded content-agnostic SvelteKit foundation can become development-ready after the remaining tooling/convention decisions are approved.

## Next Step

**Curate the SvelteKit-specific development baseline and determine what should live in project routing/source rules versus what, if anything, deserves a reusable SvelteKit-oriented skill or helper workflow. Do this before scaffolding page-specific UI.**
