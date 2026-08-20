---
name: development-brief
description: Use before non-trivial implementation after the affected Hellocraft Studios Website project definition is ready. Define the smallest implementation contract, owner set, acceptance criteria, and proof without redefining product meaning inside code.
---

# Development Brief

Use this only for non-trivial Developing after the affected project definition is ready.

## Continuity

```text
AGENTS.md
→ CONTEXT.md
→ docs/knowledge/next-action.md
→ affected Foundation owner(s)
→ this development brief
→ smallest affected source/contract set
```

If the requested implementation would require inventing project meaning, stop and return to `project-definition`.

When external framework/library/API/CLI/adapter/provider documentation materially affects implementation, use `context7-documentation-validation` as an evidence layer before coding from memory.

## Internal contract

Establish only what can materially change implementation or acceptance:

```text
Goal
Current requirement / Foundation owner
Expected output
In scope
Out of scope
Smallest owner/source set
Acceptance criteria: 2–5
Proof budget
Open high-impact decision, if any
Superseded current path/state, if replacing something
```

Do not create a per-task file for this contract.

## Implementation rules

- Fix the first wrong current owner.
- Prefer the smallest complete final solution.
- Do not add fallback, compatibility, CMS, database, framework, service, state layer, analytics system, or abstraction without a current requirement.
- Preserve approved negative requirements and deferred boundaries.
- Do not let implementation silently redefine content, audience, positioning, portfolio attribution, or business flow.
- Use zero or one already-earned matching project-specific specialist. The current project-specific specialist count is **one**: `web-ui-design-development`.
- `context7-documentation-validation` is a support/evidence skill, not a project-specific specialist, and may be used alongside the active development brief and visual specialist when version-sensitive external documentation is material.
- Do not implement external APIs/configuration from model memory when current documentation can materially change correctness. Resolve the exact technology/version and use Context7 or official primary documentation according to the support skill.
- Context7 documentation does not authorize package adoption. Dependency, architecture, maintenance, security, and performance decisions remain with the normal project owners and Hellocraft's lightweight-performance requirement.

## Acceptance

Choose 2–5 falsifiable criteria and the cheapest matching proof.

Examples:

```text
content/IA contract
→ source/content review

external library/API/config correctness
→ Context7/version-aware official documentation + current package/config inspection

Svelte/SvelteKit/Bun compatibility
→ matching format/lint/svelte-check/build proof

responsive layout
→ actual browser viewport inspection

interaction/form behavior
→ actual runtime execution

visual fidelity
→ rendered visual inspection

SEO/metadata
→ built/source/runtime inspection as appropriate
```

Documentation can prove documented API/configuration intent; it cannot by itself prove project compatibility, runtime behavior, deployment behavior, or visual quality.

Do not claim browser, visual, deployment, integration, or human-acceptance proof from source or documentation presence alone.

## Completion

Before completion verify:

- requested result is achieved;
- scope stayed bounded;
- current Foundation still matches the result;
- one current owner remains for each changed responsibility;
- version-sensitive external guidance was validated when material;
- required proof was actually obtained;
- no unrelated cleanup or speculative architecture was added.

Update `docs/knowledge/next-action.md` only when active status/boundary/next step changed. Then STOP.
