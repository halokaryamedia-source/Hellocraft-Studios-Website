<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import { homeCopy, proofItems } from '$lib/content/pages';
	import { featuredProjects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Hellocraft Studios</title>
	<meta name="description" content={homeCopy.hero.body} />
</svelte:head>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="home-title">
		<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
		<h1 id="home-title">{homeCopy.hero.title}</h1>
		<p class="lead">{homeCopy.hero.body}</p>
		<a class="text-action" href="/work">{homeCopy.hero.primaryActionLabel}</a>
	</section>

	<section class="section" aria-labelledby="home-work-title">
		<div class="section-heading">
			<h2 id="home-work-title">{homeCopy.work.title}</h2>
			<p>{homeCopy.work.body}</p>
		</div>

		{#if featuredProjects.length > 0}
			<div class="project-grid">
				{#each featuredProjects as project (project.slug)}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<p class="placeholder">{homeCopy.work.emptyState}</p>
		{/if}

		<a class="text-action" href="/work">{homeCopy.work.viewAllLabel}</a>
	</section>

	<section class="section split" aria-labelledby="home-studio-title">
		<div>
			<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
			<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
		</div>
		<div>
			<p>{homeCopy.studio.body}</p>
			<a class="text-action" href="/studio">{homeCopy.studio.actionLabel}</a>
		</div>
	</section>

	<section class="section split" aria-labelledby="home-capabilities-title">
		<div>
			<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
			<h2 id="home-capabilities-title">{homeCopy.capabilities.title}</h2>
		</div>
		<p>{homeCopy.capabilities.body}</p>
	</section>

	{#if proofItems.length > 0}
		<section class="section" aria-labelledby="home-proof-title">
			<h2 id="home-proof-title">{homeCopy.proof.title}</h2>
			<ul class="proof-list">
				{#each proofItems as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>
	{/if}

	<section class="section contact-block" aria-labelledby="home-contact-title">
		<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
		<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
		<p>{homeCopy.contact.body}</p>
		<a class="text-action" href="/contact">{homeCopy.contact.actionLabel}</a>
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
		gap: 1.25rem;
		min-height: 65svh;
		align-content: center;
	}

	.hero h1 {
		max-width: 14ch;
		font-size: clamp(2.75rem, 9vw, 7rem);
		line-height: 0.95;
	}

	.lead,
	.section-heading p,
	.split > p,
	.split > div:last-child,
	.contact-block > p {
		max-width: var(--measure);
	}

	.section-heading {
		display: grid;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
		margin-bottom: 2rem;
	}

	.split {
		display: grid;
		gap: 1.5rem;
	}

	.proof-list {
		display: grid;
		gap: 0.75rem;
		padding-left: 1.25rem;
	}

	.contact-block {
		display: grid;
		gap: 1rem;
	}

	.eyebrow,
	h1,
	h2,
	p {
		margin: 0;
	}

	.text-action {
		width: fit-content;
		font-weight: 700;
		text-underline-offset: 0.2em;
	}

	.placeholder {
		font-family: monospace;
	}

	@media (min-width: 48rem) {
		.split {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
			align-items: start;
		}
	}
</style>
