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
SITE_SHELL_SOURCE_CREATED
PAGE_ARCHITECTURE_SOURCE_CREATED
PROJECT_DATA_MODEL_CREATED
VISUAL_DIRECTION_BASELINE_ESTABLISHED
MEDIA_POLICY_APPROVED
DISCOVERABILITY_METADATA_POLICY_APPROVED
REAL_PORTFOLIO_EVIDENCE_PENDING
REAL_STUDIO_PROFILE_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
INTEGRATION_DRY_RUN_DEFERRED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

Working authority: **`Local`**.

## Active project-owner instruction

Prepare the website architecture and presentation first using temporary dummy content. Final Hellocraft text/data/media will follow later.

Hosting/provider work and local/runtime testing remain deferred until explicitly re-authorized.

## Development content state

The source now contains realistic temporary content so page hierarchy and visual design can be developed without waiting for final copy.

Owners:

```text
src/lib/content/pages.ts
→ temporary Home / Work / Studio / Careers / Contact copy

src/lib/content/projects.ts
→ explicitly labelled Demo Project entries

src/lib/content/demo-data.ts
→ explicitly labelled demo proof/career collections

src/lib/content/demo.ts
→ contentIsDemo = true

src/lib/content/demo-copy.ts
→ visible development-content notice
```

The root layout displays the temporary-content notice while `contentIsDemo` is true.

## Safety boundary for dummy content

Dummy content is allowed only for development presentation.

```text
Demo Project ...
→ never portfolio evidence

Demo role ...
→ never a live hiring claim

Demo proof ...
→ never credibility evidence

public contact URL / email / phone
→ never fabricated

client / partner / result / metric
→ never fabricated
```

Real content still enters through the content-intake process.

## Current website structure

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Home currently has:

```text
hero
→ selected demo work
→ studio snapshot
→ capability narrative
→ demo proof rhythm
→ contact CTA
```

Work has three demo projects, including featured entries and flexible project-detail sections, so both index and detail layouts have realistic content length to design against.

Careers has clearly labelled demo roles so opening-list structure can be prepared. Contact channels remain empty until real public channels are supplied.

## Real-content replacement workflow

Later:

```text
owner supplies authoritative content
→ audit with content-intake contract
→ replace demo values in src/lib/content/*
→ replace Demo Project entries with approved projects
→ replace demo roles/proof with real approved items
→ add approved contact channels
→ remove all remaining demo content
→ set contentIsDemo = false
```

The route architecture should remain stable unless real content proves a structural problem.

## Deferred tracks

Do not currently run or prioritize:

```text
bun install
bun.lock generation
bun run validate
local preview
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Do not fabricate runtime proof while these remain deferred.

## Next Step

**Continue preparing the website presentation using the populated dummy content: refine the visual/source implementation of the existing Home, Work, Project Detail, Studio, Careers, Contact, header, and footer according to `04-visual-direction.md`. Keep all real factual content replaceable through `src/lib/content/*`, and do not resume local/runtime or hosting work until the project owner explicitly asks.**
