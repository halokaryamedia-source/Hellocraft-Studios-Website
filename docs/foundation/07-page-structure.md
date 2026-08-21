# Page Structure

This file defines the current public pages and where their content comes from.

## Public pages

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

The Hellocraft logo links to Home.

Old URLs are kept only as redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Page responsibilities

| Page | Purpose |
|---|---|
| Home `/` | introduce Hellocraft, show featured projects, summarize About information, and lead to Contact |
| Portfolio `/portfolio` | show all approved portfolio projects |
| Project Detail `/portfolio/[slug]` | show one project's description, Hellocraft's role, details, media, and links |
| About `/about` | explain the company, what it does, how it works, and relevant experience |
| Careers `/careers` | show recruitment information and real job openings when available |
| Contact `/contact` | show real public contact information and project inquiry guidance |

Do not add a separate Services, Blog, Team, Clients, Awards, Shop, Login, or Dashboard page unless a real need appears.

## Main content files

```text
src/lib/content/site.ts
→ site name, navigation, public links

src/lib/content/pages.ts
→ Home, Portfolio, About, Careers, Contact, and footer text

src/lib/content/projects.ts
→ portfolio projects

src/lib/content/demo-data.ts
→ temporary experience items and career examples

src/lib/content/demo.ts
→ demo mode switch
```

## Home

Current order:

```text
1. Hero
2. Featured projects
3. About
4. What we do
5. Contact
```

## Portfolio

Current order:

```text
1. Portfolio introduction
2. Main featured project
3. Remaining project list
```

No filters, categories, or search are needed until the real portfolio is large enough to justify them.

## Project Detail

Current sections may include:

```text
project title and summary
project facts when available
project media
our role
project details
project links
return to portfolio
```

A project does not need every optional field.

## About

Current order:

```text
1. About introduction
2. What we do
3. How we work
4. Experience, when confirmed
5. Contact
```

## Careers

Current order:

```text
1. Careers introduction
2. Join our team
3. Open positions
4. How to apply
```

Only real current openings should be public.

## Contact

Current order:

```text
1. Contact introduction
2. Contact information
3. Project inquiries
```

Only real public contact details should be added.

## Demo content

Temporary development content must remain clearly separate from real Hellocraft facts.

While:

```text
contentIsDemo = true
```

the website keeps its development notice and `noindex, nofollow` setting.

## Update rule

When real content arrives, update the content files first. Change page structure only if real content proves that a specific page cannot support what is needed.
