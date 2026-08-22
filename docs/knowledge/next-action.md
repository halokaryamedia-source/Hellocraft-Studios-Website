# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` is ready for real portfolio and media content.

Completed for the current stage:

```text
page structure        = complete
public page names     = approved
page design           = approved
draft website copy    = reviewed and humanized
sample portfolio data = clearly labelled as fictional
sample career data    = kept separate from real openings
internal naming       = simplified
current project docs  = updated
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

Old URLs remain only as redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## What was fixed in the content review

The draft copy no longer reads like internal documentation or placeholder instructions.

Examples of the current public tone:

```text
We build Minecraft experiences.
A Minecraft-focused game studio.
From custom worlds to playable systems.
Have a Minecraft project in mind?
Careers at Hellocraft Studios.
Contact Hellocraft Studios.
```

The Portfolio sample data is now explicitly fictional:

```text
Sample Adventure World
Sample Multiplayer Game
Sample Environment Build
```

The Careers sample roles are not shown as real vacancies while demo mode is active.

The 404 page, footer, current URLs, and page labels have also been aligned with the current naming.

## What does not need to be added now

Do not add these just to make the site look more complete:

```text
Services page
Blog
Team page
Clients page
custom contact form
CMS
login/dashboard
```

Privacy/Terms pages should be added only when actual forms, analytics, cookies, data collection, or other legal requirements make them necessary.

## Immediate next task

The next major task is to receive and review **real Hellocraft portfolio material**.

Priority order:

```text
1. real project information
2. project screenshots / renders / videos
3. confirmed About/company information
4. contact and social details
5. career openings, if any
6. final logo/colors/font
```

For each project, useful information includes:

```text
project name
what Hellocraft worked on
short project description
client/partner if it can be published
year/date if confirmed
public link if available
screenshots/renders/video
credits or publication restrictions
```

Missing information should stay unknown instead of being guessed.

## How incoming material should be handled

```text
receive files/information
→ record every item
→ group items by project or subject
→ identify duplicates
→ check facts
→ confirm whether each item can be public
→ record missing information
→ select what appears on the website
```

Material that is not selected for the public website should still remain recorded in:

```text
docs/knowledge/content-inventory.md
```

## Content update files

```text
src/lib/content/pages.ts
→ page text

src/lib/content/projects.ts
→ portfolio projects

src/lib/content/demo-data.ts
→ sample experience/career data

src/lib/content/site.ts
→ navigation, contact, and public links

src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
→ temporary media area to replace with real project media
```

## Draft copy status

The current draft copy is good enough for preview and layout review.

Do not treat it as final marketing copy yet. After the real portfolio is reviewed, refine the wording only where the evidence shows that Hellocraft's actual strengths, project types, or client contexts should be described differently.

## Demo mode

Keep:

```text
contentIsDemo = true
```

until production content is ready.

Before turning demo mode off, confirm:

```text
[ ] sample portfolio entries removed or replaced
[ ] real project media added
[ ] final page copy approved
[ ] real contact details added
[ ] sample experience/career data removed or replaced as needed
[ ] final brand assets approved
[ ] final metadata ready
```

## Later finalization

After real content/media is integrated and technical validation is re-authorised:

```text
responsive review
→ accessibility review
→ media/loading/performance review
→ format/lint/Svelte checks/build
→ browser testing
→ final SEO/social metadata
→ turn off demo mode when ready
→ hosting setup
→ deployed website review
```

The following are still deferred until explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full browser/runtime testing
hosting provider selection
production adapter selection
```

## Immediate next step

**Collect and review real Hellocraft portfolio information and project media. The page structure, naming, design, and current draft copy do not need another broad redesign before that step.**
