<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import { contentIsDemo } from '$lib/content/demo';
	import { homeCopy, proofItems } from '$lib/content/pages';
	import { featuredProjects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Hellocraft Studios</title>
	<meta name="description" content={homeCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="home-title">
		<div class="shell hero__inner">
			<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
			<h1 id="home-title">{homeCopy.hero.title}</h1>

			<div class="hero__intro">
				<p>{homeCopy.hero.body}</p>
				<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
			</div>

			<ProjectMediaPlaceholder variant="hero" index="01" label="Featured work preview" />
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<header class="section-heading">
				<div>
					<p class="eyebrow">Selected work</p>
					<h2 id="home-work-title">{homeCopy.work.title}</h2>
				</div>
				<p>{homeCopy.work.body}</p>
			</header>

			{#if featuredProjects.length > 0}
				<div class="project-list">
					{#each featuredProjects as project, index (project.slug)}
						<ProjectCard {project} headingLevel={3} index={index + 1} />
					{/each}
				</div>
			{:else}
				<p class="pending-state">{homeCopy.work.emptyState}</p>
			{/if}

			<div class="section-action">
				<a class="text-link" href="/work">{homeCopy.work.viewAllLabel}</a>
			</div>
		</div>
	</section>

	<section class="studio-section" aria-labelledby="home-studio-title">
		<div class="shell studio-section__inner">
			<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
			<div class="studio-section__main">
				<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
				<div>
					<p>{homeCopy.studio.body}</p>
					<a class="text-link" href="/studio">{homeCopy.studio.actionLabel}</a>
				</div>
			</div>
		</div>
	</section>

	<section class="capabilities-section" aria-labelledby="home-capabilities-title">
		<div class="shell capabilities-section__inner">
			<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
			<div class="capabilities-section__main">
				<h2 id="home-capabilities-title">{homeCopy.capabilities.title}</h2>
				<p>{homeCopy.capabilities.body}</p>
			</div>
		</div>
	</section>

	{#if !contentIsDemo && proofItems.length > 0}
		<section class="proof-section" aria-labelledby="home-proof-title">
			<div class="shell proof-section__inner">
				<div>
					<p class="eyebrow">Proof</p>
					<h2 id="home-proof-title">{homeCopy.proof.title}</h2>
				</div>
				<ol class="proof-list">
					{#each proofItems as item (item)}
						<li>{item}</li>
					{/each}
				</ol>
			</div>
		</section>
	{/if}

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell contact-section__inner">
			<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
			<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
			<div class="contact-section__footer">
				<p>{homeCopy.contact.body}</p>
				<a class="text-link" href="/contact">{homeCopy.contact.actionLabel}</a>
			</div>
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
		padding-block: clamp(5rem, 9vw, 9rem) clamp(3.5rem, 7vw, 6rem);
	}

	.hero h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(4.2rem, 10vw, 10rem);
		line-height: 0.84;
	}

	.hero__intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
	}

	.hero__intro p {
		max-width: 36rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.5vw, 1.1rem);
	}

	.work-section,
	.capabilities-section,
	.proof-section {
		padding-block: var(--space-section);
	}

	.section-heading {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.7fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
		margin-bottom: clamp(2rem, 4vw, 4rem);
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.section-heading > div {
		display: grid;
		gap: 0.8rem;
	}

	.section-heading h2,
	.studio-section h2,
	.capabilities-section h2,
	.proof-section h2,
	.contact-section h2 {
		margin: 0;
		font-size: clamp(3rem, 6.5vw, 6.5rem);
		line-height: 0.9;
	}

	.section-heading > p,
	.studio-section__main p,
	.capabilities-section__main > p,
	.contact-section__footer p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.project-list {
		border-bottom: 1px solid var(--border);
	}

	.section-action {
		display: flex;
		justify-content: flex-end;
		padding-top: 2rem;
	}

	.pending-state {
		padding-block: 2rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	.studio-section {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.studio-section__inner {
		display: grid;
		gap: 2rem;
	}

	.studio-section__main,
	.capabilities-section__main {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.studio-section__main > div {
		display: grid;
		gap: 1.5rem;
	}

	.studio-section__main p {
		color: rgb(255 255 255 / 58%);
	}

	.studio-section .text-link {
		color: var(--surface);
	}

	.capabilities-section {
		background: var(--surface);
	}

	.capabilities-section__inner {
		display: grid;
		gap: 2rem;
	}

	.proof-section {
		border-top: 1px solid var(--border);
	}

	.proof-section__inner {
		display: grid;
		grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.proof-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof-list li {
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1.1rem, 2vw, 1.5rem);
		font-weight: 700;
	}

	.contact-section {
		padding-block: var(--space-section);
		background: var(--paper);
		border-top: 1px solid var(--border);
	}

	.contact-section__inner {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.contact-section h2 {
		max-width: 12ch;
		font-size: clamp(3.5rem, 8vw, 8rem);
	}

	.contact-section__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
	}

	@media (max-width: 64rem) {
		.section-heading,
		.studio-section__main,
		.capabilities-section__main,
		.proof-section__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.hero__intro,
		.contact-section__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.hero h1 {
			font-size: clamp(3.4rem, 17vw, 5.5rem);
		}
	}
</style>
