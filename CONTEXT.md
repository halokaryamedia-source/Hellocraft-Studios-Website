# Hellocraft Studios Website — Current Context

This file summarizes the current state of the Hellocraft Studios Website on branch `Local`.

Use `docs/knowledge/next-action.md` for the immediate next steps. Project rules stay in `AGENTS.md` and `docs/foundation/`.

## Website purpose

Hellocraft Studios is a **game studio focused on Minecraft**.

The website is intended to:

- introduce Hellocraft Studios;
- show the portfolio;
- help potential clients understand the team and its work;
- provide contact information;
- show job openings when real openings exist.

## Public pages

Use standard website page names:

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

Old URLs are kept only so existing links do not break:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

Do not use `Work` or `Studio` as current page names. `Hellocraft Studios` remains the company name.

## Approved design

The current page design is approved.

Reference direction:

- Hazelight Studios for strong game imagery, spacing, and visual confidence;
- Blind Squirrel Games for clear company and project information.

The website should remain:

```text
clean
professional
game-focused
media-first
easy to understand
```

Avoid:

- unusual page names;
- fake game HUD or inventory UI;
- decorative numbering systems;
- generic card grids when the content does not need them;
- fake statistics or client claims;
- unnecessary visual effects;
- copying another studio's exact design.

Current approved pages:

```text
Home
Portfolio
Project Detail
About
Careers
Contact
```

Do not redesign these pages without a clear reason from real content or media.

## Current content

The page layouts are ready, but most public content is still temporary development content.

Current source contains only development logo files:

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

The repository does not yet contain real project screenshots, renders, or videos.

Current status:

```text
portfolio project information = temporary
project media                 = missing
About information             = temporary
contact details               = missing
social links                  = missing
career openings               = none confirmed
final logo/vector             = pending
final font                    = pending
```

`contentIsDemo = true` remains enabled until public content is ready. While it is enabled, the website keeps its development notice and `noindex, nofollow` setting.

## Main content files

```text
src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, and footer text

src/lib/content/projects.ts
→ portfolio project information

src/lib/content/demo-data.ts
→ temporary experience items and career examples

src/lib/content/site.ts
→ site name, navigation, and public links

src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
→ temporary project media area

src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
→ logo display
```

Internal section names should also stay plain and understandable. Current examples include:

```text
portfolio
about
whatWeDo
howWeWork
experience
contact
```

## Content review rule

When real material is supplied:

```text
record it
→ identify what it belongs to
→ check facts and duplicates
→ confirm whether it can be published
→ note missing information
→ choose what goes on the website
```

Do not guess missing clients, dates, results, permissions, or project details.

Files that are not selected for the website should still remain recorded in the content inventory.

## Current technical setup

```text
framework        = SvelteKit
UI               = Svelte 5 + TypeScript
package manager  = Bun
styling          = native CSS with Svelte scoped styles
image handling   = Vite imports + @sveltejs/enhanced-img when useful
site structure   = static/prerender-first
separate backend = none for now
database         = none for now
```

## Media rules

- use real project media when available;
- use local/imported assets by default;
- do not lazy-load the main first-screen image;
- below-the-fold images may load lazily;
- decide crops after seeing the real image;
- use video posters and user-initiated playback by default;
- avoid heavy 3D/WebGL effects unless the project truly needs them.

## Testing status

Source-level review has been done, but final runtime testing is still pending.

The following remain deferred until the project owner reopens them:

```text
bun install
bun.lock generation
bun run validate
full browser testing
hosting selection
production adapter selection
```

## Current project status

```text
page structure        = complete
page names            = approved
page design           = approved
portfolio information = waiting for real sources
project media         = waiting for real sources
public page copy      = pending
contact/social links  = pending
career openings       = pending if needed
final brand assets    = pending
responsive QA         = pending
accessibility QA      = pending
performance QA        = pending
runtime/build testing = deferred
hosting               = deferred
```

The project is now in the **content preparation and finalization** stage. The next major task is to add real portfolio information and real project media, then complete testing and deployment.
