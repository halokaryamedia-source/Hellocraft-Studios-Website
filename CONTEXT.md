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

## Brand / visual anchor

The project owner supplied the current Hellocraft logo as authoritative brand evidence.

Observed characteristics:

```text
palette      → bright cyan + white + charcoal/black
symbol       → rounded star with hand motif + two small star accents
wordmark     → chunky, irregular, friendly uppercase lettering
character    → playful, energetic, approachable
```

The current leading visual thesis to explore later is **playful editorial game studio**: enough personality to match the logo, but structured/media-led enough for professional client credibility.

This is not yet a final art-direction approval. Do not automatically turn the site into pixel/voxel Minecraft UI, neon/cyberpunk gaming UI, glassmorphism, or a literal repetition of the logo shapes.

Exact production brand color values should come from authoritative logo/vector assets when available, not permanently from a compressed raster sample.

## Approved technical baseline

The project owner has explicitly selected:

```text
full-stack framework = SvelteKit
UI/runtime language   = Svelte 5 + TypeScript
Svelte convention     = modern runes-first for new code
package manager       = Bun
styling               = native CSS + Svelte scoped styles
shared design tokens  = CSS Custom Properties
quality gate          = Prettier + ESLint + svelte-check + SvelteKit/Vite build
local raster pipeline = Vite imports + @sveltejs/enhanced-img
architecture          = static/prerender-first, server-where-needed
backend boundary      = SvelteKit server functionality when required
separate backend      = none initially
database              = none initially
```

Bun is selected as package/dependency manager, lockfile owner, and normal project command runner. This does not require Bun-specific server APIs, Bun's standalone bundler, or Bun's test runner for every layer.

TypeScript is the default project language where TypeScript applies. New Svelte source should use current Svelte 5 runes-mode patterns instead of legacy syntax. Exact package versions are owned by the scaffold and lockfile once created rather than guessed in planning documents.

Styling uses one deliberately small global CSS foundation plus Svelte component-scoped CSS. Durable repeated semantic values use CSS Custom Properties. Tailwind, SCSS/Sass, CSS-in-JS, CSS Modules, and a CSS preprocessor are not part of the initial baseline; they may be reconsidered only if real implementation needs prove native Svelte/CSS ownership insufficient.

The mandatory quality gate is `bun run validate`, which must run non-mutating `format:check`, ESLint, `svelte-check`, and the SvelteKit/Vite build. `format` may rewrite source as a developer convenience but is not acceptance proof. Vitest and Playwright remain deferred until real unit/component or critical browser-flow responsibilities earn them.

SvelteKit owns both the frontend application and initial server/backend boundary. Public content should remain static/prerendered where possible; server behavior is added only for real responsibilities such as form submission, validation, abuse protection, private secrets, or external integrations.

Private environment values and server-only utilities must remain inside SvelteKit-protected server boundaries such as `$env/*/private`, `$lib/server`, `.server.*`, and route server modules. Client-facing code must not import private/server-only values.

A page with a SvelteKit form action requires server handling, so form routes and static/prerender-only routes must not be conflated.

## Media / performance baseline

The canonical detailed owner is:

```text
docs/foundation/03-media-performance-policy.md
```

Current approved media direction:

```text
application-referenced local assets
→ source-imported / Vite-hashed by default

exact stable public paths
→ static/ passthrough only when required

local raster page media
→ @sveltejs/enhanced-img when responsive/build-time optimization is useful

vector brand/icon assets
→ SVG / normal asset handling, not raster conversion

optional portfolio video
→ poster-first + user-initiated + preload="none" by default

webfonts
→ self-hosted WOFF2, one family by default, second only if art direction earns it
```

`@sveltejs/enhanced-img` is approved as a build-time development dependency because the site is expected to be media-heavy and the plugin directly addresses responsive formats/sizes, intrinsic dimensions, and EXIF stripping without adding a client runtime library.

For images:

- large/fluid images require a real `sizes` contract;
- LCP image is not lazy-loaded and receives high fetch priority only when it is genuinely the main LCP candidate;
- below-the-fold images use native lazy loading when appropriate;
- media reserves layout space before loading;
- project crops must not destroy meaningful evidence; focal points are defined with real content later rather than guessed globally.

For video:

- autoplay is not the default;
- autoplay, if specifically approved later, must be muted/inaudible, inline-capable, reduced-motion-safe, and measured;
- always-muted autoplay exports should not carry a useless audio track;
- large/recurring video may later earn streaming/CDN delivery rather than bloating the application repository.

For fonts:

- avoid runtime third-party font providers by default;
- ship only used families/weights;
- use WOFF2 for runtime delivery;
- use `font-display: swap` by default;
- preload only a genuinely critical font file when measurement proves it helps.

Performance claims are measured from built/browser output through Chrome DevTools. Use current good Core Web Vitals thresholds as the external experience baseline; do not invent permanent JS/image/video/font byte budgets until a representative Hellocraft visual prototype exists.

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
- final visual direction and exact design-token values;
- actual font family/weights;
- actual portfolio image ratios/focal points;
- business inquiry fields;
- careers structure and exact job titles;
- exact content source/format;
- component and animation dependencies if later required;
- CMS/content-management requirements;
- SEO/analytics implementation;
- form/email/storage providers;
- repeatable automated testing beyond the mandatory quality gate, such as Vitest/Playwright;
- deployment adapter, hosting, and remaining release architecture.

## Current boundary

The project owner explicitly deferred project/portfolio inventory and will provide the list later.

Do not recover old project names from chat history and automatically treat them as Hellocraft portfolio. Do not design final taxonomy around guessed examples.

Do not add a separate backend, database, CMS, auth system, admin layer, test framework, component library, motion library, CSS framework, image CDN, media CDN, or preprocessor unless an approved current responsibility earns it.

## Development readiness

```text
foundation baseline       = established
framework                  = SvelteKit approved
language                   = TypeScript approved
Svelte convention          = Svelte 5 runes-first approved
package manager            = Bun approved
styling                    = native Svelte/CSS baseline approved
design-token mechanism     = CSS Custom Properties approved
quality gate               = Prettier + ESLint + svelte-check + build approved
media/performance policy   = approved
local raster optimization  = @sveltejs/enhanced-img approved for build-time local raster media
server/private boundary    = SvelteKit protected server modules approved
backend model              = SvelteKit server, only where needed
rendering direction        = static/prerender-first
separate backend           = none initially
database                   = none initially
performance constraint     = visual quality + lightweight approved
brand logo anchor          = supplied / recorded
project visual specialist  = ready
support validation layers  = Context7 + Svelte + accessibility + Chrome ready
portfolio evidence         = pending user-supplied list
content architecture       = not ready
visual direction           = candidate exists; not final
technical architecture     = ready for minimal content-agnostic scaffold
full page implementation   = not authorized by current definition
```

The next current step is owned by `docs/knowledge/next-action.md`.
