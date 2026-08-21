# Next Action

## Continuation Snapshot

This file is the authoritative resume point for the current Hellocraft Studios Website work.

Working authority: **`Local`**.

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
CANONICAL_PUBLIC_NAMING_APPROVED
PORTFOLIO_ROUTE_ESTABLISHED
ABOUT_ROUTE_ESTABLISHED
LEGACY_WORK_ROUTE_REDIRECTED
LEGACY_STUDIO_ROUTE_REDIRECTED
HOMEPAGE_VISUAL_BASELINE_APPROVED
PORTFOLIO_VISUAL_BASELINE_APPROVED
PROJECT_DETAIL_ROUTE_BASELINE_ACCEPTED
ABOUT_ROUTE_BASELINE_ACCEPTED
CAREERS_ROUTE_BASELINE_APPROVED
CONTACT_ROUTE_BASELINE_APPROVED
ROUTE_LEVEL_VISUAL_SYSTEM_FROZEN
PRODUCTION_CONTENT_INVENTORY_ESTABLISHED
REAL_PORTFOLIO_SOURCE_MATERIAL_PENDING
REAL_PROJECT_MEDIA_PENDING
FINAL_PUBLIC_COPY_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING_IF_ANY
PRODUCTION_LOGO_PENDING
FINAL_PRODUCTION_FONT_PENDING
RESPONSIVE_ACCESSIBILITY_PERFORMANCE_QA_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

## Canonical Public Naming

The project owner requested standard, general website terminology rather than unusual creative labels.

Canonical navigation is now:

```text
Portfolio
About
Careers
Contact
```

Canonical public routes:

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

The logo links to Home.

Legacy compatibility redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

Do not reintroduce `Work` or `Studio` as primary public navigation labels.

`Hellocraft Studios` remains the company/brand name; only page/navigation terminology changed.

## Approved Visual System

Reference roles remain:

```text
Hazelight Studios
→ visual lead
→ game-first confidence
→ media prominence
→ restraint / whitespace / typography behavior

Blind Squirrel Games
→ structural/business reference
→ company credibility
→ project + capability communication
→ client-facing game-development professionalism
```

Accepted route system:

```text
Home
→ Portfolio
→ Project Detail
→ About
→ Careers
→ Contact
```

Do not reopen route-level visual discovery from model taste. Real media may later justify crop/proportion corrections, but not a new visual direction by default.

## Production Source Audit Result

Canonical production inventory:

```text
docs/knowledge/production-content-inventory.md
```

Currently present production/development evidence:

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

Still not present:

```text
real portfolio project records
real project screenshots/renders/video
verified public client/partner evidence
approved public credibility evidence
approved public contact channels
real current career openings
production vector logo / exact brand specification
final production typography
```

Current project/page/proof/career content remains demo/development content.

## Immediate Next Step — Production Intake

The next material action is **not more route redesign**.

Priority intake order:

```text
P0 — real portfolio project facts
P0 — real project screenshots / renders / video
P1 — authoritative About/company facts / credibility evidence
P1 — approved business contact + social channels
P2 — real current career openings, if any
P2 — production logo / exact brand values / final typography
```

For project intake, unknown values are acceptable. Do not fill gaps by inference.

Useful project evidence includes:

```text
public / working project name
what Hellocraft actually contributed
what the project/experience was
client/partner only if disclosure is permitted
year/date only if authoritative
public URL if applicable
screenshots/renders/video
publication restrictions / credit requirements
```

## Production Replacement Order

Once authoritative material exists:

```text
1. inventory every supplied item
2. verify/deduplicate and assign publication state
3. select publishable portfolio projects
4. replace src/lib/content/projects.ts
5. integrate real project media through the existing media boundary
6. replace final Home / Portfolio / About / Careers / Contact copy
7. add approved contact/social channels
8. replace/remove demo proof and careers data
9. integrate authoritative production logo/colors/typography
10. perform publication gate review
```

Do not reconstruct routes merely because real content arrives.

## Demo Mode Gate

Keep:

```text
contentIsDemo = true
```

until all public development material has been replaced or deliberately approved.

Minimum release blockers still open:

```text
[ ] demo portfolio records removed/replaced
[ ] real approved project media integrated
[ ] final public page copy approved
[ ] real public contact channels integrated
[ ] demo proof/career content removed or replaced
[ ] production brand state approved
[ ] final metadata/publication text ready
```

Until then, preserve the development notice and `noindex, nofollow` behavior.

## Technical / Deferred Boundary

Current declared baseline remains:

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

**Receive and audit authoritative Hellocraft portfolio/media/About/contact sources through `production-content-inventory.md`. Keep the public naming standard: Portfolio, About, Careers, Contact.**
