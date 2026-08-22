# Hellocraft Studios Website — Current Context

Current state of the Hellocraft Studios Website on branch `Local`.

Use `docs/knowledge/next-action.md` for the immediate next step. Project rules live in `AGENTS.md` and `docs/foundation/`.

## Website purpose

Hellocraft Studios is a **game studio focused on Minecraft**.

The website should:

- introduce the company clearly;
- show real projects as the main evidence of its work;
- help potential clients understand whether Hellocraft is relevant to their project;
- provide business contact information;
- show career opportunities when real openings exist.

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

Old addresses remain only for compatibility:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

Do not use `Work` or `Studio` as current page names. `Hellocraft Studios` remains the company name.

## Design

The current page design is approved.

Reference direction:

- Hazelight Studios for strong game imagery, spacing, and visual confidence;
- Blind Squirrel Games for clear company and project communication.

The website should remain:

```text
clean
professional
game-focused
media-first
easy to understand
```

Avoid fake game UI, unnecessary effects, fake statistics, generic card grids, unusual page names, and copied layouts.

Approved pages:

```text
Home
Portfolio
Project Detail
About
Careers
Contact
```

Do not redesign them without a concrete reason from real content or media.

## Writing style — APPROVED

Public writing follows:

```text
docs/foundation/08-writing-style.md
```

Hellocraft's voice is:

```text
confident
clear
creator-led
Minecraft-native
friendly
practical
professional
```

Main rules:

- say what Hellocraft makes early;
- use `we` and `our` naturally;
- prefer direct verbs;
- use Minecraft terms only when useful;
- keep headlines short;
- keep normal section copy compact;
- let projects and verified results prove quality;
- avoid generic agency language and exaggerated claims.

Reference wording from other studios must not be copied.

## Work Areas — APPROVED / SINGLE TERMINOLOGY

Hellocraft uses one fixed **Work Areas** list across public copy, source code, and documentation:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

These four names are the only permanent taxonomy for the kinds of work Hellocraft communicates publicly.

Do not create parallel names such as:

```text
capabilities
core production areas
service categories
discipline categories
Core Production / Supporting Production role groups
```

A project may use one, several, or all Work Areas.

### Job titles are separate

Work Areas are not job titles.

For Careers and project credits, use the real approved title/responsibility from actual data. Do not keep a speculative permanent role list.

## Content drafting — ACTIVE

Working draft:

```text
docs/knowledge/content-draft.md
```

Current status:

```text
Home company copy      = Draft v1 implemented
Home Work Areas        = approved / implemented
Portfolio intro        = Draft v1 implemented
Portfolio project copy = waiting for real project sources
About company copy     = Draft v1 implemented
About Work Areas       = approved / implemented
Contact final copy     = waiting for real contact route/details
Careers final copy     = waiting for real hiring state
Final site-wide pass   = after real portfolio/media is integrated
```

Home structure:

```text
Hero
→ Featured Projects
→ What We Do / Work Areas
→ About
→ Contact
```

About structure:

```text
Hero
→ What We Do / Work Areas
→ How We Work
→ Experience when verified
→ Contact
```

Home and About may use only confirmed company-level information. Portfolio project descriptions, clients, dates, results, credits, and media must come from approved project sources.

## Current content

Sample portfolio entries remain clearly fictional and exist only for layout preview:

```text
Sample Adventure World
Sample Multiplayer Game
Sample Environment Build
```

Sample career roles are not published as real openings.

Current source contains only development logo files:

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

The website repository does not yet contain real project screenshots, renders, or videos.

Current status:

```text
Home draft copy       = implemented
Home Work Areas       = implemented
About draft copy      = implemented
About Work Areas      = implemented
Portfolio intro       = implemented
real portfolio        = waiting for sources
real project media    = waiting for sources
contact details       = missing
social links          = missing
career openings       = none confirmed
final logo/vector     = pending
final font            = pending
```

`contentIsDemo = true` remains enabled. The site keeps its preview notice and `noindex, nofollow` until production content is ready.

## Main content files

```text
src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, footer text, and canonical Work Areas

src/lib/content/projects.ts
→ portfolio project information

src/lib/content/demo-data.ts
→ sample About experience and career data

src/lib/content/site.ts
→ site name, navigation, and public links

src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
→ temporary project media area
```

## Content review rule

When real material is supplied:

```text
record it
→ identify what it belongs to
→ check facts and duplicates
→ confirm whether it can be public
→ note missing information
→ choose what goes on the website
→ write public copy using 08-writing-style.md
```

Do not guess missing clients, dates, results, permissions, or project details.

Files that are not selected for the website should still remain recorded in `docs/knowledge/content-inventory.md`.

## Pages not needed now

Do not add generic pages just to make the website look more complete.

```text
Services = not needed yet
Blog = not needed
Team = not needed as a separate page
Clients = not needed as a separate page
custom contact form = not needed until the real contact workflow requires it
Privacy / Terms = add only when real data collection, analytics, cookies, forms, or legal requirements make them necessary
```

`About` already carries company and `What we do` responsibility.

## Technical setup

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

## Testing status

Source-level review is complete for the current stage, but final build/browser testing is still deferred.

Still deferred:

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
writing style guide   = APPROVED
Work Areas             = APPROVED / canonical
content drafting      = ACTIVE
Home draft            = implemented
About draft           = implemented
Portfolio intro       = implemented
real portfolio        = next major input
real project media    = next major input
Contact final copy    = pending real contact data
Careers final copy    = pending real hiring state
final copy pass       = after real evidence
final brand assets    = pending
SEO/social metadata   = finish after domain/media are known
responsive QA         = pending
accessibility QA      = pending
performance QA        = pending
runtime/build testing = deferred
hosting               = deferred
```

The project is now in the **website content drafting → real portfolio integration** stage. Keep the Work Areas terminology unified across all future updates.
