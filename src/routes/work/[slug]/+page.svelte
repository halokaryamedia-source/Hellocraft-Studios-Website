<script lang="ts">
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = data.project;
</script>

<svelte:head>
	<title>{project.title} — Hellocraft Studios</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<main id="main-content">
	<section class="hero">
		<div class="shell hero__inner">
			<a class="back-link" href="/work"><span aria-hidden="true">←</span> Work</a>
			<div class="hero__main">
				<div>
					<p class="eyebrow">Project</p>
					<h1>{project.title}</h1>
				</div>
				<div class="hero__summary">
					<p>{project.summary}</p>

					{#if project.year || project.client}
						<dl class="facts">
							{#if project.year}
								<div><dt>Year</dt><dd>{project.year}</dd></div>
							{/if}
							{#if project.client}
								<div><dt>Client / Partner</dt><dd>{project.client}</dd></div>
							{/if}
						</dl>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<div class="visual-stage">
		<div class="shell">
			<ProjectMediaPlaceholder variant="hero" label="Project media" index="01" />
		</div>
	</div>

	{#if project.contribution && project.contribution.length > 0}
		<section class="section contribution" aria-labelledby="project-contribution-title">
			<div class="shell section-grid">
				<div class="section-heading">
					<p class="eyebrow">Contribution</p>
					<h2 id="project-contribution-title">Hellocraft contribution</h2>
				</div>
				<ul class="contribution-list">
					{#each project.contribution as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	{#each project.sections ?? [] as section (section.id)}
		<section class="section detail-section" aria-labelledby={`section-${section.id}`}>
			<div class="shell section-grid">
				<div class="section-heading">
					<p class="eyebrow">Project detail</p>
					<h2 id={`section-${section.id}`}>{section.title}</h2>
				</div>
				<div class="section-copy">
					{#each section.body as paragraph, paragraphIndex (`${section.id}-${paragraphIndex}`)}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</section>
	{/each}

	{#if project.links && project.links.length > 0}
		<section class="project-links" aria-labelledby="project-links-title">
			<div class="shell section-grid">
				<div class="section-heading">
					<p class="eyebrow">Explore</p>
					<h2 id="project-links-title">Project links</h2>
				</div>
				<ul>
					{#each project.links as link (link.href)}
						<li><a href={link.href} rel={link.external ? 'noreferrer' : undefined}>{link.label}<span aria-hidden="true">↗</span></a></li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}
</main>

<style>
	.hero {
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2.5rem, 6vw, 5rem);
		padding-block: clamp(3rem, 6vw, 5rem) clamp(5rem, 9vw, 9rem);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		width: fit-content;
		min-height: 2.75rem;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.hero__main,
	.section-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.hero__main > div:first-child {
		display: grid;
		gap: 0.8rem;
	}

	h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(4rem, 9vw, 9rem);
		line-height: 0.84;
	}

	.hero__summary {
		display: grid;
		gap: 2rem;
		align-content: end;
	}

	.hero__summary > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		margin: 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
	}

	.facts div {
		display: grid;
		gap: 0.3rem;
	}

	dt {
		color: var(--text-muted);
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	dd {
		margin: 0;
		font-weight: 800;
	}

	.visual-stage {
		padding-block: clamp(2rem, 4vw, 4rem);
		background: var(--paper);
	}

	.section {
		padding-block: var(--space-section);
		border-top: 1px solid var(--border);
		background: var(--surface);
	}

	.detail-section:nth-of-type(even) {
		background: var(--paper);
	}

	.section-heading {
		display: grid;
		gap: 0.8rem;
	}

	.section h2,
	.project-links h2 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.75rem, 6vw, 6rem);
		line-height: 0.9;
	}

	.section-copy {
		display: grid;
		gap: 1.25rem;
		max-width: var(--measure);
	}

	.section-copy p {
		margin: 0;
		color: var(--text-muted);
	}

	.contribution-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.contribution-list li {
		padding-block: 1.2rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1rem, 1.6vw, 1.18rem);
	}

	.project-links {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.project-links ul {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--inverse-border);
		list-style: none;
	}

	.project-links a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--inverse-border);
		color: var(--surface);
		font-weight: 800;
		text-decoration: none;
	}

	@media (max-width: 60rem) {
		.hero__main,
		.section-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 44rem) {
		.facts {
			grid-template-columns: 1fr;
		}
	}
</style>
