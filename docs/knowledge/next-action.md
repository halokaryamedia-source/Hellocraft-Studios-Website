# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Project Detail implementation commit:

```text
ae8a904217f2996749c2958d01e6b64074a2a2be
refine(project): align detail layout with approved portfolio direction
```

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED
HAZELIGHT_VISUAL_LEAD_APPROVED
BLIND_SQUIRREL_STRUCTURAL_BUSINESS_REFERENCE_APPROVED
HOMEPAGE_VISUAL_BASELINE_APPROVED
WORK_VISUAL_BASELINE_APPROVED
PROJECT_DETAIL_VISUAL_PROPAGATION_IMPLEMENTED
PROJECT_DETAIL_PROJECT_OWNER_APPROVAL_PENDING
STUDIO_VISUAL_PROPAGATION_PENDING
CAREERS_VISUAL_PROPAGATION_PENDING
CONTACT_VISUAL_PROPAGATION_PENDING
REAL_PROJECT_MEDIA_PENDING
REAL_PORTFOLIO_EVIDENCE_PENDING
FINAL_PRODUCTION_FONT_PENDING
PRODUCTION_LOGO_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

## Approved Visual Baselines

The project owner explicitly approved:

```text
Homepage
→ primary visual grammar

Work
→ approved portfolio-index propagation
```

Reference roles remain:

```text
Hazelight Studios
→ visual lead
→ game-first confidence
→ media prominence
→ restraint / whitespace / typography behavior

Blind Squirrel Games
→ structural/business reference
→ studio credibility
→ project + capability communication
→ client-facing game-development professionalism
```

Current thesis:

> **A professional Minecraft game studio presented with Hazelight-style visual confidence and media-first simplicity, combined with Blind-Squirrel-style project and capability credibility.**

Do not reopen visual-direction research unless the project owner changes direction.

## Work Route — APPROVED

`src/routes/work/+page.svelte` is now an approved route baseline.

Approved composition:

```text
restrained Work introduction
→ one lead project with dominant media
→ remaining projects as clean media/copy rows
→ no filters/categories
→ no repeated uniform card grid
→ no decorative project numbering
→ straightforward responsive stack
```

Do not casually redesign Work while propagating later routes.

## Current Project Detail Route

`src/routes/work/[slug]/+page.svelte` has now been rebuilt from the approved Homepage + Work grammar.

Previous state problems:

```text
oversized project title up to 9rem
repeated alternating chapter backgrounds
large section headings repeated mechanically
old ProjectMediaPlaceholder call passed unsupported label/index props
project-link decorative arrow treatment
```

Current composition:

```text
compact Back to work action
→ restrained project title + summary/facts
→ one dominant hero media surface
→ optional contribution section on neutral secondary surface
→ project narrative sections separated by content boundaries, not alternating chapter styling
→ optional project links in a single dark utility surface
→ simple View all work closing
```

The unsupported `label` / `index` placeholder props were removed. The route now uses the current `ProjectMediaPlaceholder` contract:

```text
variant
tone
```

Project data remains owned by `src/lib/content/projects.ts`; no real client, year, role, outcome, or media claim was invented.

## Project Detail Review Boundary

The next user-facing decision is **Project Detail visual approval**.

A source-equivalent Chromium layout-proxy attempt was made after implementation, but Chromium stalled in the current tool environment before screenshots were produced.

Therefore current proof is:

```text
source implementation            = completed
old placeholder contract mismatch = corrected
layout screenshot proxy          = unavailable in current environment
actual Svelte runtime            = deferred / unproven
project-owner visual approval    = pending
```

Do not claim rendered/runtime acceptance from source inspection alone.

## Immediate Next Step

### 1. Review Project Detail

If the project owner approves the Project Detail direction:

```text
Project Detail approved
→ freeze Project Detail as route baseline
→ inspect current Studio source
→ propagate approved visual grammar to Studio only
→ review Studio before Careers
```

If Project Detail receives critique:

```text
identify concrete page-specific problem
→ make smallest Project-Detail-only correction
→ preserve approved Homepage and Work baselines
```

### 2. Route propagation order after Project Detail approval

```text
Studio
→ Careers
→ Contact
```

Each route should inherit the accepted grammar while solving its own content relationship rather than cloning the Homepage.

## Preserve These Rules

```text
Homepage is APPROVED
Work is APPROVED
real media > invented decoration
content hierarchy > repeated visual systems
no numbered chapter progression
no Blind Squirrel wave/brand-graphic copying
no literal Hazelight floating-image recreation
no fake HUD / coordinates / inventory UI
no generic card grid when content hierarchy differs
no invented KPI strip
no Services route initially
no Work filters/categories initially
no fabricated contact or client claims
```

## Production Content / Media Still Pending

Final replacement owners remain:

```text
src/lib/content/pages.ts
→ final public copy

src/lib/content/projects.ts
→ real portfolio entries and verified project facts

src/lib/content/demo-data.ts
→ real proof/careers replacement

src/lib/content/site.ts
→ approved public/social/contact values

BrandLockup
→ final production logo

ProjectMediaPlaceholder / future media owner
→ real project imagery/video
```

Real project media is expected to materially improve Homepage, Work, and Project Detail. Adjust crops/proportions from actual media later rather than inventing decorative systems now.

## Technical / Deferred Boundary

Current declared baseline:

```text
Svelte     = ^5.56.1
SvelteKit  = ^2.63.0
Bun        = 1.3.14
```

Still deferred unless explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full local runtime/browser acceptance
hosting/provider selection
production adapter selection
```

## Next Step

**Get project-owner review of the newly propagated `/work/[slug]` Project Detail. If approved, continue to Studio; otherwise make only the smallest Project-Detail-specific correction.**
