# Content Replacement Guide

Operational guide for replacing Hellocraft development/demo content with approved production content **without redesigning the website architecture**.

## Status

```text
SOURCE_ARCHITECTURE_MATURE_FOR_CONTENT_SWAP
DEMO_CONTENT_MODE_ACTIVE
REAL_CONTENT_SWAP_PENDING
HOSTING_DEFERRED
RUNTIME_VALIDATION_DEFERRED
```

The intended production workflow is now content replacement, not repeated page reconstruction.

## What should stay stable

Unless real evidence proves a structural problem, preserve:

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Preserve the existing global shell, major page sections, visual language, brand/media owner boundaries, and project-detail flexible-section model.

Do not create new routes, filters, services pages, form systems, CMS layers, or other architecture merely because final copy arrives.

## Replacement map

### 1. Global identity / navigation

```text
src/lib/content/site.ts
```

Replace/add only approved values such as:

- final public site/studio name if it changes;
- final navigation labels if copy changes;
- approved social/public links when available.

### 2. Page text

```text
src/lib/content/pages.ts
```

This is the main copy replacement surface for:

- Home;
- Work intro;
- Studio;
- Careers;
- Contact;
- Footer statement.

The current strings are temporary development copy. Replace values here rather than embedding final marketing copy inside route components.

### 3. Portfolio projects

```text
src/lib/content/projects.ts
```

Remove all `Demo Project ...` entries and replace them with projects that passed the content-intake/evidence process.

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

This is only a decorative development placeholder.

When real media arrives:

```text
actual project image/video
→ evidence/publication check
→ approved asset location
→ enhanced-image/media policy
→ real alt/caption/focal-point decision
→ project card/detail rendering
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

Every remaining match must be deliberately understood; do not blindly replace code comments that still correctly describe development-only mechanics.

## What final text should not force

Final copy should normally **not** require changes to:

- route structure;
- header/footer architecture;
- Home section order;
- Work card component responsibility;
- project detail section mechanism;
- Studio/Careers/Contact route ownership;
- CSS framework/dependency choices;
- hosting architecture.

If real content genuinely does not fit, change the smallest responsible owner rather than redesigning the whole site.

## Deferred proof

This guide does not replace the later acceptance gate. When local/runtime proof is re-authorized, the final content-integrated source still requires build/browser/accessibility/performance validation before production acceptance.
