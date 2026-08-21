# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Homepage implementation commit:

```text
93cb653ecdd76bf9193e120c0f21d9e7b5fb1ab8
refine(home): strengthen hero and project composition
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
HOMEPAGE_REFINEMENT_PASS_2_IMPLEMENTED
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

`src/routes/+page.svelte` has now received two bounded visual implementation passes around the approved direction.

Current composition:

```text
Header
→ existing shared Hellocraft header remains unchanged

Hero
→ Minecraft game studio eyebrow
→ large but restrained studio statement
→ supporting copy + Work action
→ one dominant dark development-media surface
→ one smaller Hellocraft brand/media surface
→ the two surfaces form one intentional composition instead of one generic full-width rectangle

Selected Work
→ compact section introduction
→ primary project media intentionally narrower than the full shell
→ large project title + concise summary
→ secondary project uses a different copy/media composition and substantially different vertical rhythm
→ no numbered chapters
→ no uniform card grid

Studio / Capability
→ neutral secondary surface rather than another dark chapter field
→ concise studio statement
→ supporting capability narrative
→ single structural divider only where content relationship warrants it
→ no decorative chapter system

Contact
→ clean closing section

Footer
→ existing shared footer remains unchanged
```

Only the Homepage route source was materially changed. Shared Header, Footer, app-wide design tokens, Work, Studio, Careers, Contact, and project-detail routes remain intentionally unpropagated.

## Why Pass 2 Changed the First Rebuild

The first approved-reference implementation still expressed the hero as essentially:

```text
headline + supporting copy + one large rectangle
```

That was cleaner than the rejected earlier Homepage, but it still did not use the strongest lesson from Hazelight: visual identity comes from the relationship between a confident statement and game/studio media rather than from headline scale alone.

Pass 2 therefore adopted only these reference-grounded corrections:

```text
OBSERVED
→ Hazelight composes statement + multiple media fields as one hero experience
→ Blind Squirrel lets brand statement and project media share visual weight

ADOPTED
→ one primary media field + one smaller branded media field
→ stronger separation between primary and secondary project rhythm
→ less chapter-like background alternation

REJECTED
→ literal Hazelight floating-image recreation
→ Blind Squirrel wave graphics / section numbering
→ fake HUD, coordinates, Minecraft chrome, generic cards, decorative rails
```

## Render / Tooling Blocker Encountered

A local visual-preview attempt was made after the project owner asked to continue the Homepage review.

The available container includes Chromium, but the current tool environment could not resolve `github.com`, so the repository could not be cloned into that runtime for preview.

Therefore:

```text
source-level refinement = completed
actual browser render in this environment = unavailable
rendered visual approval = still pending
```

Do not infer that the browser result is approved from source inspection alone.

This is a tooling/environment limitation for the current session, not a project architecture problem and not a reason to add CI, hosting, or a new dependency.

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

The next meaningful step remains **actual visual review of the rebuilt Homepage**, not more reference research and not redesign of the remaining routes.

When a rendered preview is available:

```text
render Homepage
→ inspect desktop + mobile composition
→ compare against approved Hazelight / Blind Squirrel traits
→ collect concrete project-owner critique
→ make the smallest Homepage-only correction
→ repeat until project owner approves
```

If the current assistant environment still cannot render the repository, a project-owner screenshot of the current Local Homepage is sufficient evidence for the next visual critique pass.

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

The project owner still defers broad technical acceptance work:

```text
bun.lock generation
full bun run validate gate
hosting/provider selection
production adapter selection
```

A visual-only local preview is appropriate when available, but it must not be confused with final technical or deployment acceptance.

Current proof state:

```text
source implementation = completed
rendered/browser acceptance = not yet proven
full build/check proof = not claimed
```

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
7. obtain a rendered Homepage view when possible
8. collect project-owner critique
9. make bounded Homepage corrections
10. stop when Homepage is visually approved
```

## Next Step

**Obtain an actual rendered view of the current Homepage and critique it against the approved Hazelight + Blind Squirrel direction. Keep all remaining routes unchanged until the Homepage receives explicit visual approval.**
