---
name: web-accessibility-validation
description: Support skill for validating semantic, keyboard, assistive-technology, media, form, reflow, focus, and reduced-motion accessibility in Hellocraft web work. Use current W3C WCAG 2.2 and WAI-ARIA/APG as primary references, prefer native HTML semantics, and combine source review with browser/manual proof. This skill does not define visual art direction, legal compliance claims, or product structure.
---

# Web Accessibility Validation

Use this support skill when a bounded website change materially affects:

- semantic page structure or landmarks;
- links, buttons, menus, dialogs, tabs, carousels, filters, or other interaction;
- keyboard navigation or focus behavior;
- forms, validation, errors, or status messages;
- images, icons, video, audio, or other non-text content;
- heading order, page language, labels, names/roles/values;
- zoom, reflow, touch target behavior, or responsive operability;
- animation/motion that may require reduced-motion handling.

This is **not** a project-specific specialist and does not consume the one-specialist-per-task budget.

Visual accessibility such as contrast, hierarchy, and visible focus appearance may overlap with `web-ui-design-development`; this skill owns semantic/operability validation and accessibility proof, not art direction.

## Authority

Use current primary accessibility standards:

```text
W3C WCAG 2.2 Recommendation
→ W3C Understanding / Techniques when clarification is needed
→ WAI-ARIA / ARIA Authoring Practices Guide for custom widget behavior
→ native HTML platform semantics
→ current rendered/browser behavior
```

Third-party accessibility checklists are supporting references only.

Useful primary sources:

- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/ARIA/apg/

Do not claim formal WCAG conformance merely because this skill was used or automated checks passed.

## Core implementation rules

### Prefer native semantics

Use the native HTML element that already carries the intended meaning and behavior whenever practical.

Examples:

```text
button action      → <button>
navigation         → <nav>
main content       → <main>
form field         → <label> + native control
expand/collapse    → consider <details>/<summary> when it fits
```

Do not build clickable `<div>` / `<span>` controls and then recreate native keyboard semantics without a real reason.

Use ARIA to fill a semantic gap, not to replace correct HTML. When a custom interactive pattern is genuinely required, follow the relevant WAI-ARIA APG keyboard/state pattern.

### Keyboard and focus

For affected interactions:

- every operable control must be reachable and usable without a pointer;
- focus order must follow a meaningful interaction/read order;
- focus must remain visible and not be hidden behind sticky/fixed UI;
- custom widgets must implement the documented keyboard model when native HTML cannot represent the behavior;
- avoid positive `tabindex` ordering hacks;
- opening/closing overlays must manage focus deliberately when the interaction requires it.

### Content and media

- content-bearing images require useful text alternatives;
- decorative images should not create redundant screen-reader noise;
- icons used as controls require an accessible name;
- prerecorded video/audio needs the appropriate captions/transcript/alternative when required by the current content responsibility;
- do not fabricate alt text that claims details not visible/known from the actual media.

### Forms and feedback

- visible labels/instructions should describe inputs clearly;
- required/error state must not rely on color alone;
- validation errors must identify the affected field and be understandable;
- status/success/error feedback must be exposed appropriately to assistive technology when it changes dynamically;
- do not disable a submit path as a substitute for explaining what is invalid unless the interaction has a clear accessibility reason.

### Reflow and input

- content must remain usable at relevant zoom/reflow conditions without requiring two-dimensional scrolling for normal reading unless the content inherently requires it;
- touch/pointer targets and spacing must support practical operation;
- dragging-only interaction requires an alternative when applicable;
- hover-only disclosure must also work through keyboard/focus/touch-compatible behavior.

### Motion

Respect `prefers-reduced-motion` for non-essential motion. Reduced motion must preserve understanding and task completion.

## Working target versus conformance claim

Use applicable WCAG 2.2 A/AA criteria as the practical implementation target for normal Hellocraft web work unless a later legal/product requirement defines another level.

This is an engineering target, **not** a conformance declaration.

A formal compliance/conformance statement would require a dedicated, scoped evaluation of complete pages/processes and cannot be inferred from component checks.

## Validation workflow

1. Identify the actual interaction/content semantics affected.
2. Prefer native HTML before ARIA/custom behavior.
3. Check applicable WCAG 2.2 criteria and APG pattern guidance where needed.
4. Review source semantics, names/roles/states, labels, media alternatives, and focus logic.
5. Validate the rendered result with keyboard and browser inspection.
6. Use automated accessibility tooling only as supplemental evidence when it is already justified/available; do not install Pa11y, axe, or another dependency merely because this skill exists.
7. Record any limitation that requires real assistive-technology or human testing rather than pretending automation proves it.

When Chrome DevTools MCP is available, `chrome-devtools-validation` can supply browser/DOM/interaction evidence. It does not replace real assistive-technology testing where that is materially required.

## Do not use this skill to

- create a separate accessibility page or legal statement without an actual legal/product requirement;
- claim WCAG conformance from source inspection or automated scans alone;
- redesign the visual language merely to satisfy preference rather than an accessibility requirement;
- add ARIA where correct native semantics already solve the problem;
- install an accessibility test stack before a recurring automated-test responsibility exists;
- invent captions, transcripts, alt text, labels, or content facts that are not supported by real media/content.

## Completion

Accessibility validation is complete for the bounded change when:

- semantic HTML/native behavior is used where appropriate;
- applicable keyboard/focus/name/role/value/media/form/reflow/motion requirements are addressed;
- rendered keyboard/browser proof is obtained where behavior is claimed;
- unproven assistive-technology limitations are stated rather than hidden;
- no unsupported formal conformance/legal claim was made.

Then return to the active development owner and STOP.