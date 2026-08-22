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

Current approved pages:

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

The project owner approved this as the default writing direction for Hellocraft's public website after reviewing communication patterns from established Minecraft creators and studios, including Noxcrew, Gamemode One, Blockworks, Everbloom Games, Shapescape, Spark Universe, and Blockception.

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
- prefer direct verbs such as build, design, develop, create, make, play, and explore;
- use Minecraft-specific terms only when they add clarity;
- keep headlines short;
- keep normal section copy compact;
- let projects and verified results prove quality;
- avoid generic agency language, exaggerated claims, and adjective-heavy copy.

For Project Detail pages, use this pattern when the information exists:

```text
project / client context
→ what was needed
→ what we made
→ what players experience
→ our role
→ verified results
→ useful links / credits
```

Gamemode One and Noxcrew are useful references for concise game-studio voice; Blockworks is the main reference for project/case-study writing; Everbloom is useful for player/Careers language; Shapescape is useful when speaking to non-Minecraft-native clients. Reference wording must not be copied.

The writing guide is enforced through:

```text
docs/foundation/02-product-requirements.md
src/lib/content/pages.ts
src/lib/content/projects.ts
docs/knowledge/next-action.md
```

## Copy review

The public-facing draft copy has been reviewed, humanized, and aligned with the approved Minecraft studio writing guide.

Current copy is suitable for preview and content fitting. It is **not final production copy** because real portfolio evidence, final company facts, and public contact information are still missing.

Important copy decisions:

- use direct language;
- explain what Hellocraft does without agency jargon;
- use normal labels such as `Portfolio`, `About`, `Careers`, `Contact`, `What we do`, and `How we work`;
- keep sample/development wording out of normal public copy where possible;
- keep preview/sample status explicit in the separate preview notice and sample data.

Internal section naming also uses clear terms such as:

```text
portfolio
about
whatWeDo
howWeWork
experience
contact
section-label
```

## Current content

Sample portfolio entries are clearly fictional and exist only for layout preview:

```text
Sample Adventure World
Sample Multiplayer Game
Sample Environment Build
```

Sample career roles are also clearly labelled and are not published as real openings.

Current source contains only development logo files:

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

The website repository does not yet contain real project screenshots, renders, or videos.

Current status:

```text
draft page copy      = reviewed / suitable for preview
real portfolio       = waiting for sources
real project media   = waiting for sources
contact details      = missing
social links         = missing
career openings      = none confirmed
final logo/vector    = pending
final font           = pending
```

`contentIsDemo = true` remains enabled. The site keeps its preview notice and `noindex, nofollow` until production content is ready.

## Main content files

```text
src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, and footer text

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

Do **not** add generic pages just to make the website look more complete.

Current decisions:

```text
Services = not needed yet
Blog = not needed
Team = not needed as a separate page
Clients = not needed as a separate page
custom contact form = not needed until the real contact workflow requires it
Privacy / Terms = add only when the site's real data collection, analytics, cookies, forms, or legal requirements make them necessary
```

`About` already carries the current company and "What we do" responsibility.

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

Still deferred until the project owner reopens it:

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
copy humanization     = complete for current draft
sample data clarity   = complete
real portfolio        = next major input
real project media    = next major input
final copy             = refine after real evidence
contact/social links  = pending
career openings       = pending if needed
final brand assets    = pending
SEO/social metadata   = finish after domain/media are known
responsive QA         = pending
accessibility QA      = pending
performance QA        = pending
runtime/build testing = deferred
hosting               = deferred
```

The project is ready to move into **real portfolio and media intake**. No additional generic pages, writing-style exploration, or broad redesign are needed before that step.
