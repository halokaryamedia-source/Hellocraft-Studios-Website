# Production Content Inventory

Authoritative operational inventory for replacing Hellocraft website demo content with production evidence.

This inventory follows `docs/knowledge/content-intake-contract.md`.

## Status

```text
ROUTE_LEVEL_VISUAL_SYSTEM_APPROVED
PRODUCTION_CONTENT_INTAKE_ACTIVE
WEBSITE_REPOSITORY_AUDITED
REAL_PORTFOLIO_SOURCE_MATERIAL_NOT_PRESENT
NO_CONTENT_INVENTION
DEMO_MODE_REMAINS_ACTIVE
```

## Audit baseline

Initial production-content audit performed against branch `Local` after Contact approval.

The current website repository is structurally ready for production replacement, but it does **not** currently contain enough authoritative project/studio material to perform that replacement safely.

## Source record — website repository

```text
ID: SOURCE-WEBSITE-001
Subject: Hellocraft Studios Website repository
Source type: GitHub repository / current website source
Repository: halokaryamedia-source/Hellocraft-Studios-Website
Branch: Local
Evidence status: VERIFIED
Publication status: INTERNAL_ONLY as an implementation source
Editorial status: ADOPTED as website source authority
```

Verified findings:

- route-level visual propagation is complete in source;
- demo mode is still active;
- page copy is development copy;
- portfolio project entries are development-only demo records;
- proof and careers collections are development-only demo records;
- public contact methods are empty;
- social links are empty;
- project imagery/video is not present;
- only development brand raster assets are present under `src/lib/assets/brand/`.

## Current brand assets

### BRAND-DEV-001

```text
Original path: src/lib/assets/brand/hellocraft-logo-cyan.png
Media type: PNG raster
Evidence status: VERIFIED as current development asset
Publication status: PUBLIC_PENDING
Editorial status: ADOPTED for development only
```

Notes:

- current source treats this as development brand evidence;
- authoritative vector/original production asset is still required;
- exact production cyan remains pending authoritative brand evidence.

### BRAND-DEV-002

```text
Original path: src/lib/assets/brand/hellocraft-logo-white.png
Media type: PNG raster
Evidence status: VERIFIED as current development asset
Publication status: PUBLIC_PENDING
Editorial status: ADOPTED for development only
```

Same production limitation as `BRAND-DEV-001`.

## Current portfolio data

Source owner:

```text
src/lib/content/projects.ts
```

Current records are explicitly development-only:

```text
Concept World Study
Multiplayer Gameplay Study
Environment Study
```

Inventory status for all three:

```text
Evidence status: UNVERIFIED as real Hellocraft projects
Publication status: INTERNAL_ONLY
Editorial status: REJECTED for production publication
```

They remain useful only to exercise the established portfolio layouts until real project evidence replaces them.

## Current project media

Repository audit result:

```text
real project screenshots = none present
real project renders     = none present
real project video       = none present
real project video poster= none present
```

`ProjectMediaPlaceholder.svelte` remains a development presentation surface only.

Do not replace it with invented artwork, screenshots from unrelated sources, or media inferred from sibling repositories.

## Current studio / proof data

Source owners:

```text
src/lib/content/pages.ts
src/lib/content/demo-data.ts
```

Current studio text is development copy.

Current proof entries are explicitly demo data and therefore:

```text
Evidence status: UNVERIFIED
Publication status: INTERNAL_ONLY
Editorial status: REJECTED for production publication
```

Production Studio replacement still requires authoritative facts such as actual recurring responsibilities/capabilities and any publishable credibility evidence.

## Current careers data

Source:

```text
src/lib/content/demo-data.ts
```

Demo roles:

```text
Level Designer
Game Developer
3D Artist
```

These are not real openings.

Current Careers route already prevents them from rendering publicly while `contentIsDemo = true`.

Production status:

```text
real current openings = not supplied
application route     = not supplied
```

No career opening should be published until a real current hiring responsibility is supplied.

## Current contact / social data

Source owners:

```text
src/lib/content/pages.ts → contactMethods
src/lib/content/site.ts  → socialLinks
```

Current state:

```text
contactMethods = []
socialLinks    = []
```

Production status:

```text
business email        = not supplied
public Discord        = not supplied
public social profiles= not supplied
other inquiry route   = not supplied
```

Do not fabricate these values.

## Current typography

Current source uses a dependency-free system audition based on Aptos / Segoe UI fallbacks.

```text
Evidence status: VERIFIED as current source behavior
Publication status: PUBLIC_PENDING
Editorial status: DEFERRED as final production typography
```

Final font family/weights and any font files remain pending license/payload/production approval.

## Sibling repository boundary

Accessible sibling repositories currently include names such as:

```text
BuildIT
TranslateIT
PRD-Creator
MotionTracker
Develop-Builder
```

They are **not** automatically portfolio evidence.

Current status for using any of them as Hellocraft public-project evidence:

```text
Evidence status: PUBLIC RELATIONSHIP UNESTABLISHED
Publication status: PUBLIC_UNKNOWN
Editorial status: DEFERRED
```

A shared GitHub owner is not sufficient evidence that a repository is a publishable Hellocraft portfolio project, that a client relationship may be disclosed, or that repository assets may be displayed publicly.

## Required authoritative intake — priority order

### P0 — Portfolio projects

For each candidate project, supply whatever is actually known. Unknown is acceptable.

Minimum useful intake:

```text
working/public project name
what Hellocraft actually contributed
project/experience description
client/partner only if publishable
approximate year/date only if authoritative
public link if applicable
publication permission / restrictions
```

### P0 — Project media

For each supplied image/video:

```text
original filename
project relationship
what it depicts
whether Hellocraft may publish it
credit/attribution requirement if any
```

High-resolution originals are preferred. Final crop and alt text are decided only after seeing the actual asset.

### P1 — Studio facts

Useful authoritative facts include:

```text
official short positioning
actual recurring disciplines/responsibilities
public location/base if desired
approved clients/partners or proof if publishable
team/operating facts only if intentionally public
```

### P1 — Contact/social

```text
approved business email or inquiry route
approved public social profiles
other intentional public channels
```

### P2 — Careers

```text
real current openings, if any
location/engagement
application URL/email/process
```

No openings is a valid production state.

### P2 — Brand / typography

```text
authoritative logo/vector source
approved logo variants
exact production cyan / brand colors if defined
approved production typeface + licensing basis, if changing from system stack
```

## Production replacement order

Once authoritative material is received:

```text
1. log every supplied source/item
2. deduplicate and relate sources
3. assign evidence + publication + editorial status
4. build real portfolio inventory
5. choose publishable project/media set
6. replace projects.ts + real project media
7. replace final page/studio copy
8. add approved contact/social data
9. add real careers only if active
10. replace production logo/colors/typography when authoritative
11. keep contentIsDemo = true until the release gate is satisfied
```

## Demo-mode release blockers

Current blockers:

```text
[ ] real portfolio entries supplied and integrated
[ ] real approved project media supplied and integrated
[ ] final public page copy approved
[ ] real contact channels supplied
[ ] demo proof/career data removed or replaced
[ ] production brand state approved
[ ] final metadata ready
```

Until those are satisfied:

```text
contentIsDemo = true
noindex, nofollow = preserved
```

## Next intake action

The website source itself has now been fully audited for available production evidence.

The next material action is to receive authoritative Hellocraft portfolio/studio/media/contact sources and log **all** supplied items through this inventory before selecting what appears publicly.
