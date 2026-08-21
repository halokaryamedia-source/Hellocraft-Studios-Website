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
BLIND_SQUIRREL_PRIMARY_REFERENCE_ADOPTED
PROFESSIONAL_GAME_STUDIO_DIRECTION_ADOPTED
BLIND_SQUIRREL_INSPIRED_SOURCE_REFACTOR_IMPLEMENTED
HELLOCRAFT_SIGNATURE_GRAMMAR_ADOPTED
EDITORIAL_RAIL_IMPLEMENTED
CUT_CORNER_MEDIA_LANGUAGE_IMPLEMENTED
CYAN_STRUCTURAL_RAIL_IMPLEMENTED
PROJECT_FIRST_EDITORIAL_SEQUENCE_IMPLEMENTED
UNIFORM_CARD_GRID_REMOVED
REPEATED_STAR_DECORATION_REMOVED
PILL_HEAVY_UI_REMOVED
SITE_SHELL_REFINED
HOME_SIGNATURE_REFINED
WORK_SIGNATURE_REFINED
STUDIO_SIGNATURE_REFINED
PROJECT_MEDIA_SIGNATURE_REFINED
SOURCE_ACCESSIBILITY_BASELINE_RETAINED
BRAND_LOCKUP_REPLACEMENT_SURFACE_READY
PROJECT_MEDIA_REPLACEMENT_SURFACE_READY
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

Continue improving the website presentation until it feels professional, distinctive, and not like a generic AI/agency template. Final Hellocraft text/data/media will be supplied later.

The project owner selected **Blind Squirrel Games** as the primary external visual reference, but the site must retain its own Hellocraft identity rather than reading as a copy.

Do not resume hosting/provider selection or local/runtime testing until explicitly re-authorized.

## Current visual direction

Canonical owner:

```text
docs/foundation/04-visual-direction.md
```

Implementation record:

```text
docs/knowledge/visual-source-implementation.md
```

Current thesis:

> **Professional cinematic game studio with a Hellocraft-specific editorial rail and cut-media grammar.**

## Current distinctive grammar

The source no longer relies only on common professional-game-studio patterns.

Hellocraft-specific visual identifiers now include:

```text
editorial section rail
→ narrow metadata column + cyan structural line

project media
→ cut top-right / bottom-left geometry
→ narrow cyan side rail
→ restrained production-field treatment while dummy media is active

project showcase
→ alternating media/text balance
→ oversized low-contrast project index
→ cyan metadata rule

surfaces
→ hard / near-square edges
→ thin rules
→ warm neutral + near-black + cyan
```

The star motif is not repeated throughout the page; the actual logo remains the brand owner.

## Content replacement remains stable

Final content still belongs in:

```text
src/lib/content/pages.ts
→ final page copy

src/lib/content/projects.ts
→ real approved portfolio entries

src/lib/content/demo-data.ts
→ replace/remove demo proof and careers items

src/lib/content/site.ts
→ public site/social/navigation values

BrandLockup / BrandSymbol
→ authoritative logo replacement

Project media owner
→ real project imagery/video
```

Do not rewrite route architecture merely because final text arrives.

## Demo/publication guard

`contentIsDemo` remains true. The root `noindex, nofollow` guard must remain until demo content is fully replaced and approved.

## Deferred proof

Do not currently run/prioritize:

```text
bun install
bun.lock generation
bun run validate
local preview as technical acceptance
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Preview-only visual rendering is allowed when explicitly requested by the project owner, but it is not technical acceptance.

## Next Step

**Preview the refined Hellocraft-signature homepage and review the actual composition. Make only targeted visual corrections from that preview. Keep content owners and route architecture frozen, and keep runtime/hosting work deferred.**
