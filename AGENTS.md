# Agent Routing

This repository is the current project memory and development authority for the Hellocraft Studios Website.

## Authority

- `Local` is the working/development authority.
- Current user instruction owns new intent and explicit decisions.
- `docs/foundation/` owns durable project/product meaning.
- Current source plus matching proof will own implemented behavior once implementation exists.
- `docs/knowledge/next-action.md` owns active continuation only.
- `CONTEXT.md` owns compact stable orientation.
- Material GitHub execution follows `GITHUB_RULES.md`.

## Cross-cutting rule

Use the **smallest sufficient path**. Do not add structure, files, architecture, taxonomies, skills, workflows, or implementation merely because a mature website might have them.

Each current responsibility should have one canonical owner. Git history owns ordinary history; do not create `_old`, `_new`, `legacy`, `v2`, backup, or parallel-current owners without a concrete external requirement.

## Task routing

### Observe / recover context

For `amati`, inspect, understand, audit, or context recovery:

```text
AGENTS.md
→ CONTEXT.md
→ docs/knowledge/next-action.md
→ smallest current owner needed
→ report
→ STOP
```

Do not edit or execute the recorded next step unless the user also asks for a change.

### Project Definition

Use `.agents/skills/project-definition/SKILL.md` when project meaning is new, materially incomplete, or being redefined.

```text
current intent + evidence
→ project-definition
→ update affected Foundation owners
→ check definition readiness
→ update CONTEXT only when stable orientation changes
→ update one next-action
→ STOP
```

Do not implement undefined behavior.

### Direct bounded work

A local, already-defined correction may use the shortest path:

```text
exact owner
→ smallest complete change
→ targeted proof
→ reconcile continuation only if changed
→ STOP
```

### Non-trivial Developing

Only after the affected project definition is ready:

```text
AGENTS.md
→ CONTEXT.md
→ docs/knowledge/next-action.md
→ .agents/skills/development-brief/SKILL.md
→ smallest affected Foundation/source/contract set
→ zero or one already-earned matching project specialist
→ implementation
→ matching proof
→ STOP
```

If implementation requires inventing product meaning, return to Project Definition.

## Hellocraft-specific definition guards

Current approved facts:

- Hellocraft Studios is a **game studio focused on Minecraft**.
- The website is an official company profile, portfolio, discoverability/client-acquisition surface, and a way for relevant visitors to understand what Hellocraft provides.
- Primary business audiences include Marketplace publishers/partners, server/platform operators, brands seeking Minecraft experiences, and public/cultural/event clients such as museums, galleries/exhibitions, and festivals.
- Collaboration audiences include Minecraft creators, publishers, agencies, and production partners.
- Recruitment is important; talent categories currently include builders/level-design talent, developers, and 3D art/modeling/texturing/animation talent. Final role titles are not yet fixed.
- General visitors include Minecraft players, creators, and community members.

Do **not** silently convert these into a final page structure, service taxonomy, portfolio taxonomy, homepage layout, or technical architecture.

### Explicit deferred boundary

The project owner will provide the portfolio/project list later.

Until that evidence exists:

- do not invent project entries;
- do not promote old chat/project history into Hellocraft portfolio automatically;
- do not lock categories such as Marketplace, Server, Brand, Event, or Exhibition as final portfolio taxonomy;
- do not make `Game Development`, `Level Design`, `3D Art`, or other internal disciplines into top-level services without evidence that this helps the client-facing structure;
- do not create a Services page by default.

Industry reference websites are evidence for common patterns only. They do not define Hellocraft's content or architecture.

## Persistent-owner gate

Before adding a persistent file/module/layer/skill, ask:

```text
what distinct current responsibility needs an owner?
why can the existing owner not represent it cleanly?
who consumes it now?
what realistic recurring ambiguity/error does it prevent?
```

If no material responsibility is earned, do not create it.

## Specialist budget

Current project-specific specialist count: **zero**.

The repository retains only the generic project-definition, development-brief, and project-skill-planner kernel skills. Do not create website-design, frontend, SEO, CMS, portfolio, testing, or framework specialists just because those topics may later appear.

Use `.agents/skills/project-skill-planner/SKILL.md` only when recurring project-specific semantic judgment is actually proven or genuinely ambiguous.

## Completion

When the requested scope and matching proof are satisfied, **STOP**. Do not automatically continue into the next planning phase, implementation, cleanup, or additional repository machinery.
