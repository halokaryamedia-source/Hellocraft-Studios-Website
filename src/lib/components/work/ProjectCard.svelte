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
			<div class="project-card__index">{projectIndex}</div>

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
		min-width: 0;
		border-top: 1px solid var(--border);
	}

	.project-card a {
		display: grid;
		grid-template-columns: minmax(0, 1.55fr) minmax(16rem, 0.65fr);
		gap: clamp(2rem, 6vw, 6rem);
		align-items: center;
		padding-block: clamp(2rem, 5vw, 5rem);
		text-decoration: none;
	}

	.project-card--reverse .project-card__media {
		order: 2;
	}

	.project-card--reverse .project-card__copy {
		order: 1;
	}

	.project-card__copy {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.project-card__index {
		color: var(--brand-strong);
		font-size: 0.72rem;
		font-weight: 900;
		letter-spacing: 0.12em;
	}

	.project-card__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.25rem;
		color: var(--text-muted);
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h2,
	h3 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.35rem, 5vw, 5.6rem);
		line-height: 0.88;
	}

	p {
		max-width: 34rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(0.98rem, 1.5vw, 1.08rem);
	}

	.project-card__action {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		width: fit-content;
		margin-top: 0.5rem;
		padding-bottom: 0.15rem;
		border-bottom: 1px solid currentColor;
		font-size: 0.78rem;
		font-weight: 850;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.project-card__action span {
		transition: transform var(--motion-fast) ease-out;
	}

	a:hover .project-card__action span,
	a:focus-visible .project-card__action span {
		transform: translate(0.2rem, -0.2rem);
	}

	@media (max-width: 58rem) {
		.project-card a {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.project-card--reverse .project-card__media,
		.project-card--reverse .project-card__copy {
			order: initial;
		}
	}
</style>
