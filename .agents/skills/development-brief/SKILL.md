---
name: development-brief
description: Use before non-trivial implementation after the affected Hellocraft Studios Website project definition is ready. Define the smallest implementation contract, owner set, acceptance criteria, support/evidence layers, and proof without redefining product meaning inside code.
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

## Internal contract

Establish only what can materially change implementation or acceptance:

```text
Goal
Current requirement / Foundation owner
Expected output
In scope
Out of scope
Smallest owner/source set
Project specialist: zero or one
Support/evidence skills: only those materially required
Acceptance criteria: 2–5
Proof budget
Open high-impact decision, if any
Superseded current path/state, if replacing something
```

Do not create a per-task file for this contract.

## Support / evidence selection

Choose support layers by the actual claim being made, not by habit.

```text
current/version-sensitive external API/config/docs
→ context7-documentation-validation

Svelte/SvelteKit source creation/edit/review
→ svelte-development-validation

semantic/keyboard/form/media/reflow accessibility
→ web-accessibility-validation

rendered/browser/console/network/performance claim
→ chrome-devtools-validation
```

A support skill may accompany the one allowed project specialist because it validates evidence/tool correctness rather than owning Hellocraft product semantics.

Do not invoke every support skill for every task.

## Implementation rules

- Fix the first wrong current owner.
- Prefer the smallest complete final solution.
- Do not add fallback, compatibility, CMS, database, framework, service, state layer, analytics system, test framework, or abstraction without a current requirement.
- Preserve approved negative requirements and deferred boundaries.
- Do not let implementation silently redefine content, audience, positioning, portfolio attribution, or business flow.
- Use zero or one already-earned matching project-specific specialist. The current project-specific specialist count is **one**: `web-ui-design-development`.
- Do not implement external APIs/configuration from stale model memory when current documentation can materially change correctness.
- Documentation/tool output does not authorize package adoption. Dependency, architecture, maintenance, security, and performance decisions remain with normal project owners and Hellocraft's lightweight-performance requirement.
- If Svelte source is changed, use the current Svelte validation workflow rather than translating React/legacy habits into Svelte.
- If semantics/interactions/forms/media are affected, accessibility is part of completion rather than optional polish.
- Do not claim browser, visual, network, or performance behavior until the relevant rendered/runtime evidence exists.

## Acceptance

Choose 2–5 falsifiable criteria and the cheapest matching proof.

Examples:

```text
content/IA contract
→ source/content review

external library/API/config correctness
→ Context7/version-aware official documentation + current package/config inspection

Svelte/SvelteKit source correctness
→ official Svelte guidance/autofixer when available + svelte-check/build

semantic/keyboard/form accessibility
→ source semantics + keyboard/rendered browser inspection + applicable WCAG/APG review

responsive layout
→ actual browser viewport inspection

interaction/form behavior
→ actual runtime execution

visual fidelity
→ rendered visual inspection

network/loading behavior
→ Chrome DevTools network evidence

performance
→ representative browser performance trace + built/deployed evidence as applicable

SEO/metadata
→ built/source/runtime inspection as appropriate
```

Documentation proves documented intent only. Static/source inspection cannot by itself prove runtime, visual, deployment, network, performance, or assistive-technology behavior.

Automated accessibility/browser tooling is supplemental evidence; do not claim formal WCAG conformance or complete human/assistive-technology acceptance from automation alone.

## Completion

Before completion verify:

- requested result is achieved;
- scope stayed bounded;
- current Foundation still matches the result;
- one current owner remains for each changed responsibility;
- only justified support/evidence skills were used;
- version-sensitive external guidance was validated when material;
- Svelte source received Svelte-specific validation when materially changed;
- accessibility was validated when the affected semantics/interaction require it;
- browser/runtime proof was actually obtained for browser/runtime claims;
- no unrelated cleanup or speculative architecture was added.

Update `docs/knowledge/next-action.md` only when active status/boundary/next step changed. Then STOP.