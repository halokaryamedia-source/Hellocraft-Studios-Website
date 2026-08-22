# Hellocraft Studios Website — Current Context

Current state of the Hellocraft Studios Website on branch `Local`.

Use `docs/knowledge/next-action.md` for the immediate next step. Project rules live in `AGENTS.md` and `docs/foundation/`.

## Website purpose

Hellocraft Studios is a **game studio focused on Minecraft**.

The website should:

- introduce the company clearly;
- show real projects as the main evidence of its work;
- help potential clients understand whether Hellocraft is relevant to their project;
- provide business contact information;
- show career opportunities when real openings exist.

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

The logo links to Home.

Old addresses remain only for compatibility:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Design — APPROVED

Reference direction:

- Hazelight Studios for strong game imagery, spacing, and visual confidence;
- Blind Squirrel Games for clear company and project communication.

Keep the website clean, professional, game-focused, media-first, and easy to understand.

Do not reopen broad design work without a concrete reason from real content or media.

## Writing style — APPROVED

Public writing follows:

```text
docs/foundation/08-writing-style.md
```

Hellocraft's voice is:

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

Professional copy should sound like it was written by a real studio team. Avoid generic agency language, exaggerated claims, and polished marketing phrases that feel generated.

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

Short descriptions explain:

```text
what the project is
+
what players / visitors do or experience
```

Do not show tags, categories, Work Areas, role labels, technical details, long descriptions, or extra metadata by default.

## Project Detail — APPROVED STRUCTURE / IMPLEMENTED

Use this order when real evidence supports each section:

```text
Back to Portfolio

Project
PROJECT NAME
Short description
Client / Partner — optional
Year — optional

Main Project Media

The Project
→ what the project is and useful context

Our Role
→ what Hellocraft actually designed, built, developed, or handled

Player Experience — optional
Results — optional / verified only
Credits / Links — optional

View Portfolio
```

Do not maintain `What We Made` as a separate permanent section. That content belongs inside **Our Role**.

The project content model uses explicit fields:

```text
projectContext
ourRole
playerExperience
results
credits
links
```

Final project-specific copy, clients, dates, results, credits, links, and media still require approved real project evidence.

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

Experience is evidence-only and must remain hidden/empty until verified public evidence exists. Do not add invented client names/logos, project counts, years of experience, awards, metrics, or generic credibility copy.

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
Do not add phone, Discord, booking, office address, form, or extra channels merely to fill space.
```

Inquiry guidance:

```text
What should you include?

A short description of the project, who it's for, and where you need our help.
```

All Contact copy that can be finalized without actual contact-channel data is approved. The real email and any public links are still pending.

## Careers — NEXT REVIEW / WAITING FOR REAL HIRING DATA

Careers is now the next page to review.

Do not create a speculative role taxonomy. Use actual job titles, responsibilities, work arrangement, and application details only when a real opening exists.

A valid public no-openings state is:

```text
We don't have any public openings right now.
```

## Current content status

```text
Home                         = APPROVED / implemented
Portfolio Hero               = APPROVED / implemented
Portfolio listing structure  = APPROVED / implemented
Portfolio short descriptions = APPROVED rule
Portfolio project content    = waiting for real project sources
Project Detail structure     = APPROVED / implemented
Project Detail final copy    = waiting for real project sources
About                        = APPROVED / implemented
About Experience data        = waiting for verified public evidence
Contact                      = APPROVED copy / implemented
Contact methods              = waiting for confirmed public data
Careers                      = next section-by-section review / waiting for real hiring state
Final site-wide pass         = after real portfolio/media is integrated
```

Sample portfolio entries remain fictional and exist only for layout preview. Sample career data is separated from real openings.

`contentIsDemo = true` remains enabled until production content is ready.

## Main content files

```text
src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, footer text, and Work Areas

src/lib/content/projects.ts
→ portfolio project data + approved Portfolio/Project Detail rules

src/lib/content/types.ts
→ explicit Project Detail content fields

src/routes/portfolio/[slug]/+page.svelte
→ approved Project Detail rendering order

docs/knowledge/content-draft.md
→ working website copy and approval status

docs/knowledge/next-action.md
→ immediate continuation state
```

## Content review rule

When real material is supplied:

```text
record it
→ identify what it belongs to
→ check facts and duplicates
→ confirm whether it can be public
→ note missing information
→ choose what goes on the website
→ write public copy using 08-writing-style.md
```

Do not guess missing clients, dates, results, permissions, roles, contact details, hiring details, or project facts.

## Deferred technical work

Still deferred until explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full browser testing
hosting selection
production adapter selection
```

## Immediate continuation

Start the **Careers page review**, beginning with the Careers Hero and the no-openings state. Preserve all approved Home, Portfolio, Project Detail, About, Contact, and Work Areas decisions. Do not invent job openings or job titles.
