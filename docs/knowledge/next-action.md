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
Home Work Areas                    = APPROVED / implemented
About draft                        = implemented
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
Home                         = APPROVED / implemented
Portfolio Hero               = APPROVED / implemented
Portfolio project listing    = current review section
Portfolio projects           = waiting for real project sources
Project Detail               = structure ready; waiting for real project sources
About                        = Draft v1 + Work Areas implemented
Contact                      = working copy only; final contact data missing
Careers                      = working copy only; final hiring state missing
```

## Approved Portfolio Hero

```text
Portfolio

Projects we've worked on.

A closer look at what we made and our role in each project.
```

Do not rewrite this without a concrete reason from verified portfolio evidence.

## Portfolio listing rule

The next decision is the copy structure for each project shown on the Portfolio page.

Keep it simple. Depending on verified data, a project listing may use:

```text
Project name
Short description
Client / partner — only when public and useful
Year — only when confirmed and useful
View project
```

Do not add categories, tags, or metadata just to fill space.

## Writing style

All new or revised public copy must follow:

```text
docs/foundation/08-writing-style.md
```

Hellocraft should sound confident, clear, creator-led, Minecraft-native, friendly, practical, professional, and human.

Professional does not mean corporate or artificial. Avoid polished marketing phrases that sound generated rather than spoken by a real studio team.

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

**Review and approve the project listing copy structure for the Portfolio page. Preserve the approved Home, Portfolio Hero, and Work Areas.**
