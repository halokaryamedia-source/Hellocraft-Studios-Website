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
SUPPORT_SKILL_HANDOFF_CONTRACT_READY
SUPPORT_SKILL_TRIGGER_MATRIX_READY
AUTHORITY_PROOF_HIERARCHY_READY
DRY_RUN_ACCEPTANCE_GATE_DEFINED
CODEX_CONTEXT7_MCP_WIRED
CODEX_CHROME_DEVTOOLS_MCP_WIRED
WEB_UI_DESIGN_SPECIALIST_READY
SERVICES_TAXONOMY_NOT_DEFINED
INFORMATION_ARCHITECTURE_NOT_DEFINED
VISUAL_DIRECTION_NOT_DEFINED
TECHNICAL_ARCHITECTURE_PARTIAL
NOT DEVELOPMENT READY
```

Working authority: **`Local`**.

## Approved technical baseline

```text
full-stack framework = SvelteKit
package manager      = Bun
architecture         = static/prerender-first, server-where-needed
backend boundary     = SvelteKit server functionality when required
separate backend     = none initially
database             = none initially
performance          = strong visual quality + lightweight delivery
```

Portfolio/project inventory and Studio/About content remain intentionally deferred by the project owner. Do not recover them from old chats or infer final taxonomy/navigation from reference sites.

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
→ external framework/library/API/config freshness + version evidence

svelte-development-validation
→ Svelte/SvelteKit correctness + official Svelte docs/autofixer workflow

web-accessibility-validation
→ semantic/keyboard/form/media/reflow/reduced-motion validation

chrome-devtools-validation
→ real browser rendering + console + network + interaction + performance proof
```

Support skills do not consume the one-project-specialist budget.

## Synchronized handoff contract

Every materially used support/evidence layer now returns the same shape:

```text
FINDING
AUTHORITY
ACTION
PROOF
BLOCKER (only when something remains unproven)
```

`development-brief` is the conductor. Support skills do not autonomously broaden scope or hand control to each other.

## Authority / proof rule

```text
product / architecture
→ user instruction → Foundation → current source/contracts

external API / config
→ installed/declared version → official docs → Context7 → secondary examples

compatibility
→ source intent → format/lint/svelte-check/build

runtime/browser
→ build/check → actual browser/runtime → deployed target for production claims
```

A documented API is not accepted if the current project check/build/runtime fails.

## Trigger routing summary

```text
SvelteKit/tool config
→ Context7 when version-sensitive + Svelte validation

Svelte component logic
→ Svelte validation; add accessibility/browser only when affected

visual Svelte component
→ UI specialist + Svelte validation; add accessibility as needed; Chrome for rendered acceptance

navigation/menu/filter
→ UI specialist + Svelte validation + accessibility + Chrome

form/submission
→ Svelte validation + accessibility + Chrome; Context7 when API/config matters

server action/endpoint
→ Svelte validation + Context7 when current API/config matters; runtime proof when behavior is claimed

performance investigation
→ Chrome; Context7 only for current tool/API docs
```

Do not invoke all support skills by habit.

## Development-tool wiring

Project-scoped Codex configuration:

```text
.codex/config.toml
├── Context7 MCP
└── Chrome DevTools MCP
```

These are agent/development tooling only and must not become application runtime dependencies.

## Remaining technical foundation decisions

Before production/page-specific implementation, lock these in order:

### 1. Language / Svelte convention

- TypeScript as project default or not;
- modern Svelte 5/runes convention for new code;
- server-only/private-environment ownership.

### 2. Styling / design-token implementation

- native scoped Svelte CSS + global CSS/custom properties versus another justified layer;
- durable global token ownership;
- duplicate-style-system prevention.

### 3. Mandatory quality gate

Likely baseline:

```text
format
→ lint
→ svelte-check
→ build
```

Validate exact tooling/config against current SvelteKit + Bun guidance before scaffolding.

### 4. Asset / media / performance policy

- image/video/font ownership and folder boundaries;
- responsive image/crop rules;
- lazy-loading/poster behavior;
- large-media handling;
- measured budget calibration after representative content exists.

## Dry-run gate before page implementation

Once the minimal content-agnostic SvelteKit scaffold exists, run one deliberately small integration slice before building real pages.

The slice must stay non-product and include only enough to exercise the workflow:

```text
one Svelte component
+ one small interactive control
+ one representative image/media element
+ responsive behavior
```

Run:

```text
development-brief
→ Context7 only if docs/config are material
→ svelte-development-validation
→ implementation
→ web-accessibility-validation
→ format/lint/svelte-check/build
→ chrome-devtools-validation
→ overlap/gap review
```

Pass conditions:

- support handoffs are clear and non-duplicative;
- no support skill takes over product/architecture/visual authority;
- technical checks/build pass;
- keyboard/rendered behavior works;
- no material browser console/network defect is introduced;
- no new skill is needed merely to complete the dry-run.

Do not turn this into a homepage, portfolio, or final visual prototype.

## Backend / release boundary retained

Do not choose database, CMS, auth, storage, hosting, or separate backend until a real product responsibility earns them.

Business contact is the likely first server responsibility; career submission follows only after its actual fields/file/storage needs are defined.

`website-release-development` remains blocked until hosting/deployment and material production integrations are known.

## Next Step

**Lock the four remaining code-level foundation decisions: (1) TypeScript + modern Svelte 5 convention, (2) styling/design-token approach, (3) mandatory format/lint/svelte-check/build gate, and (4) media/performance policy. Then create the minimal content-agnostic SvelteKit + Bun scaffold and immediately run the defined integration dry-run before any page-specific implementation.**
