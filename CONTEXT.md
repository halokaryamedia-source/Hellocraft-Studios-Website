# Hellocraft Studios Website — Current Context

Stable orientation for branch **`Local`**.

Durable project meaning lives in `docs/foundation/`; active continuation lives in `docs/knowledge/next-action.md`; detailed routing lives in `AGENTS.md`.

## Product identity

> **Hellocraft Studios is a game studio focused on Minecraft.**

Website responsibilities:

- official studio/company identity;
- real portfolio/proof of work;
- client/partner credibility and acquisition;
- collaboration and recruitment paths;
- understandable communication for both Minecraft-native and non-Minecraft-native visitors.

## Approved information architecture

Canonical owner:

```text
docs/foundation/07-information-content-architecture.md
```

Route tree:

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

Primary navigation:

```text
Work
Studio
Careers
Contact
```

Home is reached through the brand/logo.

Initial negative decisions:

```text
separate Services route = no
Work filters/categories = no until real inventory earns them
blog/news                = no current responsibility
```

The route/page architecture is now intended to stay stable while approved text/media/project data is populated later.

## Content ownership

```text
src/lib/content/site.ts
→ identity + navigation

src/lib/content/pages.ts
→ page copy slots + empty proof/contact/careers collections

src/lib/content/projects.ts
→ approved public project entries; currently empty

src/lib/content/types.ts
→ small shared content contracts
```

Unknown copy uses explicit searchable placeholders such as:

```text
[[HOME_HERO_TITLE]]
[[STUDIO_APPROACH_BODY]]
[[CONTACT_INQUIRY_BODY]]
```

Do not invent copy or facts merely to remove a placeholder.

Authoritative content intake is governed by:

```text
docs/knowledge/content-intake-contract.md
```

Portfolio/project evidence and Studio/About facts are still pending owner-supplied data.

## Page responsibility summary

### Home

```text
identity
→ selected work
→ studio snapshot
→ capability narrative
→ optional real proof
→ contact path
```

### Work

Project listing only initially. No fabricated projects, categories, filters, or metrics.

### Project detail

Flexible model supporting title/summary, optional year/client, contribution, flexible content sections, approved links, and later authoritative media.

### Studio

Studio/About responsibility plus capability narrative and working context. No separate About/Services route initially.

### Careers

Recruitment intro, real openings when supplied, general recruitment context, and application-path placeholder. No invented roles or application fields.

### Contact

Business/contact intro, approved contact methods, and an inquiry-surface placeholder. Exact form/backend behavior remains unresolved and does not block page architecture.

## Visual direction

Canonical owner:

```text
docs/foundation/04-visual-direction.md
```

Adopted thesis:

> **Playful editorial game studio**

Direction:

- bold, friendly, graphic Hellocraft character;
- cyan + neutral structural palette;
- large real project media as primary evidence;
- editorial pacing and selective asymmetry;
- clean surfaces with restrained playful accents;
- quick purposeful motion;
- Minecraft identity mainly from real work, not Minecraft UI chrome.

Exact fonts, production color values, spacing/radius values, final crops, and rendered composition still require later real assets and rendered review.

## Approved technical baseline

```text
framework              = SvelteKit
UI/runtime             = Svelte 5 + TypeScript
Svelte convention      = modern runes-first
package manager        = Bun
styling                = native CSS + Svelte scoped styles
shared tokens          = CSS Custom Properties
quality gate           = bun run validate
local raster pipeline  = @sveltejs/enhanced-img
rendering              = static/prerender-first, server-where-needed
backend                = SvelteKit server only when needed
separate backend       = none initially
database               = none initially
```

Scaffold source exists. `bun.lock`, install/build/runtime validation, and browser proof are still pending.

## Media / performance

Canonical owner:

```text
docs/foundation/03-media-performance-policy.md
```

Key rules:

- source-imported local assets by default;
- `static/` only for stable passthrough URLs;
- `@sveltejs/enhanced-img` for useful local raster optimization;
- LCP image not lazy-loaded;
- below-fold media lazy when appropriate;
- video poster-first / user-initiated by default;
- self-hosted WOFF2 fonts when licensed;
- no permanent byte budgets until representative visual media exists.

## Discoverability

Canonical owner:

```text
docs/foundation/05-discoverability-metadata-policy.md
```

Use native Svelte head/metadata handling. No SEO or sitemap package initially. Canonical/sitemap/structured-data facts wait for real route/origin/evidence authority.

## Runtime/local boundary

The project owner explicitly deferred local/runtime testing at the current stage.

Do not run or repeatedly request:

```text
bun install
bun run validate
local preview
Chrome/runtime dry-run
```

until re-authorized.

Do not fabricate `bun.lock` or build/browser proof.

## Hosting boundary

The project owner explicitly deferred hosting/provider work.

Existing provider research may remain as historical/current research, but it is **not an active decision track**. Do not install provider adapters, choose a host, create provider projects, or let hosting drive route architecture until the owner reopens that topic.

## Current next focus

Architecture is now prepared for content population.

Priority owner inputs:

1. authoritative Portfolio/Project inventory;
2. Studio/About facts;
3. public contact channels;
4. real Careers/opening information.

Populate `src/lib/content/*` and approved media without changing route architecture unless real content proves a structural problem.
