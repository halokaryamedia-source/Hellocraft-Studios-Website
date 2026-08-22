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
Contact                            = APPROVED copy / implemented
Contact Details rule               = APPROVED / evidence-only
Careers Hero                       = APPROVED / implemented
Careers General Intro              = REMOVED / APPROVED
Careers How to Apply rule          = APPROVED / conditional
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

## Careers — approved current state

```text
Careers

Join Hellocraft Studios.

Open roles and application details will be posted here when we're hiring.
```

No-opening state:

```text
Open positions

We don't have any public openings right now.
```

The generic Careers intro was removed by design.

`How to apply` is conditional:

```text
no openings
→ do not show it

role-specific application workflow
→ keep instructions with the real role

one shared workflow for all current roles
→ show How to apply only with real approved instructions
```

The source uses optional `careerApplication`; it remains `null` until a real shared workflow is needed.

Do not invent openings, titles, email addresses, forms, Discord processes, or recruitment instructions.

## Production content still needed

```text
real portfolio project facts
project screenshots / renders / video
approved client / partner attribution
verified results where relevant
real business email and approved public links
verified About Experience evidence
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

**Review shared site copy, beginning with the Footer statement. Preserve all approved Home, Portfolio, Project Detail, About, Contact, Careers, and Work Areas decisions. Do not reopen approved page copy without a concrete reason.**
