# Product Requirements

## Main priority

The website should be clear, credible, visually strong, and lightweight.

Real project evidence is more important than decorative features or broad marketing claims.

## Positioning

Hellocraft Studios is:

> **A game studio focused on Minecraft.**

Keep this meaning simple. Do not replace it with vague terms such as metaverse agency, immersive studio, creative solutions company, or other labels that make the company harder to understand.

## Public pages

The approved page structure is:

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

Do not add Services, Blog, Team, Clients, Awards, Shop, Login, Dashboard, or other pages without a real current need.

## Home

Home should quickly explain what Hellocraft is and give visitors clear paths to:

- selected projects;
- About;
- Contact.

The page should stay concise. Real project media should carry most of the visual weight once it is available.

## Portfolio

Portfolio is the main proof of Hellocraft's work.

Each real project may include only the information that is actually available and approved, such as:

- project name;
- short summary;
- year when useful;
- client or partner when public use is allowed;
- Hellocraft's actual role;
- project details;
- links;
- screenshots, renders, or video;
- results only when supported by evidence.

Not every project needs the same amount of detail. A short showcase is valid when there is not enough material for a longer project page.

Do not invent:

- clients or partners;
- results or metrics;
- testimonials;
- awards;
- dates;
- project roles;
- project categories.

Do not add filters or categories until the real project list shows that they improve browsing.

## About

About should explain Hellocraft in plain language.

Current confirmed scope supports Minecraft work that can involve:

- custom worlds and environments;
- gameplay;
- game development;
- technical systems;
- supporting 3D art.

These are examples of project work, not a fixed public Services package.

About may also show verified company experience, clients, partners, results, or other credibility information when those facts are approved for public use.

## Careers

Careers should show real openings only when Hellocraft is actively hiring.

Current talent areas may include:

- Minecraft building and level design;
- game development;
- 3D art, including relevant modeling, texturing, or animation work.

If there are no public openings, say so clearly. Do not publish sample roles as real jobs.

Each real opening should provide the role details and a clear way to apply.

## Contact

Contact should provide approved public business contact details.

The page may support project enquiries, partnerships, and other business questions.

Do not invent email addresses, phone numbers, Discord links, social profiles, booking links, office addresses, or contact forms.

A custom form, CRM, booking system, or database should be added only if the real contact workflow requires it.

## Public copy

Use direct, human language.

Prefer:

- clear nouns and verbs;
- short explanations;
- concrete project information;
- normal website terms such as Portfolio, About, Careers, Contact, What we do, and How we work.

Avoid:

- vague agency language;
- exaggerated claims;
- unnecessary technical terminology;
- invented slogans that obscure what Hellocraft does;
- internal development language in public-facing copy.

The copy should make sense to both Minecraft-native visitors and clients who do not know Minecraft production terminology.

## Content accuracy

All supplied material should be reviewed before publication.

For every important fact, separate:

1. whether it is supported by evidence;
2. whether it is allowed to be public;
3. whether it is useful on the website.

Unknown information should stay unknown rather than being filled with a plausible guess.

Sibling repositories and previous conversations are not automatically public portfolio evidence.

## Design

The approved design direction is professional, media-led, simple, and game-focused.

Use:

- strong typography;
- clear spacing;
- large real project imagery;
- simple page sections;
- restrained Hellocraft cyan;
- straightforward responsive layouts.

Avoid:

- fake HUD or game-interface decoration;
- Minecraft pixel UI as global website chrome;
- glassmorphism;
- decorative card grids without a content reason;
- fake KPI strips;
- repeated numbered chapters;
- excessive visual effects;
- direct copying of reference websites.

Hazelight Studios remains the main visual reference and Blind Squirrel Games remains a useful reference for clear company/project communication.

## Performance

The website should remain lightweight.

Prefer:

- static or prerendered delivery when possible;
- native Svelte, CSS, and browser features;
- minimal client-side JavaScript;
- responsive image delivery;
- lazy loading for non-critical media;
- poster-first, user-initiated video by default;
- a small number of font files and weights.

Do not add WebGL, 3D effects, large animation libraries, component frameworks, trackers, or other heavy dependencies without a clear benefit.

Actual performance must be checked from the built site later; source code alone is not proof.

## Accessibility

The website should use:

- semantic HTML;
- keyboard-accessible navigation and links;
- visible focus styles;
- sufficient contrast;
- responsive/reflow-friendly layouts;
- reduced-motion support;
- accurate alt text when real project media is added.

Decorative placeholders should not be announced as meaningful content.

## Technical setup

Approved baseline:

```text
SvelteKit
Svelte 5 + TypeScript
Bun
native CSS + Svelte scoped styles
CSS custom properties
@sveltejs/enhanced-img for suitable local raster images
static/prerender-first, server-where-needed
SvelteKit server features when required
no separate backend initially
no database initially
```

Do not add Tailwind, Sass, CSS-in-JS, a component kit, CMS, authentication, ecommerce, search, or another backend framework by default.

## Code checks

When local validation is re-authorised, the normal technical checks are:

```text
bun run format:check
bun run lint
bun run check
bun run build
```

`bun run validate` should run those checks together.

A failed check or build means technical acceptance is not complete.

## Current preview state

Sample project and career data may be kept only for layout development while:

```text
contentIsDemo = true
```

During this state:

- the site stays `noindex, nofollow`;
- sample projects must be clearly identifiable as samples;
- sample job roles must not appear as live openings;
- real contact details must not be invented.

## Before launch

Before the site is public, confirm at minimum:

- sample portfolio data has been replaced;
- real approved project media is integrated;
- public copy has been reviewed;
- contact/social links are real;
- career content reflects the current hiring state;
- final logo/brand assets are approved;
- final metadata is ready;
- responsive and accessibility checks are complete;
- format/lint/check/build pass;
- browser testing is complete;
- demo mode and `noindex` are removed only after the release checklist passes.
