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
				<span class="count">{String(projects.length).padStart(2, '0')} projects</span>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell">
			{#if projects.length > 0}
				<div class="project-list">
					{#each projects as project, index (project.slug)}
						<ProjectCard {project} headingLevel={2} index={index + 1} />
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
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(4.5rem, 11vw, 11rem);
		line-height: 0.82;
	}

	.hero__intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
	}

	.hero__intro > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.count {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.projects {
		padding-block: clamp(2rem, 5vw, 5rem) var(--space-section);
	}

	.project-list {
		border-bottom: 1px solid var(--border);
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
			font-size: clamp(3.8rem, 19vw, 6rem);
		}
	}
</style>
