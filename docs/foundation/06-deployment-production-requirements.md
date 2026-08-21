# Deployment & Production Requirements

Provider-neutral deployment/release requirements for the Hellocraft Studios Website.

This file defines what an eventual production target must support. It does **not** select a hosting provider, production branch strategy, domain, adapter, form provider, database, or monitoring vendor.

## Status

```text
DEPLOYMENT_REQUIREMENTS_APPROVED
PRODUCTION_PROVIDER_NOT_SELECTED
PRODUCTION_ADAPTER_NOT_SELECTED
ADAPTER_AUTO_TEMPORARY_SCAFFOLD_ONLY
WEBSITE_RELEASE_SPECIALIST_STILL_BLOCKED
LOCAL_RUNTIME_PROOF_DEFERRED_BY_PROJECT_OWNER
```

## Core principle

```text
current product responsibilities
→ choose the smallest production capability that satisfies them
→ use the matching official SvelteKit adapter
→ keep static content static where possible
→ add server/runtime capability only where real behavior needs it
→ verify on the actual deployed target
```

Do not choose infrastructure because it is fashionable or because a competitor uses it.

## Production modes that must remain possible

### Mode A — static-first with external dynamic boundaries

Suitable if the final site can be fully prerendered and future forms/integrations use an external submission/service boundary.

```text
public pages
→ static/prerendered

contact/career submission
→ external/serverless/provider boundary outside SvelteKit runtime
```

This mode may later justify a static adapter/host if every real route can be represented responsibly without request-time SvelteKit server behavior.

### Mode B — hybrid SvelteKit deployment

Suitable if Contact, Careers, validation, anti-spam, private secrets, or other integrations remain implemented through SvelteKit server actions/routes.

```text
public content
→ prerender/static where appropriate

server-required routes
→ SvelteKit runtime via target adapter
```

The host must support the chosen official SvelteKit adapter/runtime and the needed server behavior without forcing the whole site to become dynamically rendered.

Current architecture keeps both modes open until actual Contact/Careers requirements are defined.

## Adapter requirement

The scaffold currently uses `@sveltejs/adapter-auto` only because the production target is not chosen.

SvelteKit requires an adapter to convert build output for a deployment target. Current official options include adapters for static generation, Node servers, Cloudflare, Netlify, and Vercel.

Once a target is deliberately selected:

```text
adapter-auto
→ replace with the matching explicit adapter
→ add that adapter to package.json / bun.lock
→ configure only target-specific options actually required
```

Do not treat `adapter-auto` as the permanent production architecture merely because it is the scaffold default. Current SvelteKit guidance recommends installing the appropriate adapter once the target environment is settled.

The package manager being Bun does **not** require a Bun production runtime. Build tooling and deployment runtime are separate responsibilities.

## Required hosting capabilities

The eventual target should satisfy the capabilities relevant to the selected production mode.

### Core web delivery

- HTTPS/TLS on the production domain;
- custom-domain support;
- HTTP/2 or newer modern delivery where provided normally by the platform;
- compression for text assets;
- efficient caching for hashed build assets;
- correct content types;
- reliable delivery of optimized image/font/video assets;
- support for redirects and canonical-origin normalization.

Do not create a custom CDN layer before the selected platform/media scale proves it necessary.

### Static/prerender behavior

The target must serve prerendered routes directly and efficiently rather than forcing request-time rendering for content that does not need it.

The static-first architecture should remain observable in the deployed result:

```text
static route
→ static response / cache-friendly delivery

server route
→ runtime only because current functionality requires it
```

### Server capability when earned

If Mode B is selected, the target must support the SvelteKit server responsibilities actually implemented, potentially including:

- form actions;
- server routes;
- server-side validation;
- anti-spam/abuse checks;
- private environment values;
- external email/form/storage calls;
- request-specific redirects/errors.

Do not require a long-running server, edge runtime, queue, Redis, database, or background worker unless a real future feature needs it.

## Environment and secrets

Production must provide separate protected environment configuration for secrets.

SvelteKit source continues to use the approved server-only/private boundaries:

```text
$env/static/private
$env/dynamic/private
$lib/server/**
*.server.*
route server modules
```

Requirements:

- secrets are configured through the production environment, not committed to Git;
- preview/staging and production secrets can be separated;
- public values are deliberately distinguished from private values;
- secret rotation does not require editing public source files;
- deployment logs/build output must not expose secret values.

Do not add secrets merely to prepare for integrations that do not yet exist.

## Domain and canonical origin

The production domain/origin is not yet selected.

Once selected, production must support:

- one preferred canonical origin;
- redirect of alternate host variants when applicable;
- HTTPS enforcement;
- stable absolute URLs for canonical, sitemap, social preview, and external integrations;
- predictable redirect behavior during future route changes.

Do not hardcode a guessed domain in the current scaffold.

## Preview / staging

A useful production workflow should support preview/staging when practical, especially for visual/client-content review before release.

Preview environments should:

- be clearly distinguishable from production;
- avoid accidentally becoming the canonical public site;
- avoid search indexing when the preview is not intended for public discovery;
- use separate environment values when integrations could affect real users/data;
- not require a second permanently maintained codebase.

Do not invent a complex multi-environment release system before collaboration needs justify it.

## Redirects and route changes

The selected platform must provide a maintainable way to express permanent/temporary redirects when real route migrations occur.

Redirects should support the later canonical/discoverability policy and avoid broken inbound links.

Do not create redirect tables for hypothetical routes before information architecture exists.

## Caching and assets

Production delivery should preserve the framework/build ownership:

```text
hashed build assets
→ long-lived immutable/cache-friendly delivery

HTML / dynamic responses
→ cache behavior according to actual freshness/runtime responsibility

media
→ cache based on real asset ownership and update behavior
```

Do not put aggressive cache headers on content whose update behavior has not been understood.

Remote image/video CDN behavior remains deferred until media scale or CMS ownership earns it.

## Security baseline

Security configuration must be based on the real deployed application and third-party resource graph, not copied as a generic header bundle.

### SvelteKit protections

Preserve framework defaults unless a concrete integration requires a deliberate change.

SvelteKit currently includes production CSRF origin checking for relevant cross-origin form submissions. Do not disable/bypass it broadly merely to make an integration work; trusted origins must be explicit and justified if later required.

SvelteKit also provides Content Security Policy configuration. CSP should be curated after the real script/style/media/provider set is known.

Important CSP boundary:

- prerendered and dynamically rendered pages have different nonce/hash behavior;
- SvelteKit can augment directives for generated inline resources;
- some Svelte transitions rely on inline styles, so final CSP must be tested against the actual UI behavior;
- host-level headers and SvelteKit CSP configuration must not contradict each other.

### Production header capability

The target should allow appropriate production security headers/policies, potentially including:

- Content-Security-Policy;
- Strict-Transport-Security after HTTPS/domain behavior is confirmed;
- X-Content-Type-Options;
- Referrer-Policy;
- frame/embed policy where relevant;
- permissions policy when real browser capabilities need restriction.

Exact values remain a release responsibility because they depend on real embeds, analytics, fonts, forms, media providers, and hosting behavior.

Do not enable a strict production CSP now while the final external-resource graph is undefined.

## Build and release proof

Repository/source configuration is not deployment proof.

When runtime/release work is later authorized, production acceptance should eventually establish:

```text
install/lock reproducibility
→ quality gate
→ target build with explicit adapter
→ preview/staging proof when used
→ deployed production smoke proof
→ redirects/canonical origin
→ security headers
→ asset caching/compression
→ form/server integration if present
→ browser/performance proof
```

The project owner currently defers local/runtime testing, so none of these deployed/runtime claims are considered complete now.

## Rollback / release safety

Prefer a provider/workflow where a bad release can be reverted without manually reconstructing production files.

Desired capability:

- deployment history or reproducible prior build;
- clear production promotion/revert path;
- Git commit remains traceable to a deployed version;
- no manual editing of generated production files as the normal release process.

The exact branching/promotion model is not defined yet.

## Observability

Do not install monitoring/tracing infrastructure before server responsibilities exist.

When dynamic/server behavior is introduced, require enough production evidence to diagnose failures such as:

- form submission errors;
- provider/API failures;
- unexpected server exceptions;
- abuse/rate-limit behavior if implemented.

SvelteKit has observability/tracing capabilities, but they are not enabled merely because they exist. A provider/tool is added only when the operational need becomes real.

Static pages do not justify a large observability stack.

## Cost and maintenance

Provider evaluation should prioritize the smallest sustainable operational burden.

Consider:

```text
cost at expected traffic/media scale
build/deploy limits
bandwidth/media cost
server/function cost if used
preview/developer workflow
adapter support quality
vendor-specific lock-in
operational complexity
```

Do not optimize for hypothetical massive traffic before actual scale exists, but avoid a path that makes media-heavy portfolio delivery needlessly expensive or operationally fragile.

## Provider selection scorecard

A later hosting comparison should score candidates against the same requirements instead of comparing marketing feature lists.

Suggested categories:

```text
SvelteKit adapter maturity
static/prerender delivery
future server/form compatibility
custom domain + TLS
redirect/canonical handling
env/secrets
asset caching/compression
security-header/CSP control
preview workflow
logs/diagnostics when server features exist
rollback/release safety
cost/maintenance
lock-in / migration difficulty
```

Do not choose a winner until the material Contact/Careers/server requirements are known well enough to distinguish candidates.

## What remains intentionally unresolved

- production provider;
- production domain;
- explicit SvelteKit adapter;
- fully-static versus hybrid final mode;
- deployment branch/promotion strategy;
- CI platform/workflow;
- contact/career form provider;
- anti-spam provider/strategy;
- email/storage provider;
- analytics;
- monitoring/observability provider;
- exact security header/CSP policy;
- data residency/compliance requirements if any later emerge.

## External technical basis

This policy was curated against current primary guidance including:

- current SvelteKit adapter and `adapter-auto` documentation;
- current SvelteKit CSP, CSRF, environment, server-only, prerender, and observability capabilities;
- current browser/MDN security-header concepts already recorded in the project reference inventory.

Version-sensitive configuration still requires current official documentation/Context7 when implementation begins, followed by matching deployed proof.
