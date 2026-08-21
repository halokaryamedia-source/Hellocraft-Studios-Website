# Next Action

## Current Status

```text
FOUNDATION_BASELINE_ESTABLISHED
PORTFOLIO_EVIDENCE_DEFERRED
STUDIO_PROFILE_DEFERRED
CONTENT_INTAKE_CONTRACT_READY
SVELTEKIT_FULLSTACK_APPROVED
TYPESCRIPT_DEFAULT_APPROVED
SVELTE5_RUNES_FIRST_APPROVED
SERVER_PRIVATE_BOUNDARY_APPROVED
BUN_PACKAGE_MANAGER_APPROVED
NATIVE_SVELTE_CSS_APPROVED
CSS_CUSTOM_PROPERTY_TOKENS_APPROVED
QUALITY_GATE_APPROVED
MEDIA_POLICY_APPROVED
ENHANCED_IMG_LOCAL_RASTER_PIPELINE_APPROVED
VISUAL_DIRECTION_BASELINE_ESTABLISHED
DISCOVERABILITY_METADATA_POLICY_APPROVED
DEPLOYMENT_REQUIREMENTS_APPROVED
DEPLOYMENT_PROVIDER_SHORTLIST_READY
CLOUDFLARE_PROVISIONAL_PREFERRED_NOT_LOCKED
PRODUCTION_PROVIDER_NOT_SELECTED
PRODUCTION_ADAPTER_NOT_SELECTED
WEBSITE_RELEASE_SPECIALIST_BLOCKED
STATIC_FIRST_SERVER_WHERE_NEEDED_APPROVED
NO_SEPARATE_BACKEND_INITIAL_APPROVED
NO_DATABASE_INITIAL_APPROVED
LIGHTWEIGHT_PERFORMANCE_REQUIREMENT_APPROVED
CONTEXT7_DOCUMENTATION_VALIDATION_READY
SVELTE_DEVELOPMENT_VALIDATION_READY
WEB_ACCESSIBILITY_VALIDATION_READY
CHROME_DEVTOOLS_VALIDATION_READY
SUPPORT_SKILL_HANDOFF_CONTRACT_READY
SUPPORT_SKILL_TRIGGER_MATRIX_READY
AUTHORITY_PROOF_HIERARCHY_READY
CODEX_CONTEXT7_MCP_WIRED
CODEX_CHROME_DEVTOOLS_MCP_WIRED
WEB_UI_DESIGN_SPECIALIST_READY
CONTENT_AGNOSTIC_SCAFFOLD_SOURCE_CREATED
BUN_LOCK_PENDING_INSTALL
SCAFFOLD_RUNTIME_VALIDATION_PENDING
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
NON_LOCAL_DEFINITION_TRACK_ACTIVE
INTEGRATION_DRY_RUN_DEFERRED
BUSINESS_INQUIRY_WORKFLOW_NOT_DEFINED
CAREERS_APPLICATION_WORKFLOW_NOT_DEFINED
SERVICES_TAXONOMY_NOT_DEFINED
INFORMATION_ARCHITECTURE_NOT_DEFINED
PAGE_IMPLEMENTATION_NOT_READY
```

Working authority: **`Local`**.

## Runtime/local boundary

The project owner explicitly does **not** want local/runtime testing at the current stage.

These remain pending but are not the active next step:

```text
bun install
bun.lock generation
bun run validate
local preview
Chrome/runtime dry-run
```

Do not fabricate install/build/browser proof. Resume only after explicit re-authorization.

## Non-local foundations established

```text
docs/foundation/04-visual-direction.md
→ Playful editorial game studio visual baseline

docs/foundation/05-discoverability-metadata-policy.md
→ native Svelte metadata/canonical/sitemap/structured-data policy

docs/knowledge/content-intake-contract.md
→ authoritative project/studio evidence intake and audit contract

docs/foundation/06-deployment-production-requirements.md
→ provider-neutral deployment requirements

docs/knowledge/deployment-provider-comparison.md
→ time-sensitive hosting shortlist and tradeoffs
```

## Deployment shortlist

Current time-sensitive research indicates:

```text
1. Cloudflare
   → strongest provisional fit
   → NOT LOCKED

2. Netlify
   → strong balanced alternative

3. Vercel Pro
   → strong DX alternative
   → Vercel Hobby is not suitable for Hellocraft production under current non-commercial-only terms

4. Managed Node / adapter-node
   → control/compatibility fallback

Fully static adapter
   → potentially simplest mode if all dynamic submission moves to external boundaries
```

Cloudflare currently leads provisionally because it combines strong static delivery, an official SvelteKit full-stack path, low paid-plan entry, and current Workers pricing without bandwidth/egress charges. This preference is deliberately not actionable yet.

Do **not**:

- replace `adapter-auto`;
- install Cloudflare/Vercel/Netlify tooling;
- create a provider account/project;
- deploy;
- activate `website-release-development`.

Provider selection must be revisited once form/server responsibilities are known.

## Content boundary retained

The project owner still has not supplied authoritative Portfolio/Project inventory or Studio/About facts.

Do not infer project names, clients, services taxonomy, metrics, final IA, or company facts from old conversations.

## Next non-local decision — business inquiry and careers workflow

The next architecture decision that can materially change hosting/server mode is the real submission responsibility for:

```text
A. Business Inquiry / Contact
B. Careers / Application
```

Do not start by designing fields. First define the required outcome and minimum data flow.

### Business Inquiry choices to resolve

Possible architecture classes:

```text
1. direct channel only
   → email / approved external contact channel
   → no website form server responsibility

2. external hosted/serverless form boundary
   → website remains fully static-capable

3. SvelteKit form action
   → server runtime + validation + secrets + anti-spam/provider integration
```

Questions that materially change the decision:

- Is a website form actually required, or is a direct business email/channel enough?
- If a form exists, what minimum information must a potential client provide?
- Does submission need acknowledgement/notification only, or persistent tracking/storage?
- Is file upload ever required for business inquiry?
- What abuse/spam level is acceptable?

Do not assume CRM, scheduling, database, account creation, phone number, budget, or timeline fields.

### Careers choices to resolve

Possible architecture classes:

```text
1. careers information + external application link/email
   → static-capable

2. simple website application form without files
   → external form or SvelteKit action

3. application form with CV/portfolio file upload
   → storage/upload/security/privacy responsibility becomes real
```

Questions that materially change the decision:

- Are job openings listed individually or is there also a general application?
- Is CV/resume file upload required, or are links sufficient?
- Is portfolio URL enough for creative roles?
- Is persistent applicant tracking required?
- Which submitted personal data is truly necessary?

Do not create storage/database/applicant-tracking architecture before those answers exist.

## Why this is the next decision

The answer directly determines whether Hellocraft should eventually prefer:

```text
fully static deployment
vs
hybrid SvelteKit deployment with server actions/routes
```

It also changes provider evaluation, privacy/security scope, and whether `website-release-development` becomes earned.

## Deferred runtime gate

When runtime/local proof is later re-authorized:

```text
bun install
→ generate/inspect bun.lock
→ bun run validate
→ integration dry-run
→ accessibility validation
→ Chrome DevTools proof
```

## Next Step

**Define the minimum Business Inquiry and Careers/Application outcomes before choosing form fields or providers. Use those decisions to determine whether the final production mode should stay fully-static-capable or require SvelteKit server actions. Keep provider/adapter selection and all local/runtime testing deferred until the project owner authorizes them.**
