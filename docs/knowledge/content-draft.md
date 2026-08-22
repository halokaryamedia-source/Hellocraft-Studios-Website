# Website Content Draft

This file is the working copy draft for the Hellocraft Studios Website.

Use `docs/foundation/08-writing-style.md` for tone and wording. Use confirmed project/company evidence only. This file is for content review before final publication.

## Status labels

```text
READY FOR DRAFT
→ supported by current confirmed company information and safe to use as working website copy

APPROVED
→ wording or structure has been reviewed and accepted; do not rewrite without a concrete reason

WAITING FOR REAL DATA
→ structure can be prepared, but final wording depends on real portfolio/contact/career evidence

FINAL REVIEW LATER
→ wording is usable now but must be checked again after real project/media information is integrated
```

## Canonical Work Areas

Hellocraft uses **one fixed Work Areas list** everywhere in the website source and project documentation:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Do not rename these as capabilities, services, production areas, departments, disciplines, or another parallel taxonomy.

A project may involve one, several, or all Work Areas.

### Game & Experience Design

```text
We shape the concept, gameplay, objectives, and player experience around what the project needs.
```

May include game concepts, gameplay design, objectives, puzzles/minigames, progression, player experience, and narrative/gameplay flow when relevant.

### World & Level Design

```text
We design and build Minecraft worlds, environments, levels, and spaces around how players move and play.
```

May include Minecraft building, world design, level design, environment design, player flow, traversal, and progression through spaces.

### Game Development

```text
We develop gameplay systems, mechanics, technical features, and the logic that makes each experience work.
```

May include gameplay systems, scripting, game logic, multiplayer systems, custom mechanics, and technical implementation.

### 3D Art

```text
We create models, textures, and animation for custom Minecraft content when the project needs them.
```

May include 3D modeling, texturing, animation, and Minecraft-compatible custom assets.

## Job title rule

**Work Areas are not job titles.**

Do not maintain a second permanent list of Core Production, Supporting Production, Business Roles, or similar role groups.

For Careers and project credits:

```text
real opening / real project credit
→ use the approved job title from that real data
→ describe its actual responsibility
```

If no real opening or credit exists, do not invent a role simply to complete a taxonomy.

## Home — APPROVED

### Hero

```text
Minecraft game studio

We make games and experiences in Minecraft.

We work on games and adventures, as well as Minecraft projects for events and exhibitions.

View portfolio
```

### Featured Projects

```text
Featured Projects

Minecraft projects we've worked on.

View portfolio
```

### What We Do

```text
What we do

We handle both the creative and technical sides of Minecraft projects.
```

This intro goes directly into the four canonical Work Areas.

### About preview

```text
About

We're a studio focused on Minecraft.

We make games and adventures, and also work on projects for events and exhibitions.

About Hellocraft
```

### Contact preview

```text
Contact

Tell us about your Minecraft project.

Tell us what you're working on and where we can help.

Contact us
```

All Home section copy above is approved. Do not rewrite it without a concrete reason from new positioning or verified portfolio evidence.

## Portfolio — APPROVED STRUCTURE / WAITING FOR REAL PROJECT DATA

### Hero — APPROVED

```text
Portfolio

Projects we've worked on.

A closer look at what we made and our role in each project.
```

Do not rewrite the Portfolio Hero without a concrete reason from verified portfolio evidence.

### Project listing — APPROVED

Required:

```text
Project media
Project name
Short description
View project
```

Optional only when the information is confirmed, public, and useful:

```text
Client / partner
Year
```

Do not show these by default on the Portfolio listing:

```text
Work Areas
role / contribution labels
tags
categories
technical details
long descriptions
extra metadata
```

Those details belong on Project Detail when the real project information supports them.

### Short project description — APPROVED

Each listing uses one concise sentence based on real approved project information.

Write it as:

```text
what the project is
+
what players / visitors do or experience
```

Lead with the project itself, not Hellocraft's contribution.

Avoid opening with generic marketing claims or agency language such as:

```text
innovative
immersive
custom solution
Hellocraft developed...
```

## Project Detail — APPROVED STRUCTURE / WAITING FOR REAL PROJECT DATA

The reusable Project Detail structure is approved and implemented in source.

Use this order when the real evidence supports each section:

```text
Back to Portfolio

Project
PROJECT NAME
Short description
Client / Partner — optional
Year — optional

Main Project Media

The Project
→ what the project is
→ useful context / objective

Our Role
→ what Hellocraft actually designed, built, developed, or handled

Player Experience — optional
→ what players do, see, learn, or experience

Results — optional
→ verified results only

Credits / Links — optional
→ credits and useful public links only

View Portfolio
```

### Important Project Detail rules

`What We Made` is **not** a separate permanent section.

Do not create both:

```text
What We Made
Our Role
```

because they overlap. Information about what Hellocraft made belongs inside **Our Role**.

The source model uses explicit fields rather than a free-form section list:

```text
projectContext
ourRole
playerExperience
results
credits
links
```

This keeps the approved order stable and prevents future terminology drift.

`Player Experience`, `Results`, `Credits`, and `Links` are optional. A short project showcase is valid; do not create empty or weak sections just to make every project page the same length.

Final project-specific wording, client attribution, dates, results, credits, and media must come from approved real project evidence.

## About

Status: `CURRENT REVIEW / FINAL REVIEW LATER`

### Hero — APPROVED

```text
About

We're a game studio focused on Minecraft.

We make games and adventures, and work on projects for events and exhibitions.
```

Do not rewrite the About Hero without a concrete reason from new company positioning or verified evidence.

### What We Do — APPROVED

```text
What we do

We handle both the creative and technical sides of Minecraft projects.
```

This wording is intentionally the same as Home. It goes directly into the same four canonical Work Areas.

Do not add a second supporting sentence that repeats the four Work Area names, and do not create a different definition of What We Do on About.

### How We Work — CURRENT REVIEW

Current draft:

```text
How we work

The project comes first.

We shape the scope around what needs to be built, keeping the creative and technical work connected instead of forcing every project into the same package.
```

### Experience

Status: `WAITING FOR REAL DATA`

Use only approved company/project evidence such as real clients, partners, project experience, results, or other public credibility information.

### Contact close

Current draft:

```text
Planning a Minecraft project?

Tell us what you want to make and where you need help.

Contact us
```

## Careers

Status: `WAITING FOR REAL DATA`

Do not maintain or display a speculative role taxonomy.

When a real opening exists, use the real approved job title and write:

```text
what the person will work on
actual responsibilities
expected skills
work/location arrangement
how to apply
```

Valid final state when there are no openings:

```text
We don't have any public openings right now.
```

## Contact

Status: `WAITING FOR REAL DATA`

Current draft:

```text
Tell us about your project.

For Minecraft projects, partnerships, or other business questions, this is the place to reach Hellocraft.
```

Useful first-message guidance:

```text
What do you want to make?
Who is it for?
What do you need help with?
What constraints are already known?
```

Do not finalize the Contact page until the real public business contact route and approved social links are supplied.

## Current drafting order

```text
1. Home — APPROVED
2. Portfolio — structure + writing rules APPROVED; real projects pending
3. Project Detail — structure APPROVED / implemented; real projects pending
4. About — Hero + What We Do APPROVED; How We Work next
5. Contact
6. Careers
7. final site-wide copy pass after real evidence is integrated
```

## Final content review

Before publication, every page must pass these checks:

```text
[ ] wording follows 08-writing-style.md
[ ] approved copy is not casually rewritten
[ ] strong claims are supported
[ ] Work Area names match the canonical four-name list exactly
[ ] no second capability/service/role taxonomy has been introduced
[ ] no separate What We Made + Our Role duplication is introduced
[ ] client/partner names are approved for public use
[ ] sample/demo content is removed
[ ] project descriptions match actual media and project facts
[ ] contact details are real
[ ] Careers reflects the current hiring state and real job titles
[ ] metadata describes the real page content
```
