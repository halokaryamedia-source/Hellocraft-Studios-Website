# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Studio implementation commit:

```text
ade63c9992a94511b9a401c910aad588aabe415f
refine(studio): align studio page with approved visual baseline
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
PROJECT_DETAIL_ROUTE_BASELINE_APPROVED_TO_CONTINUE
STUDIO_VISUAL_PROPAGATION_IMPLEMENTED
STUDIO_PROJECT_OWNER_APPROVAL_PENDING
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

The project owner has approved the route direction sufficiently to continue through:

```text
Homepage
→ primary visual grammar

Work
→ portfolio-index interpretation

Project Detail
→ project-detail interpretation approved to continue propagation
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

## Current Studio Route

`src/routes/studio/+page.svelte` has now been rebuilt from the accepted route grammar.

Previous Studio problems:

```text
hero title scaled up to 10rem
Capability / Approach repeated the same large split-section formula
Approach used a dark chapter block that reintroduced rejected dark/light chapter rhythm
large headings repeated mechanically
contact closing repeated another oversized section pattern
```

Current composition:

```text
restrained Studio introduction
→ Studio statement + supporting copy
→ capability narrative on the paper surface
→ working approach on a neutral secondary surface
→ optional verified proof only when demo mode is off and real evidence exists
→ simple closing Contact statement
```

The page deliberately does not add:

```text
fake KPI strips
service-card grids
invented team size / client / award claims
new Services taxonomy
Minecraft HUD / pixel UI
numbered chapters
Blind Squirrel wave graphics
literal Hazelight layout copying
```

Existing content ownership is preserved:

```text
src/lib/content/pages.ts
→ Studio copy

src/lib/content/demo-data.ts
→ temporary Studio proof data
```

The existing proof condition remains important:

```text
contentIsDemo = true
→ demo proof items remain hidden from the public presentation
```

## Studio Review Boundary

A source-equivalent Chromium layout-proxy attempt was made after the Studio implementation, but Chromium again stalled in the current environment before screenshots were produced.

Current proof level:

```text
Studio source implementation     = completed
content / semantic structure     = reviewed at source level
layout screenshot proxy          = unavailable in current environment
actual Svelte runtime            = deferred / unproven
project-owner visual approval    = pending
```

Do not claim rendered/runtime acceptance from source inspection alone.

## Immediate Next Step

### 1. Review Studio

If the project owner approves the Studio direction:

```text
Studio approved
→ freeze Studio as route baseline
→ inspect current Careers source
→ propagate approved visual grammar to Careers only
→ review Careers before Contact
```

If Studio receives critique:

```text
identify concrete Studio-specific problem
→ make smallest Studio-only correction
→ preserve approved Homepage / Work / Project Detail baselines
```

### 2. Remaining propagation order

```text
Careers
→ Contact
```

Each route should solve its own content relationship rather than cloning the Homepage.

## Preserve These Rules

```text
Homepage is APPROVED
Work is APPROVED
Project Detail is accepted as the current route baseline for continued propagation
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
no fabricated contact, client, award, or studio-scale claims
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

Real project media is expected to materially improve Homepage, Work, and Project Detail. Final Studio credibility should come from verified studio/project evidence rather than invented marketing metrics.

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

**Get project-owner review of the propagated Studio page. If approved, continue to Careers; otherwise make only the smallest Studio-specific correction.**
