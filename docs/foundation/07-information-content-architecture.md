# Information & Content Architecture

Canonical information/content architecture for the Hellocraft Studios Website.

This file owns **where website responsibilities live, which routes exist, and how content is separated from presentation**. Product facts remain evidence-bound, while temporary demo content is allowed only as an explicitly labelled development aid.

## Status

```text
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
PRIMARY_NAVIGATION_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED
NO_SERVICES_PAGE_INITIAL_APPROVED
NO_PORTFOLIO_FILTER_INITIAL_APPROVED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
RUNTIME_VALIDATION_DEFERRED_BY_PROJECT_OWNER
```

The architecture is deliberately simple so later work is mostly content/media replacement rather than repeated structural redesign.

## Primary route architecture

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

Home is reached through the Hellocraft brand/logo rather than a redundant `Home` item.

## Route responsibilities

| Route | Responsibility |
|---|---|
| `/` | establish identity, surface selected work/evidence, explain the studio briefly, and provide a client path |
| `/work` | browse project evidence without requiring a taxonomy |
| `/work/[slug]` | show one project's identity, contribution, flexible story/evidence sections, and optional links/media |
| `/studio` | explain Hellocraft as a studio and provide capability/context without forcing a separate Services page |
| `/careers` | recruitment information, openings when supplied, and an application path |
| `/contact` | business/contact destination; exact channel/form behavior remains separate |

Routes intentionally not created now include `/services`, `/blog`, `/news`, `/team`, `/clients`, `/partners`, `/awards`, `/shop`, `/login`, and `/dashboard`.

A route is added only when a real current responsibility earns it.

## Global shell

Every public route shares:

```text
skip link
→ development-content notice while demo mode is active
→ site header
→ primary navigation
→ page main content
→ site footer
```

The header/footer own global navigation and brand access only. Page-specific content stays with its route/content owner.

## Content-source ownership

Current no-CMS ownership:

```text
src/lib/content/site.ts
→ stable site identity + navigation configuration

src/lib/content/pages.ts
→ Home / Work / Studio / Careers / Contact copy

src/lib/content/projects.ts
→ project entries used by Work/Home/project detail

src/lib/content/demo-data.ts
→ development-only proof/career collections

src/lib/content/demo.ts
→ demo-mode switch

src/lib/content/demo-copy.ts
→ visible development-content notice

src/lib/content/types.ts
→ small shared content contracts
```

Do not scatter final marketing copy through Svelte route/components when it belongs to these content owners.

## Temporary demo-content contract

The project owner explicitly approved temporary dummy content so the presentation can be developed before final text/data/media arrives.

Development content must remain unmistakable:

```text
Demo Project ...
Demo role ...
Demo proof ...
TEMPORARY DEVELOPMENT COPY comments
contentIsDemo = true
visible demo-content notice
robots noindex/nofollow guard
```

Dummy content is **not** Hellocraft evidence.

Never fabricate development values that can be mistaken for real public facts, including:

- real-looking client/partner attribution;
- awards/results/metrics;
- public email/phone/contact URLs;
- testimonials;
- factual company history;
- live hiring claims.

## Home architecture `/`

Stable sequence:

```text
1. Identity / hero
2. Selected work
3. Studio snapshot
4. Capability narrative
5. Credibility/proof slot
6. Contact / project CTA
```

During demo mode, selected work/proof may use explicitly labelled development data to exercise composition. In production content, only approved evidence may occupy those surfaces.

## Work architecture `/work`

Stable responsibilities:

```text
page intro
→ project index
```

Initial behavior remains:

- no category tabs;
- no filters;
- no search;
- no final taxonomy.

Explicit `Demo Project` entries are permitted only while development demo mode is active. They must be replaced by approved real project data before demo mode is removed.

Filtering is earned only when the real inventory is large/diverse enough that browsing materially benefits from it.

## Project detail architecture `/work/[slug]`

The detail model supports both small showcases and deeper case studies.

Current core fields:

```text
slug
public/development title
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
→ concise facts when present
→ project media surface
→ Hellocraft contribution when present
→ flexible evidence/story sections
→ approved project links when present
```

Real project media is not invented in the data model before actual assets arrive. The development placeholder is centralized in `ProjectMediaPlaceholder.svelte` so future real media can replace one owned surface rather than duplicated route markup.

Do not require every real project to contain client, year, metrics, gallery, or long case-study sections.

## Studio architecture `/studio`

Stable sequence:

```text
1. Studio intro
2. capability narrative
3. working approach/context
4. credibility/proof
5. contact CTA
```

This route owns the broader About/Studio responsibility. A separate `/about` route is not needed initially.

## Careers architecture `/careers`

Stable sequence:

```text
1. Careers intro
2. Open roles
3. General recruitment context
4. Application path
```

Clearly labelled demo roles may be used while development demo mode is active. Real role titles, application fields, CV upload, storage, and applicant tracking require separate authoritative decisions.

## Contact architecture `/contact`

Stable sequence:

```text
1. Business/contact intro
2. Approved contact methods
3. Business inquiry surface
```

Public contact methods remain real-only even during demo mode. No fake email, phone number, or social URL is created merely to fill the layout.

The page remains valid whether the future inquiry implementation becomes direct links, an external form boundary, or a SvelteKit form action.

## Reusable component boundary

Persistent current responsibilities earn components:

```text
SiteHeader
SiteFooter
BrandSymbol
ProjectCard
ProjectMediaPlaceholder
```

`BrandSymbol` and `ProjectMediaPlaceholder` are replacement surfaces, not claims that temporary graphics are final assets.

Do not pre-create a generic design-system component library before repeated real responsibilities exist.

## Real-content replacement workflow

When authoritative content arrives:

```text
owner supplies text/data/media
→ content-intake audit
→ approve public facts/permissions
→ replace temporary values in src/lib/content/*
→ replace Demo Project entries
→ replace demo proof/roles
→ add approved public contact channels
→ integrate real project media through the media owner
→ integrate authoritative logo/brand source
→ remove remaining demo-only content
→ set contentIsDemo = false
```

Route/component architecture should remain stable unless real content proves a structural problem.

## Accessibility/media replacement boundary

Development visual placeholders are decorative and hidden from assistive technology.

When real content-bearing images/video replace them, accessibility semantics must be re-established from the actual media. Do not carry `aria-hidden` from a development placeholder onto meaningful project evidence.

Source-level accessibility audit records live in:

```text
docs/knowledge/accessibility-source-audit.md
```

## Hosting/runtime boundary

Hosting/provider selection and local/runtime validation remain explicitly deferred by the project owner.

Current source-level acceptance can establish route ownership, content/source separation, heading/landmark intent, visual token ownership, and absence of fabricated real facts. It cannot establish build/browser/performance/accessibility acceptance until runtime proof is re-authorized.
