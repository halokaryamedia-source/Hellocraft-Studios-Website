# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` is in the **website content drafting** stage.

Completed:

```text
page structure                     = complete
public page names                  = approved
page design                        = approved
writing style guide                = APPROVED
Home Hero                          = APPROVED / implemented
Home Featured Projects             = APPROVED / implemented
Home What We Do                    = APPROVED / implemented
Home About preview                 = APPROVED / implemented
Home Work Areas                    = APPROVED / implemented
About draft                        = implemented
Portfolio intro                    = implemented
Work Areas                         = APPROVED / implemented
sample project data                = clearly fictional
sample career data                 = separated from real openings
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

## One terminology system

Use **Work Areas** as the single fixed term for Hellocraft's areas of work.

Canonical list:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Use these exact names in Home, About, internal source names, documentation, and project attribution when relevant.

Work Areas are not job titles. Careers and project credits use real approved titles from real data.

## Working content draft

Use:

```text
docs/knowledge/content-draft.md
```

Current status:

```text
Home Hero                       = APPROVED
Home Featured Projects          = APPROVED
Home What We Do                 = APPROVED
Home About preview              = APPROVED
Home Contact preview            = current review section
Portfolio intro                 = Draft v1
Portfolio projects              = waiting for real project sources
Project Detail                  = structure ready; waiting for real project sources
About                           = Draft v1 + Work Areas implemented
Contact                         = working copy only; final contact data missing
Careers                         = working copy only; final hiring state missing
```

## Approved Home copy so far

```text
Hero
Minecraft game studio
We make games and experiences in Minecraft.
We work on games and adventures, as well as Minecraft projects for events and exhibitions.
View portfolio

Featured Projects
Minecraft projects we've worked on.
View portfolio

What We Do
We handle both the creative and technical sides of Minecraft projects.

About
We're a studio focused on Minecraft.
We make games and adventures, and also work on projects for events and exhibitions.
About Hellocraft
```

The What We Do intro goes directly into the four Work Areas. Do not add a second explanatory sentence without a concrete reason.

## Writing style

All new or revised public copy must follow:

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
human
```

Professional does not mean corporate or artificial. Avoid polished marketing phrases that sound generated rather than spoken by a real studio team.

Reference websites are pattern evidence only. Do not copy their wording, slogans, claims, or project descriptions.

## Home structure

```text
Hero
→ who Hellocraft is and what it makes

Featured Projects
→ proof through real work

What We Do
→ the four canonical Work Areas

About
→ who the studio is and the contexts it works in

Contact
→ start a project conversation
```

## Portfolio and Project Detail

Real portfolio content still requires approved Hellocraft project material.

For each project, collect:

```text
project name
what Hellocraft worked on
short project description
client/partner if public
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

## Demo mode

Keep:

```text
contentIsDemo = true
```

until production content is ready.

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

**Review and approve the Home `Contact` preview copy. Preserve the approved Hero, Featured Projects, What We Do, About preview, and Work Areas.**
