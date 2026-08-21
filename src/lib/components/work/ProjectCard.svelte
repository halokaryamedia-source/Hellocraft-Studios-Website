<script lang="ts">
	import type { ProjectEntry } from '$lib/content/types';
	import ProjectMediaPlaceholder from './ProjectMediaPlaceholder.svelte';

	let {
		project,
		headingLevel = 3,
		index = 1,
		reverse = false
	}: {
		project: ProjectEntry;
		headingLevel?: 2 | 3;
		index?: number;
		reverse?: boolean;
	} = $props();

	const projectIndex = $derived(String(index).padStart(2, '0'));
</script>

<article class="project-card" class:project-card--reverse={reverse}>
	<a href={`/work/${project.slug}`}>
		<div class="project-card__media">
			<ProjectMediaPlaceholder index={projectIndex} label={project.featured ? 'Featured project' : 'Project'} />
		</div>

		<div class="project-card__copy">
			<div class="project-card__index" aria-hidden="true">{projectIndex}</div>

			<div class="project-card__meta">
				<span>{project.featured ? 'Featured work' : 'Selected work'}</span>
				{#if project.year}<span>{project.year}</span>{/if}
				{#if project.client}<span>{project.client}</span>{/if}
			</div>

			{#if headingLevel === 2}
				<h2>{project.title}</h2>
			{:else}
				<h3>{project.title}</h3>
			{/if}

			<p>{project.summary}</p>
			<span class="project-card__action">View project <span aria-hidden="true">↗</span></span>
		</div>
	</a>
</article>

<style>
	.project-card {
		position: relative;
		min-width: 0;
		border-top: 1px solid var(--border);
	}

	.project-card a {
		display: grid;
		grid-template-columns: minmax(0, 1.62fr) minmax(15rem, 0.58fr);
		gap: clamp(2rem, 6vw, 6.5rem);
		align-items: center;
		padding-block: clamp(2.5rem, 5vw, 5.5rem);
		text-decoration: none;
	}

	.project-card--reverse a {
		grid-template-columns: minmax(15rem, 0.58fr) minmax(0, 1.62fr);
	}

	.project-card--reverse .project-card__media {
		order: 2;
	}

	.project-card--reverse .project-card__copy {
		order: 1;
	}

	.project-card__copy {
		position: relative;
		display: grid;
		align-content: start;
		gap: 1rem;
		min-width: 0;
		padding-block: clamp(1rem, 3vw, 2rem);
	}

	.project-card__index {
		position: absolute;
		top: -0.2em;
		right: 0;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(5rem, 9vw, 9rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.75;
		color: rgb(9 10 12 / 5%);
		pointer-events: none;
	}

	.project-card__meta {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.25rem;
		padding-top: 0.8rem;
		border-top: 3px solid var(--brand);
		color: var(--text-muted);
		font-size: 0.66rem;
		font-weight: 850;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	h2,
	h3 {
		position: relative;
		z-index: 1;
		max-width: 10.5ch;
		margin: 0;
		font-size: clamp(2.5rem, 5.3vw, 5.9rem);
		line-height: 0.86;
	}

	p {
		position: relative;
		z-index: 1;
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(0.98rem, 1.4vw, 1.06rem);
	}

	.project-card__action {
		position: relative;
		z-index: 1;
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		width: fit-content;
		margin-top: 0.65rem;
		padding-bottom: 0.15rem;
		border-bottom: 1px solid currentColor;
		font-size: 0.75rem;
		font-weight: 850;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.project-card__action span {
		transition: transform var(--motion-fast) ease-out;
	}

	a:hover .project-card__action span,
	a:focus-visible .project-card__action span {
		transform: translate(0.2rem, -0.2rem);
	}

	@media (max-width: 62rem) {
		.project-card a,
		.project-card--reverse a {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}

		.project-card--reverse .project-card__media,
		.project-card--reverse .project-card__copy {
			order: initial;
		}

		.project-card__copy {
			padding-top: 0.25rem;
		}
	}
</style>
