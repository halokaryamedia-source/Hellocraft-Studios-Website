# Information & Content Architecture

Canonical information/content architecture for the Hellocraft Studios Website.

This file owns route responsibilities, content ownership, development content handling, and the stable structure that allows the site to be prepared before final copy/media is supplied.

## Status

```text
INFORMATION_ARCHITECTURE_APPROVED
ROUTE_ARCHITECTURE_APPROVED
CONTENT_OWNER_MODEL_APPROVED
TEMPORARY_DEMO_CONTENT_APPROVED_FOR_DEVELOPMENT
PRIMARY_NAVIGATION_APPROVED
NO_SERVICES_PAGE_INITIAL_APPROVED
NO_PORTFOLIO_FILTER_INITIAL_APPROVED
HOSTING_TRACK_DEFERRED_BY_PROJECT_OWNER
RUNTIME_VALIDATION_DEFERRED_BY_PROJECT_OWNER
```

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

Home is reached through the Hellocraft brand/logo.

## Route responsibilities

| Route | Responsibility |
|---|---|
| `/` | studio identity, selected work, concise studio/capability context, proof slot, contact path |
| `/work` | browse project entries without requiring taxonomy/filtering |
| `/work/[slug]` | one flexible project showcase/case-study surface |
| `/studio` | About/Studio responsibility and capability/context narrative |
| `/careers` | recruitment context, openings collection, later application path |
| `/contact` | business/contact destination and later inquiry surface |

Routes such as `/services`, `/blog`, `/news`, `/team`, `/clients`, `/awards`, `/login`, and `/dashboard` are not created merely to make the site appear complete.

A dedicated Services page remains intentionally absent. Capability language belongs in Home/Studio until real project evidence proves a separate service architecture is useful.

## Global shell

Every public route shares:

```text
skip link
→ temporary demo-content notice while demo mode is active
→ site header
→ primary navigation
→ page main content
→ site footer
```

## Content ownership

```text
src/lib/content/site.ts
→ site identity + navigation

src/lib/content/pages.ts
→ Home / Work / Studio / Careers / Contact copy

src/lib/content/projects.ts
→ project entries

src/lib/content/types.ts
→ shared content contracts

src/lib/content/demo.ts
→ development demo-mode flag

src/lib/content/demo-copy.ts
→ shared visible demo notice

src/lib/content/demo-data.ts
→ temporary proof/career collections

src/lib/content/DEMO_COPY_POLICY.md
→ development-content guardrails
```

Content belongs in these owners rather than being scattered through route components.

## Temporary demo-content policy

The project owner explicitly approved temporary dummy text/data so the website can be prepared before final copy is supplied.

Therefore development source may contain realistic temporary content for:

- page headings, summaries, calls to action, and supporting paragraphs;
- demo project cards/detail pages;
- demo proof-list items;
- demo career-opening cards.

Guardrails:

```text
demo content
→ clearly identified in source as temporary
→ must not be treated as Hellocraft evidence
→ must not be presented internally as approved final copy
→ demo projects must remain explicitly named Demo Project ...
→ demo roles must remain explicitly named Demo role ...
→ public contact URLs/emails are never fabricated
→ verified client/partner/metric claims are never fabricated
```

While temporary public-facing content remains, `contentIsDemo` stays `true` and the shared layout displays a visible demo-content notice.

When authoritative content arrives:

```text
owner supplies source material
→ content-intake audit
→ approve publication facts/copy
→ replace values in src/lib/content/*
→ remove demo collections
→ set contentIsDemo = false only after public-facing demo material is gone
```

The route architecture should not need to change merely because the wording changes.

## Home architecture `/`

Stable sequence:

```text
1. Identity / hero
2. Selected work
3. Studio snapshot
4. Capability narrative
5. Credibility/proof slot
6. Contact CTA
```

During development, Selected Work may show explicitly labelled demo projects to establish media/card rhythm. Before real publication, only evidence-approved projects may remain.

## Work architecture `/work`

```text
intro
→ project list
```

No categories, filters, or search initially. Those are added only if the real portfolio inventory proves they improve browsing.

## Project detail `/work/[slug]`

Flexible fields:

```text
slug
public title
summary
featured flag
optional year
optional client/partner
optional contribution list
optional flexible sections
optional links
```

The model supports both short showcases and deeper case studies. It does not require every project to contain metrics, clients, long copy, or identical section counts.

## Studio `/studio`

```text
studio intro
→ capability narrative
→ working approach/context
→ proof slot
→ contact CTA
```

A separate About page is not needed initially.

## Careers `/careers`

```text
careers intro
→ openings collection
→ general recruitment context
→ application-path surface
```

Temporary demo roles may be used while building the page, but they are not hiring claims. Final role titles/application behavior require separate authority.

## Contact `/contact`

```text
business/contact intro
→ approved contact methods
→ business-inquiry surface
```

Public contact methods remain real-only. No dummy email, social URL, phone number, form provider, or submission endpoint is created.

## Reusable component boundary

Current earned shared components:

```text
SiteHeader
SiteFooter
ProjectCard
```

Do not pre-create a giant component library. Page-local markup remains local until repetition proves a durable shared component responsibility.

## Content-fill workflow

```text
temporary demo content
→ build page/layout system
→ owner supplies authoritative text/data/media
→ content-intake audit
→ replace content owners
→ preserve route architecture
→ restructure only when real content proves a structural problem
```

This is the intended meaning of preparing the website first so later work is mostly replacing text/data/media.

## Runtime / hosting boundary

Local/runtime testing and hosting/provider selection are explicitly deferred by the project owner.

Current source-level acceptance may establish structure and ownership only. It does not claim build, browser, responsive, accessibility-runtime, performance, or deployment proof.
