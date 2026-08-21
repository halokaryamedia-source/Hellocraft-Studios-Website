# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

Latest Careers implementation commit:

```text
aac6f662bb6b6f08587c75e0747ab26be2c87e91
refine(careers): align careers page with approved visual baseline
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
STUDIO_ROUTE_BASELINE_APPROVED_TO_CONTINUE
CAREERS_VISUAL_PROPAGATION_IMPLEMENTED
CAREERS_PROJECT_OWNER_APPROVAL_PENDING
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

## Approved Visual Direction

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

The accepted route grammar now extends through:

```text
Homepage
→ Work
→ Project Detail
→ Studio
```

Do not reopen the visual-direction research unless the project owner explicitly changes direction.

## Careers Route

`src/routes/careers/+page.svelte` has now been propagated from the accepted visual language.

Previous Careers problems:

```text
hero title scaled up to 10rem
large section headings repeated mechanically
General / Application repeated chapter-like split sections
Application used another dark chapter block
demo career entries were rendered as visible vacancies while contentIsDemo = true
```

Current composition:

```text
restrained Careers introduction
→ studio/culture statement on a neutral secondary surface
→ Open roles section with a compact section anchor
→ real openings, when approved, render as clean editorial rows
→ simple How to apply closing section
```

## Demo Vacancy Safety

Demo career data remains available in:

```text
src/lib/content/demo-data.ts
```

but the Careers route now uses the publication boundary:

```text
contentIsDemo = true
→ do not render demo roles as public vacancies
→ show careersCopy.openings.emptyState instead

contentIsDemo = false + approved careerOpenings
→ render actual opening rows
```

This preserves development data without presenting fabricated recruitment claims.

## Careers Review Boundary

Current proof level:

```text
Careers source implementation       = completed
demo vacancy publication guard      = implemented
content / semantic structure        = reviewed at source level
actual Svelte runtime               = deferred / unproven
project-owner visual approval       = pending
```

Do not claim exact rendered/runtime acceptance while local runtime validation remains deferred.

## Immediate Next Step

### 1. Review Careers

If the project owner approves Careers:

```text
Careers approved
→ freeze Careers as route baseline
→ inspect current Contact source
→ propagate approved visual grammar to Contact only
→ review Contact
```

If Careers receives critique:

```text
identify concrete Careers-specific problem
→ make smallest Careers-only correction
→ preserve accepted Homepage / Work / Project Detail / Studio baselines
```

### 2. Remaining visual propagation

```text
Contact
```

After Contact is accepted, route-level visual discovery/propagation is effectively complete and the project can move into production replacement and finalization:

```text
real portfolio data + media
→ final studio/career/contact content
→ production logo + typography
→ responsive/accessibility/performance QA
→ build/runtime validation when re-authorized
→ publication / hosting
```

## Preserve These Rules

```text
Homepage is APPROVED
Work is APPROVED
Project Detail direction is accepted to continue
Studio direction is accepted to continue
real media > invented decoration
content hierarchy > repeated visual systems
no numbered chapter progression
no Blind Squirrel wave/brand-graphic copying
no literal Hazelight layout recreation
no fake HUD / coordinates / inventory UI
no generic card grid when content hierarchy differs
no invented KPI strip
no Services route initially
no Work filters/categories initially
no fabricated contact, client, award, team-size, or recruitment claims
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

**Review the propagated Careers page. If approved, continue to Contact as the final route-level visual propagation.**
