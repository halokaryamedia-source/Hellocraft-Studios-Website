# Content Intake Contract

Operational intake/audit contract for authoritative Hellocraft website content.

This file exists so every supplied project/studio item is recorded and auditable **even when it is not eventually published**. It prepares later content work without inventing portfolio taxonomy, page architecture, or marketing copy.

## Status

```text
CONTENT_INTAKE_CONTRACT_READY
PORTFOLIO_PROJECT_INTAKE_READY
STUDIO_ABOUT_INTAKE_READY
FULL_SOURCE_AUDIT_REQUIRED
NO_CONTENT_INVENTION
```

## Core rule

Every supplied item must be recorded before editorial selection.

```text
received
→ logged
→ source identified
→ duplicate/relationship checked
→ facts extracted
→ evidence status assigned
→ publication status assigned
→ unknowns recorded
→ later use decision
```

`not used` does **not** mean `not recorded`.

Do not discard an item from the audit trail simply because it is weak, duplicated, private, irrelevant to the final website, or superseded by a better source.

## Separate status dimensions

Do not overload one label to mean evidence, permission, and editorial use at the same time.

### Evidence status

```text
VERIFIED
→ supported by an authoritative/direct source

PARTIALLY_VERIFIED
→ some material facts supported; others remain unresolved

UNVERIFIED
→ supplied claim exists but supporting evidence has not been established

CONFLICTING
→ credible supplied sources disagree and require resolution
```

### Publication status

```text
PUBLIC_APPROVED
→ safe/authorized to publish based on current evidence

PUBLIC_PENDING
→ potentially publishable but permission/attribution/detail still unresolved

INTERNAL_ONLY
→ useful project knowledge but not for public website use

PUBLIC_UNKNOWN
→ publication status has not been established
```

### Editorial/use status

```text
CANDIDATE
→ potentially useful; not yet selected

ADOPTED
→ selected for a defined website responsibility

DEFERRED
→ valid but not useful for the current phase/surface

REJECTED
→ deliberately not used; reason must remain recorded
```

These dimensions may coexist. Example: an item may be `VERIFIED + INTERNAL_ONLY + DEFERRED`.

## Source record

Every input/source should retain enough provenance to recover what it was.

Minimum fields when applicable:

```text
source_id
received_date
source_type
original_name_or_title
original_filename_or_url
provided_by / origin
related_project_or_subject if known
file hash / duplicate relationship when practical
notes
```

For files, preserve original filenames in the audit record even if final production assets are later renamed.

When exact duplicates exist, record the duplicate relationship rather than pretending each copy is independent evidence.

## Portfolio / Project Evidence Intake

Do **not** require every field to be filled. Unknown is preferable to invention.

### A. Identity

```text
working project name
official/public project name if different
alternate/internal names if relevant
date/year/time range if known
current public URL/store/event/source link if applicable
```

Do not turn working/internal names into public names without confirmation.

### B. Client / partner / context

```text
client
publisher
partner
platform
brand/event/institution context
public attribution status
```

Record only relationships supported by supplied evidence. Do not infer that a visible logo automatically means client, publisher, partner, or ownership.

### C. Hellocraft contribution

Capture what Hellocraft actually did, in concrete terms.

Potential fact fields may include:

```text
overall role
level design / building contribution
game development contribution
3D/modeling/texturing/animation contribution
technical/system contribution
creative/art direction contribution
production/QA contribution
other real contribution
```

These are fact-capture fields, **not final website service categories**.

Do not inflate partial contribution into ownership of the whole project.

### D. Deliverable / experience description

Record the source-supported description of what was made:

```text
experience/output
platform/version when relevant
single/multiplayer facts
map/world/gameplay format
public/event/marketplace/server context
```

Keep this descriptive. Do not force projects into a permanent taxonomy during intake.

### E. Evidence and outcomes

Potential evidence:

```text
release/publication proof
client/publisher attribution
store/listing/event page
screenshots/video
project files/docs
approved testimonial
award/recognition
usage/download/player/event metrics
completion/result evidence
```

For every metric/result capture:

```text
value
unit
period/date
source
scope
whether public use is permitted
```

Never publish a number from memory or an uncited estimate as a verified result.

### F. Media inventory

For each useful media item record when practical:

```text
asset/source id
filename
media type
resolution/duration
what it depicts
project relationship
original vs derived/edit
public-use status
credit/copyright/attribution requirement
quality notes
focal-point/crop notes only when actually known
```

Do not choose final card ratios/crops during intake.

### G. Credits / people

Record credits only when relevant and supported.

Do not expose personal names, client contacts, private contributor details, or employment relationships publicly without an appropriate publication basis.

### H. Unknowns / conflicts

Every project record should explicitly capture unresolved questions such as:

```text
client relationship unclear
release date inconsistent
role attribution unclear
permission unknown
metric source missing
media ownership unclear
project naming conflict
```

Unknowns are first-class data, not something to silently fill with plausible text.

### I. Later editorial decision

Only after the authoritative inventory exists should we decide whether an item becomes:

```text
full case study
compact project page
listing/showcase item
credibility evidence only
internal/deferred
not published
```

Intake does not decide this in advance.

## Studio / About Facts Intake

The Studio/About intake records company facts, not marketing prose.

### A. Identity

Potential fields:

```text
official studio/company name
approved short positioning
founding/start year if authoritative
legal/company identity if useful/public
location/base if public and useful
official website/domain when fixed
```

Do not invent a founding year, legal form, office, or location from informal context.

### B. What the studio actually does

Capture concrete recurring responsibilities/capabilities with supporting project/company evidence.

Do not automatically convert internal discipline names into top-level website services.

Useful raw facts may include:

```text
game development
level design / building
3D modeling
texturing
animation
creative/production responsibilities
QA/testing responsibilities
other recurring work
```

Final client-facing taxonomy remains a later synthesis from real evidence.

### C. Team / operating facts

Potential fields only when authoritative and publication-appropriate:

```text
team size / range
team structure
disciplines
leadership/founders
locations/timezones
collaboration model
```

Do not expose internal staff information merely because it appears in operational project notes.

### D. Clients / partners / credibility

For every possible credibility item record:

```text
name
relationship type
supporting evidence
public logo/name permission if known
related projects
public-use status
```

Do not manufacture a logo wall from companies merely mentioned in project history.

### E. Results / scale / recognition

Potential items:

```text
projects shipped
players/downloads
marketplace performance
awards
press/features
event/exhibition use
testimonials
other measurable proof
```

Each requires source, scope, period, and publication status.

### F. Contact / careers facts

Record actual public channels when supplied:

```text
business email/contact route
collaboration route
career/application route
social profiles
community/support channels
```

Do not merge different intents into one channel before the real workflow is known.

### G. Brand assets

Record authoritative brand sources when supplied:

```text
full logo
symbol/mark
monochrome/inverse versions
SVG/vector source
brand colors
font/typography guidance
usage/clear-space rules
```

A raster screenshot/reference remains evidence but should not silently become the master brand source.

## Suggested record shape

Use a compact record per source/item rather than one giant prose document.

Example structure:

```text
ID:
Subject:
Source(s):

Evidence status:
Publication status:
Editorial status:

Verified facts:
- ...

Unverified / conflicting claims:
- ...

Media / attachments:
- ...

Unknowns:
- ...

Notes / later decision:
- ...
```

Do not fill empty fields with guessed placeholder content.

## Intake workflow

### 1. Receive

Preserve the supplied material and its provenance.

### 2. Inventory

List every item before selecting favorites.

### 3. Deduplicate / relate

Identify exact duplicates, alternate exports, revisions, and sources describing the same fact.

### 4. Extract facts

Separate direct facts from interpretation.

### 5. Verify

Prefer direct/authoritative evidence. Record conflicts instead of smoothing them over.

### 6. Check publication boundary

A true fact is not automatically safe/authorized to publish.

### 7. Curate later

Only after the inventory is sufficiently complete should Project Definition decide taxonomy, IA, case-study depth, and public content priorities.

## Audit requirements

A later audit should be able to answer:

- What did the project owner provide?
- Which source supports each public fact?
- What was duplicated?
- What remains uncertain?
- What is private/internal?
- What was deliberately rejected or deferred, and why?
- Which media may legally/appropriately be shown?
- Which facts are strong enough for credibility/structured data/SEO use?

If the system cannot answer those questions, the content intake is incomplete.

## Relationship to future skills

`portfolio-content-production` remains blocked until real authoritative project evidence exists and repeated content-production responsibility is demonstrated.

This intake contract does not itself justify a new project specialist.

Normal intake/audit work remains under Project Definition / development coordination until a recurring specialist boundary is genuinely earned.

## Current project boundary

No current Hellocraft project names, client relationships, metrics, team facts, company dates, or services are created by this file.

The project owner will supply authoritative project/studio content later. At that point, use this contract to capture **all** supplied material before making public-site selections.
