# Hellocraft Studios Website — Current Context

Stable orientation for the Hellocraft Studios Website on branch `Local`.

Active continuation belongs in `docs/knowledge/next-action.md`; durable project meaning belongs in `docs/foundation/`; detailed work routing belongs in `AGENTS.md`.

## Product identity

Hellocraft Studios is a **game studio focused on Minecraft**.

The website is the studio's official web presence. Its current approved purposes are:

- company profile / official studio identity;
- portfolio / proof of work;
- discoverability and client acquisition;
- helping relevant visitors understand what Hellocraft can provide.

## Audience

### Primary business audience

- Marketplace publishers / partners;
- server / platform operators;
- brands that want to create Minecraft experiences;
- public/cultural/event clients, including museums, galleries/exhibitions, and festivals.

### Collaboration audience

- Minecraft creators;
- publishers;
- agencies;
- production partners.

### Talent / recruitment audience

Recruitment is an important website responsibility. Current talent scope includes:

- Minecraft builder / level-design talent;
- developers;
- 3D art talent covering modeling and, where relevant, texturing and animation.

Exact public job titles are not yet fixed.

### General audience

- Minecraft players;
- Minecraft creators;
- Minecraft community.

General visitors matter for awareness and credibility, but the main information hierarchy must remain useful to relevant clients and partners.

## Communication requirement

The website must work for both:

```text
Minecraft-native visitors
→ already understand Minecraft production language

non-technical / non-Minecraft-native clients
→ understand the business, event, exhibition, brand, or experience they want
```

The site should explain Hellocraft concretely without jargon-heavy or inflated agency language.

## Current content direction

Industry examples such as Noxcrew, Blockworks, Spark Universe, Blockception, Cyclone, Shapescape, Everbloom Games, Gamemode One, and Oreville Studios were reviewed as references for common studio-site patterns.

Current working lesson:

```text
identity
→ real work
→ client/partner credibility
→ studio explanation
→ business inquiry
→ careers
```

This is a reference pattern, **not an approved final information architecture**.

## Frontend technical baseline

The project owner has explicitly selected **SvelteKit** as the frontend framework.

This decision fixes the frontend framework family only. It does **not** yet fix:

- exact Svelte/SvelteKit package versions;
- rendering strategy per route (prerender/static, SSR, or hybrid);
- deployment adapter or hosting provider;
- TypeScript/project-language conventions;
- styling system;
- component library;
- animation library;
- CMS/content source;
- analytics/form providers.

The existing `web-ui-design-development` specialist remains framework-neutral and owns visual frontend craft, not SvelteKit architecture.

## Deferred decisions

The following are intentionally unresolved:

- portfolio/project inventory and attribution;
- portfolio categories and filters;
- which projects deserve full case studies;
- service/capability taxonomy;
- final information architecture and navigation;
- homepage section order;
- final marketing copy/tagline;
- visual direction/design system;
- business inquiry fields;
- careers structure and exact job titles;
- CMS/content-management requirements;
- SEO/analytics implementation;
- rendering strategy, deployment adapter, hosting, database, and remaining technical-stack choices beyond the approved SvelteKit frontend framework.

## Current boundary

The project owner explicitly deferred project/portfolio inventory and will provide the list later.

Do not recover old project names from chat history and automatically treat them as Hellocraft portfolio. Do not design final taxonomy around guessed examples.

## Development readiness

```text
foundation baseline       = established
frontend framework        = SvelteKit approved
frontend skill baseline   = ready
portfolio evidence        = pending user-supplied list
content architecture      = not ready
visual direction          = not ready
functional requirements   = not ready
technical architecture    = partial; SvelteKit chosen, remaining decisions open
full implementation       = not authorized by current definition
```

A bounded content-agnostic frontend foundation may become development-ready after its remaining technical/tooling decisions are approved.

The next current step is owned by `docs/knowledge/next-action.md`.
