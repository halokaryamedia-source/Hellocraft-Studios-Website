# Deployment Provider Comparison

Time-sensitive research comparing realistic deployment targets for the Hellocraft Studios Website against `docs/foundation/06-deployment-production-requirements.md`.

Last reviewed: **2026-08-21**

This is a shortlist/research record, not production-provider authority. Pricing, limits, platform behavior, and adapter versions must be rechecked before an actual provider/adapter is selected.

## Decision status

```text
DEPLOYMENT_PROVIDER_SHORTLIST_READY
PROVISIONAL_PREFERRED_FIT = CLOUDFLARE
PRODUCTION_PROVIDER_NOT_LOCKED
PRODUCTION_ADAPTER_NOT_INSTALLED
FULLY_STATIC_VS_HYBRID_NOT_FINAL
```

Cloudflare is the strongest **provisional** fit under the requirements known today. This is deliberately weaker than an approved production decision because Contact/Careers server behavior is still undefined.

## Evaluation frame

Each candidate is judged against the same current needs:

```text
1. official/current SvelteKit path
2. strong static/prerender delivery
3. ability to retain SvelteKit server actions/routes if later required
4. custom domain + HTTPS
5. redirects/canonical-origin support
6. environment/secrets handling
7. caching/compression suitable for a media-heavy studio site
8. preview/review workflow
9. security/configuration control
10. rollback/release safety
11. cost predictability at early/small-to-medium scale
12. operational simplicity
13. portability / lock-in cost
```

The evaluation does not reward unused databases, AI products, analytics, or other platform features merely because they exist.

## Shortlist summary

| Candidate | Current fit | Main advantage | Main concern |
|---|---|---|---|
| Cloudflare | **Strongest provisional fit** | Static assets + future full-stack SvelteKit on one low-cost edge-oriented platform | Worker/runtime limits and Cloudflare-specific environment must be respected |
| Netlify | **Strong balanced alternative** | Very direct SvelteKit integration, deploy previews, functions, custom domain/SSL | Credit model charges bandwidth/requests/deploys; Free can pause when credits run out |
| Vercel Pro | **Strong DX alternative** | Mature preview/deployment workflow and official SvelteKit adapter | Hellocraft is commercial, so Hobby is not an appropriate production tier; Pro starts higher |
| Managed Node / adapter-node | **Control/compatibility fallback** | Broad Node compatibility and provider portability | Highest operational burden; unnecessary for current simple site responsibility |
| Fully static adapter + static host | **Potential best minimal mode** | Simplest, highly portable, cheap/fast when all runtime behavior is external | Cannot keep SvelteKit server actions/routes; depends on final Contact/Careers architecture |

## 1. Cloudflare

### SvelteKit fit

Cloudflare has current first-party framework guidance for SvelteKit. Current Cloudflare guidance uses `@sveltejs/adapter-cloudflare`, and Wrangler can detect an existing SvelteKit project and generate Cloudflare configuration. The official Svelte package catalog also lists `@sveltejs/adapter-cloudflare` as an official adapter.

Both of Hellocraft's currently open production modes remain possible:

```text
Mode A
→ static/prerendered site on Cloudflare static delivery

Mode B
→ SvelteKit static assets + server endpoints/runtime via adapter-cloudflare / Workers
```

Cloudflare also documents preview deployments for Pages-based Git workflows. Workers is currently the broader Cloudflare full-stack target and Cloudflare publishes a migration path from Pages to Workers.

### Current pricing/limits relevant to Hellocraft

As reviewed on 2026-08-21:

```text
Workers Free
→ 100,000 requests/day
→ 10 ms CPU per invocation

Workers Paid
→ minimum $5 USD/month per account
→ 10 million requests/month included
→ additional request/CPU usage after included allowance
→ no additional data-transfer/egress or throughput charge in current Workers Paid pricing
```

Current Workers limits include a 25 MiB maximum for an individual static asset file. This aligns with the existing Hellocraft media policy: normal images/fonts/assets should be far below that, while large/long-form video should not be treated as a normal application static asset anyway.

### Strengths for Hellocraft

- strong static/prerender delivery;
- preserves a clean path to SvelteKit server behavior later;
- low paid-plan entry point relative to other commercial full-stack candidates reviewed;
- current Workers pricing does not add bandwidth/egress charges, useful for a media-heavy visual studio site;
- global edge-oriented delivery fits an Indonesia-based studio with international visitors/clients;
- one platform can serve static site needs now and light server functions later;
- future forms can remain SvelteKit-native if that proves desirable.

### Risks / constraints

- Workers is not simply an unrestricted conventional Node server;
- runtime/package compatibility must be checked for any future server dependency;
- Worker CPU/memory/file limits remain real engineering constraints;
- Cloudflare-specific bindings/configuration can increase platform coupling if the site later adopts KV/D1/Durable Objects unnecessarily;
- large media still needs disciplined handling despite favorable bandwidth pricing.

### Current verdict

```text
PROVISIONAL PREFERRED FIT
NOT LOCKED
```

Hellocraft's current application is lightweight enough that Cloudflare's runtime model is unlikely to be a disadvantage, while the combination of static delivery, future SvelteKit server support, and cost profile is unusually aligned with current requirements.

Do not install `adapter-cloudflare` yet.

## 2. Netlify

### SvelteKit fit

Netlify has current first-party SvelteKit integration guidance and recommends replacing `adapter-auto` with `@sveltejs/adapter-netlify` for deployment. The adapter maps SvelteKit endpoints/SSR routes to Netlify Functions and supports SvelteKit's per-route mix of prerender/static and server rendering.

It therefore supports both:

```text
Mode A
→ adapter-static / fully static delivery

Mode B
→ adapter-netlify / hybrid static + functions
```

Netlify also provides unlimited deploy previews on current credit-based plans.

### Current pricing relevant to Hellocraft

As reviewed on 2026-08-21 for current credit-based plans:

```text
Free
→ $0/month
→ 300 credits/month hard limit
→ projects pause after credit limit until next cycle

Personal
→ $9/month
→ 1,000 credits/month
→ optional auto recharge

Pro
→ starts $20/month
→ 3,000 credits/month
→ unlimited members
→ higher tiers available
```

Current credit usage includes categories such as:

```text
production deploy       → 15 credits
bandwidth               → 20 credits / GB
web requests            → 2 credits / 10,000 requests
compute                 → 10 credits / GB-hour
Deploy Previews         → 0 credits
Netlify Forms submission→ currently free on credit plans
```

### Strengths for Hellocraft

- straightforward official SvelteKit path;
- very good deploy-preview workflow;
- static and server/function modes both supported;
- custom domains + SSL are available even on Free;
- built-in forms could become an alternative future submission boundary if deliberately selected later;
- lower paid entry than Vercel Pro through Personal if a solo-owner operational model is enough.

### Risks / constraints

- credit model makes bandwidth directly relevant, which matters for a media-heavy portfolio;
- Free is a hard cap and can pause projects when monthly credits are consumed;
- production deploys consume credits, so frequent main-branch production deployment has a measurable cost dimension;
- some Netlify-specific function/redirect behavior differs from generic SvelteKit hosting;
- Edge Function behavior has Netlify-specific limitations and is not needed by Hellocraft now.

### Current verdict

```text
STRONG BALANCED ALTERNATIVE
```

Netlify is attractive when easy previews/team workflow and integrated server/functions/forms matter more than minimizing bandwidth-related cost. It remains a serious shortlist candidate.

## 3. Vercel Pro

### SvelteKit fit

The official Svelte ecosystem lists `@sveltejs/adapter-vercel` as an official SvelteKit adapter. Vercel provides automatic Git-based deployment, CDN delivery, functions, previews, HTTPS, and mature team/developer workflows.

### Commercial-plan boundary

This is a material Hellocraft constraint.

Vercel's current official pricing/terms state that the Hobby plan is for **personal, non-commercial use**. Vercel's fair-use guidance states that commercial usage requires Pro or Enterprise.

Hellocraft's official studio/company website has a business/client-acquisition purpose, so current planning must **not** assume Vercel Hobby as a valid production tier.

Current Pro pricing reviewed on 2026-08-21:

```text
Pro
→ $20/month
→ $20 included usage credit
→ professional/business/team tier
```

Current pricing also includes 1 TB/month Fast Data Transfer and 10 million Edge Requests on Pro before additional usage rates shown by Vercel.

### Strengths for Hellocraft

- polished Git/preview/deployment developer experience;
- strong commercial/team collaboration features;
- official SvelteKit adapter;
- global CDN/functions fit both static and hybrid site modes;
- mature spend controls and deployment workflow.

### Risks / constraints

- commercial requirement creates a $20/month production-plan floor under current terms;
- usage beyond included Pro credit is metered;
- current Hellocraft responsibilities are simple enough that paying for the richer platform workflow may not yet provide proportional value;
- some Vercel-specific functionality can create platform coupling if adopted without a need.

### Current verdict

```text
STRONG DX ALTERNATIVE
COMMERCIAL PRO PLAN REQUIRED FOR PRODUCTION
```

Vercel remains technically strong, but it is currently weaker on cost/value than Cloudflare for this specific studio site unless Vercel's collaboration/preview experience becomes materially valuable to the team.

## 4. Managed Node / `adapter-node`

The official Svelte ecosystem describes `@sveltejs/adapter-node` as producing a standalone Node server.

### Strengths

- conventional Node runtime compatibility;
- broad choice of VPS/PaaS/container providers;
- high control over proxy/runtime/server configuration;
- lower dependency on one framework-host vendor;
- useful if future server responsibilities require libraries/runtime behavior that edge/serverless targets cannot support cleanly.

### Costs / risks

- hosting/provider selection becomes another operational responsibility;
- reverse proxy/TLS/compression/process lifecycle/logging/updates may need explicit ownership depending on the host;
- more security/maintenance surface;
- preview deployments and rollbacks are less automatic unless the chosen Node platform provides them;
- current Hellocraft website does not have enough server complexity to justify this additional ownership.

### Current verdict

```text
CONTROL / COMPATIBILITY FALLBACK
NOT CURRENTLY JUSTIFIED AS DEFAULT
```

Revisit if future backend requirements become materially more demanding than simple forms/integrations.

## 5. Fully static mode

This is an architectural mode rather than one provider.

The official Svelte ecosystem maintains `@sveltejs/adapter-static`. Cloudflare Pages and Netlify both support fully static SvelteKit output, and many other static hosts could serve it.

### Strengths

- smallest production surface;
- excellent cacheability;
- broad hosting portability;
- no application server to operate;
- potentially the lowest cost and easiest reliability profile;
- aligns strongly with Hellocraft's static-first/lightweight requirement.

### Constraint

A fully static site cannot retain SvelteKit server actions/routes as its application backend.

If Contact/Careers later need server handling, they must use an external form/serverless service boundary.

### Current verdict

```text
POTENTIALLY BEST MINIMAL MODE
BLOCKED BY CONTACT/CAREERS DECISION
```

Do not choose static-only merely to optimize infrastructure before the actual form/server requirement is known.

## Scenario recommendations

### Best current provisional fit

```text
1. Cloudflare
2. Netlify
3. Vercel Pro
4. Managed Node
```

Why Cloudflare leads now:

```text
static/prerender fit
+ future light SvelteKit server support
+ low paid entry
+ no current Workers bandwidth/egress charge
+ globally distributed delivery
+ no need for Node-server operations
```

### If Contact/Careers remain SvelteKit server actions

```text
Cloudflare ≈ strongest provisional fit
Netlify    ≈ strong easy-function alternative
Vercel Pro ≈ strong premium DX alternative
Node       ≈ only if runtime compatibility/control becomes necessary
```

No selection should be finalized until form validation, abuse prevention, email/storage, and possible file-upload needs are known.

### If the website becomes fully static

Infrastructure becomes much less differentiating.

```text
adapter-static
+ any reliable static host meeting domain/TLS/cache/redirect requirements
```

In that scenario Cloudflare and Netlify remain strong candidates, but provider portability becomes more valuable and there is little reason to pay for server features that are not used.

## Important non-decisions

This comparison does **not** authorize:

- changing `adapter-auto`;
- adding Wrangler / Vercel / Netlify CLI/config;
- creating provider accounts/projects;
- connecting a domain;
- deploying the scaffold;
- enabling analytics/monitoring;
- selecting a form provider;
- activating `website-release-development`;
- running local/runtime validation while the project owner has deferred it.

## Re-evaluation triggers

Re-run this comparison before locking a provider if any of these become known:

- Contact form fields and anti-spam model;
- Career application fields;
- CV/file upload requirement;
- email/storage/provider choice;
- actual production domain/DNS ownership;
- traffic or large-video delivery expectations;
- requirement for preview access controls;
- compliance/data-residency requirement;
- server dependency that requires conventional Node APIs;
- significant pricing/limit changes.

## Current recommendation

Treat **Cloudflare as the provisional preferred deployment target**, but keep `adapter-auto` and provider-neutral source until the server/form decision is mature enough to make the preference actionable.

This gives the project a direction without prematurely creating provider lock-in.

## Sources reviewed

Primary current sources reviewed on 2026-08-21:

- Svelte official package catalog for official adapters;
- Cloudflare official SvelteKit framework, Workers pricing, and Workers limits documentation;
- Netlify official SvelteKit and current credit-based pricing documentation;
- Vercel official pricing, plans, limits, and commercial-use/fair-use documentation.

Provider prices and limits are intentionally repeated here only as time-stamped research. They are not durable Foundation requirements.
