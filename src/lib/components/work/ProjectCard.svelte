<script lang="ts">
	import type { ProjectEntry } from '$lib/content/types';
	import ProjectMediaPlaceholder from './ProjectMediaPlaceholder.svelte';

	let {
		project,
		headingLevel = 3,
		index = 1
	}: {
		project: ProjectEntry;
		headingLevel?: 2 | 3;
		index?: number;
	} = $props();

	const projectIndex = $derived(String(index).padStart(2, '0'));
</script>

<article class="project-card">
	<a href={`/work/${project.slug}`}>
		<ProjectMediaPlaceholder index={projectIndex} label={project.featured ? 'Featured project' : 'Project'} />

		<div class="project-card__caption">
			<div class="project-card__meta">
				<span>{projectIndex}</span>
				<span>{project.featured ? 'Featured work' : 'Selected work'}</span>
				{#if project.year}<span>{project.year}</span>{/if}
				{#if project.client}<span>{project.client}</span>{/if}
			</div>

			<div class="project-card__main">
				{#if headingLevel === 2}
					<h2>{project.title}</h2>
				{:else}
					<h3>{project.title}</h3>
				{/if}

				<div class="project-card__description">
					<p>{project.summary}</p>
					<span class="project-card__action">View project <span aria-hidden="true">↗</span></span>
				</div>
			</div>
		</div>
	</a>
</article>

<style>
	.project-card {
		min-width: 0;
		padding-block: clamp(2.5rem, 5vw, 5rem);
		border-top: 1px solid var(--border);
	}

	.project-card a {
		display: grid;
		gap: 1.5rem;
		text-decoration: none;
	}

	.project-card__caption {
		display: grid;
		gap: 1rem;
	}

	.project-card__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.25rem;
		color: var(--text-muted);
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.project-card__main {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: start;
	}

	h2,
	h3 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.5rem, 5.5vw, 5.75rem);
		line-height: 0.9;
	}

	.project-card__description {
		display: grid;
		gap: 1.25rem;
		align-content: start;
	}

	p {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
	}

	.project-card__action {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		width: fit-content;
		padding-bottom: 0.1rem;
		border-bottom: 1px solid currentColor;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.project-card__action span {
		transition: transform var(--motion-fast) ease-out;
	}

	a:hover .project-card__action span,
	a:focus-visible .project-card__action span {
		transform: translate(0.18rem, -0.18rem);
	}

	@media (max-width: 58rem) {
		.project-card__main {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
	}
</style>
