<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import { workCopy } from '$lib/content/pages';
	import { projects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Work — Hellocraft Studios</title>
	<meta name="description" content={workCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="work-title">
		<div class="shell hero__inner">
			<p class="eyebrow">{workCopy.hero.eyebrow}</p>
			<h1 id="work-title">{workCopy.hero.title}</h1>
			<div class="hero__intro">
				<p>{workCopy.hero.body}</p>
				<span class="count">{projects.length} projects</span>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell">
			{#if projects.length > 0}
				<div class="project-list">
					{#each projects as project (project.slug)}
						<ProjectCard {project} headingLevel={2} />
					{/each}
				</div>
			{:else}
				<p class="pending-state">{workCopy.emptyState}</p>
			{/if}
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(1.75rem, 4vw, 3.5rem);
		padding-block: clamp(5rem, 9vw, 8rem);
	}

	h1 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(3.8rem, 7vw, 7.2rem);
		line-height: 0.93;
	}

	.hero__intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
	}

	.hero__intro > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.count {
		color: var(--text-muted);
		font-size: 0.86rem;
		font-weight: 600;
	}

	.projects {
		padding-block: clamp(2rem, 4vw, 4rem) var(--space-section);
		background: var(--surface);
	}

	.pending-state {
		padding-block: 3rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (max-width: 46rem) {
		.hero__intro {
			grid-template-columns: 1fr;
			align-items: start;
		}

		h1 {
			font-size: clamp(3.1rem, 14vw, 4.7rem);
		}
	}
</style>
