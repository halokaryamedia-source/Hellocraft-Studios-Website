# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
CONTENT_INTAKE_CONTRACT_READY
SVELTEKIT_FULLSTACK_APPROVED
TYPESCRIPT_DEFAULT_APPROVED
SVELTE5_RUNES_FIRST_APPROVED
BUN_PACKAGE_MANAGER_APPROVED
NATIVE_SVELTE_CSS_APPROVED
CSS_CUSTOM_PROPERTY_TOKENS_APPROVED
QUALITY_GATE_APPROVED
MEDIA_POLICY_APPROVED
VISUAL_DIRECTION_BASELINE_ESTABLISHED
DISCOVERABILITY_METADATA_POLICY_APPROVED
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_SLOT_MODEL_APPROVED
NO_SERVICES_PAGE_INITIAL_APPROVED
NO_PORTFOLIO_FILTER_INITIAL_APPROVED
CONTENT_AGNOSTIC_SCAFFOLD_SOURCE_CREATED
SITE_SHELL_SOURCE_CREATED
PAGE_ARCHITECTURE_SOURCE_CREATED
COPY_SLOT_SOURCE_CREATED
PROJECT_DATA_MODEL_CREATED
PORTFOLIO_EVIDENCE_PENDING
STUDIO_PROFILE_PENDING
PUBLIC_CONTACT_CHANNELS_PENDING
CAREER_OPENINGS_PENDING
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
INTEGRATION_DRY_RUN_DEFERRED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
PRODUCTION_PROVIDER_NOT_SELECTED
PRODUCTION_ADAPTER_NOT_SELECTED
```

Working authority: **`Local`**.

## Active project-owner instruction

Current priority is **website architecture first** so later work is primarily filling approved text/media/data.

The project owner explicitly deferred:

```text
hosting/provider decisions
local/runtime testing
bun install / bun.lock generation
bun run validate
local preview / Chrome dry-run
```

Do not push those back into the active path until explicitly re-authorized.

## Approved information architecture

Canonical owner:

```text
docs/foundation/07-information-content-architecture.md
```

Current route tree:

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Primary navigation:

```text
Work
Studio
Careers
Contact
```

Home is reached through the Hellocraft brand/logo.

No dedicated Services page and no Work filters/categories are created initially. Those are added only when real content proves they improve understanding/browsing.

## Source architecture now present

```text
src/lib/content/slots.ts
→ searchable [[PLACEHOLDER_KEY]] generation

src/lib/content/site.ts
→ site identity + navigation

src/lib/content/pages.ts
→ Home / Work / Studio / Careers / Contact copy slots
→ proof/contact/openings collections start empty

src/lib/content/projects.ts
→ approved published project entries only
→ starts empty

src/lib/content/types.ts
→ small content contracts

src/lib/components/site/SiteHeader.svelte
src/lib/components/site/SiteFooter.svelte
src/lib/components/work/ProjectCard.svelte

src/routes/+page.svelte
src/routes/work/+page.svelte
src/routes/work/[slug]/+page.ts
src/routes/work/[slug]/+page.svelte
src/routes/studio/+page.svelte
src/routes/careers/+page.svelte
src/routes/contact/+page.svelte
```

The architecture intentionally renders explicit placeholder keys instead of invented marketing copy.

## Content-fill model

Unknown copy is represented as:

```text
[[HOME_HERO_TITLE]]
[[HOME_STUDIO_BODY]]
[[WORK_HERO_BODY]]
[[STUDIO_APPROACH_BODY]]
[[CAREERS_HERO_TITLE]]
[[CONTACT_INQUIRY_BODY]]
```

Later flow:

```text
owner supplies authoritative data
→ content-intake audit
→ approve public facts
→ replace placeholder values in src/lib/content/*
→ populate project entries/media
→ keep route architecture stable
```

Do not hide real content inside page components when it belongs to content owners.

## Page responsibilities

### Home

```text
identity / hero
→ selected work
→ studio snapshot
→ capability narrative
→ optional real proof
→ contact CTA
```

### Work

```text
intro
→ project list
```

No taxonomy/filter until inventory earns it.

### Project detail

Flexible model:

```text
identity + summary
→ optional year/client facts
→ optional contribution list
→ flexible project sections
→ optional approved links
```

Media is added later from authoritative project assets under the existing media policy.

### Studio

```text
studio intro
→ capability narrative
→ working approach/context
→ optional real proof
→ contact CTA
```

### Careers

```text
careers intro
→ real openings when supplied
→ general recruitment context
→ application-path placeholder
```

No job titles or application fields are invented.

### Contact

```text
business/contact intro
→ approved contact methods
→ business-inquiry surface placeholder
```

No form/backend/hosting decision is forced by the page architecture.

## Evidence boundary

Because runtime/local testing remains deferred, current acceptance is limited to source/definition evidence:

- route ownership;
- content hierarchy;
- source/content separation;
- empty-state behavior by source intent;
- no invented projects/services/categories;
- small reusable component ownership.

Do not claim build/browser/responsive/performance acceptance yet.

## Next Step

**Continue the architecture-first track by populating authoritative content inputs when the project owner supplies them. Priority order: Portfolio/Project inventory, Studio/About facts, public contact channels, and real Careers/opening information. Replace `[[...]]` copy slots and empty data collections without redesigning the route structure unless real content proves a structural problem. Hosting and local/runtime proof remain deferred.**
