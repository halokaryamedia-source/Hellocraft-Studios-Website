# Homepage Human Composition Audit

Audit target: current Hellocraft Homepage presentation.

## Status

```text
HOMEPAGE_VISUAL_ACCEPTANCE_FAILED
GENERIC_GENERATIVE_COMPOSITION_DETECTED
CONTROLLED_HOMEPAGE_REBUILD_AUTHORIZED
NO_NEW_PROJECT_SPECIALIST_REQUIRED
TASTE_REDESIGN_REFERENCES_AUDITED
```

## Primary finding

The previous Homepage was technically clean but still read as model-generated because hierarchy was being manufactured mostly through oversized type, repeated section patterns, micro-labels, and placeholder media rather than through believable content relationships.

## Material problems

```text
oversized headline broken into too many lines
+ display-scale headings repeated across nearly every section
+ Inter body / Arial-Helvetica display fallback
+ global balanced wrapping on headings
+ all-caps micro-label/action language
+ mathematically repeated section spacing
+ identical project presentation rhythm
+ visible internal/demo language
+ blank dark media fields carrying too much visual weight
+ secondary sections competing with the hero
```

## Skill routing

Current ownership is sufficient:

```text
development-brief
+
web-ui-design-development
```

The external Taste Skill and redesign-existing-projects skill were re-audited only as reference evidence. They do not earn new project-specialist ownership because their relevant responsibilities already exist inside `web-ui-design-development`.

## Adopted corrections

1. Homepage only is rebuilt first; other routes are not automatically redesigned.
2. Use one dominant display moment, then materially smaller secondary headings.
3. Stop global `text-wrap: balance` for all headings.
4. Replace Inter/Arial-default feel with a system typography audition baseline that prefers Segoe UI Variable on the project owner's Windows environment while keeping safe cross-platform fallbacks.
5. Use sentence-case navigation, labels, and actions by default.
6. Featured Work gets real hierarchy: one primary showcase, then secondary work; not repeated equal project blocks.
7. Studio and capability narrative share one chapter instead of behaving as two separate hero-like sections.
8. Closing CTA is compact and direct.
9. Visible dummy text should read like draft public copy; demo status remains communicated by source comments, demo banner, and noindex guard.
10. Real Hellocraft logo/media remain expected to provide the strongest future differentiation.

## Acceptance for this pass

The next preview should show:

- a hero with a more natural 3–4-line desktop headline shape;
- a clear reduction in repeated oversized typography;
- visibly different hierarchy between primary and secondary portfolio work;
- calmer vertical rhythm;
- no visible internal `Temporary demo copy` language on the Homepage;
- no new decorative gimmick introduced to manufacture uniqueness.

Rendered subjective acceptance still belongs to the project owner.
