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
SVELTE_DEVELOPMENT_VALIDATION_READY
WEB_ACCESSIBILITY_VALIDATION_READY
CHROME_DEVTOOLS_VALIDATION_READY
CODEX_CONTEXT7_MCP_WIRED
CODEX_CHROME_DEVTOOLS_MCP_WIRED
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
- **Current/version-sensitive external documentation is validated through Context7/official sources.**
- **Svelte source work has a dedicated support validation workflow based on official Svelte tooling.**
- **Accessibility validation is a support responsibility grounded in WCAG 2.2/WAI-ARIA rather than a separate project specialist.**
- **Chrome DevTools MCP is the browser/runtime/network/performance evidence layer when source/build proof is insufficient.**

## Content definition — deferred by project owner

The project owner has explicitly postponed:

- Project & Evidence Inventory / portfolio content;
- Studio Profile / About content.

Do not fill either area from old chats, MIVUBI history, client history, or assumptions.

Do not currently lock portfolio/service taxonomy or final navigation merely because common studio sites use them.

## Skill / tooling baseline

### Kernel

```text
project-definition
development-brief
project-skill-planner
```

### Project-specific specialist count = 1

```text
web-ui-design-development
→ visual frontend design/craft + rendered visual acceptance
```

### Support / evidence skills

```text
context7-documentation-validation
→ external framework/library/API/config documentation freshness + version evidence

svelte-development-validation
→ Svelte/SvelteKit source correctness + official Svelte docs/autofixer workflow

web-accessibility-validation
→ semantic/keyboard/form/media/reflow/reduced-motion accessibility validation

chrome-devtools-validation
→ real browser rendering + console + network + interaction + performance proof
```

Support skills do **not** consume the one-project-specialist budget because they do not own Hellocraft-specific product semantics.

Typical routing:

```text
normal engineering
→ development-brief
→ add only materially relevant support skills

visual frontend engineering
→ development-brief
+ web-ui-design-development
+ only materially relevant support skills
```

Do not create `svelte-expert`, `bun-expert`, `backend-expert`, `accessibility-expert`, `performance-expert`, `context7-expert`, or `browser-testing-expert` project specialists merely because those technical concerns exist.

## Development-tool wiring

Project-scoped Codex configuration:

```text
.codex/config.toml
├── Context7 MCP
└── Chrome DevTools MCP
```

Both are development tooling only and must not become Hellocraft application/runtime dependencies.

Context7:

```text
https://mcp.context7.com/mcp
```

Chrome DevTools:

```text
npx -y chrome-devtools-mcp@latest --no-usage-statistics
```

Do not commit API keys, credentials, or machine-specific paths. If a particular Windows Codex installation cannot launch generic `npx`, use the current official Chrome DevTools MCP user/local Windows override rather than hard-coding one machine's paths into shared source.

## Approved full-stack boundary

```text
SvelteKit
├── public content routes
│   └── prerender/static whenever request-time behavior is unnecessary
│
├── client interaction
│   └── hydrate only the interaction actually needed
│
└── SvelteKit server
    ├── form actions when normal form submission needs a server
    ├── +server endpoints only for real HTTP/API/webhook boundaries
    ├── validation / anti-abuse / private secrets
    └── external integrations when later defined
```

Do not add Express, NestJS, Fastify, another API service, database, CMS, authentication, or admin infrastructure by default.

## Lightweight-performance boundary

The project owner requires a visually strong site that remains lightweight to open and use.

Before adding a dependency/effect:

```text
real user value
→ can native Svelte/SvelteKit/CSS/browser capability solve it?
→ current docs confirm any external API/config actually needed
→ what JS/media/network/runtime cost is added?
→ is the result still worth that cost?
→ measure representative built/browser output
```

Use current Core Web Vitals `good` thresholds as an external experience baseline. Do not invent permanent JS/image/media budgets until representative Hellocraft visual pages exist.

Chrome DevTools provides exploratory performance/network evidence; a future repeatable Playwright/CI layer is added only after real critical flows earn it.

## Critical corrections retained

Do **not** preinstall merely because common:

- Vitest — add when real reusable logic/component behavior benefits from unit/component tests;
- Playwright — add when real critical browser flows require repeatable regression proof;
- component library — add only for a concrete primitive/problem that native implementation should not own;
- motion library — add only when approved motion exceeds CSS/Svelte/native-browser capabilities;
- CMS/database/auth — add only when an approved operational workflow earns them;
- image helper/package — choose after asset/media policy and representative media are known;
- accessibility scanners — add only when recurring automated accessibility testing is justified.

## Current safe continuation — finish technical foundation

Before page-specific implementation, decide the smallest remaining conventions in this order.

### 1. Language / Svelte convention

Decide:

- TypeScript as project default or not;
- modern Svelte 5/runes convention for new code;
- server-only/private-environment ownership.

Use `svelte-development-validation` + current official/Context7 documentation for version-sensitive decisions.

### 2. Styling / design-token implementation

Decide:

- native scoped Svelte CSS + global CSS/custom properties versus another justified layer;
- where durable global tokens live;
- how duplicate style systems are prevented.

### 3. Mandatory code-quality gate

Curate the minimum always-on checks, likely:

```text
format
→ lint
→ svelte-check
→ build
```

Validate exact configuration against SvelteKit + Bun before scaffolding.

### 4. Asset / media / performance policy

Define:

- image/video/font ownership and folder boundaries;
- responsive image/crop rules;
- lazy-loading and poster behavior;
- large-media handling;
- representative performance prototype and measured budget calibration.

Use Chrome DevTools once representative rendered media exists.

### 5. Minimal backend contracts

Define only server responsibilities actually needed first. Business contact is the likely first candidate; career submission follows only after real fields/file requirements are defined.

Do not choose database/storage until persistence is actually required.

### 6. Rendering + deployment boundary

Once server/form requirements are known, choose route rendering, adapter, hosting, and required providers. Only then should `website-release-development` be reconsidered.

## Development boundary

The repository is not yet ready for full page implementation.

A bounded content-agnostic SvelteKit scaffold becomes development-ready after language, styling, mandatory quality gate, and media/performance conventions are approved. Backend/provider/deployment choices only need to be fixed far enough to support the first real server responsibility.

## Next Step

**Lock the remaining code-level foundation in order: (1) TypeScript + modern Svelte 5 convention, (2) styling/design-token approach, (3) mandatory format/lint/svelte-check/build gate, and (4) media/performance policy. Use the new support validation layers during those decisions. Then create the minimal content-agnostic SvelteKit + Bun scaffold.**