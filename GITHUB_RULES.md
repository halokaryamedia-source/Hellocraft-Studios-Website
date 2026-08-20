# GitHub Rules

Canonical GitHub execution policy for the Hellocraft Studios Website repository.

`AGENTS.md` owns semantic routing and project scope. This file owns branch/ref/write/history/verification discipline.

## Core flow

```text
PIN
→ READ MINIMUM
→ DIAGNOSE
→ TOOL FIT
→ WRITE COHERENTLY
→ VERIFY MINIMUM
→ STOP
```

## 1. PIN

- `Local` is the current working/development authority.
- Never silently fall back to the repository default branch or another ref.
- Before a material mutation, know the intended repo/ref, current HEAD, requested scope, and whether the target is writable.
- Direct branch/file state is current authority; search/history is supporting discovery only.

## 2. READ MINIMUM

After any continuity required by `AGENTS.md`, read only what can change the decision.

```text
owner/source reads   1–3 by default
history reads        0 by default
broad scans          0 by default
```

Open more only for a concrete unresolved question. Partial/truncated results are incomplete evidence, not proof of absence.

## 3. DIAGNOSE THE FIRST WRONG OWNER

```text
project meaning wrong
→ Foundation owner

implementation wrong
→ source owner

test stale
→ test owner

CI/routing wrong
→ workflow/repository owner

derived artifact wrong
→ upstream canonical owner

continuation stale
→ next-action owner
```

Do not change the easiest writable file merely to produce activity. `No change required` is valid.

## 4. TOOL FIT

Use the mutation channel that preserves correctness and history quality.

- one small independent text file → contents-style file mutation may be appropriate;
- one coherent multi-file delivery → use an atomic tree/commit capability or suitable git workspace;
- runtime/visual/browser/deployment claim → use matching runtime proof, not repository inspection alone.

Never full-replace a file from partial context. Never use temporary files/branches/workflows as probes on `Local`.

## 5. WRITE COHERENTLY

Before moving the working ref:

```text
scope final
+ complete intended files ready
+ current HEAD pinned
+ proof boundary known
→ one logical delivery
```

A commit is a logical repository outcome, not a save point or tool call.

Preferred commit form:

```text
<type>(<optional scope>): <concise outcome>
```

Use `docs`, `feat`, `fix`, `refactor`, `test`, `ci`, `build`, `release`, or `chore` according to the primary outcome.

Do not split one coherent change by file, directory, or work order. Git history owns ordinary historical versions; do not add `_old`, `_new`, `legacy`, backup, or `v2` current copies without a real external contract.

## 6. VERIFY MINIMUM

Use the cheapest evidence capable of falsifying the changed claim.

- documentation/definition change → inspect final files and coherence;
- source behavior → matching build/test/runtime proof as applicable;
- visual behavior → visual/browser inspection;
- external current fact → current authoritative evidence.

Do not claim proof that was not obtained, and do not run unrelated verification for ceremony.

## 7. STOP

When the requested outcome and matching proof are satisfied, stop.

Do not automatically continue into the next project phase, implementation, unrelated cleanup, another audit, branch synchronization, or additional repository machinery.

## Default budgets

```text
new files                 0 unless responsibility requires them
new workflows             0 unless required
new project specialists   0 unless earned
logical commits/task      1 by default
push/ref updates/task     1 by default
adjacent cleanup          0
high-impact mutations     0 unless explicitly requested
```

Permission, policy, or capability denial ends that operation unless materially new evidence changes the condition.
