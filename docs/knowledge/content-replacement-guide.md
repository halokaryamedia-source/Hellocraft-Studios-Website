# Content Replacement Guide

Operational guide for replacing Hellocraft development/demo content with approved production content **without redesigning the website architecture**.

## Status

```text
SOURCE_ARCHITECTURE_MATURE_FOR_CONTENT_SWAP
STANDARD_PUBLIC_NAMING_APPROVED
DEMO_CONTENT_MODE_ACTIVE
REAL_CONTENT_SWAP_PENDING
HOSTING_DEFERRED
RUNTIME_VALIDATION_DEFERRED
```

## What should stay stable

Canonical public routes:

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Primary public terminology:

```text
Portfolio
About
Careers
Contact
```

Legacy `/work`, `/work/[slug]`, and `/studio` routes exist only as redirects and should not be reintroduced as primary navigation labels.

Preserve the existing global shell, major page sections, visual language, brand/media owner boundaries, and project-detail flexible-section model.

Do not create new routes, filters, services pages, form systems, CMS layers, or other architecture merely because final copy arrives.

## Replacement map

### 1. Global identity / navigation

```text
src/lib/content/site.ts
```

Replace/add only approved values such as:

- final public site/company name if it changes;
- approved social/public links when available.

Keep standard navigation terminology unless the project owner explicitly changes it.

### 2. Page text

```text
src/lib/content/pages.ts
```

Main copy replacement surface for:

- Home;
- Portfolio;
- About;
- Careers;
- Contact;
- Footer statement.

The current strings are temporary development copy. Replace values here rather than embedding final marketing copy inside route components.

### 3. Portfolio projects

```text
src/lib/content/projects.ts
```

Remove all development demo entries and replace them with projects that passed the content-intake/evidence process.

Keep each project limited to fields supported by real evidence:

```text
slug
title
summary
featured
year?
client?
contribution?
sections?
links?
```

Do not invent missing clients, metrics, dates, roles, awards, or project outcomes.

### 4. Proof / careers demo collections

```text
src/lib/content/demo-data.ts
```

Replace or remove development-only proof/career examples.

Real proof must be attributable and publishable. Real career openings must reflect an actual current hiring responsibility.

### 5. Public contact methods

```text
src/lib/content/pages.ts
→ contactMethods
```

Add only approved real public channels. Do not create fake phone numbers, addresses, email aliases, social URLs, or booking links.

### 6. Brand asset

```text
src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
```

Replace the temporary development symbol/lockup with the authoritative Hellocraft logo/vector asset when supplied.

The accessible home-link name must remain available even if the final graphic replaces visible text.

Also replace temporary development color values in `src/app.css` from the authoritative brand source.

### 7. Project media

```text
src/lib/components/work/ProjectMediaPlaceholder.svelte
```

This is only a decorative development placeholder. The internal component folder name does not define public navigation terminology.

When real media arrives:

```text
actual project image/video
→ evidence/publication check
→ approved asset location
→ enhanced-image/media policy
→ real alt/caption/focal-point decision
→ portfolio/detail rendering
```

Do not pre-write alt text before the actual asset is known.

## Demo-mode removal gate

Do **not** change:

```ts
contentIsDemo = true
```

to `false` until all public-facing development claims have been removed.

Before disabling demo mode, verify at minimum:

```text
[ ] no Demo Project entries remain
[ ] no Demo role/proof entries remain
[ ] temporary page copy is replaced/approved
[ ] contact channels are real and approved
[ ] authoritative logo/brand values are integrated or intentionally approved otherwise
[ ] project media shown publicly is real/approved
[ ] page titles/descriptions are final enough for publication
[ ] no temporary development notice is needed
```

When the checklist is satisfied:

```text
src/lib/content/demo.ts
→ contentIsDemo = false
```

The root demo `noindex, nofollow` guard will then stop applying.

## Search-before-release terms

Before publication, search source for development markers such as:

```text
Demo Project
Demo role
Demo proof
Temporary demo
Temporary development
DEVELOPMENT-ONLY
TEMPORARY DEVELOPMENT
Project visual
Project media
```

Also verify that `Work` and `Studio` do not remain as unintended public navigation/page labels. Legacy redirects and internal historical comments are acceptable when deliberate.

## What final text should not force

Final copy should normally **not** require changes to:

- canonical route structure;
- header/footer architecture;
- Home section order;
- project detail section mechanism;
- About/Careers/Contact route ownership;
- CSS framework/dependency choices;
- hosting architecture.

If real content genuinely does not fit, change the smallest responsible owner rather than redesigning the whole site.

## Deferred proof

This guide does not replace the later acceptance gate. When local/runtime proof is re-authorized, the final content-integrated source still requires build/browser/accessibility/performance validation before production acceptance.
