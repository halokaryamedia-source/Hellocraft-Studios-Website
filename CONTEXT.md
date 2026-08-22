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

## Design

The current page design is approved.

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

Reference wording from other studios must not be copied.

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

## Content drafting — ACTIVE

Working draft:

```text
docs/knowledge/content-draft.md
```

Current Home structure:

```text
Hero
→ Featured Projects
→ What We Do / Work Areas
→ About
→ Contact
```

### Home Hero — APPROVED

```text
Minecraft game studio

We make games and experiences in Minecraft.

We work on games and adventures, as well as Minecraft projects for events and exhibitions.

View portfolio
```

### Home Featured Projects — APPROVED

```text
Featured Projects

Minecraft projects we've worked on.

View portfolio
```

Do not casually rewrite either approved section.

### Current review section

```text
Home What We Do
```

The four Work Areas are already approved and implemented. Only the section wording is still being reviewed.

## Current content status

```text
Home Hero                       = APPROVED / implemented
Home Featured Projects          = APPROVED / implemented
Home What We Do                 = current review
Home About preview              = draft
Home Contact preview            = draft
Home Work Areas                 = APPROVED / implemented
Portfolio intro                 = Draft v1 implemented
Portfolio project copy          = waiting for real project sources
About company copy              = Draft v1 implemented
About Work Areas                = APPROVED / implemented
Contact final copy              = waiting for real contact details
Careers final copy              = waiting for real hiring state
Final site-wide pass            = after real portfolio/media is integrated
```

Sample portfolio entries remain fictional and are only for layout preview. Real project screenshots, renders, video, client attribution, results, dates, and credits must come from approved project sources.

`contentIsDemo = true` remains enabled until production content is ready.

## Main content files

```text
src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, footer text, and Work Areas

src/lib/content/projects.ts
→ portfolio project information

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

Do not guess missing clients, dates, results, permissions, roles, or project details.

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

## Immediate continuation

Continue Home copy review at **What We Do**. Preserve the approved Hero, Featured Projects, and canonical Work Areas decisions.
