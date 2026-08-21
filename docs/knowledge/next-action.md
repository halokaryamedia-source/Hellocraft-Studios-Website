# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Homepage implementation commit:

```text
bc5a6e1e50001b2402efc52449259708d64b3c3e
refine(home): align homepage with approved studio references
```

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED
REFERENCE_RESEARCH_COMPLETED
HAZELIGHT_VISUAL_LEAD_APPROVED
BLIND_SQUIRREL_STRUCTURAL_BUSINESS_REFERENCE_APPROVED
HOMEPAGE_VISUAL_THESIS_APPROVED
HOMEPAGE_SOURCE_REBUILD_IMPLEMENTED
HOMEPAGE_RENDERED_VISUAL_APPROVAL_PENDING
REMAINING_ROUTE_VISUAL_PROPAGATION_BLOCKED
FINAL_PRODUCTION_FONT_PENDING
REAL_PROJECT_MEDIA_PENDING
REAL_PORTFOLIO_EVIDENCE_PENDING
REAL_STUDIO_PROFILE_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
BUN_LOCK_PENDING_INSTALL
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

## Most Important Current User Decision

The project owner approved this reference pairing:

```text
Hazelight Studios
→ visual lead
→ game-first confidence
→ hero restraint
→ media prominence
→ elegant whitespace / typography behavior

Blind Squirrel Games
→ structural/business reference
→ clear studio credibility
→ project + capability communication
→ client-facing game-development professionalism
```

Do not collapse these into a literal hybrid template.

Current visual thesis:

> **A professional Minecraft game studio presented with Hazelight-style visual confidence and media-first simplicity, combined with Blind-Squirrel-style project and capability credibility.**

Short form:

```text
cinematic
clean
confident
game-first
```

Minecraft identity should come primarily from Hellocraft's real project media, not inventory UI, pixel borders, fake HUDs, coordinates, or global Minecraft-themed chrome.

## Current Homepage Source State

`src/routes/+page.svelte` has been rebuilt around the approved direction.

Current composition:

```text
Header
→ existing shared Hellocraft header remains unchanged

Hero
→ Minecraft game studio eyebrow
→ restrained large statement
→ supporting copy + Work action
→ wide dark development media surface reserved for future real project media

Selected Work
→ compact section introduction
→ primary large project surface
→ secondary project with a different media/copy composition
→ no numbered chapters
→ no uniform card grid

Studio / Capability
→ strong dark field
→ concise studio statement
→ supporting capability narrative
→ no decorative chapter system

Contact
→ clean closing section

Footer
→ existing shared footer remains unchanged
```

Only the Homepage route source was materially changed. Shared Header, Footer, app-wide design tokens, Work, Studio, Careers, Contact, and project-detail routes were intentionally not visually propagated yet.

## What Was Preserved

Preserve unless new user feedback provides a concrete reason to change it:

```text
route architecture
content-owner model
Hellocraft development logo assets
real-logo-over-fake-lockup rule
no Services route initially
no Work filters initially
no fabricated contact channels
demo-mode noindex guard
real media > invented decoration
minimal decorative UI
no numbered chapter progression
no fake KPI strips
no global Minecraft inventory/pixel UI
```

## Immediate Next Step

### 1. Homepage visual acceptance

The next meaningful step is **visual review of the rebuilt Homepage**, not more reference research and not redesign of the remaining routes.

When rendered/browser review is explicitly re-authorized:

```text
render Homepage
→ inspect desktop + mobile composition
→ compare against approved Hazelight / Blind Squirrel traits
→ identify concrete visual weaknesses
→ make the smallest Homepage-only correction
→ repeat until project owner approves
```

Do not claim rendered visual quality from source inspection alone.

### 2. Do not propagate yet

Until the project owner explicitly approves the Homepage visual direction:

```text
DO NOT redesign Work
DO NOT redesign project detail
DO NOT redesign Studio
DO NOT redesign Careers
DO NOT redesign Contact
DO NOT refactor global visual tokens merely for consistency
```

Once Homepage is approved, derive the minimum reusable visual rules from the accepted result and then propagate them deliberately.

## Validation Boundary

Current declared baseline:

```text
Svelte     = ^5.56.1
SvelteKit  = ^2.63.0
Bun        = 1.3.14
```

The Homepage change uses existing Svelte/component/content patterns and introduces no dependency, backend, state layer, or API.

The project owner still defers:

```text
bun install
bun.lock generation
bun run validate
local runtime/browser acceptance
hosting/provider selection
production adapter selection
```

Therefore:

```text
source implementation = completed
rendered/browser acceptance = not yet proven
build/check proof = still deferred
```

Do not present deferred proof as completed.

## Content / Media Boundary

Current copy and projects remain development data.

Final replacement owners remain:

```text
src/lib/content/pages.ts
→ final page copy

src/lib/content/projects.ts
→ real portfolio entries

src/lib/content/demo-data.ts
→ real careers/proof replacement

src/lib/content/site.ts
→ approved public/social/contact values

BrandLockup
→ final production logo

ProjectMediaPlaceholder / future media owner
→ real project imagery/video
```

Real media is expected to materially improve the final visual result. Do not compensate for missing real media with invented decorative systems.

## Resume Instruction

When work resumes:

```text
1. read AGENTS.md
2. read CONTEXT.md
3. read this file
4. inspect current Homepage source
5. do NOT repeat external reference research unless the user changes direction
6. do NOT redesign remaining routes
7. if visual preview/runtime is authorized, render Homepage only
8. collect project-owner critique
9. make bounded Homepage corrections
10. stop when Homepage is visually approved
```

## Next Step

**Review and refine the rebuilt Homepage against the approved Hazelight + Blind Squirrel direction. Keep all remaining routes unchanged until the Homepage receives explicit visual approval.**
