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
VISUAL_DIRECTION_BASELINE_ESTABLISHED
VISUAL_SOURCE_BASELINE_IMPLEMENTED
PLAYFUL_EDITORIAL_DIRECTION_APPLIED
SITE_SHELL_VISUAL_IMPLEMENTED
HOME_VISUAL_SOURCE_IMPLEMENTED
WORK_VISUAL_SOURCE_IMPLEMENTED
PROJECT_DETAIL_VISUAL_SOURCE_IMPLEMENTED
STUDIO_VISUAL_SOURCE_IMPLEMENTED
CAREERS_VISUAL_SOURCE_IMPLEMENTED
CONTACT_VISUAL_SOURCE_IMPLEMENTED
RENDERED_VISUAL_ACCEPTANCE_DEFERRED
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

Prepare the website architecture and presentation now using temporary dummy content. Final Hellocraft text/data/media will be supplied later.

Do not resume hosting/provider selection or local/runtime testing until explicitly re-authorized.

## Visual source baseline

Canonical direction:

```text
docs/foundation/04-visual-direction.md
```

Implementation notes:

```text
docs/knowledge/visual-source-implementation.md
```

The first visual source pass now applies:

```text
warm-white canvas
+ near-black structural bands
+ temporary Hellocraft cyan accent
+ large editorial typography
+ restrained star motif
+ strong full-width section contrast
+ CSS-native interaction/motion only
+ reduced-motion source handling
```

The current cyan value is a development approximation only. Replace it from the authoritative original/vector logo asset later.

## Current page presentation

### Global shell

```text
Demo-content notice
→ Header / brand mark
→ Primary navigation
→ Route content
→ Large editorial footer
```

The header remains JS-free and uses a simple responsive layout rather than a hamburger/menu system that is not currently necessary.

### Home

```text
large identity hero + brand-star visual
→ selected project grid
→ editorial Studio split
→ dark capability band
→ numbered proof rhythm
→ large cyan contact CTA
```

### Work

```text
dark editorial intro
→ project count/index
→ flexible project-card grid
```

### Project detail

```text
cyan identity hero
→ large media placeholder stage
→ contribution list
→ alternating flexible editorial sections
→ optional links
```

### Studio

```text
studio hero + brand motif
→ capability split
→ dark approach band
→ proof cards
→ cyan contact CTA
```

### Careers

```text
cyan recruitment hero
→ structured role list
→ recruitment context
→ dark application block
```

### Contact

```text
dark contact hero
→ approved-channel surface
→ cyan inquiry block
```

No fake public contact method has been added.

## Content replacement remains isolated

```text
src/lib/content/pages.ts
→ temporary copy

src/lib/content/projects.ts
→ demo project entries

src/lib/content/demo-data.ts
→ demo proof / role collections
```

Final copy/data should replace these owners without rewriting route composition unless real content proves a structural problem.

## Acceptance boundary

Because runtime/local testing remains deferred, current acceptance is source-level only.

Current evidence can establish:

- visual token ownership and consistency;
- route/source composition;
- dummy-content separation;
- CSS-native motion intent;
- reduced-motion/focus declarations in source;
- absence of new UI/motion libraries;
- absence of fabricated real project/client/contact facts.

Do **not** claim yet:

- browser visual approval;
- responsive rendered correctness;
- Svelte compilation/build PASS;
- keyboard/browser accessibility acceptance;
- performance acceptance.

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

## Next Step

**Continue non-locally by preparing the remaining asset/content replacement surfaces: integrate the authoritative Hellocraft logo source when supplied, define real project-media fields only when actual assets arrive, and perform source-level accessibility/semantic review of the current visual implementation. Keep final text replaceable through `src/lib/content/*` and keep runtime/hosting tracks deferred.**
