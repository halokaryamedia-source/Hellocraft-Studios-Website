# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` is ready for real portfolio and media content.

Completed for the current stage:

```text
page structure        = complete
public page names     = approved
page design           = approved
draft website copy    = reviewed and humanized
writing style guide   = APPROVED
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

## Approved writing style

Use:

```text
docs/foundation/08-writing-style.md
```

for **all new or revised public website copy**.

The project owner approved this direction after reviewing communication patterns from established Minecraft creators and studios.

Hellocraft should sound like a Minecraft game studio and creator team, not a generic creative agency.

Preferred voice:

```text
confident
clear
creator-led
Minecraft-native
friendly
practical
professional
```

Reference roles:

```text
Gamemode One + Noxcrew
→ concise game-studio / creator voice

Blockworks
→ project and case-study writing

Everbloom Games
→ approachable player and Careers language

Shapescape
→ explaining Minecraft projects to non-Minecraft-native clients

Spark Universe
→ concise company and role descriptions
```

Reference websites are pattern evidence only. Do **not** copy wording, slogans, claims, or project descriptions from them.

Avoid generic agency terms and unsupported adjectives. Prefer direct verbs such as build, design, develop, create, make, play, and explore.

## Current copy implementation

The current draft copy already follows the approved writing style.

Examples:

```text
We build Minecraft games and experiences.
A game studio focused on Minecraft.
Games, worlds, and systems for Minecraft.
Tell us about your Minecraft project.
Build Minecraft projects with us.
Tell us about your project.
```

Implementation guards are also present in:

```text
src/lib/content/pages.ts
→ all public page copy follows 08-writing-style.md

src/lib/content/projects.ts
→ real project writing follows the approved project/case-study pattern

docs/foundation/02-product-requirements.md
→ writing style is a formal product requirement
```

## Project Detail writing pattern

When the information exists, prefer:

```text
project / client context
→ what was needed
→ what we made
→ what players experience
→ our role
→ verified results
→ useful links / credits
```

Use direct sentence patterns such as:

```text
We built...
We designed...
Players can...
Our role included...
```

Do not create empty sections just to follow the pattern. A smaller project can use a shorter page.

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
→ write public copy using 08-writing-style.md
```

Material that is not selected for the public website should still remain recorded in:

```text
docs/knowledge/content-inventory.md
```

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
[ ] final page copy approved against 08-writing-style.md
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

**Collect and review real Hellocraft portfolio information and project media. All new public copy must follow the approved Minecraft studio writing guide.**
