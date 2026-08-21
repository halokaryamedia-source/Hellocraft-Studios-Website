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
			<div class="hero__grid">
				<div>
					<p class="eyebrow">Project / Demo content</p>
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
			<ProjectMediaPlaceholder variant="hero" label="Project media" />
		</div>
	</div>

	{#if project.contribution && project.contribution.length > 0}
		<section class="section contribution" aria-labelledby="project-contribution-title">
			<div class="shell section-grid">
				<div>
					<p class="eyebrow">Contribution</p>
					<h2 id="project-contribution-title">Hellocraft contribution</h2>
				</div>
				<ol class="contribution-list">
					{#each project.contribution as item, index (item)}
						<li><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
					{/each}
				</ol>
			</div>
		</section>
	{/if}

	{#each project.sections ?? [] as section, index (section.id)}
		<section class="section" class:section-dark={index % 2 === 1} aria-labelledby={`section-${section.id}`}>
			<div class="shell section-grid">
				<div>
					<p class="eyebrow">{String(index + 1).padStart(2, '0')} / Detail</p>
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
		<section class="section project-links" aria-labelledby="project-links-title">
			<div class="shell section-grid">
				<h2 id="project-links-title">Project links</h2>
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
	.shell {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.hero {
		background: var(--brand);
	}

	.hero__inner {
		display: grid;
		gap: clamp(3rem, 7vw, 7rem);
		padding-block: clamp(3rem, 8vw, 8rem);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		width: fit-content;
		min-height: 2rem;
		font-weight: 800;
		text-underline-offset: 0.3em;
	}

	.hero__grid,
	.section-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.eyebrow {
		margin: 0 0 0.85rem;
		font-size: 0.72rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(3.5rem, 9vw, 9rem);
		line-height: 0.86;
	}

	.hero__summary {
		display: grid;
		gap: 2rem;
	}

	.hero__summary > p {
		max-width: var(--measure);
		margin: 0;
		font-size: clamp(1.05rem, 2vw, 1.35rem);
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		margin: 0;
		padding-top: 1.25rem;
		border-top: 1px solid rgb(12 13 14 / 28%);
	}

	.facts div {
		display: grid;
		gap: 0.3rem;
	}

	dt {
		font-size: 0.7rem;
		font-weight: 850;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	dd {
		margin: 0;
		font-weight: 800;
	}

	.visual-stage {
		padding-block: clamp(2rem, 5vw, 4rem);
		background: var(--ink);
	}

	.section {
		padding-block: var(--space-section);
		border-bottom: 1px solid var(--border);
	}

	.section-dark {
		background: var(--ink);
		color: var(--surface);
	}

	.section h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.5rem, 6vw, 6rem);
		line-height: 0.9;
	}

	.section-copy {
		display: grid;
		gap: 1.2rem;
		max-width: var(--measure);
	}

	.section-copy p {
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.6vw, 1.15rem);
	}

	.section-dark .section-copy p {
		color: rgb(255 255 255 / 68%);
	}

	.contribution-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.contribution-list li {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr);
		gap: 1rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.contribution-list span {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.contribution-list p {
		margin: 0;
	}

	.project-links ul {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.project-links a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 2.75rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
		font-weight: 800;
		text-underline-offset: 0.3em;
	}

	@media (max-width: 58rem) {
		.hero__grid,
		.section-grid {
			grid-template-columns: 1fr;
		}

		.facts {
			grid-template-columns: 1fr;
		}
	}
</style>
