---
name: development-brief
description: Use before non-trivial implementation after the affected Hellocraft Studios Website project definition is ready. Define the smallest implementation contract, owner set, acceptance criteria, support/evidence layers, handoffs, and proof without redefining product meaning inside code.
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

## Conductor rule

This development brief is the conductor for the bounded task.

Support skills do not autonomously broaden scope or hand control to each other. The active development owner:

1. selects the support layers that match the current claim;
2. consumes each support finding;
3. decides what changes belong in source/architecture;
4. routes the result to the next required proof layer;
5. stops when acceptance is satisfied.

## Support handoff contract

For every materially used support/evidence skill, normalize the result to:

```text
FINDING
→ what was discovered or validated

AUTHORITY
→ exact source/version/runtime evidence

ACTION
→ change or preservation required from the active owner

PROOF
→ cheapest evidence capable of falsifying the claim

BLOCKER
→ remaining unproven condition, if any
```

Do not duplicate research when a previous support layer already established the relevant authority/version and it remains current.

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

## Trigger matrix

| Work | Required support by default |
| --- | --- |
| SvelteKit/tool configuration | Context7 when version-sensitive + Svelte validation |
| Svelte component logic | Svelte validation; accessibility/browser only when affected |
| Visual Svelte component | Svelte validation + UI specialist; accessibility when applicable; Chrome for rendered acceptance |
| Navigation/menu/filter | Svelte validation + UI specialist + accessibility + Chrome |
| Form/UI submission | Svelte validation + accessibility + Chrome; Context7 when API/config matters |
| Server action/endpoint | Svelte validation + Context7 when API/config matters; runtime proof when behavior is claimed |
| Performance investigation | Chrome; Context7 only for current tool/API docs; UI specialist only for visual-cost decisions |
| Static content-only change | no support by default unless Svelte source, visual hierarchy, semantics, or media behavior changes |

This matrix is a default routing aid, not a mandatory stack.

## Authority and proof hierarchy

Use the correct authority for the claim.

```text
product / architecture
→ user instruction → Foundation → current source/contracts

external API / config
→ installed/declared version → official docs → Context7 → secondary examples

implementation compatibility
→ source intent → format/lint/svelte-check/build

runtime / browser
→ check/build → actual browser/runtime → deployed target when production is claimed
```

If a lower proof layer fails, higher-level documentation does not rescue the implementation.

Examples:

```text
Context7 says API is valid
+ svelte-check fails
→ FAIL

docs + build pass
+ browser interaction fails
→ FAIL

browser passes locally
+ production behavior is claimed but not deployed-tested
→ production claim still unproven
```

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
- Do not ask a support skill to decide outside its ownership boundary; return architectural/visual/product decisions to the active owner.

## Acceptance

Choose 2–5 falsifiable criteria and the cheapest matching proof.

Examples:

```text
content/IA contract
→ source/content review

external library/API/config correctness
→ current version + official/Context7 documentation + current package/config inspection

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

## Dry-run acceptance gate

Before page-specific UI implementation begins, the first minimal SvelteKit scaffold must include one deliberately small integration slice that exercises the routing system without becoming product UI.

The slice should be no larger than needed to cover:

```text
one Svelte component
+ one small interactive control
+ one representative image/media element
+ responsive layout behavior
```

Run the smallest relevant chain:

```text
development-brief
→ Context7 only if current docs/config are material
→ svelte-development-validation
→ implementation
→ web-accessibility-validation for the interactive/media semantics
→ format/lint/svelte-check/build
→ chrome-devtools-validation for rendered/runtime proof
→ record overlap/gap findings
```

The dry-run is successful when:

- each support layer returns a clear handoff rather than repeating another layer's work;
- no support layer takes over architecture/product/visual authority;
- required checks/build pass;
- the rendered interaction is keyboard-usable and visually stable;
- browser console/network evidence shows no material defect introduced by the slice;
- no new skill is required merely to finish the test.

Do not turn the dry-run into a homepage prototype or portfolio content implementation.

## Completion

Before completion verify:

- requested result is achieved;
- scope stayed bounded;
- current Foundation still matches the result;
- one current owner remains for each changed responsibility;
- only justified support/evidence skills were used;
- every materially used support layer returned a usable handoff;
- version-sensitive external guidance was validated when material;
- Svelte source received Svelte-specific validation when materially changed;
- accessibility was validated when the affected semantics/interaction require it;
- browser/runtime proof was actually obtained for browser/runtime claims;
- no unrelated cleanup or speculative architecture was added.

Update `docs/knowledge/next-action.md` only when active status/boundary/next step changed. Then STOP.
