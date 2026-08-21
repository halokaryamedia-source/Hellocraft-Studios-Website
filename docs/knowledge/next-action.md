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
SOURCE_ACCESSIBILITY_AUDIT_COMPLETED
HEADING_HIERARCHY_CORRECTED
FOCUS_SOURCE_HARDENED
REFLOW_SOURCE_GUARDS_HARDENED
DEMO_NOINDEX_GUARD_ACTIVE
BRAND_LOCKUP_REPLACEMENT_SURFACE_READY
BRAND_SYMBOL_REPLACEMENT_SURFACE_READY
PROJECT_MEDIA_REPLACEMENT_SURFACE_READY
REAL_LOGO_SOURCE_PENDING
REAL_PROJECT_MEDIA_PENDING
REAL_PORTFOLIO_EVIDENCE_PENDING
REAL_STUDIO_PROFILE_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
RENDERED_VISUAL_ACCEPTANCE_DEFERRED
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
INTEGRATION_DRY_RUN_DEFERRED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

Working authority: **`Local`**.

## Active project-owner instruction

Continue preparing the website architecture/presentation using clearly-labelled dummy content. Final Hellocraft text/data/media will be supplied later.

Do **not** resume hosting/provider work or local/runtime testing until explicitly re-authorized.

## Current route architecture

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Primary navigation remains:

```text
Work
Studio
Careers
Contact
```

No Services route and no Work filters/categories are created initially.

## Current content owners

```text
src/lib/content/pages.ts
→ temporary page copy

src/lib/content/projects.ts
→ explicitly-labelled Demo Project entries

src/lib/content/demo-data.ts
→ development-only proof/career collections

src/lib/content/demo.ts
→ contentIsDemo switch

src/lib/content/site.ts
→ site identity/navigation
```

Real contact channels remain real-only and are not fabricated in demo mode.

## Current visual source state

The Playful Editorial Game Studio direction is implemented across Header, Footer, Home, Work, Project Detail, Studio, Careers, and Contact using native CSS/Svelte source only.

Current source-level visual language:

```text
warm-white canvas
+ near-black structural sections
+ temporary cyan accent
+ oversized editorial typography
+ restrained star motifs
+ large project-media surfaces
+ CSS-native hover/focus/motion
```

The current cyan/star are development approximations and must not be treated as the authoritative logo/brand specification.

## Source accessibility/semantic audit

Canonical audit record:

```text
docs/knowledge/accessibility-source-audit.md
```

Corrections completed in the current pass:

```text
ProjectCard heading contract
→ Home cards h3 beneath Selected Work h2
→ Work cards h2 beneath page h1

project-detail demo media
→ no empty named region exposed
→ development media remains decorative/aria-hidden

focus indication
→ two-tone universal source ring + forced-colors fallback

small cyan text
→ darker development accent token on light surfaces

reflow source guard
→ removed global overflow-x clipping
→ long headings/links may emergency-wrap

demo publication safety
→ noindex,nofollow while contentIsDemo = true
```

Rendered keyboard, zoom/reflow, computed contrast, and assistive-technology proof remain deferred.

## Brand replacement surfaces

```text
src/lib/components/brand/BrandLockup.svelte
→ header/footer lockup owner
→ future authoritative logo/wordmark replacement point

src/lib/components/brand/BrandSymbol.svelte
→ temporary decorative star owner
```

When the real logo/vector is supplied, replace the current development graphic at these owned surfaces rather than duplicating brand markup across routes.

## Project-media replacement surface

```text
src/lib/components/work/ProjectMediaPlaceholder.svelte
```

Current placeholder is development-only and `aria-hidden` because it contains no real project evidence.

When actual project assets arrive:

```text
real image/video
→ content-intake/evidence check
→ media-policy owner
→ actual alt/caption/focal-point decisions
→ replace/extend ProjectMediaPlaceholder with real media owner
```

Do not invent media metadata/alt text before the real asset exists.

## Demo-content replacement workflow

Later:

```text
owner supplies authoritative text/data/media
→ content-intake audit
→ replace pages.ts copy
→ replace Demo Project entries
→ replace demo proof/career items
→ add approved contact channels
→ integrate authoritative logo + project media
→ remove remaining demo-only content
→ set contentIsDemo = false
```

Route architecture should remain stable unless real content proves a structural problem.

## Deferred tracks

Do not currently run/prioritize:

```text
bun install
bun.lock generation
bun run validate
local preview
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Do not claim build/browser/runtime/accessibility/performance acceptance while those remain deferred.

## Next Step

**Continue non-locally with source-level presentation refinement only where it does not require invented real content: keep the current route/content architecture stable, use the centralized brand/media replacement surfaces, and wait for authoritative logo/project media before defining production image fields or alt text. The highest-value new input from the project owner is now the original Hellocraft logo/vector and real project media/content inventory; local/runtime and hosting tracks remain deferred.**
