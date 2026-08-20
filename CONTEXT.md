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

The current Mivubi public website is also an internal behavior/content-architecture benchmark, not a technical-stack authority.

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

## Approved technical baseline

The project owner has explicitly selected:

```text
full-stack framework = SvelteKit
package manager      = Bun
architecture         = static/prerender-first, server-where-needed
backend boundary     = SvelteKit server functionality when required
separate backend     = none initially
database             = none initially
```

Bun is selected as package/dependency manager, lockfile owner, and normal project command runner. This does not require Bun-specific server APIs, Bun's standalone bundler, or Bun's test runner for every layer.

SvelteKit owns both the frontend application and initial server/backend boundary. Public content should remain static/prerendered where possible; server behavior is added only for real responsibilities such as form submission, validation, abuse protection, private secrets, or external integrations.

A page with a SvelteKit form action requires server handling, so form routes and static/prerender-only routes must not be conflated.

## Development validation baseline

The repository uses one project-specific visual specialist plus narrowly scoped support/evidence skills.

```text
project specialist
→ web-ui-design-development

support/evidence
→ context7-documentation-validation
→ svelte-development-validation
→ web-accessibility-validation
→ chrome-devtools-validation
```

These support skills do not redefine product semantics and do not consume the one-project-specialist-per-task budget.

Context7 supplies current/version-aware external documentation evidence. Svelte validation supplies official Svelte 5/SvelteKit correctness guidance and autofixer workflow. Accessibility validation is grounded in current W3C WCAG 2.2/WAI-ARIA guidance. Chrome DevTools supplies rendered browser, console, network, interaction, and performance evidence.

Context7 and Chrome DevTools are wired as project-scoped Codex development tooling in `.codex/config.toml`; they are not Hellocraft website runtime dependencies.

## Performance requirement

The project owner explicitly requires a website that is **visually strong but still lightweight and fast to open**.

Treat this as a core architectural constraint:

- static/prerender-first where appropriate;
- minimal client-side JavaScript/hydration;
- deliberate image/video/font optimization;
- native Svelte/SvelteKit/CSS/browser capabilities before heavy dependencies;
- performance measured in built/deployed/browser output, not assumed from source;
- current Core Web Vitals `good` thresholds used as an external performance baseline;
- project-specific transfer/JavaScript/media budgets defined only after a representative visual prototype exists.

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
- TypeScript/project-language conventions;
- styling/design-token implementation;
- exact content source/format;
- component and animation dependencies;
- CMS/content-management requirements;
- SEO/analytics implementation;
- form/email/storage providers;
- repeatable automated testing boundaries such as Vitest/Playwright;
- deployment adapter, hosting, and remaining release architecture.

## Current boundary

The project owner explicitly deferred project/portfolio inventory and will provide the list later.

Do not recover old project names from chat history and automatically treat them as Hellocraft portfolio. Do not design final taxonomy around guessed examples.

Do not add a separate backend, database, CMS, auth system, admin layer, test framework, component library, or motion library unless an approved current responsibility earns it.

## Development readiness

```text
foundation baseline       = established
framework                  = SvelteKit approved
package manager            = Bun approved
backend model              = SvelteKit server, only where needed
rendering direction        = static/prerender-first
separate backend           = none initially
database                   = none initially
performance constraint     = visual quality + lightweight approved
project visual specialist  = ready
support validation layers  = Context7 + Svelte + accessibility + Chrome ready
portfolio evidence         = pending user-supplied list
content architecture       = not ready
visual direction           = not ready
technical architecture     = partial; core full-stack direction approved
full implementation        = not authorized by current definition
```

A bounded content-agnostic technical scaffold may become development-ready after remaining language/styling/quality/media conventions are approved.

The next current step is owned by `docs/knowledge/next-action.md`.