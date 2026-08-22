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

Professional copy should still sound like it was written by a real studio team. Avoid generic agency language, exaggerated claims, and polished marketing phrases that feel generated.

## Work Areas — APPROVED / SINGLE TERMINOLOGY

Use one fixed **Work Areas** list everywhere:

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Do not create parallel terms such as capabilities, core production areas, service categories, disciplines, or permanent role groups.

Work Areas are not job titles. Careers and project credits use real approved titles from real data.

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

### Hero

```text
Portfolio

Projects we've worked on.

A closer look at what we made and our role in each project.
```

### Listing structure

Required:

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

Do not show tags, categories, Work Areas, role labels, technical details, long descriptions, or extra metadata by default.

### Short project description

Use one concise sentence that explains:

```text
what the project is
+
what players / visitors do or experience
```

Lead with the project itself. Do not lead with Hellocraft's contribution or a marketing claim.

## Project Detail — APPROVED STRUCTURE / IMPLEMENTED

Use this order when real evidence supports the section:

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

Do not maintain `What We Made` as a separate permanent section. That content belongs inside **Our Role** so the site does not repeat the same information under two names.

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

### Hero

```text
About

We're a game studio focused on Minecraft.

We make games and adventures, and work on projects for events and exhibitions.
```

### What We Do

```text
What we do

We handle both the creative and technical sides of Minecraft projects.
```

The About section uses the same wording and the same four canonical Work Areas as Home. Do not create a second definition, repeat the Work Area names in supporting copy, or introduce another taxonomy.

### How We Work

```text
How we work

We work around what each project needs.

We keep the creative and technical work connected throughout the project.
```

Keep this language simple and do not replace it with agency-style process language unless a real operational need requires more detail.

### Experience — APPROVED RULE / WAITING FOR REAL DATA

Experience is evidence-only and must remain hidden/empty until verified public evidence exists.

Valid evidence may include approved public clients or partners, real project history, verified results, or other documented company experience.

Do not add generic marketing paragraphs, invented credibility claims, client names/logos, project counts, years of experience, awards, or metrics to fill the section.

The current About implementation already follows this rule: Experience is rendered only when demo mode is off and real experience items exist.

### Contact close

```text
Planning a Minecraft project?

Tell us what you're working on and where we can help.

Contact us
```

The Contact close intentionally uses the same approved supporting sentence as Home.

All currently publishable About copy is approved. Only real Experience evidence remains pending.

## Contact — CURRENT REVIEW

### Hero — APPROVED / IMPLEMENTED

```text
Contact

Tell us about your project.

Tell us what you're working on and how we can help.
```

Do not rewrite the Contact Hero without a concrete reason from a real change in company positioning or the public contact workflow.

### Current review section

```text
Contact methods
```

Only real approved public contact channels may be displayed. Do not invent email addresses, phone numbers, Discord accounts, social links, booking links, office addresses, or forms.

If Hellocraft ultimately uses only one public email address, keep the page simple rather than adding extra contact methods just to fill space.

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
Contact Hero                 = APPROVED / implemented
Contact methods              = current review / waiting for confirmed public data
Contact inquiry guidance     = draft
Careers final copy           = waiting for real hiring state
Final site-wide pass         = after real portfolio/media is integrated
```

Sample portfolio entries remain fictional and are only for layout preview. Real project screenshots, renders, video, client attribution, results, dates, and credits must come from approved project sources.

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

Do not guess missing clients, dates, results, permissions, roles, contact details, or project details.

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

Continue with **Contact methods**. Preserve the approved Contact Hero and all approved Home, Portfolio, Project Detail, About, and Work Areas decisions. Real contact channels remain pending confirmed public data.
