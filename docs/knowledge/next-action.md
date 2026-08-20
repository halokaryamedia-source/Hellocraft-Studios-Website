# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
PORTFOLIO_EVIDENCE_DEFERRED
STUDIO_PROFILE_DEFERRED
TECHNICAL_FOUNDATION_PLANNING_ACTIVE
SVELTEKIT_FULLSTACK_APPROVED
BUN_PACKAGE_MANAGER_APPROVED
STATIC_FIRST_SERVER_WHERE_NEEDED_APPROVED
NO_SEPARATE_BACKEND_INITIAL_APPROVED
NO_DATABASE_INITIAL_APPROVED
LIGHTWEIGHT_PERFORMANCE_REQUIREMENT_APPROVED
CONTEXT7_DOCUMENTATION_VALIDATION_READY
CODEX_CONTEXT7_MCP_WIRED
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
- **SvelteKit is the approved full-stack website framework.**
- **Bun is the approved package manager / dependency installer and project command runner.**
- **Architecture is static/prerender-first and server-where-needed.**
- **Initial backend uses SvelteKit server capabilities; no separate backend service is justified.**
- **No database is justified initially.**
- **Strong visual quality and lightweight/fast delivery are equal product constraints.**
- **Context7 is the approved support/evidence layer for current/version-sensitive external technical documentation.**

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

These remain required before their dependent public claims and final page content are locked, but they are not blockers for technical foundation decisions that can be made independently of those contents.

Do not fill either area from old chats, MIVUBI history, client history, or assumptions.

## Skill baseline

A single project-specific visual specialist owns the recurring visual frontend boundary:

```text
.agents/skills/web-ui-design-development/SKILL.md
```

A separate support/evidence skill owns external technical documentation validation:

```text
.agents/skills/context7-documentation-validation/SKILL.md
```

The Context7 skill is **not** a project-specific specialist and does not consume the one-specialist-per-task budget. It may accompany normal engineering or visual frontend work when a material decision depends on current/version-sensitive external framework/library/API/configuration documentation.

Normal engineering:

```text
development-brief
+
context7-documentation-validation when external docs materially matter
```

Visual frontend engineering:

```text
development-brief
+
web-ui-design-development
+
context7-documentation-validation when external docs materially matter
```

Selecting SvelteKit + Bun and adding Context7 does not create a need for `svelte-expert`, `bun-expert`, `backend-expert`, or `context7-expert` project specialists.

## Context7 documentation-validation boundary

Context7 is development tooling only. It is not part of the website bundle/runtime and must not be added to Hellocraft application dependencies merely to satisfy agent workflow.

Project-scoped Codex MCP wiring is present at:

```text
.codex/config.toml
→ https://mcp.context7.com/mcp
```

No Context7 API key/credential should be committed to the repository.

For external technical questions:

```text
exact package/library + current question
→ current declared/installed version when known
→ Context7 current/version-aware documentation
→ official primary docs when Context7 is unavailable, ambiguous, high-impact, or conflicts with the project
→ current source / package.json / bun.lock
→ implementation
→ matching check/build/runtime proof
```

Context7 validates documented API/configuration behavior. It does not decide whether Hellocraft should adopt a package, architecture, CMS, provider, backend, visual effect, or other technology.

If Context7 is unavailable in a particular host/session, use current official primary documentation directly and do not claim Context7 evidence.

## Approved full-stack boundary

```text
SvelteKit
├── public content routes
│   └── prerender/static whenever request-time behavior is unnecessary
│
├── client interaction
│   └── hydrate only the interaction that is actually needed
│
└── SvelteKit server
    ├── form actions when normal form submission needs a server
    ├── +server endpoints only for real HTTP/API/webhook boundaries
    ├── validation / anti-abuse / private secrets
    └── external integrations when later defined
```

Do not add Express, NestJS, Fastify, another API service, database, CMS, authentication, or admin infrastructure by default.

A SvelteKit page with a form action requires server handling and cannot simultaneously be treated as a pure prerender-only route. Keep this tradeoff explicit when contact/career flows are defined.

## Lightweight-performance boundary

The project owner requires a visually strong site that remains lightweight to open and use.

Apply this before adding dependencies or effects:

```text
real user value
→ can native Svelte/SvelteKit/CSS/browser capability solve it?
→ Context7/official docs confirm any external API/config we actually need
→ what client JS/media/runtime cost is added?
→ is the result still worth that cost?
→ measure the built/deployed output
```

Use current Core Web Vitals `good` thresholds as the external experience baseline. Do not invent a permanent JS/image transfer budget until a representative visual prototype exists; calibrate those budgets from actual Hellocraft media and design instead.

## Mivubi website benchmark — observed, not copied

The current Mivubi public website is a useful internal benchmark for behavior and content architecture, but its exact framework/library source is not available in the connected GitHub repositories and should not be guessed.

Observed patterns worth considering:

- straightforward public routes and shared shell;
- portfolio / long-form content;
- lightweight client-side filtering;
- Careers as a first-class public surface;
- media-heavy presentation;
- crawlable content without dashboard-like application complexity.

Use these as behavioral evidence only. Do not import Mivubi's information architecture, copy, taxonomy, or unverified technology stack automatically.

## Critical corrections to earlier recommendations

The following should **not** be preinstalled merely because they are common:

- Vitest — add when real reusable logic/component behavior exists that benefits from unit/component tests;
- Playwright — add when browser flows exist that require repeatable end-to-end proof;
- a component library — add only for a concrete primitive/problem that native implementation should not own;
- a motion library — add only when approved motion exceeds CSS/Svelte/native-browser capabilities;
- a CMS/database/auth system — add only when an approved operational workflow earns it;
- a specific image helper/package — choose after the asset/media policy and representative media are known.

Mandatory quality gates and optional testing layers are different responsibilities. Do not turn the initial scaffold into a dependency collection.

## Current safe continuation — finish the technical foundation

Before page-specific implementation, decide the smallest remaining conventions in this order. Use Context7/official documentation whenever a listed choice depends on current Svelte/SvelteKit/Bun/tooling APIs or configuration.

### 1. Language / Svelte convention

Decide:

- TypeScript as the project default or not;
- modern Svelte 5/runes convention for new code;
- location of server-only code and private environment usage.

### 2. Styling / design-token implementation

Decide:

- native scoped Svelte CSS + global CSS/custom properties versus another justified styling layer;
- where durable global tokens live;
- how to prevent duplicate style systems.

### 3. Mandatory code-quality gate

Curate the minimum always-on checks, likely around:

```text
format
→ lint
→ svelte-check
→ build
```

Choose exact tools/config only after validating compatibility with the approved SvelteKit + Bun baseline through Context7 and/or current official documentation.

### 4. Asset / media / performance policy

Define:

- image/video/font ownership and folder boundaries;
- responsive image/crop rules;
- lazy-loading and poster behavior;
- large-media handling;
- first representative performance prototype and measured budget calibration.

### 5. Minimal backend contracts

Define only the server responsibilities actually needed first. Business contact is the most likely first candidate; career submission follows only after its real fields/file requirements are defined.

Do not choose a database or storage provider until the form/application workflow proves persistence is necessary.

### 6. Rendering + deployment boundary

Once server/form requirements are known, choose:

- which routes are prerendered versus server-backed;
- SvelteKit adapter;
- hosting/provider;
- form/email/storage provider if required.

Only then does `website-release-development` have enough real production architecture to be reconsidered as a specialist.

## Development boundary

The repository is not yet ready for full page implementation.

A bounded content-agnostic SvelteKit scaffold becomes development-ready after the language, styling, mandatory quality gate, and media/performance baseline are approved. Backend/provider/deployment choices only need to be fixed far enough to support the first real server responsibility; they should not block static frontend foundation unnecessarily.

## Next Step

**Use Context7-backed current documentation while deciding the remaining code-level foundation in order: (1) TypeScript + modern Svelte 5 convention, (2) styling/design-token approach, (3) mandatory format/lint/svelte-check/build gate, then (4) media/performance policy. After those are locked, create the minimal content-agnostic SvelteKit + Bun scaffold. Define the first SvelteKit server/form contract only when the corresponding Contact/Careers requirement is concrete.**
