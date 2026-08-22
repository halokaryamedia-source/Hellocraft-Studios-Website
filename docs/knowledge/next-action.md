# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` is in the **website content drafting** stage.

Completed:

```text
page structure                     = complete
public page names                  = approved
page design                        = approved
writing style guide                = APPROVED
Home                               = APPROVED / implemented
Portfolio Hero                     = APPROVED / implemented
Portfolio listing structure        = APPROVED / implemented
Portfolio short-description rule   = APPROVED
Project Detail structure           = APPROVED / implemented
About Hero                         = APPROVED / implemented
Work Areas                         = APPROVED / implemented
sample project data                = clearly fictional
sample career data                 = separated from real openings
```

## One terminology system

Use **Work Areas** as the single fixed term for Hellocraft's areas of work:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Work Areas are not job titles. Careers and project credits use real approved titles from real data.

## Portfolio — approved structure

Hero:

```text
Portfolio

Projects we've worked on.

A closer look at what we made and our role in each project.
```

Project listing:

```text
Project media
Project name
Short description
View project
```

Optional only when confirmed, public, and useful:

```text
Client / partner
Year
```

Short descriptions explain:

```text
what the project is
+
what players / visitors do or experience
```

Lead with the project itself, not Hellocraft's contribution or a marketing claim.

## Project Detail — APPROVED / implemented

Use this order when real evidence supports the section:

```text
Project
→ project name + short description + optional client/year
→ main media

The Project
→ what the project is and useful context

Our Role
→ what Hellocraft actually designed, built, developed, or handled

Player Experience
→ optional

Results
→ optional; verified only

Credits / Links
→ optional

View Portfolio
```

Do **not** maintain `What We Made` as a separate permanent section. What Hellocraft made belongs inside `Our Role`.

The source model uses explicit fields:

```text
projectContext
ourRole
playerExperience
results
credits
links
```

Final Project Detail copy still waits for real approved project information and media.

## About — current review

Approved Hero:

```text
About

We're a game studio focused on Minecraft.

We make games and adventures, and work on projects for events and exhibitions.
```

Do not rewrite this without a concrete reason from new company positioning or verified evidence.

The next section to review is **About — What We Do**. It must use the same canonical Work Areas already approved for Home.

## Writing style

All new or revised public copy must follow:

```text
docs/foundation/08-writing-style.md
```

Hellocraft should sound confident, clear, creator-led, Minecraft-native, friendly, practical, professional, and human.

Avoid generic agency language and polished marketing phrases that sound generated rather than spoken by a real studio team.

## Real portfolio input still needed

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

**Review and approve the About `What We Do` section copy. Preserve the approved About Hero and all approved Home, Portfolio, Project Detail, and Work Areas decisions.**
