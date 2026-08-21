# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Homepage implementation commit:

```text
4c0d1f9b1732570c6fb2a37803d9608d60c282fd
refine(home): tune rendered composition and closing
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
HOMEPAGE_LAYOUT_RENDER_PROXY_REVIEWED
HOMEPAGE_REFINEMENT_PASS_3_IMPLEMENTED
HOMEPAGE_ACTUAL_SVELTE_RUNTIME_APPROVAL_PENDING
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

## Approved Visual Direction

The project owner approved this reference pairing:

```text
Hazelight Studios
→ visual lead
→ game-first confidence
→ media prominence
→ restrained hero
→ elegant whitespace and typography behavior

Blind Squirrel Games
→ structural/business reference
→ clear studio credibility
→ project + capability communication
→ client-facing game-development professionalism
```

Current thesis:

> **A professional Minecraft game studio presented with Hazelight-style visual confidence and media-first simplicity, combined with Blind-Squirrel-style project and capability credibility.**

Short form:

```text
cinematic
clean
confident
game-first
```

Minecraft identity should come primarily from real Hellocraft project media, not inventory UI, pixel borders, fake HUDs, coordinates, or global Minecraft-themed chrome.

## Current Homepage Source State

Only `src/routes/+page.svelte` has received the visual redesign/refinement work.

Current composition:

```text
Header
→ existing shared header unchanged

Hero
→ Minecraft game studio eyebrow
→ large studio statement + concise support copy
→ dominant development-media field
→ smaller Hellocraft brand/media field overlapping the main media composition

Selected Work
→ visible section anchor
→ large primary project media
→ project title + concise description
→ secondary project uses a different copy/media rhythm
→ no numbered chapters
→ no uniform card grid

Studio / Capability
→ neutral secondary surface
→ strong studio statement
→ concise supporting capability narrative
→ one structural divider only where content relationship warrants it

Contact
→ single large closing statement
→ supporting copy + contact action below
→ avoids repeating another heading-left / copy-right chapter formula

Footer
→ existing shared footer unchanged
```

Shared Header, Footer, app-wide design tokens, Work, Studio, Careers, Contact, and project-detail routes remain intentionally unpropagated.

## Pass 3 Evidence and Corrections

A source-equivalent static Homepage render was produced from the current Homepage structure, app-level visual tokens, Header/Footer structure, and current development copy. Desktop and mobile layouts were rendered for composition review.

This render is a **layout-review proxy**, not proof of the exact Svelte runtime, because the environment still cannot run the repository itself and the development logo was approximated in the proxy.

The proxy made three source-level weaknesses sufficiently clear to correct:

```text
1. hero brand/media accent looked detached from the dominant media field
2. Selected Work anchor was too visually quiet after the large hero
3. Contact repeated the same two-column composition language already used elsewhere
```

Pass 3 adopted:

```text
hero brand/media field now overlaps the main media composition
Selected Work heading is moderately stronger, not oversized
Contact becomes a simpler closing statement + supporting action layout
mobile remains a straightforward stack
```

Preserve the negative rules:

```text
no numbered chapter progression
no Blind Squirrel wave/brand-graphic copying
no literal Hazelight floating-image recreation
no fake HUD / coordinates / inventory UI
no generic card grid
no decorative rails
no invented KPI strip
no extra Services route
```

## Important Limitation

Current proof level:

```text
source implementation                  = completed
layout-render proxy desktop/mobile     = reviewed
actual Svelte runtime/browser behavior = not yet proven
build/check proof                      = still deferred
final visual approval                  = pending project-owner review / real runtime
```

Do not describe the Homepage as finally approved until the project owner explicitly approves the rendered result.

Real media is still expected to materially change and improve the final visual impression. Do not compensate for missing portfolio media with additional decorative systems.

## Immediate Next Step

Continue with **Homepage visual acceptance only**.

When an actual Local Svelte preview or project-owner screenshot is available:

```text
1. inspect desktop Homepage
2. inspect mobile Homepage
3. compare against the approved Hazelight + Blind Squirrel traits
4. identify only concrete visual problems visible in the render
5. make the smallest Homepage-only correction
6. repeat until the project owner explicitly approves the Homepage
```

Until Homepage approval:

```text
DO NOT redesign Work
DO NOT redesign project detail
DO NOT redesign Studio
DO NOT redesign Careers
DO NOT redesign Contact
DO NOT globally refactor visual tokens merely for consistency
```

## Technical / Deferred Boundary

Current declared baseline remains:

```text
Svelte     = ^5.56.1
SvelteKit  = ^2.63.0
Bun        = 1.3.14
```

The project owner still defers unless explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full local runtime acceptance
hosting/provider selection
production adapter selection
```

## Next Step

**Review the latest Homepage visually. Keep all remaining routes unchanged until explicit Homepage approval.**
