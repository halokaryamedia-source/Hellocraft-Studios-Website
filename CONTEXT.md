# Hellocraft Studios Website — Current Context

Current state of the Hellocraft Studios Website on branch `Local`.

Use `docs/knowledge/next-action.md` for the immediate next step. Detailed approved copy and rules are tracked in `docs/knowledge/content-draft.md`. Durable project rules live in `AGENTS.md` and `docs/foundation/`.

## Website purpose

Hellocraft Studios is a **game studio focused on Minecraft**.

The website should:

- introduce the company clearly;
- show real projects as the main evidence of its work;
- help potential clients understand whether Hellocraft is relevant to their project;
- provide business contact information;
- show career opportunities only when real openings exist.

## Public pages

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

Logo = Home.

Legacy redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Design — APPROVED

Keep the current route designs. Do not reopen broad redesign work unless real content or media creates a concrete need.

Direction:

```text
clean
professional
game-focused
media-first
easy to understand
```

References:

- Hazelight Studios for strong game imagery, spacing, and visual confidence;
- Blind Squirrel Games for clear company and project communication.

## Writing style — APPROVED

Public writing follows:

```text
docs/foundation/08-writing-style.md
```

Target voice:

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

Avoid generic agency language, exaggerated claims, and polished marketing phrases that feel generated.

## Work Areas — APPROVED / SINGLE TERMINOLOGY

Use one fixed **Work Areas** list everywhere:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Do not create parallel capability/service/discipline taxonomies.

Work Areas are not job titles. Careers and project credits use real approved titles from actual data.

## Home — APPROVED / IMPLEMENTED

Approved content includes:

```text
Minecraft game studio
We make games and experiences in Minecraft.
We work on games and adventures, as well as Minecraft projects for events and exhibitions.
View portfolio
```

```text
Featured Projects
Minecraft projects we've worked on.
View portfolio
```

```text
What we do
We handle both the creative and technical sides of Minecraft projects.
```

```text
About
We're a studio focused on Minecraft.
We make games and adventures, and also work on projects for events and exhibitions.
About Hellocraft
```

```text
Contact
Tell us about your Minecraft project.
Tell us what you're working on and where we can help.
Contact us
```

Do not casually rewrite approved Home copy.

## Portfolio — APPROVED STRUCTURE / WAITING FOR REAL PROJECT DATA

Hero:

```text
Portfolio
Projects we've worked on.
A closer look at what we made and our role in each project.
```

Listing structure:

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

Short descriptions explain what the project is + what players/visitors do or experience. Lead with the project itself.

Do not show tags, categories, Work Areas, role labels, technical details, long descriptions, or extra metadata by default.

## Project Detail — APPROVED STRUCTURE / IMPLEMENTED

Order:

```text
Project header + optional client/year
Main media
The Project
Our Role
Player Experience — optional
Results — optional / verified only
Credits / Links — optional
View Portfolio
```

Do not maintain `What We Made` as a separate permanent section. That content belongs inside **Our Role**.

Explicit source fields:

```text
projectContext
ourRole
playerExperience
results
credits
links
```

Final project-specific copy and media still require approved real project evidence.

## About — APPROVED / IMPLEMENTED

```text
About
We're a game studio focused on Minecraft.
We make games and adventures, and work on projects for events and exhibitions.
```

```text
What we do
We handle both the creative and technical sides of Minecraft projects.
```

```text
How we work
We work around what each project needs.
We keep the creative and technical work connected throughout the project.
```

Experience is evidence-only and remains hidden until verified public material exists.

Contact close:

```text
Planning a Minecraft project?
Tell us what you're working on and where we can help.
Contact us
```

## Contact — APPROVED COPY / WAITING FOR REAL CONTACT DATA

Hero:

```text
Contact
Tell us about your project.
Tell us what you're working on and how we can help.
```

Contact Details rule:

```text
Use only real approved public contact channels.
One real business email is enough if that is the actual workflow.
Social links are optional and appear only when real, public, approved, and useful.
```

Do not invent phone, Discord, booking, office address, forms, or extra channels to fill space.

Inquiry guidance:

```text
What should you include?
A short description of the project, who it's for, and where you need our help.
```

## Careers — APPROVED STRUCTURE / WAITING FOR REAL HIRING DATA

Hero:

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

Default page structure while there are no openings:

```text
Hero
→ Open positions
```

`How to apply` is conditional, not permanent:

```text
no openings
→ hidden

role-specific application workflow
→ instructions stay with that real role

one shared workflow for all current roles
→ shared How to apply section may appear with real approved instructions
```

Source uses optional `careerApplication`, currently `null`. Do not invent application emails, forms, Discord processes, job titles, or recruitment instructions.

## Current content status

```text
Home                         = APPROVED / implemented
Portfolio structure          = APPROVED / real project data pending
Project Detail structure     = APPROVED / implemented / real project data pending
About                        = APPROVED / Experience evidence pending
Contact                      = APPROVED copy / real contact methods pending
Careers                      = APPROVED structure/copy / real hiring data pending
Work Areas                   = APPROVED / implemented
Shared/footer copy           = next review
Final site-wide pass         = after real evidence is integrated
```

Sample portfolio entries remain fictional and exist only for layout preview. Sample career data is separated from real openings.

`contentIsDemo = true` remains enabled until production content is ready.

## Production content still needed

```text
real portfolio project facts
project screenshots / renders / video
approved client / partner attribution
verified results where relevant
verified About Experience evidence
real business email and approved public links
real hiring state / openings when applicable
final logo/vector
final font
final SEO/social metadata
```

## Deferred technical work

Still deferred until explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full browser/runtime testing
hosting selection
production adapter selection
```

## Immediate continuation

Continue with **shared site copy review, beginning with the Footer statement**. Preserve all approved page copy and structure unless a concrete new fact requires a change.
