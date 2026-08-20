# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
PORTFOLIO_EVIDENCE_DEFERRED
STUDIO_PROFILE_DEFERRED
TECHNICAL_FOUNDATION_PLANNING_ACTIVE
SVELTEKIT_FULLSTACK_APPROVED
TYPESCRIPT_DEFAULT_APPROVED
SVELTE5_RUNES_FIRST_APPROVED
SERVER_PRIVATE_BOUNDARY_APPROVED
BUN_PACKAGE_MANAGER_APPROVED
NATIVE_SVELTE_CSS_APPROVED
CSS_CUSTOM_PROPERTY_TOKENS_APPROVED
NO_CSS_FRAMEWORK_INITIAL_APPROVED
LOGO_BRAND_ANCHOR_RECORDED
PRETTIER_FORMAT_GATE_APPROVED
ESLINT_GATE_APPROVED
SVELTE_CHECK_GATE_APPROVED
BUILD_GATE_APPROVED
QUALITY_GATE_APPROVED
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
MEDIA_POLICY_NOT_DEFINED
SERVICES_TAXONOMY_NOT_DEFINED
INFORMATION_ARCHITECTURE_NOT_DEFINED
VISUAL_DIRECTION_CANDIDATE_NOT_FINAL
TECHNICAL_ARCHITECTURE_PARTIAL
NOT DEVELOPMENT READY
```

Working authority: **`Local`**.

## Approved technical baseline

```text
full-stack framework = SvelteKit
UI/runtime language   = Svelte 5 + TypeScript
Svelte convention     = modern runes-first for new code
package manager       = Bun
styling               = native CSS + Svelte scoped styles
shared design tokens  = CSS Custom Properties
quality gate          = Prettier + ESLint + svelte-check + SvelteKit/Vite build
architecture          = static/prerender-first, server-where-needed
backend boundary      = SvelteKit server functionality when required
separate backend      = none initially
database              = none initially
performance           = strong visual quality + lightweight delivery
```

### Language / Svelte convention — approved

TypeScript is the default project language where TypeScript applies.

For new Svelte source:

```text
Svelte 5 runes-first
→ $state only for actual reactive state
→ $derived for computed values
→ $effect only for real side effects
→ $props for component props
→ modern event attributes / snippets when applicable
→ legacy Svelte syntax only when current source/version requires it
```

Exact package versions are owned by the scaffold and `bun.lock` once created rather than guessed in planning documents.

### Server/private boundary — approved

```text
private build-time env
→ $env/static/private

private runtime env
→ $env/dynamic/private

shared server-only modules
→ $lib/server/** or *.server.*

route server behavior
→ +page.server.ts / +layout.server.ts / +server.ts as appropriate
```

Client-facing code must not import private/server-only values.

### Styling / design-token boundary — approved

```text
src/app.css
→ small application-wide foundation only
→ minimal reset/base/document defaults
→ durable semantic CSS custom properties

*.svelte <style>
→ component-specific appearance
→ Svelte-scoped by default

CSS custom properties
→ repeated semantic values
→ intentional parent/child styling contracts
```

Initial negative decisions:

```text
Tailwind / utility framework = no
SCSS / Sass                  = no
CSS-in-JS                    = no
CSS Modules                  = no
CSS preprocessor             = none initially
component style framework    = none initially
```

Do not create a token for every literal value. Shared tokens must represent durable repeated semantic roles; one-off visual values may remain local.

### Logo / brand anchor — recorded

The supplied Hellocraft logo is authoritative visual evidence.

Observed direction:

```text
palette   → cyan + white + charcoal/black
form      → rounded star/hand mascot + small star accents
wordmark  → chunky / irregular / friendly uppercase
character → playful + energetic + approachable
```

Current leading thesis for later visual-direction exploration:

> **Playful editorial game studio**

This is not yet final art direction. Do not automatically turn the website into Minecraft pixel/voxel UI, neon/cyberpunk gaming UI, glassmorphism, or repeated star decoration.

Exact production palette values should come from authoritative logo/vector assets when available, not a compressed raster sample.

### Mandatory quality gate — approved

Use the official Svelte ecosystem Prettier and ESLint integrations when the scaffold is created. Keep the gate non-mutating with respect to application source.

Expected package-script contract:

```text
format
→ prettier --write .
→ developer convenience; mutates source; not proof

format:check
→ prettier --check .

lint
→ eslint .

check
→ svelte-kit sync && svelte-check --tsconfig ./tsconfig.json

check:watch
→ developer convenience only

build
→ vite build

validate
→ bun run format:check
→ bun run lint
→ bun run check
→ bun run build
```

Expected scripts once the scaffold exists:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint .",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "build": "vite build",
    "validate": "bun run format:check && bun run lint && bun run check && bun run build"
  }
}
```

Acceptance rule:

```text
bun run validate
→ format:check PASS
→ lint PASS
→ check PASS
→ build PASS
→ technical gate PASS
```

Any failure blocks technical completion. Do not put Prettier write mode, ESLint `--fix`, or another source-mutating fixer inside `validate` merely to manufacture a pass.

The Svelte autofixer remains supplemental Svelte review evidence, not a replacement for the project gate. Exact package versions/config are owned by the scaffold and `bun.lock` after creation.

Vitest and Playwright remain deferred. Add them only when real reusable logic/component behavior or critical browser flows earn repeatable automated-test responsibilities.

## Content boundary retained

Portfolio/project inventory and Studio/About content remain intentionally deferred by the project owner.

Do not recover those from old chats or infer final taxonomy/navigation from reference sites.

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

### Support / evidence

```text
context7-documentation-validation
→ external API/config/version evidence

svelte-development-validation
→ Svelte/SvelteKit correctness + official Svelte tooling

web-accessibility-validation
→ semantic/keyboard/form/media/reflow accessibility validation

chrome-devtools-validation
→ browser/rendering/console/network/performance proof
```

Support skills do not consume the one-project-specialist budget.

## Synchronized handoff rule

Every materially used support layer returns:

```text
FINDING
AUTHORITY
ACTION
PROOF
BLOCKER (only when something remains unproven)
```

`development-brief` remains the conductor. Support skills do not autonomously broaden scope or take over architecture/product/visual ownership.

## Authority / proof hierarchy

```text
product / architecture
→ user instruction → Foundation → current source/contracts

external API / config
→ installed/declared version → official docs → Context7 → secondary examples

compatibility
→ source intent → bun run validate

runtime/browser
→ build/check → actual browser/runtime → deployed target for production claims
```

A documented API is not accepted if current project checks or runtime behavior fail.

## Lightweight-performance boundary

Before adding a dependency/effect:

```text
real user value
→ can native Svelte/SvelteKit/CSS/browser capability solve it?
→ current docs confirm any external API/config actually needed
→ what JS/media/network/runtime cost is added?
→ is the result still worth that cost?
→ measure representative built/browser output
```

Do not invent permanent JS/image/media budgets until representative Hellocraft visual pages exist.

## Remaining technical foundation decision

### Asset / media / performance policy — NEXT

Define the minimum durable policy for a media-heavy studio website:

- which assets belong in `static/` versus source-processed/imported media;
- image ownership/folder naming without creating a premature content taxonomy;
- responsive image generation and `srcset`/sizes behavior;
- when AVIF/WebP/source formats are appropriate;
- crop/aspect-ratio/focal-point rules for portfolio media;
- above-the-fold versus below-the-fold loading behavior;
- lazy loading and layout-space reservation;
- video poster/autoplay/preload rules and when video should not load initially;
- font formats, number of families/weights, loading, and subsetting strategy;
- whether SvelteKit's `@sveltejs/enhanced-img` is actually earned or native/static handling is sufficient;
- representative Chrome DevTools measurement procedure;
- how project-specific JS/image/video/font budgets will be calibrated after representative visual media exists.

Do not install an image/CDN/media package merely to prepare for hypothetical needs.

## Dry-run gate before page implementation

Once the media policy is approved, create the minimal content-agnostic SvelteKit + Bun scaffold and run one deliberately small non-product integration slice:

```text
one Svelte component
+ one small interactive control
+ one representative image/media element
+ responsive behavior
```

Run the smallest relevant chain:

```text
development-brief
→ Context7 only if docs/config are material
→ svelte-development-validation
→ implementation
→ web-accessibility-validation
→ bun run validate
→ chrome-devtools-validation
→ overlap/gap review
```

Pass only when support handoffs are clear, `bun run validate` passes, keyboard/rendered behavior works, no material console/network defect is introduced, and no new skill is required merely to complete the dry-run.

Do not turn the dry-run into a homepage, portfolio, or final visual prototype.

## Backend / release boundary retained

Do not choose database, CMS, auth, storage, hosting, or separate backend until a real product responsibility earns them.

Business contact is the likely first server responsibility; career submission follows only after its actual fields/file/storage needs are defined.

`website-release-development` remains blocked until hosting/deployment and material production integrations are known.

## Next Step

**Define and lock the asset/media/performance policy. After that, create the minimal content-agnostic SvelteKit + Bun scaffold with the approved quality scripts and immediately run the integration dry-run before any page-specific UI.**