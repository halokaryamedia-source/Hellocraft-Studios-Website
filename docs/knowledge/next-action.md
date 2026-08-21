# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED
DEMO_PROJECTS_POPULATED
DEMO_CAREER_ITEMS_POPULATED
PUBLIC_CONTACT_CHANNELS_STILL_REAL_ONLY
BLIND_SQUIRREL_PRIMARY_REFERENCE_ADOPTED
PROFESSIONAL_GAME_STUDIO_DIRECTION_ADOPTED
DE_AI_RESTRAINT_PASS_IMPLEMENTED
HOMEPAGE_HUMAN_COMPOSITION_AUDIT_COMPLETED
CONTROLLED_HOMEPAGE_REBUILD_IMPLEMENTED
GLOBAL_BALANCED_HEADING_WRAP_REMOVED
DEFAULT_INTER_ARIAL_PRESENTATION_REMOVED
SENTENCE_CASE_UI_LANGUAGE_ADOPTED
HOMEPAGE_FEATURED_WORK_HIERARCHY_IMPLEMENTED
HOMEPAGE_STUDIO_CAPABILITY_CHAPTER_MERGED
HOMEPAGE_COMPACT_CONTACT_CLOSE_IMPLEMENTED
VISIBLE_HOMEPAGE_DUMMY_COPY_REWRITTEN_AS_PUBLIC_DRAFT
FAKE_PROOF_HIDDEN_DURING_DEMO
OTHER_PAGE_ROUTE_ARCHITECTURE_HELD_STABLE
SOURCE_ACCESSIBILITY_BASELINE_RETAINED
BRAND_LOCKUP_REPLACEMENT_SURFACE_READY
PROJECT_MEDIA_REPLACEMENT_SURFACE_READY
REAL_LOGO_SOURCE_PENDING
REAL_PROJECT_MEDIA_PENDING
REAL_PORTFOLIO_EVIDENCE_PENDING
REAL_STUDIO_PROFILE_PENDING
REAL_CONTACT_CHANNELS_PENDING
REAL_CAREER_OPENINGS_PENDING
RENDERED_VISUAL_ACCEPTANCE_PENDING_PROJECT_OWNER_REVIEW
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
INTEGRATION_DRY_RUN_DEFERRED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
```

Working authority: **`Local`**.

## Active project-owner instruction

Keep improving the presentation until it feels professional and convincingly human-designed. Final Hellocraft text/data/media will be supplied later.

The project owner selected **Blind Squirrel Games** as the primary external maturity reference. Previous attempts that manufactured uniqueness through editorial rails, cut corners, repeated huge headings, or other signature devices were rejected.

Do not resume hosting/provider selection or local/runtime testing until explicitly re-authorized.

## Current visual thesis

Canonical owner:

```text
docs/foundation/04-visual-direction.md
```

Current working rule:

> **Professional game studio with confident restraint. Content hierarchy, real Hellocraft branding, and project media should create the personality; layout gimmicks should not.**

## Homepage audit

Canonical audit record:

```text
docs/knowledge/homepage-human-composition-audit.md
```

Material findings from the rejected preview:

```text
headline scale/line-break shape too poster-like
+ too many display-size headings
+ Inter body / Arial-Helvetica display fallback
+ global balanced heading wrapping
+ all-caps micro-label/action language
+ repeated mathematical section rhythm
+ equal project presentation
+ visible internal dummy copy
+ oversized blank media fields
```

The Taste Skill and redesign-existing-projects skill were audited as external reference evidence only. No new Hellocraft project specialist was created because `web-ui-design-development` already owns those responsibilities.

## Current Homepage composition

```text
Hero
→ one sentence-case studio label
→ one dominant headline with calmer desktop line shape
→ concise body + one text action
→ one lower, wider development media field

Selected Work
→ compact section heading
→ one primary featured project
→ one clearly secondary project
→ no repeating equal card/grid rhythm

Studio
→ one main studio statement
→ supporting copy
→ capability narrative nested as a smaller sub-section

Contact
→ compact closing statement + one action
```

Proof remains hidden while demo content is active.

## Typography correction

Current source no longer uses Inter + Arial as the primary presentation pair.

Development audition baseline now prefers:

```text
body
→ Segoe UI Variable Text / Segoe UI / system fallback

display
→ Segoe UI Variable Display / Segoe UI / system fallback
```

This is still a development audition, not a final licensed brand-font decision. The final production font remains pending real logo/brand fit and later rendered acceptance.

Global `text-wrap: balance` on headings was removed. Labels/actions now default to sentence case instead of automatic uppercase treatment.

## Development content presentation

Visible Homepage copy now reads like draft public copy. Demo status remains protected through:

```text
contentIsDemo = true
+ development notice
+ noindex,nofollow
+ source comments
```

Project names remain development-only studies, not portfolio claims.

## Content replacement remains stable

Final content still belongs in:

```text
src/lib/content/pages.ts
→ final page copy

src/lib/content/projects.ts
→ real approved portfolio entries

src/lib/content/demo-data.ts
→ replace/remove demo careers/proof data

src/lib/content/site.ts
→ public site/social/navigation values

BrandLockup
→ authoritative logo replacement

Project media owner
→ real project imagery/video
```

Do not rewrite route architecture merely because final text arrives.

## Deferred proof

Do not currently run/prioritize:

```text
bun install
bun.lock generation
bun run validate
local preview as technical acceptance
Chrome/runtime dry-run
hosting/provider selection
production adapter selection
```

Preview-only visual rendering is allowed when requested, but it is not technical acceptance.

## Next Step

**Review the controlled Homepage preview. If the composition is accepted, propagate only the proven typography/hierarchy principles to Work, Studio, Careers, Contact, and Footer. If it is not accepted, revise Homepage only; do not redesign the whole site again.**
