# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Work implementation commit:

```text
5c5f9c46a30f070f1871dd1f4c17306155d60e6f
refine(work): align portfolio index with approved homepage
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
WORK_VISUAL_PROPAGATION_IMPLEMENTED
WORK_LAYOUT_RENDER_PROXY_REVIEWED
WORK_PROJECT_OWNER_APPROVAL_PENDING
PROJECT_DETAIL_VISUAL_PROPAGATION_PENDING
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

## Approved Visual Baseline

The project owner explicitly approved the Homepage after the third visual refinement pass.

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

## Current Work Route

`src/routes/work/+page.svelte` has been rebuilt from the approved Homepage grammar.

Previous state:

```text
very large Work hero
+ project count
+ repeated uniform ProjectCard list
```

Current state:

```text
restrained Work hero
→ concise supporting copy + project count
→ one lead project with dominant media
→ title / summary presentation derived from Homepage hierarchy
→ remaining projects as clean media/copy rows
→ no filters/categories
→ no card grid
→ no decorative project numbering
→ straightforward responsive stack
```

The change intentionally keeps `projects.ts` as the data owner and `ProjectMediaPlaceholder.svelte` as the development-media owner. No project facts, categories, client claims, or service taxonomy were invented.

## Work Layout Review

A source-equivalent static layout proxy was rendered for desktop and mobile after the Work source change.

Observed result:

```text
desktop
→ Work hero reads clearly without overpowering the project list
→ first project carries the strongest visual weight
→ subsequent rows remain readable and professional
→ hierarchy comes from project importance rather than arbitrary offsets

mobile
→ hero collapses to a clean vertical introduction
→ media / title / summary / action sequence remains clear
→ project rows become a straightforward stack
```

The proxy is composition evidence only. It is not proof of exact Svelte runtime behavior, real logo rendering, final media crops, or production font behavior.

## Immediate Next Step

### 1. Review Work

The next user-facing decision is **Work page visual approval**.

If the project owner approves the Work direction:

```text
Work approved
→ freeze Work as route baseline
→ inspect current /work/[slug] source
→ propagate the approved visual language to Project Detail only
→ review Project Detail before moving to Studio
```

If Work receives critique:

```text
identify only visible concrete problem
→ make smallest Work-only correction
→ do not reopen Homepage or global architecture
```

### 2. Route propagation order after Work approval

```text
Project Detail [slug]
→ Studio
→ Careers
→ Contact
```

Do not propagate all routes at once. Each page should inherit the accepted visual grammar while solving its own content relationship rather than cloning the Homepage layout.

## Preserve These Rules

```text
Homepage is APPROVED — do not casually redesign it
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

Real project media is expected to materially improve the Homepage, Work, and Project Detail presentation. Adjust crops/proportions from the actual media later rather than inventing decorative placeholders now.

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

Therefore do not claim exact runtime, build, performance, or deployment acceptance from layout proxies.

## Next Step

**Get project-owner review of the newly propagated Work page. If approved, continue to `/work/[slug]` Project Detail; otherwise make only the smallest Work-specific correction.**
