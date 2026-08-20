# Product Requirements

## Product priority

```text
clarity + credibility + real evidence + useful client path
+
strong visual quality + lightweight delivery
>
feature breadth + decorative complexity + traffic vanity
```

The site should be easy to understand and should communicate real Hellocraft capability through real evidence. Visual quality and performance are co-equal product constraints: do not add complexity merely to resemble a large agency website, and do not treat performance as cleanup that happens only after design is finished.

## Required product outcomes

The website must eventually provide:

1. a clear official identity for Hellocraft Studios;
2. a portfolio based on approved, attributable real projects;
3. enough context for potential clients to understand whether Hellocraft is relevant to their needs;
4. clear credibility evidence such as real projects, clients/partners, results, testimonials, or other proof only when actually available;
5. a business-contact path;
6. a meaningful careers/recruitment path;
7. an experience that remains understandable for both Minecraft-native and non-Minecraft-native visitors;
8. a visually strong experience that remains lightweight, responsive, and practical to open on ordinary user devices and connections.

## Positioning requirement

The current positioning baseline is:

> **Hellocraft Studios is a game studio focused on Minecraft.**

Do not replace this with a narrower `Minecraft Bedrock` identity or inflated labels such as creative-production/immersive/metaverse/experience-agency terminology unless the project owner explicitly changes the positioning.

Final headline/tagline copy may differ later, but must preserve the same simple meaning unless positioning is deliberately redefined.

## Communication requirements

- Use direct, human language.
- Explain concrete work and outcomes before abstract brand language.
- Avoid AI-sounding filler, vague agency jargon, and claims that cannot be supported.
- Do not assume every visitor understands Minecraft production terms.
- Do not over-explain basic Minecraft terminology to industry-native visitors when concise context is sufficient.
- Prefer project evidence over unsupported self-description.

## Audience requirements

The content hierarchy must primarily serve:

- Marketplace publishers / partners;
- server / platform operators;
- brands seeking Minecraft experiences;
- public/cultural/event clients such as museums, galleries/exhibitions, and festivals.

It must also provide relevant paths for:

- Minecraft creators, publishers, agencies, and production partners interested in collaboration;
- talent interested in joining Hellocraft;
- general Minecraft players/creators/community visitors.

Secondary audiences must not make the main business path harder to understand.

## Portfolio requirements

The portfolio is the primary evidence surface for the studio's work.

Before portfolio architecture is defined, the project owner must provide an authoritative list of projects/work that may be considered for the site.

For each project, later definition should establish only the facts needed to publish it responsibly, such as:

- project identity/title;
- client/partner when publishable;
- date/year when useful;
- what was made;
- Hellocraft's actual role/contribution;
- available media;
- public-attribution/permission status;
- result/impact only when supported;
- whether it deserves a full case study or simple showcase.

### Portfolio negative requirements

Until the authoritative list exists:

- do not invent or infer project entries;
- do not treat old conversation memory as portfolio authority;
- do not create final categories such as Marketplace, Server, Brand, Event, Exhibition, etc. merely because those markets exist;
- do not assume every project needs a case study;
- do not manufacture metrics, testimonials, client logos, or project outcomes.

## Services / capabilities requirements

A final client-facing services/capabilities model is **not yet defined**.

Current internal production terms such as Game Development, Level Design, World Building, 3D Art, Modeling, Texturing, Animation, and related disciplines may later help explain Hellocraft's role, but they are not automatically top-level services or navigation items.

Specific guards:

- World Building should not be treated as an independent peer of Level Design without a real client-facing reason; current discussion treats it as part of the broader level-design/build responsibility.
- `Development` should not be used as a vague label when the intended meaning is game development.
- Adventure maps, minigames, and multiplayer experiences should not automatically become separate service categories merely because their market/output differs.
- Marketplace, Server/Platform, Brand, and Event/Exhibition are contexts/markets and must not automatically be represented as separate services.
- Do not create a Services page until the evidence/content model shows that a dedicated page is useful.

The final explanation of what Hellocraft provides should emerge from real project evidence and client needs.

## Client / partner credibility

The site may later show clients, partners, project scale, awards, downloads, event usage, testimonials, or other credibility signals only when the evidence is real and publication is appropriate.

No proof element is mandatory merely because competitor websites use it.

## Business inquiry

The website must eventually provide a clear route for potential clients to contact Hellocraft about a project.

The exact form/channel and fields are not yet defined. Do not assume budget, timeline, project type, phone, booking-calendar, or CRM requirements until they are discussed.

Business inquiry, recruitment application, community/support contact, and other intents should not be merged into one confusing path if later requirements show they need different handling.

## Careers / recruitment

Recruitment is a first-class website responsibility.

The site should eventually support relevant talent in understanding opportunities with Hellocraft. Current areas include:

- building / level design;
- game development;
- 3D art/modeling with relevant texturing/animation skills.

Exact roles, naming, open-position model, general application, application form, and hiring workflow remain undecided.

## Information architecture

No final navigation is approved yet.

Industry references suggest a simple studio pattern may be appropriate, potentially centered on identity, work, about, contact, and careers, but this remains a hypothesis until Hellocraft's content inventory and evidence are known.

Do not create final top-level pages merely to match another studio's website.

## Homepage

No final homepage section order is approved.

The homepage should eventually prioritize the strongest available Hellocraft evidence and the needs of primary visitors. Selected work and credibility are likely important, but their exact placement and supporting sections must follow the actual content.

## Visual quality

Visual direction is not yet defined.

Future design must:

- feel appropriate for a professional game studio focused on Minecraft;
- support project imagery rather than overpower it;
- remain readable and usable across relevant screen sizes;
- avoid visual gimmicks that make company information or work harder to understand;
- preserve the lightweight-performance requirement rather than treating heavy effects as the price of looking premium.

Do not decide a Minecraft/voxel visual language, editorial style, motion system, typography, or design system before the visual-direction phase.

## Performance / lightweight requirement

The project owner explicitly requires the website to look strong while remaining lightweight to open and use.

Apply this as an architectural constraint:

- prefer prerendered/static delivery when a route does not need request-time server behavior;
- minimize client-side JavaScript and hydration to the interaction actually required;
- prefer native Svelte/SvelteKit/CSS/browser capabilities before adding overlapping dependencies;
- treat images, video, fonts, and other media as primary performance risks and optimize them deliberately;
- lazy-load non-critical media where appropriate and reserve layout space to avoid instability;
- do not add WebGL, 3D, particle systems, large animation libraries, component kits, trackers, or other heavy dependencies without a concrete benefit that survives performance review;
- measure performance in the built/deployed result; source-level intent is not performance proof;
- target the current `good` Core Web Vitals thresholds as an external user-experience baseline, with final field validation when traffic exists;
- define project-specific transfer/JavaScript/media budgets only after a representative visual prototype exists, so the numbers are evidence-based rather than arbitrary.

A visually simpler implementation that communicates better and loads materially faster is preferable to decorative complexity with weak user value.

## Functional requirements

Current functional requirements are intentionally minimal because content architecture is not complete.

Do not assume the need for:

- CMS;
- admin dashboard;
- database;
- user accounts/login;
- ecommerce;
- client portal;
- complex backend;
- multilingual system;
- booking system;
- CRM integration;
- blog/news system;
- custom search;
- advanced filtering.

Any such feature must be justified by a real current responsibility.

## Technical architecture

The approved full-stack baseline is:

```text
full-stack framework = SvelteKit
package manager      = Bun
architecture         = static/prerender-first, server-where-needed
backend boundary     = SvelteKit server functionality when required
separate backend     = none initially
database             = none initially
```

SvelteKit is explicitly selected by the project owner as the website framework. Bun is explicitly selected as the package/dependency manager, lockfile owner, and normal project command runner.

### Frontend / rendering boundary

- Prefer prerendered/static output for public content routes that do not require request-time behavior.
- Add client-side state/interactivity only where the visitor can actually use it.
- Rendering mode is a route-level responsibility; do not force the whole website into either static-only or SSR-only architecture.

### Backend boundary

Use SvelteKit's server capabilities rather than introducing Express, NestJS, Fastify, or another separate backend framework by default.

Current backend direction:

```text
normal content read
→ prerender/static where possible

normal browser form submission
→ SvelteKit form action when a server runtime is justified

real HTTP/API endpoint or external webhook boundary
→ SvelteKit +server route only when required

persistent relational/application data
→ no database until a real storage/query responsibility exists
```

A route that contains a SvelteKit form action requires server handling and cannot be treated as a purely prerendered page. If a future requirement demands a fully static deployment, forms must instead use a compatible external/serverless submission boundary. Do not hide this tradeoff.

### Backend responsibilities that may be earned later

Likely first server-side responsibilities are:

- business-contact submission;
- career/application submission;
- server-side validation;
- spam/abuse protection;
- private environment/secrets handling;
- external email/form/storage integrations.

These do not automatically justify a database, authentication system, admin dashboard, CMS, or separate API service.

Database/storage/authentication are added only when the corresponding product workflow is explicitly defined and cannot be represented responsibly without them.

### Still unresolved

These approvals do **not** fix the entire stack. In particular, selecting Bun does not mean replacing SvelteKit/Vite with Bun's standalone bundler, requiring Bun-specific server APIs, or automatically choosing Bun's test runner for every testing layer.

The following remain unresolved and must be decided separately from actual requirements:

- exact Svelte/SvelteKit/Bun package versions;
- TypeScript/project-language conventions;
- SvelteKit deployment adapter and hosting provider;
- styling and design-token implementation;
- component/UI libraries;
- animation libraries;
- exact content source/format;
- analytics provider;
- form/email/storage providers;
- unit/component/E2E testing boundaries and tooling;
- route-specific rendering choices beyond the approved static-first rule.

Prefer SvelteKit/Svelte native capabilities before introducing overlapping dependencies. Prefer Bun for package installation and project commands according to the approved baseline, while preserving the framework's normal Vite/SvelteKit ownership. Do not create a generic framework/package-manager/backend specialist skill merely because SvelteKit + Bun are selected; project-specific skill creation still follows the recurring-responsibility gate.

## Evidence / acceptance requirements

Use matching evidence for each claim:

```text
project/client attribution
→ approved or verifiable source

content completeness
→ review against approved project/content inventory

information architecture
→ requirement/content review

visual quality
→ actual rendered browser/device inspection

responsive behavior
→ matching viewport/device/browser proof

form/integration behavior
→ actual end-to-end execution

SEO/metadata implementation
→ built-page/source/runtime inspection as applicable

performance
→ measured built/deployed runtime evidence + current Core Web Vitals guidance

SvelteKit build/type correctness
→ matching Svelte/SvelteKit build/check tooling

Bun dependency/tooling correctness
→ lockfile + install/run proof using the approved Bun workflow

server/backend correctness
→ matching server/form/API execution proof; source presence alone is insufficient

deployment readiness
→ deployed-target proof, not source/config presence alone
```

Repository presence alone is not proof of visual, browser, deployment, integration, or human-acceptance quality.

## Current blockers / high-impact unknowns

Portfolio evidence and studio-profile content remain intentionally deferred by the project owner.

For the current technical-foundation track, the next high-impact unknowns are TypeScript/project-language conventions, styling/design-token approach, media handling, quality/testing tooling, and the first concrete form/server requirements. Adapter/hosting and production providers should be chosen only after those responsibilities are sufficiently defined.
