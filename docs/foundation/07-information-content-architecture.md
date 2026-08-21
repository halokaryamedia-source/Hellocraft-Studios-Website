# Information & Content Architecture

Canonical information/content architecture for the Hellocraft Studios Website.

This decision supersedes the earlier provisional IA language in `02-product-requirements.md`. Product facts, portfolio evidence, service taxonomy, form fields, and final copy still require their own authority; this file owns **where website responsibilities live and which content slots must exist**.

## Status

```text
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_SLOT_MODEL_APPROVED
PRIMARY_NAVIGATION_APPROVED
NO_SERVICES_PAGE_INITIAL_APPROVED
NO_PORTFOLIO_FILTER_INITIAL_APPROVED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
RUNTIME_VALIDATION_DEFERRED_BY_PROJECT_OWNER
```

The architecture is deliberately simple so later work is mostly content/media population rather than repeated structural redesign.

## Primary route architecture

```text
/
├── work
│   └── [slug]
├── studio
├── careers
└── contact
```

### Primary navigation

```text
Work
Studio
Careers
Contact
```

Home is reached through the Hellocraft brand/logo rather than adding a redundant `Home` navigation item.

### Why these routes exist

| Route | Responsibility |
|---|---|
| `/` | establish identity, surface strongest work/evidence, explain the studio briefly, and provide a client path |
| `/work` | browse approved project evidence without requiring a taxonomy |
| `/work/[slug]` | show one project's approved facts, contribution, evidence, and optional supporting sections |
| `/studio` | explain Hellocraft as a studio and provide capability/context without forcing a separate Services page |
| `/careers` | recruitment information, real openings when supplied, and later application path |
| `/contact` | business/contact destination; exact channel/form behavior remains separate |

Do not add routes merely because other agency/studio sites have them.

## Routes intentionally not created now

```text
/services
/blog
/news
/team
/clients
/partners
/awards
/shop
/login
/dashboard
```

A dedicated Services route remains intentionally absent. Capability language belongs in Home/Studio first and must be derived from real evidence. If future content proves that a separate Services page materially improves understanding, it can be added later.

Blog/news, client-logo, awards, and team routes are also not placeholders for missing content. They must be earned by real responsibilities and evidence.

## Global shell

Every public route shares:

```text
skip link
site header
primary navigation
page main content
site footer
```

The header/footer own navigation, brand access, and global action paths only. Page-specific content stays in its route.

## Content-source ownership

Current no-CMS ownership:

```text
src/lib/content/site.ts
→ stable site identity + navigation configuration

src/lib/content/pages.ts
→ page copy slots + empty evidence/application/contact collections

src/lib/content/projects.ts
→ approved published project data only

src/lib/content/types.ts
→ small shared content contracts

src/lib/content/slots.ts
→ explicit placeholder-token helper
```

Do not scatter final marketing copy through Svelte components when it belongs to these content owners.

### Placeholder convention

Unknown copy uses an explicit token:

```text
[[HOME_HERO_TITLE]]
[[STUDIO_INTRO_BODY]]
[[CONTACT_HERO_BODY]]
```

These tokens are **not final copy and not factual claims**. Their purpose is to keep every required slot visible and searchable until authoritative text is supplied.

When real text is approved:

```text
search placeholder key
→ replace value in content owner
→ keep route/component structure unchanged unless content proves the structure wrong
```

Do not invent marketing prose merely to remove a placeholder.

## Home architecture `/`

Home is an overview, not a duplicate of every other page.

Recommended stable sequence:

```text
1. Identity / hero
2. Selected work
3. Studio snapshot
4. Capability narrative
5. Credibility/proof slot (conditional)
6. Contact / project CTA
```

### 1. Identity / hero

Slots:

- optional eyebrow;
- primary headline;
- concise explanation;
- primary Work action.

Do not assume a second CTA is needed.

### 2. Selected work

Shows only projects marked `featured` in the approved project data.

If no approved projects exist yet, the architecture retains an explicit content-pending state rather than inventing samples.

### 3. Studio snapshot

Concise bridge to `/studio`.

### 4. Capability narrative

A text/content block that can later explain what Hellocraft can provide without prematurely creating permanent service categories.

### 5. Credibility/proof

Conditional collection. Render only real approved proof such as client/partner evidence, scale, testimonials, awards, or outcomes when supplied.

An empty proof collection must not generate fake logos/metrics/cards.

### 6. Contact CTA

Clear path to `/contact`.

## Work architecture `/work`

Stable responsibilities:

```text
page intro
→ project list
```

Initial behavior:

- no category tabs;
- no filters;
- no search;
- no fabricated project cards;
- project order can later be editorially controlled by the project data.

Filtering is earned only when the real inventory is large/diverse enough that browsing materially benefits from it.

## Project detail architecture `/work/[slug]`

The detail model must support both small showcases and deeper case studies without forcing every project into the same amount of content.

Core fields:

```text
slug
public title
summary
featured flag
optional year
optional client/partner
optional contribution list
optional flexible content sections
optional external links
```

Page flow:

```text
project identity
→ summary
→ concise facts/metadata when present
→ Hellocraft contribution when present
→ flexible evidence/story sections when present
→ approved project links when present
```

Media is added from authoritative project assets later according to `03-media-performance-policy.md`; this architecture does not fabricate media paths or force every project into one crop/gallery model.

Do not require every project to contain client, year, metrics, or long case-study sections.

## Studio architecture `/studio`

Stable sequence:

```text
1. Studio intro
2. What Hellocraft does / capability narrative
3. Working approach / studio context
4. Credibility/proof slot (conditional)
5. Contact CTA
```

This page owns the broader About/Studio responsibility. A separate `/about` page is not needed initially.

Team details, founding story, office/location facts, partner logos, metrics, or company-history sections are conditional on authoritative Studio/About content.

## Careers architecture `/careers`

Stable sequence:

```text
1. Careers intro
2. Open roles (conditional collection)
3. General recruitment context
4. Application path placeholder
```

The source supports an empty openings collection without inventing job titles.

Exact role model, application fields, CV upload, storage, and applicant tracking remain separate decisions. Architecture should not force a backend merely to render this page.

## Contact architecture `/contact`

Stable sequence:

```text
1. Business/contact intro
2. Approved contact methods (conditional collection)
3. Business inquiry surface placeholder
```

No form fields are assumed yet.

The page architecture remains valid whether the eventual implementation becomes:

- direct email/contact links;
- external form boundary;
- SvelteKit form action.

Hosting/provider choice must not drive this page architecture at the current stage.

## Reusable component boundary

Only persistent responsibilities earn components now:

```text
SiteHeader
SiteFooter
ProjectCard
```

Do not pre-create a giant component library, `Section` abstraction, button system, modal system, carousel, tabs, filter controls, or other UI machinery before real pages need them.

Page sections may remain local Svelte markup until repetition proves a durable shared responsibility.

## Content model rules

### Global copy

Navigation labels and route responsibilities may be stable even while marketing copy is pending.

### Projects

`projects.ts` starts with an empty array.

Only project entries that pass the content-intake/evidence process may be added.

### Proof

Proof collections start empty.

### Careers openings

Openings start empty.

### Contact methods

Contact methods start empty until the project owner supplies/approves the public channels.

This allows the website structure to exist without turning absence of content into fabricated content.

## Content-fill workflow

The intended later workflow is:

```text
project owner supplies authoritative text/data/media
→ content-intake contract records evidence/status
→ approved public facts selected
→ fill src/lib/content/*
→ add approved project media/assets
→ route/component structure stays stable
→ only restructure when real content proves a structural problem
```

This is the sense in which the architecture should become "tinggal isi text/media" rather than repeatedly rebuilding pages.

## Responsive / visual boundary

This file defines content hierarchy, not final rendered layout.

`04-visual-direction.md` remains the visual owner. The source architecture should expose enough semantic groups for later media-led/editorial composition, while exact desktop/mobile arrangement remains subject to rendered review when runtime testing is re-authorized.

## Hosting boundary

Hosting/provider selection is explicitly deferred by the project owner.

Do not use hosting uncertainty as a reason to delay route/content architecture. Do not install a production adapter or change route architecture for a provider while the hosting track is deferred.

## Acceptance at the current non-runtime stage

This architecture can be accepted from source/definition evidence for:

- route ownership;
- navigation structure;
- page responsibilities;
- content-slot completeness;
- absence of invented services/categories/projects;
- content/source separation;
- component ownership boundaries.

It cannot yet prove:

- build correctness;
- browser rendering;
- responsive visual quality;
- accessibility behavior in the browser;
- performance;
- deployed behavior.

Those remain intentionally deferred until runtime/local proof is re-authorized.
