# Project Overview

## What this project is

The Hellocraft Studios Website is the official website for **Hellocraft Studios**, a game studio focused on Minecraft.

The website should make the company easy to understand, show real work, support business enquiries, and provide career information when Hellocraft is hiring.

## Main goals

The website has four main jobs:

1. **Company information** — explain who Hellocraft is and what kind of Minecraft work it does.
2. **Portfolio** — show real projects as the main evidence of Hellocraft's work and experience.
3. **Business enquiries** — give potential clients and partners a clear way to contact Hellocraft.
4. **Careers** — show current opportunities when real openings exist.

The site should stay focused on these jobs rather than adding features or pages without a clear need.

## Who the website is for

The main business audience includes:

- Minecraft publishers and production partners;
- server and platform operators;
- brands using Minecraft for campaigns or experiences;
- public, cultural, and event organisations using Minecraft for events, museums, exhibitions, festivals, or similar projects.

The website should also work for:

- Minecraft creators, agencies, and other collaborators;
- people interested in working with Hellocraft;
- Minecraft players and community visitors.

The language should be clear enough for people who know Minecraft well and for clients who may not know Minecraft production terminology.

## Current page structure

The public website uses standard page names:

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

The Hellocraft logo links to Home.

Old addresses remain only to keep existing links working:

```text
/work          → /portfolio
/work/[slug]   → /portfolio/[slug]
/studio        → /about
```

## Current design direction

The page design is approved.

The website should feel like a professional game studio: clear, media-led, confident, and simple. Real project images should provide most of the visual character instead of decorative website effects.

The main reference points are Hazelight Studios for visual confidence and Blind Squirrel Games for clear company and project communication. Their layouts and brand graphics should not be copied.

## Current technical setup

The approved setup is:

```text
SvelteKit
Svelte 5 + TypeScript
Bun
native CSS + scoped Svelte styles
CSS custom properties
static/prerender-first where possible
SvelteKit server features only when needed
no separate backend or database by default
```

Local build and browser testing are still deferred until the project owner re-authorises them.

## What is still missing

The main missing production material is:

- the real Hellocraft portfolio and approved project facts;
- real project screenshots, renders, and video;
- approved client/partner attribution where public use is allowed;
- final company wording based on confirmed facts;
- real public contact and social links;
- real career openings, if any;
- the final logo/vector source and exact brand colours;
- final production typography;
- final SEO/social metadata once the production domain and media are known.

## Content rules

- Do not invent projects, clients, results, testimonials, team size, awards, or contact details.
- Do not automatically treat old conversations or sibling repositories as public portfolio evidence.
- Record supplied material before deciding whether it should be published.
- A true internal fact is not automatically approved for public use.
- Unknown information should stay unknown until it is confirmed.
- Use plain language and avoid vague agency or technical jargon in public copy.

## Portfolio rule

The portfolio is the main evidence of Hellocraft's ability.

A project can be shown as a short showcase or a more detailed project page depending on the real material available. Not every project needs a client name, metric, long case study, or the same page structure.

No final portfolio categories or filters should be added until the real project list shows that they are useful.

## What Hellocraft provides

A fixed public Services list is not approved yet.

Current project/company information supports work around Minecraft worlds, gameplay, game development, technical systems, and 3D art, but these should not automatically become separate service pages or packages. The final explanation should be based on real portfolio evidence and what clients actually need to understand.

## Success check

The finished website should make these questions easy to answer:

- Who is Hellocraft Studios?
- What kind of Minecraft work does it do?
- What has it actually made?
- What did Hellocraft contribute to those projects?
- Is Hellocraft relevant to my project?
- How do I contact the company?
- Are there current job openings?
