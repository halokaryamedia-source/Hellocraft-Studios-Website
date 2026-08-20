# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
PORTFOLIO_EVIDENCE_DEFERRED
STUDIO_PROFILE_DEFERRED
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
MEDIA_POLICY_APPROVED
ENHANCED_IMG_LOCAL_RASTER_PIPELINE_APPROVED
VIDEO_POSTER_FIRST_POLICY_APPROVED
SELF_HOSTED_WOFF2_FONT_POLICY_APPROVED
PERFORMANCE_MEASUREMENT_POLICY_APPROVED
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
TECHNICAL_FOUNDATION_READY_FOR_SCAFFOLD
CONTENT_AGNOSTIC_SCAFFOLD_NOT_CREATED
SERVICES_TAXONOMY_NOT_DEFINED
INFORMATION_ARCHITECTURE_NOT_DEFINED
VISUAL_DIRECTION_CANDIDATE_NOT_FINAL
PAGE_IMPLEMENTATION_NOT_READY
```

Working authority: **`Local`**.

## Approved content-agnostic technical baseline

```text
framework              = SvelteKit
UI/runtime             = Svelte 5 + TypeScript
Svelte convention      = modern runes-first
package manager        = Bun
styling                = native CSS + Svelte scoped styles
shared tokens          = CSS Custom Properties
quality gate           = bun run validate
local raster pipeline  = Vite imports + @sveltejs/enhanced-img
rendering              = static/prerender-first, server-where-needed
backend                = SvelteKit server only when needed
separate backend       = none initially
database               = none initially
```

The technical baseline is now sufficient to build a **minimal content-agnostic scaffold**. It is not sufficient to invent final pages, portfolio structure, services taxonomy, navigation, or final art direction.

## Canonical media owner

```text
docs/foundation/03-media-performance-policy.md
```

Key policy:

```text
source-imported local assets
→ Vite-hashed/build-processed by default

static/
→ exact stable public URL / passthrough only

local raster page media
→ @sveltejs/enhanced-img when responsive/build-time optimization helps

SVG
→ keep vector when the source is vector

LCP image
→ not lazy + high fetch priority only when genuinely the LCP candidate

below-fold images
→ native lazy loading when appropriate

video
→ poster-first + preload="none" + user-initiated by default

fonts
→ self-hosted WOFF2 + one family by default; second only if art direction earns it
```

Do not install an image CDN, media CDN, font CDN, or video platform now.

## Quality gate retained

Expected script contract once the scaffold exists:

```text
format
→ prettier --write .
→ convenience only

format:check
→ prettier --check .

lint
→ eslint .

check
→ svelte-kit sync && svelte-check --tsconfig ./tsconfig.json

build
→ vite build

validate
→ bun run format:check
→ bun run lint
→ bun run check
→ bun run build
```

Any `validate` failure blocks technical completion. Source-mutating fixers must not run inside the acceptance gate.

## Skill routing for the scaffold

The scaffold is a non-trivial development task, so use:

```text
development-brief
+ context7-documentation-validation for current scaffold/tool config
+ svelte-development-validation for Svelte/SvelteKit source
```

Use `web-ui-design-development` only for the tiny dry-run presentation needed to make the responsive slice inspectable; do not turn the scaffold into final art direction.

Use `web-accessibility-validation` for the dry-run control/media semantics and `chrome-devtools-validation` for rendered/browser/network evidence.

## Next Step — create minimal scaffold

Create the **minimal SvelteKit + Bun + TypeScript scaffold** on branch `Local` with only the approved technical dependencies/configuration.

Required initial responsibilities:

```text
SvelteKit + Svelte 5 + TypeScript
Bun lockfile / scripts
Prettier + Svelte-aware formatting
ESLint + current Svelte-aware config
svelte-check
native app.css foundation
@sveltejs/enhanced-img build integration
minimal root layout/page only
```

Do **not** add:

- Tailwind/SCSS/CSS-in-JS/component library;
- Vitest/Playwright;
- CMS/database/auth;
- animation library;
- analytics;
- form provider;
- hosting adapter beyond the minimal scaffold default/current requirement;
- invented project/portfolio content.

Exact dependency versions must be selected from current official Svelte/SvelteKit tooling at scaffold time and then owned by `package.json` + `bun.lock`.

## Immediate scaffold proof

After creation:

```text
bun install
→ bun run validate
```

The scaffold itself must pass before adding the dry-run slice.

## Integration dry-run after scaffold PASS

Add one deliberately small non-product slice containing only enough to exercise the synchronized support layers:

```text
one Svelte component
+ one small interactive native control
+ one representative local raster image
+ responsive behavior
```

Use the local raster through the approved enhanced-image pipeline. Do not use real portfolio claims/media merely to populate the test.

Then run:

```text
svelte-development-validation
→ web-accessibility-validation
→ bun run validate
→ chrome-devtools-validation
→ overlap/gap review
```

Dry-run PASS requires:

- `bun run validate` passes;
- image output has appropriate intrinsic/responsive delivery behavior;
- interactive control is keyboard-usable;
- responsive layout is stable;
- no material browser console/network defect is introduced;
- below-fold/priority loading behavior matches the test's actual placement;
- support-skill handoffs remain non-duplicative;
- no new skill/dependency is needed merely to finish the test.

Do not turn the dry-run into a homepage, portfolio, navigation system, or final visual prototype.

## Performance budget timing

The dry-run proves the **measurement workflow**, not final Hellocraft byte budgets.

Permanent JS/image/video/font budgets are calibrated only after a representative visual prototype contains real project-like media and typography. Continue using current Core Web Vitals good thresholds as the external experience baseline meanwhile.

## Content / visual boundary retained

The project owner will provide portfolio/project evidence later. Studio/About content is also deferred.

Therefore the scaffold must not infer:

- portfolio entries/categories;
- services taxonomy;
- final navigation;
- homepage content order;
- client claims;
- final typography;
- exact production brand color values;
- final project image ratios/focal points.

The current visual thesis remains **playful editorial game studio** as a candidate, not a final design system.

## Backend / release boundary retained

Business contact is the likely first future server responsibility, but its fields/provider are not defined yet. Careers submission follows only after its real fields/file/storage needs are known.

Do not choose database, CMS, auth, storage, hosting, or a separate backend now.

`website-release-development` remains blocked until hosting/deployment and material production integrations are known.

## Next Step

**Create the minimal content-agnostic SvelteKit + Bun scaffold using the approved language, styling, quality, and media policies. First make the empty scaffold pass `bun run validate`; then run the defined non-product integration dry-run before any page-specific implementation.**
