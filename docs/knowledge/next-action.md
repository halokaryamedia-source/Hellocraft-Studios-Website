# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED
DUMMY_PAGE_COPY_POPULATED
DEMO_PROJECTS_POPULATED
DEMO_PROOF_ITEMS_POPULATED
DEMO_CAREER_ITEMS_POPULATED
PUBLIC_CONTACT_CHANNELS_STILL_REAL_ONLY
VISUAL_DIRECTION_BASELINE_ESTABLISHED
VISUAL_SOURCE_BASELINE_IMPLEMENTED
PLAYFUL_EDITORIAL_DIRECTION_APPLIED
SOURCE_ACCESSIBILITY_AUDIT_COMPLETED
HEADING_HIERARCHY_CORRECTED
FOCUS_SOURCE_HARDENED
REFLOW_SOURCE_GUARDS_HARDENED
DEMO_NOINDEX_GUARD_ACTIVE
BRAND_LOCKUP_REPLACEMENT_SURFACE_READY
BRAND_SYMBOL_REPLACEMENT_SURFACE_READY
PROJECT_MEDIA_REPLACEMENT_SURFACE_READY
CURRENT_NAVIGATION_SEMANTICS_READY
ROOT_ERROR_SURFACE_READY
CONTENT_REPLACEMENT_GUIDE_READY
SOURCE_ARCHITECTURE_MATURE_FOR_CONTENT_SWAP
NON_RUNTIME_ARCHITECTURE_FROZEN
REAL_LOGO_SOURCE_PENDING
REAL_PROJECT_MEDIA_PENDING
REAL_PORTFOLIO_EVIDENCE_PENDING
REAL_STUDIO_PROFILE_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
RENDERED_VISUAL_ACCEPTANCE_DEFERRED
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
INTEGRATION_DRY_RUN_DEFERRED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

Working authority: **`Local`**.

## Active project-owner instruction

Continue preparing the website until its source architecture is mature enough that later work is primarily **replacing text/data/media**, not rebuilding page structure.

Hosting/provider work and local/runtime testing remain explicitly deferred until the project owner re-authorizes them.

## Architecture maturity state

The non-runtime architecture is now frozen as the default baseline:

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Global site responsibilities are present:

```text
root layout
→ demo publication guard
→ skip link
→ site header
→ route content
→ site footer

primary navigation
→ current-route aria-current state

root error boundary
→ branded 404/error presentation
→ noindex
```

No Services route, Work filters/categories, blog/news, form backend, CMS, search, component library, or other architecture is added by default.

## Stable content owners

```text
src/lib/content/site.ts
→ site identity/navigation/social configuration

src/lib/content/pages.ts
→ Home/Work/Studio/Careers/Contact/Footer copy

src/lib/content/projects.ts
→ portfolio entries

src/lib/content/demo-data.ts
→ development-only proof/career examples

src/lib/content/demo.ts
→ demo/publication switch

src/lib/content/types.ts
→ shared content contracts
```

Final text should normally be replaced in these owners instead of being embedded directly into page components.

## Stable brand/media owners

```text
src/lib/components/brand/BrandLockup.svelte
→ authoritative header/footer logo/wordmark replacement surface

src/lib/components/brand/BrandSymbol.svelte
→ current temporary symbol / future brand-symbol owner

src/lib/components/work/ProjectMediaPlaceholder.svelte
→ development project-media surface
```

Real media/alt/caption/focal-point behavior is defined only when actual project assets are available.

## Current-navigation semantics

The primary navigation now reads the current SvelteKit page state and exposes:

```text
aria-current="page"
```

for the active route. `/work/[slug]` remains represented by Work as the active top-level section.

This follows the current SvelteKit `$app/state` page API. Rendered current-state styling/keyboard proof remains part of the deferred browser phase.

## Error handling surface

The root route now owns a custom `+error.svelte` surface.

It provides:

- a clear 404 state;
- a generic non-404 error state without exposing arbitrary internal error details;
- Home and Work recovery links;
- `noindex` metadata;
- the current Hellocraft visual language.

The existing project slug loader continues to call SvelteKit `error(404, ...)` for unknown projects, which now resolves into the shared root error surface.

## Production content replacement owner

Canonical operational guide:

```text
docs/knowledge/content-replacement-guide.md
```

Replacement flow:

```text
real owner-supplied content
→ content-intake/evidence audit
→ replace pages.ts copy
→ replace Demo Project data
→ replace demo proof/career data
→ add approved contact/social links
→ integrate authoritative logo/colors
→ integrate approved project media
→ search/remove remaining public-facing demo markers
→ set contentIsDemo = false only after the checklist passes
```

Route/page architecture stays stable unless the real content demonstrates a concrete structural failure.

## Source accessibility boundary

Canonical source audit:

```text
docs/knowledge/accessibility-source-audit.md
```

Current source includes native landmarks, skip navigation, heading-order corrections, current-route semantics, focus/reflow/reduced-motion guards, and decorative demo-media semantics.

Do not claim rendered keyboard, screen-reader, zoom/reflow, contrast, or formal WCAG acceptance until browser/runtime validation is re-authorized.

## Architecture freeze rule

From this state forward:

```text
new text arrives
→ replace content owner

new project arrives
→ add approved project data/media

new logo arrives
→ replace brand owner

new real requirement appears
→ change only the smallest owner that cannot represent it
```

Do **not** keep adding structure merely to make the repository look more complete.

Examples that remain blocked without a real requirement:

- Services page;
- Team page;
- blog/news;
- portfolio filters/search;
- carousel/gallery system;
- CMS/admin;
- application/contact backend;
- analytics;
- production hosting/adapter;
- additional UI/component libraries.

## Deferred tracks

Do not currently run/prioritize:

```text
bun install
bun.lock generation
bun run validate
local preview
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Do not claim build/browser/runtime/accessibility/performance acceptance while those remain deferred.

## Next Step

**The website source architecture is now mature for content replacement. Continue only with authoritative asset/content substitution when inputs are supplied, or with narrowly-scoped source corrections if a concrete defect is found. The next high-value inputs are the final Hellocraft text, authoritative logo/vector/color source, real portfolio project inventory/media, real public contact channels, and real careers data. Local/runtime and hosting work remain deferred.**
