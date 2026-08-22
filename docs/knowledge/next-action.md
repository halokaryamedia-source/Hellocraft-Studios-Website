# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` is in the **website content drafting** stage.

Completed:

```text
page structure      = complete
public page names   = approved
page design         = approved
writing style guide = APPROVED
Home draft          = implemented
About draft         = implemented
Portfolio intro     = implemented
Work Areas          = APPROVED / implemented
sample project data = clearly fictional
sample career data  = separated from real openings
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

Use these exact names in:

```text
Home
About
internal source names
documentation
project attribution when relevant
```

Do not maintain parallel terms such as:

```text
capabilities
core production areas
services taxonomy
disciplines taxonomy
Core Production / Supporting Production role groups
```

### Job titles

Work Areas are **not** job titles.

For Careers or project credits:

```text
real opening / real project data
→ use the real approved job title
→ describe the real responsibility
```

Do not create a permanent role taxonomy before real hiring/project data exists.

## Working content draft

Use:

```text
docs/knowledge/content-draft.md
```

Current status:

```text
Home                = Draft v1 + Work Areas implemented
Portfolio intro     = Draft v1
Portfolio projects  = waiting for real project sources
Project Detail      = structure ready; waiting for real project sources
About               = Draft v1 + Work Areas implemented
Contact             = working copy only; final contact data missing
Careers             = working copy only; final hiring state missing
```

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
```

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

## About structure

```text
Hero
→ company introduction

What We Do
→ the same four canonical Work Areas

How We Work
→ project approach

Experience
→ verified public evidence only

Contact
→ project conversation
```

## Portfolio and Project Detail

The next major input is **real Hellocraft project material**.

For each project, useful information includes:

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

Use real project responsibility terms. Do not force project credits into a made-up job taxonomy.

## Incoming material workflow

```text
receive files/information
→ record every item
→ group by project or subject
→ identify duplicates
→ check facts
→ confirm public/private status
→ record missing information
→ select what appears on the website
→ write public copy using 08-writing-style.md
```

Keep unselected supplied material recorded in:

```text
docs/knowledge/content-inventory.md
```

## Demo mode

Keep:

```text
contentIsDemo = true
```

until production content is ready.

Before turning it off:

```text
[ ] sample portfolio entries removed/replaced
[ ] real project media added
[ ] final copy approved
[ ] real contact details added
[ ] sample experience/career data removed/replaced as needed
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

**Continue content drafting with real Hellocraft portfolio information and project media. Keep the four Work Areas as the single shared terminology across source, public copy, and documentation.**
