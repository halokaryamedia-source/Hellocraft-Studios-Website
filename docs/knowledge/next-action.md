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
About                              = APPROVED / implemented
About Experience rule              = APPROVED / evidence-only
Contact Hero                       = APPROVED / implemented
Contact Details rule               = APPROVED / evidence-only
Contact Inquiry guidance           = APPROVED / implemented
Careers Hero                       = APPROVED / implemented
Careers General Intro              = REMOVED / APPROVED
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

## Approved Contact copy

```text
Contact

Tell us about your project.

Tell us what you're working on and how we can help.
```

Contact methods rule:

```text
Use only real approved public contact channels.
One real business email is enough if that is the actual workflow.
Social links are optional and appear only when real, public, approved, and useful.
Do not add phone, Discord, booking, office address, form, or extra channels merely to fill space.
```

Inquiry guidance:

```text
What should you include?

A short description of the project, who it's for, and where you need our help.
```

The actual email and any public links still wait for confirmed contact data.

## Portfolio and Project Detail

Portfolio structure and Project Detail structure are approved. Final project content still requires real approved project facts and media.

Project Detail order:

```text
Project
→ The Project
→ Our Role
→ Player Experience — optional
→ Results — optional / verified only
→ Credits / Links — optional
→ View Portfolio
```

Do not maintain `What We Made` as a separate permanent section.

## About

About copy is approved for the current content stage. `Experience` remains evidence-only and hidden until verified public material exists.

## Careers — current review

Approved Hero:

```text
Careers

Join Hellocraft Studios.

Open roles and application details will be posted here when we're hiring.
```

Approved no-openings state:

```text
We don't have any public openings right now.
```

The separate generic Careers intro has been **removed by design**. Do not restore `Build Minecraft projects with us.` or another generic filler section. The page now follows:

```text
Hero
→ Open positions
→ How to apply
```

Important rule:

```text
Work Areas are not job titles.
Do not invent a permanent role taxonomy.
Use real job titles and responsibilities only when a real opening exists.
```

The next Careers section to review is **How to apply**. It must reflect the real hiring workflow and must not invent application instructions.

## Writing style

All new or revised public copy must follow:

```text
docs/foundation/08-writing-style.md
```

Hellocraft should sound confident, clear, creator-led, Minecraft-native, friendly, practical, professional, and human.

Avoid generic agency language and polished marketing phrases that sound generated rather than spoken by a real studio team.

## Real production content still needed

```text
real portfolio project facts
project screenshots / renders / video
approved client / partner attribution
verified results where relevant
real business email and approved public links
real hiring state / openings when applicable
final logo/vector
final font
final SEO/social metadata
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

**Review the Careers `How to apply` section. Preserve the approved Careers Hero, approved no-openings state, and the decision to remove the generic Careers intro. Do not invent application instructions, job openings, or job titles.**
