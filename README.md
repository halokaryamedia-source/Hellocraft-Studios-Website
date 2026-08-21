# Hellocraft Studios Website

Official website project for **Hellocraft Studios**, a game studio focused on Minecraft.

## Current status

```text
page structure        = complete
page names            = approved
page design           = approved
demo content          = active
real portfolio        = pending
real project media    = pending
final public copy     = pending
final testing         = pending
hosting               = deferred
```

The website structure and design are ready. The next major work is replacing temporary content with real Hellocraft project information and media.

## Public pages

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

The logo links to Home.

Old URLs remain only as redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Development content

Temporary page copy, demo projects, demo experience items, and demo career items are used only to keep the layout functional before real content is supplied.

They are **not public Hellocraft facts**.

While `contentIsDemo = true`, the website shows a development notice and uses `noindex, nofollow`.

## Main content files

```text
src/lib/content/pages.ts
→ page text

src/lib/content/projects.ts
→ portfolio projects

src/lib/content/demo-data.ts
→ temporary experience/career items

src/lib/content/site.ts
→ site name, navigation, and public links
```

## Brand and project media

```text
src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
→ logo display

src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
→ temporary project media area
```

## Technical setup

```text
SvelteKit
Svelte 5 + TypeScript
Bun
Native CSS + scoped Svelte styles
CSS Custom Properties
@sveltejs/enhanced-img
Prettier + ESLint + svelte-check + build checks
static/prerender-first
```

No Tailwind, SCSS, CSS-in-JS, CMS, database, authentication system, or separate backend is part of the initial setup.

## Deferred technical work

The project owner currently defers:

```text
bun install
bun.lock generation
bun run validate
full local/browser testing
hosting provider selection
production adapter selection
```

Do not claim build or browser acceptance until those checks are actually run.

## Documentation

```text
CONTEXT.md
→ current project state

docs/foundation/07-page-structure.md
→ page structure and navigation

docs/foundation/04-visual-direction.md
→ visual direction

docs/knowledge/content-review-guide.md
→ content review rules

docs/knowledge/content-inventory.md
→ available/missing real content

docs/knowledge/content-update-guide.md
→ where final content should be added

docs/knowledge/next-action.md
→ immediate next steps
```
