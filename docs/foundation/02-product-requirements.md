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

Final visual direction is not yet locked, but the supplied Hellocraft logo is now an authoritative brand input.

Observed logo characteristics:

- bright cyan, white, and charcoal/black as the core brand palette;
- a large rounded star/hand symbol with two small star accents;
- chunky, irregular, friendly uppercase wordmark;
- energetic, playful, approachable character rather than corporate-tech or luxury-minimal styling.

Use those characteristics as evidence when establishing visual direction, not as a requirement to repeat the logo shapes everywhere.

Current leading visual thesis to explore during the visual-direction phase:

> **Playful editorial game studio** — bold and characterful enough to match the logo, but structured, media-led, and professional enough for client/partner credibility.

This thesis is a recommended direction, not yet a final page/design-system approval.

Future design must:

- feel appropriate for a professional game studio focused on Minecraft;
- preserve the friendliness/energy of the logo without making the site feel childish;
- support project imagery rather than overpower it;
- remain readable and usable across relevant screen sizes;
- avoid visual gimmicks that make company information or work harder to understand;
- preserve the lightweight-performance requirement rather than treating heavy effects as the price of looking premium.

Do not default to Minecraft pixel UI, voxel borders, inventory-slot interfaces, grass/dirt textures, neon gaming/cyberpunk, generic purple-blue gradients, or glassmorphism merely because the studio works with Minecraft/games. Any Minecraft-specific visual language must be earned by the later art-direction decision.

The raster logo supplied in conversation can help estimate palette relationships, but exact production color values must come from an authoritative logo/vector/brand source when available rather than being permanently sampled from a compressed JPEG.

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

The durable implementation contract for asset ownership, responsive raster delivery, video, fonts, and performance proof is owned by:

```text
docs/foundation/03-media-performance-policy.md
```

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
UI/runtime language   = Svelte 5 + TypeScript
Svelte convention     = modern runes-first for new code
package manager       = Bun
styling               = native CSS + Svelte scoped styles
shared design tokens  = CSS Custom Properties
quality gate          = Prettier + ESLint + svelte-check + SvelteKit/Vite build
local raster pipeline = Vite imports + @sveltejs/enhanced-img
media policy owner    = docs/foundation/03-media-performance-policy.md
architecture          = static/prerender-first, server-where-needed
backend boundary      = SvelteKit server functionality when required
separate backend      = none initially
database              = none initially
```

SvelteKit is explicitly selected by the project owner as the website framework. Bun is explicitly selected as the package/dependency manager, lockfile owner, and normal project command runner. TypeScript is the default project language for application and Svelte source where TypeScript applies.

### Svelte / TypeScript convention

For new source:

- use Svelte 5 modern runes-mode patterns rather than legacy Svelte syntax;
- prefer `$state`, `$derived`, `$props`, snippets/rendering, and modern event attributes according to current Svelte guidance;
- treat `$effect` as a side-effect escape hatch rather than general derived-state plumbing;
- use TypeScript type-only features directly in Svelte `<script lang="ts">` blocks;
- do not add extra TypeScript preprocessing merely by default; only add preprocessing if a real language feature requires code transformation beyond Svelte/Vite's supported baseline;
- keep the generated/project `tsconfig` aligned with the SvelteKit scaffold rather than inventing an independent TypeScript architecture.

Exact package versions are fixed by the scaffold/lockfile when it is created, not guessed in Foundation.

### Styling / design-token convention

Use the smallest native styling ownership model:

```text
src/app.css
→ true application-wide foundation only
→ minimal reset/base behavior
→ global document/body defaults
→ durable semantic CSS custom properties

*.svelte <style>
→ component-specific appearance
→ scoped by Svelte by default

CSS custom properties
→ shared semantic values / intentional parent-child styling contracts
```

Rules:

- import the global stylesheet once from the root layout/application shell;
- keep global CSS deliberately small; component appearance stays local unless the rule is genuinely application-wide;
- create a design token only for a durable repeated semantic role, not for every literal pixel/color/value;
- prefer semantic names such as `--surface-primary`, `--text-muted`, `--page-gutter`, or `--space-section` rather than prematurely generating large numeric scales;
- exact token values are established during visual-direction work from authoritative brand evidence and rendered testing;
- use CSS custom properties for deliberate parent-to-child styling contracts before reaching for broad global selector overrides;
- use `:global(...)` only when scope must intentionally be crossed; do not use it as a normal styling path;
- do not maintain parallel current systems such as global utility classes + a second token theme + local component overrides without a real requirement.

Initial negative decisions:

```text
Tailwind / utility framework = no
SCSS / Sass                  = no
CSS-in-JS                    = no
CSS Modules                  = no
CSS preprocessor             = none initially
component style framework    = none initially
```

These are not permanent ideological bans. Reconsider only if real source/workflow needs demonstrate that native Svelte/CSS ownership is insufficient and the added layer has a measurable maintenance/quality benefit.

### Mandatory code-quality gate

Use the official Svelte ecosystem integrations for Prettier and ESLint when the scaffold is created, including their Svelte-aware configuration. Inspect the generated current configuration rather than hand-writing legacy config from memory.

The project command contract is:

```text
format
→ Prettier write convenience
→ may mutate source
→ not an acceptance gate

format:check
→ Prettier non-mutating format validation

lint
→ ESLint non-mutating static-rule validation

check
→ svelte-kit sync + svelte-check using the project tsconfig

build
→ SvelteKit/Vite production build

validate
→ format:check → lint → check → build
```

Expected package scripts once the scaffold exists:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint .",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "build": "vite build",
    "validate": "bun run format:check && bun run lint && bun run check && bun run build"
  }
}
```

Acceptance rules:

- `bun run validate` is the mandatory technical gate once the scaffold exists;
- `format:check`, `lint`, `check`, and `build` must all pass; any failure blocks technical completion;
- the acceptance gate must not use `prettier --write`, ESLint `--fix`, or another source-mutating fixer merely to manufacture a pass;
- `format` and `check:watch` are developer convenience commands, not completion proof;
- exact package versions are locked by the actual scaffold and `bun.lock`, not hardcoded in Foundation;
- the official Svelte autofixer remains supplemental Svelte review evidence and does not replace `validate`;
- Vitest and Playwright are not part of the initial mandatory gate. Add them only when real reusable logic or critical browser flows earn those testing responsibilities.

### Media implementation boundary

Local raster media that is available at build time and benefits from responsive optimization uses the approved `@sveltejs/enhanced-img` build pipeline. This is a development/build dependency, not a client runtime library.

The detailed media rules are intentionally not duplicated here. Use `03-media-performance-policy.md` for:

- `src/lib/assets` versus `static/` ownership;
- responsive `sizes`/generated widths;
- AVIF/WebP delivery;
- LCP priority and lazy-loading rules;
- crop/focal-point/layout-stability rules;
- video poster/preload/autoplay rules;
- self-hosted WOFF2 font rules;
- Chrome DevTools measurement and later byte-budget calibration.

Do not add image/video/font CDNs before a real need earns them.

### Server-only / private environment ownership

Private secrets and server-only utilities must use SvelteKit's protected server boundaries:

```text
private environment values
→ $env/static/private or $env/dynamic/private as appropriate

shared server-only modules
→ $lib/server/** or *.server.*

route-specific server behavior
→ +page.server.ts / +layout.server.ts / +server.ts as appropriate
```

Do not import server-only modules or private environment values into client-facing code. Secrets must not be stored in public source or exposed through public environment prefixes.

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

- exact Svelte/SvelteKit/Bun/TypeScript/quality/media-tool package versions until the scaffold is created;
- SvelteKit deployment adapter and hosting provider;
- final visual direction and exact design-token values;
- actual font families/weights and portfolio crop/focal-point values;
- component/UI libraries if a real need later earns one;
- animation libraries if native motion becomes insufficient;
- exact content source/format;
- analytics provider;
- form/email/storage providers;
- unit/component/E2E testing layers beyond the approved mandatory quality gate;
- route-specific rendering choices beyond the approved static-first rule.

Prefer SvelteKit/Svelte/native CSS/browser capabilities before introducing overlapping dependencies. Prefer Bun for package installation and project commands according to the approved baseline, while preserving the framework's normal Vite/SvelteKit ownership. Do not create a generic framework/package-manager/backend specialist skill merely because SvelteKit + Bun are selected; project-specific skill creation still follows the recurring-responsibility gate.

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

mandatory technical quality
→ `bun run validate` with format:check + lint + svelte-check + build all passing

local responsive media
→ build output + rendered/network inspection according to `03-media-performance-policy.md`

server/backend correctness
→ matching server/form/API execution proof; source presence alone is insufficient

deployment readiness
→ deployed-target proof, not source/config presence alone
```

Repository presence alone is not proof of visual, browser, deployment, integration, or human-acceptance quality.

## Current blockers / high-impact unknowns

Portfolio evidence and studio-profile content remain intentionally deferred by the project owner.

For the current technical-foundation track, the language/Svelte convention, native CSS/design-token model, mandatory quality gate, and asset/media/performance policy are approved. The repository is now ready for a **minimal content-agnostic technical scaffold and integration dry-run**. Final visual direction/token values, real project media/crops, the first concrete form/server contract, adapter/hosting, and production providers remain intentionally unresolved until their corresponding responsibilities are defined.
