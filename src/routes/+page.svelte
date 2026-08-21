<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
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
			<div class="hero__topline">
				<span class="section-index">01 / 05</span>
				<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
			</div>

			<h1 id="home-title">{homeCopy.hero.title}</h1>

			<div class="hero__footer">
				<p>{homeCopy.hero.body}</p>
				<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
			</div>

			<ProjectMediaPlaceholder variant="hero" index="HC" label="Featured work preview" />
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<header class="section-heading">
				<div class="section-heading__meta">
					<span class="section-index">02 / 05</span>
					<p class="eyebrow">Work</p>
				</div>
				<div class="section-heading__copy">
					<h2 id="home-work-title">{homeCopy.work.title}</h2>
					<p>{homeCopy.work.body}</p>
				</div>
			</header>

			{#if featuredProjects.length > 0}
				<div class="project-list">
					{#each featuredProjects as project, index (project.slug)}
						<ProjectCard
							{project}
							headingLevel={3}
							index={index + 1}
							reverse={index % 2 === 1}
						/>
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
			<div class="studio-section__meta">
				<span class="section-index">03 / 05</span>
				<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
			</div>

			<div class="studio-section__main">
				<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
				<div class="studio-section__body">
					<p>{homeCopy.studio.body}</p>
					<a class="text-link" href="/studio">{homeCopy.studio.actionLabel}</a>
				</div>
			</div>
		</div>
	</section>

	<section class="capabilities-section" aria-labelledby="home-capabilities-title">
		<div class="shell capabilities-section__inner">
			<div class="capabilities-section__meta">
				<span class="section-index">04 / 05</span>
				<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
			</div>
			<h2 id="home-capabilities-title">{homeCopy.capabilities.title}</h2>
			<p>{homeCopy.capabilities.body}</p>
		</div>
	</section>

	{#if proofItems.length > 0}
		<section class="proof-section" aria-labelledby="home-proof-title">
			<div class="shell proof-section__inner">
				<div class="proof-section__heading">
					<p class="eyebrow">Proof</p>
					<h2 id="home-proof-title">{homeCopy.proof.title}</h2>
				</div>

				<ol class="proof-list">
					{#each proofItems as item, index (item)}
						<li>
							<span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
							<p>{item}</p>
						</li>
					{/each}
				</ol>
			</div>
		</section>
	{/if}

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell contact-section__inner">
			<div class="contact-section__meta">
				<span class="section-index">05 / 05</span>
				<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
			</div>
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
		background: var(--ink);
		color: var(--surface);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2.25rem, 5vw, 5rem);
		padding-block: clamp(4rem, 8vw, 8rem) clamp(3rem, 6vw, 5rem);
	}

	.hero__topline,
	.section-heading__meta,
	.studio-section__meta,
	.capabilities-section__meta,
	.contact-section__meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.hero__topline .eyebrow {
		color: rgb(255 255 255 / 62%);
	}

	.hero h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(4.5rem, 11vw, 12rem);
		line-height: 0.78;
	}

	.hero__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
	}

	.hero__footer p {
		max-width: 37rem;
		margin: 0;
		color: rgb(255 255 255 / 62%);
		font-size: clamp(1rem, 1.5vw, 1.12rem);
	}

	.hero .text-link {
		color: var(--surface);
	}

	.work-section,
	.studio-section,
	.proof-section {
		padding-block: var(--space-section);
	}

	.section-heading {
		display: grid;
		grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1.65fr);
		gap: clamp(2rem, 7vw, 7rem);
		margin-bottom: clamp(2rem, 4vw, 4rem);
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.section-heading__copy {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.7fr);
		gap: clamp(2rem, 6vw, 6rem);
		align-items: end;
	}

	.section-heading h2,
	.studio-section h2,
	.capabilities-section h2,
	.proof-section h2,
	.contact-section h2 {
		margin: 0;
		font-size: clamp(3rem, 7vw, 7.5rem);
		line-height: 0.84;
	}

	.section-heading__copy p,
	.studio-section__body p,
	.capabilities-section__inner > p,
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
		background: var(--surface);
	}

	.studio-section__inner {
		display: grid;
		gap: clamp(2.5rem, 6vw, 6rem);
	}

	.studio-section__main {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.7fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: end;
	}

	.studio-section__body {
		display: grid;
		gap: 1.5rem;
	}

	.capabilities-section {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.capabilities-section__inner {
		display: grid;
		grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1.15fr) minmax(18rem, 0.7fr);
		gap: clamp(2rem, 6vw, 6rem);
		align-items: start;
	}

	.capabilities-section__inner > p {
		color: rgb(255 255 255 / 60%);
	}

	.proof-section__inner {
		display: grid;
		grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.proof-section__heading {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.proof-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof-list li {
		display: grid;
		grid-template-columns: 3.5rem minmax(0, 1fr);
		gap: 1.25rem;
		padding-block: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.proof-list span {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.proof-list p {
		margin: 0;
		font-size: clamp(1.15rem, 2.2vw, 1.7rem);
		font-weight: 700;
	}

	.contact-section {
		padding-block: var(--space-section);
		border-top: 4px solid var(--brand);
		background: var(--ink);
		color: var(--surface);
	}

	.contact-section__inner {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.contact-section h2 {
		max-width: 12ch;
		font-size: clamp(4rem, 10vw, 10.5rem);
	}

	.contact-section__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
	}

	.contact-section__footer p {
		color: rgb(255 255 255 / 58%);
	}

	.contact-section .text-link {
		color: var(--surface);
	}

	@media (max-width: 64rem) {
		.section-heading,
		.capabilities-section__inner,
		.proof-section__inner {
			grid-template-columns: 1fr;
		}

		.section-heading__copy,
		.studio-section__main {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.hero__footer,
		.contact-section__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.hero h1 {
			font-size: clamp(3.7rem, 19vw, 6rem);
		}
	}
</style>
