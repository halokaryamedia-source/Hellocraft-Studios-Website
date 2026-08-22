# Hellocraft Studios Website — Current Context

Current state of the Hellocraft Studios Website on branch `Local`.

Use `docs/knowledge/next-action.md` for the immediate next step. Project rules live in `AGENTS.md` and `docs/foundation/`.

## Website purpose

Hellocraft Studios is a **game studio focused on Minecraft**.

The website should introduce the company clearly, show real projects as the main proof of its work, help potential clients understand whether Hellocraft is relevant to their project, provide real business contact information, and show career opportunities only when real openings exist.

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

Legacy redirects only:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Design — APPROVED

Reference direction:

- Hazelight Studios for strong game imagery, spacing, and visual confidence;
- Blind Squirrel Games for clear company and project communication.

Keep the site clean, professional, game-focused, media-first, and easy to understand. Do not reopen broad design work without a concrete reason from real content or media.

## Writing style — APPROVED

Public writing follows `docs/foundation/08-writing-style.md`.

Voice:

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

```text
Game & Experience Design
World & Level Design
Game Development
3D Art
```

Do not create parallel capability/service/discipline taxonomies.

Work Areas are not job titles. Careers and project credits use real approved titles from actual data only.

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

## Portfolio — APPROVED STRUCTURE / WAITING FOR REAL PROJECT DATA

Hero:

```text
Portfolio
Projects we've worked on.
A closer look at what we made and our role in each project.
```

Listing:

```text
Project media
Project name
Short description
View project
```

Optional when confirmed/public/useful: `Client / partner`, `Year`.

Do not show tags, categories, Work Areas, role labels, technical details, long descriptions, or extra metadata by default.

Short descriptions explain what the project is + what players/visitors do or experience. Lead with the project itself, not a marketing claim or Hellocraft's contribution.

## Project Detail — APPROVED STRUCTURE / IMPLEMENTED

```text
Back to Portfolio
Project name + short description + optional client/year
Main Project Media
The Project
Our Role
Player Experience — optional
Results — optional / verified only
Credits / Links — optional
View Portfolio
```

Do not maintain `What We Made` as a separate permanent section; that content belongs inside **Our Role**.

Explicit project fields:

```text
projectContext
ourRole
playerExperience
results
credits
links
```

Final project-specific copy/media still requires approved real evidence.

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

Experience is evidence-only and hidden/empty until verified public evidence exists. Do not invent client names/logos, project counts, years, awards, metrics, or credibility copy.

Contact close:

```text
Planning a Minecraft project?
Tell us what you're working on and where we can help.
Contact us
```

## Contact — APPROVED COPY / WAITING FOR REAL CONTACT DATA

```text
Contact
Tell us about your project.
Tell us what you're working on and how we can help.
```

Contact Details rule:

```text
Use only real approved public channels.
One real business email is enough if that is the actual workflow.
Social links are optional and only when real/public/approved/useful.
Do not add phone, Discord, booking, office address, form, or extra channels just to fill space.
```

Inquiry guidance:

```text
What should you include?
A short description of the project, who it's for, and where you need our help.
```

Real email/social data is still pending.

## Careers — CURRENT REVIEW / WAITING FOR REAL HIRING DATA

### Hero — APPROVED / IMPLEMENTED

```text
Careers

Join Hellocraft Studios.

Open roles and application details will be posted here when we're hiring.
```

No-openings state remains:

```text
We don't have any public openings right now.
```

Do not invent job openings, titles, responsibilities, locations, or application links.

### Current review

Review the Careers general intro next:

```text
Careers

Build Minecraft projects with us.

Each real opening will describe the work, skills, and responsibilities for that role.
```

It must not imply a current vacancy or create a permanent role taxonomy.

## Current content status

```text
Home                         = APPROVED / implemented
Portfolio structure          = APPROVED / real content pending
Project Detail structure     = APPROVED / implemented / real content pending
About                        = APPROVED / implemented / Experience data pending
Contact                      = APPROVED copy / real contact data pending
Careers Hero                 = APPROVED / implemented
Careers general intro        = next review
Careers real openings        = waiting for actual hiring data
Final site-wide pass         = after real portfolio/media/contact/hiring evidence
```

Sample portfolio entries remain fictional and exist only for layout preview. Sample career data is separated from real openings.

`contentIsDemo = true` remains enabled until production content is ready.

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

Continue with **Careers — general intro**. Preserve all approved Home, Portfolio, Project Detail, About, Contact, Careers Hero, no-openings state, and Work Areas decisions. Do not invent job openings or job titles.
