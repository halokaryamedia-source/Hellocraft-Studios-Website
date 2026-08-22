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

The project owner approved this as the default writing direction for Hellocraft's public website after reviewing communication patterns from established Minecraft creators and studios.

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

Reference wording must not be copied.

## Capability structure — APPROVED

Hellocraft's public production capability structure is now fixed to four clear areas:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

These are client-facing capability areas, not fixed service packages. A project may use one, several, or all of them.

Role mapping:

```text
Core production
→ Game / Experience Designer
→ Level Designer / Minecraft Builder
→ Game Developer
→ 3D Artist

Supporting production
→ Project Manager / Producer
→ QA / Tester
→ Writer / Narrative
→ Sound Designer / Music
→ 2D / UI

Business
→ Business Development
→ Marketing
```

Only the four public capability areas belong in Home / About capability communication by default. Supporting and business roles appear only when a real Project Detail, Careers, or company need requires them.

## Content drafting — ACTIVE

The project has moved from design and writing-style setup into **website content drafting**.

Working draft:

```text
docs/knowledge/content-draft.md
```

Current drafting status:

```text
Home company copy      = Draft v1 implemented
Home capabilities      = approved / implemented
Portfolio intro        = Draft v1 implemented
Portfolio project copy = waiting for real project sources
About company copy     = Draft v1 implemented
About capabilities     = approved / implemented
Contact final copy     = waiting for real contact route/details
Careers final copy     = waiting for real hiring state
Final site-wide pass   = after real portfolio/media is integrated
```

Home structure now follows:

```text
Hero
→ Featured Projects
→ What We Do / four capabilities
→ About
→ Contact
```

About carries the deeper company explanation, the same four capabilities with descriptions, How We Work, verified Experience when available, and Contact.

Home and About may use only confirmed company-level information. Portfolio project descriptions, clients, dates, results, credits, and media must come from approved project sources.

## Current content

Sample portfolio entries remain clearly fictional and exist only for layout preview:

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
Home draft copy       = implemented
Home capabilities     = implemented
About draft copy      = implemented
About capabilities    = implemented
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
→ Home, Portfolio, About, Careers, Contact, footer text, and the four public capability areas

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
capability structure  = APPROVED
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

The project is now in the **website content drafting → real portfolio integration** stage. Do not return to broad design, writing-style, or capability-taxonomy exploration unless real content reveals a specific problem.
