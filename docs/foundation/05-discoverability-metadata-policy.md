# Discoverability & Metadata Policy

Canonical non-runtime policy for technical discoverability, search metadata, crawl/index boundaries, social preview metadata, and structured-data evidence for the Hellocraft Studios Website.

This file does **not** define marketing copy, final page architecture, keyword strategy, or a content calendar. Product meaning remains in `02-product-requirements.md`; final route/content owners must supply the actual page facts.

## Status

```text
DISCOVERABILITY_METADATA_POLICY_APPROVED
NATIVE_SVELTE_HEAD_APPROVED
NO_SEO_LIBRARY_INITIAL_APPROVED
CANONICAL_URL_POLICY_APPROVED
SITEMAP_POLICY_APPROVED
ROBOTS_NOINDEX_BOUNDARY_APPROVED
STRUCTURED_DATA_EVIDENCE_RULE_APPROVED
DEPLOYED_SEARCH_VALIDATION_PENDING
```

## Core principle

```text
real page meaning
→ accurate metadata
→ crawlable semantic HTML
→ one preferred canonical URL
→ only evidence-backed structured data
→ deploy
→ validate with real crawler/search tools
```

Do not optimize metadata by inventing claims, stuffing keywords, or creating pages solely to satisfy a perceived SEO checklist.

## Implementation boundary

Use native Svelte/SvelteKit capabilities first.

For normal public routes, `<svelte:head>` is sufficient to own:

- `<title>`;
- meta description;
- canonical `<link>`;
- robots metadata when a route genuinely needs it;
- Open Graph / social metadata;
- JSON-LD when evidence-backed structured data is appropriate.

Initial decision:

```text
svelte-meta-tags / svelte-seo / svead / similar package
→ DO NOT INSTALL BY DEFAULT

sitemap package
→ DO NOT INSTALL BY DEFAULT
```

A package may be reconsidered only if the real route/content scale creates repeated complexity that native Svelte ownership no longer handles clearly.

## Titles

Every indexable public route should eventually have a concise, descriptive title that reflects the real page content.

Direction:

```text
page-specific subject
+ Hellocraft identity when useful
```

Do not lock one universal title formula before final information architecture exists. Avoid:

- keyword repetition;
- vague titles such as `Home`, `Portfolio`, or `Welcome` when more useful context is available;
- titles that claim services, partners, awards, scale, or results not supported by the page.

The visible page heading and document title may differ, but they must describe the same actual page purpose.

## Meta descriptions

Use a unique useful description for important indexable routes when real content exists.

Descriptions should:

- summarize what the visitor will actually find;
- use direct human language;
- avoid generic agency filler;
- avoid fabricated metrics/clients/capabilities;
- remain useful even if a search engine chooses a different snippet.

Do not generate dozens of near-identical descriptions from a template merely to fill metadata fields.

## Canonical URLs

Once the production domain and route model are known, every indexable route that can be reached through duplicate/equivalent URLs should express one preferred canonical URL.

Rules:

- use the real production origin;
- use absolute canonical URLs;
- point to the preferred public version of the same content;
- keep sitemap URLs aligned with canonical preference;
- do not canonicalize unrelated pages together merely to suppress duplicate-content symptoms;
- redirects, internal links, canonical tags, and sitemap preference should not contradict each other.

The production domain is not yet locked, so canonical values are intentionally not hardcoded now.

## Crawlable links

Primary navigation and meaningful internal route links must remain real crawlable anchors:

```html
<a href="/real-route">...</a>
```

Do not replace ordinary navigation with click handlers on `div`, `span`, or JavaScript-only pseudo-links.

This rule also supports keyboard/accessibility requirements and keeps navigation understandable without unnecessary client-side JavaScript.

## Indexing / `noindex` / robots boundary

Public approved pages are indexable by default unless there is a real reason not to expose them in search.

Use `noindex` for pages that should remain accessible but should not appear in search, such as a real future preview/internal surface when that responsibility exists.

Important boundary:

```text
robots.txt
→ controls crawling paths

noindex meta / X-Robots-Tag
→ controls indexing when the crawler can access the resource
```

Do not attempt to express `noindex` inside `robots.txt`.

If a page relies on a `noindex` directive, do not simultaneously block the crawler from seeing that directive without understanding the consequence.

Do not create production `Disallow` rules for hypothetical private routes before those routes exist.

## Sitemap

A sitemap is required once the production public route set exists and the production origin is known.

Initial direction for a relatively small studio site:

- include only preferred canonical public URLs;
- use absolute URLs;
- keep it at/root-associated with the public site where practical;
- include meaningful `lastmod` only when it reflects a real significant page update;
- reference the sitemap from `robots.txt` once the production origin is known;
- submit it through Search Console after deployment.

Do not install a sitemap package while the route set is still small/undefined. If route generation later becomes content-driven and large enough that manual/current-source generation becomes error-prone, reevaluate automation then.

## Favicon / site identity

Use an authoritative Hellocraft brand asset for the production favicon/site icon.

Do not use the generic Svelte favicon or a fabricated brand redraw as the final site identity.

Final favicon sizes/formats should be checked against current browser/search requirements when the authoritative logo/mark source is available.

## Social preview metadata

Important public routes should eventually define appropriate social preview metadata where sharing value exists:

```text
og:title
og:description
og:url
og:image
og:type when relevant
```

Add platform-specific metadata only when it has a real compatibility benefit; do not build a large duplicate metadata layer for ceremony.

Social preview images must represent the real page/project. Do not fabricate client/project evidence to create a more attractive preview.

The exact OG image dimensions, crops, and production paths remain open until real brand/project assets are available. Media delivery still follows `03-media-performance-policy.md`.

## Structured data

Structured data is an evidence layer, not a marketing-claim generator.

Potential later use:

```text
Organization
→ official Hellocraft identity when real organization facts are available

BreadcrumbList
→ only after final site hierarchy makes breadcrumbs meaningful

other supported schema
→ only when the actual page type and Google/Schema guidance match
```

Rules:

- include only facts that are visible/supportable from authoritative project/company data;
- do not invent ratings, reviews, awards, founders, addresses, dates, social profiles, clients, or identifiers;
- do not choose a schema merely because it can produce a richer search appearance;
- validate Google-targeted markup with the Rich Results Test where applicable;
- validate general schema structure when useful;
- deployed crawler/search behavior remains final evidence, not source presence.

Do not add `ProfilePage` merely because an About page exists; use a schema only when the page actually matches the supported use case.

## Images in discoverability

Project imagery is both visual evidence and potential search/social evidence.

- meaningful images need accurate alt text according to accessibility/content role;
- image filenames may be descriptive when practical but do not encode speculative keyword lists;
- social/search images must remain crawlable when they are intended for public discovery;
- do not degrade image performance to chase image-search exposure.

Technical image behavior remains owned by `03-media-performance-policy.md`.

## Content quality boundary

Discoverability does not override Hellocraft's communication requirements.

Prefer:

```text
accurate
specific
useful
human-readable
```

over:

```text
keyword-dense
repetitive
inflated
AI-generated filler
```

Metadata, structured data, headings, alt text, and visible copy must all describe the same real content.

## Search Console / deployed validation

Production search claims require deployed evidence.

After deployment and when the public route set exists, verify as applicable:

- URL Inspection / crawlability;
- Google-selected canonical versus intended canonical;
- sitemap processing;
- indexing status;
- structured-data validation;
- favicon/site-name appearance only after search systems recrawl;
- page/search performance separately from web performance metrics.

Do not claim indexing or rich-result eligibility from repository source alone.

## Performance / privacy boundary

SEO should not introduce a runtime dependency merely to emit static metadata.

Do not add:

- third-party SEO scripts;
- tracking pixels;
- analytics;
- remote metadata SDKs;

as part of this policy.

Analytics is a separate product/privacy/release decision.

## Current scaffold boundary

The existing scaffold contains temporary technical metadata only. That metadata is not final marketing/SEO copy and must be replaced when the corresponding public page meaning is approved.

No final sitemap, canonical origin, robots policy, Organization JSON-LD, or social preview asset should be invented before the production domain, information architecture, and authoritative company/project facts exist.

## External technical basis

This policy was curated against current primary guidance from:

- Google Search Central title/snippet, crawlable-link, canonicalization, sitemap, `noindex`, favicon, and structured-data guidance;
- current Svelte native `<svelte:head>` behavior;
- current Svelte ecosystem availability of SEO/sitemap packages, treated as optional tools rather than required architecture.

Version-sensitive implementation details must still use current official documentation/Context7 at implementation time, followed by deployed/search proof where the claim requires it.

## Open decisions

Still unresolved:

- production domain/origin;
- final route/information architecture;
- final page titles/descriptions;
- final canonical URLs;
- sitemap generation method after route scale is known;
- authoritative favicon/logo source;
- social preview art and crops;
- which real organization/company fields may be published;
- exact structured-data types supported by final pages;
- Search Console ownership/setup;
- analytics, if later justified.
