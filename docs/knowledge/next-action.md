# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` has entered the **website content drafting** stage.

Completed for the current stage:

```text
page structure        = complete
public page names     = approved
page design           = approved
writing style guide   = APPROVED
Home draft copy       = implemented
Home capability structure = APPROVED / implemented
Portfolio intro       = implemented
About draft copy      = implemented
About capability structure = APPROVED / implemented
sample portfolio data = clearly labelled as fictional
sample career data    = kept separate from real openings
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

## Working content draft

Use:

```text
docs/knowledge/content-draft.md
```

as the working review document for website copy, capability structure, and role mapping.

Current status:

```text
Home                = Draft v1 + approved capability structure
Portfolio intro     = Draft v1
Portfolio projects  = waiting for real project sources
Project Detail      = structure ready; waiting for real project sources
About               = Draft v1 + approved capability structure
Contact             = working copy only; final contact data missing
Careers             = working copy only; final hiring state missing
```

## Approved capability structure

Public production capabilities are now fixed to four clear areas:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

These are client-facing capability areas, not fixed service packages.

Role mapping for later Careers / Project Detail:

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

Do not promote supporting or business roles into Home capability categories without a real client-facing reason.

## Writing style

All new or revised public website copy must follow:

```text
docs/foundation/08-writing-style.md
```

Hellocraft should sound:

```text
confident
clear
creator-led
Minecraft-native
friendly
practical
professional
```

Reference websites are pattern evidence only. Do not copy wording, slogans, claims, or project descriptions from them.

## Current Home structure

```text
Hero
→ who Hellocraft is and what it makes

Featured Projects
→ proof through real work

What We Do
→ four approved capability areas

About
→ who the studio is and the contexts it works in

Contact
→ start a project conversation
```

Current Home hero:

```text
Minecraft game studio

We build games and experiences in Minecraft.

Hellocraft Studios designs and develops Minecraft projects across custom worlds, gameplay, technical systems, and 3D art.
```

Current What We Do heading:

```text
We make Minecraft projects from idea to playable experience.
```

Current About preview:

```text
A game studio built around Minecraft.
```

## Current About structure

```text
Hero
→ We build Minecraft games, worlds, and experiences.

What We Do
→ four approved capability areas with descriptions

How We Work
→ The project comes first.

Experience
→ waiting for real public evidence

Contact
→ Planning a Minecraft project?
```

## Portfolio and Project Detail

The next major content input is **real Hellocraft project material**.

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

When enough evidence exists, write Project Detail in this order where useful:

```text
project / client context
→ what was needed
→ what we made
→ what players experience
→ our role
→ verified results
→ useful links / credits
```

A shorter showcase is valid when there is less material. Do not add empty sections to make every project page the same length.

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

## What remains after Portfolio

```text
1. refine About from real portfolio/company evidence
2. add real Contact and social information
3. confirm Careers hiring state and application method
4. integrate final logo/colors/font
5. run final site-wide copy review
6. complete responsive/accessibility/performance/build/browser QA
7. finish SEO/social metadata
8. deploy
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

## Deferred technical work

Still deferred until explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full browser/runtime testing
hosting provider selection
production adapter selection
```

## Immediate next step

**Continue website content drafting by collecting and reviewing real Hellocraft portfolio information and project media. Home and About now use the approved four-area capability structure and should only be refined when real evidence gives a concrete reason.**
