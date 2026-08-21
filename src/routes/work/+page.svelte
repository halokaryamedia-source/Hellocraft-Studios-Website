<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import { workCopy } from '$lib/content/pages';
	import { projects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Work — Hellocraft Studios</title>
	<meta name="description" content={workCopy.hero.body} />
</svelte:head>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="work-title">
		<p class="eyebrow">{workCopy.hero.eyebrow}</p>
		<h1 id="work-title">{workCopy.hero.title}</h1>
		<p>{workCopy.hero.body}</p>
	</section>

	<section class="section" aria-label="Projects">
		{#if projects.length > 0}
			<div class="project-grid">
				{#each projects as project (project.slug)}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<p class="placeholder">{workCopy.emptyState}</p>
		{/if}
	</section>
</main>

<style>
	.page {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.hero,
	.section {
		padding-block: var(--space-section);
	}

	.hero {
		display: grid;
		gap: 1rem;
	}

	.hero p:last-child {
		max-width: var(--measure);
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.eyebrow,
	h1,
	p {
		margin: 0;
	}

	.placeholder {
		font-family: monospace;
	}
</style>
