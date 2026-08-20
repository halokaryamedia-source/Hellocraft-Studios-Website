---
name: chrome-devtools-validation
description: Support skill for validating Hellocraft in a real Chrome browser through Chrome DevTools MCP. Use for rendered UI inspection, console/runtime debugging, network inspection, browser interaction, layout/responsive proof, and performance tracing. This skill provides browser evidence only; it does not define product meaning, visual direction, package adoption, CI testing strategy, or deployment policy.
---

# Chrome DevTools Validation

Use this support skill when a claim cannot be proven from source/check/build alone and materially depends on a rendered browser.

Typical uses:

- inspect actual page rendering at relevant viewports;
- validate responsive layout and interaction behavior;
- inspect console errors/warnings;
- inspect failed, duplicated, excessive, or unexpectedly large network requests;
- debug browser-side state/events/navigation;
- capture screenshots for visual comparison;
- record performance traces and inspect actionable bottlenecks;
- verify that optimized/static behavior actually reaches the browser as intended.

This is **not** a project-specific specialist and does not consume the one-specialist-per-task budget.

`web-ui-design-development` owns subjective visual craft. `web-accessibility-validation` owns semantic/operability accessibility criteria. This skill supplies browser/runtime evidence for those owners when needed.

## Tool authority

Chrome DevTools MCP is a measurement/debugging interface, not project authority.

```text
current Hellocraft requirement
→ current source/build
→ Chrome-rendered/runtime evidence
→ interpretation by the active development/visual/accessibility owner
```

Do not let a DevTools suggestion silently redefine architecture or visual intent.

## Basic browser workflow

When Chrome DevTools MCP tools are available:

```text
navigate/open target
→ wait for the relevant state
→ inspect page/snapshot
→ reproduce the exact interaction/problem
→ inspect console/network/layout/performance as applicable
→ capture the smallest useful evidence
→ compare against acceptance criteria
```

Use structural snapshots for interaction/debugging when possible; use screenshots when visual appearance itself is being judged.

Refresh/re-snapshot when the DOM changed materially rather than interacting with stale element references.

## Visual and responsive proof

For visual claims:

- inspect the actual rendered page, not only CSS declarations;
- test the viewport sizes that can falsify the current layout claim;
- verify overflow, clipping, stacking, focus visibility, media crops, and readable hierarchy;
- do not assume a desktop screenshot proves mobile behavior;
- human approval remains authoritative for subjective final art direction.

`web-ui-design-development` remains the owner of visual acceptance.

## Runtime and console proof

For behavior claims:

- reproduce the path that triggers the behavior;
- inspect browser console errors/warnings that are relevant to the change;
- distinguish an application error from extension/browser/tool noise;
- do not mark a feature correct only because no console error appears;
- validate the actual user-visible result as well.

## Network proof

Use network inspection when the change may affect loading or integrations.

Check only what matters, for example:

- duplicate requests;
- failed requests/status codes;
- unexpectedly large media/assets;
- unnecessary client-side data fetching for content that should be static/prerendered;
- third-party requests introduced by a dependency/provider;
- cache/loading behavior when production/runtime acceptance requires it.

Network presence alone does not prove business/integration correctness.

## Performance proof

Hellocraft requires strong visuals while remaining lightweight.

Use Chrome DevTools performance tooling on a representative built page when performance is materially claimed.

Evaluate the bottleneck, not only a score:

```text
render-blocking / loading
client JavaScript cost
large or late media
layout instability
long tasks / interaction delay
font loading
unnecessary network work
```

Use current Core Web Vitals guidance as an external experience baseline where applicable. Do not invent permanent bundle/media budgets before representative Hellocraft pages exist.

Lab traces are evidence for the tested environment. Field/CrUX data, when available and applicable to a public URL, is separate evidence and should not be conflated with local lab results.

## Accessibility support

Chrome inspection can help verify:

- keyboard reachability and focus movement;
- DOM/semantic structure;
- visible focus;
- responsive/reflow behavior;
- interactive states.

It does not replace real screen-reader/assistive-technology testing when that level of proof is materially required.

Use `web-accessibility-validation` to interpret accessibility acceptance.

## MCP / privacy boundary

The official Chrome DevTools MCP exposes the controlled browser session to the coding agent. Do not open sensitive personal/account pages or expose secrets merely for debugging.

Project-scoped Codex wiring may use the official package:

```text
chrome-devtools-mcp@latest
```

Keep this as agent/development tooling. Do not add it to Hellocraft application dependencies.

The project configuration opts out of Chrome DevTools MCP usage-statistics collection. Other browser/Chrome telemetry is governed separately by the user's local browser settings.

If the generic project config cannot launch `npx` on a particular Windows Codex environment, follow the current official Chrome DevTools MCP Windows guidance using a user/local environment override rather than hard-coding machine-specific paths into shared project source.

## Relationship to future Playwright

Chrome DevTools validation is best for exploratory/browser proof, debugging, visual inspection, network inspection, and performance investigation.

Do not treat it as a substitute for repeatable CI/E2E regression tests. Add Playwright only when real critical flows earn a recurring automated browser-test responsibility.

## External-source basis

This skill adapts the official `ChromeDevTools/chrome-devtools-mcp` skill and documentation for Hellocraft's evidence model.

## Completion

Browser validation is complete when:

- the exact relevant browser state/path was reproduced;
- the required rendered/runtime/network/performance evidence was actually inspected;
- evidence was interpreted by the correct project owner;
- no source-only or tool-availability claim was mislabeled as browser proof;
- no sensitive browser data was unnecessarily exposed.

Then return to the active development owner and STOP.