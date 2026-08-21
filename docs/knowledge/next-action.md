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
PROJECT_FIRST_EDITORIAL_SEQUENCE_IMPLEMENTED
UNIFORM_CARD_GRID_REMOVED
REPEATED_STAR_DECORATION_REMOVED
PILL_HEAVY_UI_REMOVED
SITE_SHELL_REFINED
HOME_REFINED
WORK_REFINED
PROJECT_DETAIL_REFINED
STUDIO_REFINED
CAREERS_REFINED
CONTACT_REFINED
ERROR_SURFACE_REFINED
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

Continue preparing Hellocraft until the source architecture/presentation is mature and later content work is primarily replacing text/data/media.

The project owner selected **Blind Squirrel Games** as the primary external visual reference and rejected the prior presentation as insufficiently professional/generic.

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

> **Professional cinematic game studio** — confident, project-first, high-contrast, and restrained, with Hellocraft's own cyan/logo identity retained.

Blind Squirrel is a reference, not a template. Do not copy its exact assets, layout, copy, or identity.

## Material source changes

### Removed from the previous visual system

```text
split hero + large decorative star composition
uniform two-column project card grid
repeated star decoration across sections
pill-heavy navigation/actions
proof cards / generic agency-card patterns
large cyan CTA fields used as default emphasis
large decorative HELLOCRAFT footer word wall
```

### Current source presentation

```text
Header
→ dark structural shell + text navigation + cyan active rule

Home
→ oversized dark hero
→ full-width cinematic media placeholder
→ alternating editorial project sequence
→ studio/capability text sections
→ restrained ruled proof
→ dark contact close

Work
→ oversized dark intro
→ editorial project sequence

Project detail
→ dark identity hero
→ large media stage
→ contribution + flexible ruled sections

Studio
→ dark identity hero
→ direct capabilities/approach
→ restrained proof
→ dark contact close

Careers
→ dark recruitment hero
→ opening rows
→ context + application close

Contact
→ dark contact hero
→ real-only channel list
→ restrained inquiry section

Footer
→ compact professional dark footer + cyan rule
```

## Content replacement remains stable

Final content still belongs in the existing owners:

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

Do not claim build/browser/performance acceptance while these remain deferred.

## Next Step

**Use the new Blind-Squirrel-inspired source direction as the visual baseline. The next high-value step is visual preview/review of this refactor, then make only specific source adjustments from that review. Keep content owners/route architecture frozen and keep runtime/hosting work deferred.**
