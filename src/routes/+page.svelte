<script lang="ts">
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import { homeCopy } from '$lib/content/pages';
	import { featuredProjects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Hellocraft Studios</title>
	<meta name="description" content={homeCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="home-title">
		<div class="shell hero__inner">
			<div class="hero__grid">
				<div class="hero__heading">
					<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
					<h1 id="home-title">{homeCopy.hero.title}</h1>
				</div>

				<div class="hero__intro">
					<p>{homeCopy.hero.body}</p>
					<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
				</div>
			</div>

			<ProjectMediaPlaceholder variant="hero" tone="brand" />
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<header class="work-heading">
				<h2 id="home-work-title">{homeCopy.work.title}</h2>
				<div class="work-heading__aside">
					<p>{homeCopy.work.body}</p>
					<a class="text-link" href="/work">{homeCopy.work.viewAllLabel}</a>
				</div>
			</header>

			{#if featuredProjects[0]}
				{@const project = featuredProjects[0]}
				<article class="featured-project">
					<a href={`/work/${project.slug}`}>
						<ProjectMediaPlaceholder tone="dark" />
						<div class="featured-project__caption">
							<h3>{project.title}</h3>
							<div class="project-description">
								<p>{project.summary}</p>
								<span>View project</span>
							</div>
						</div>
					</a>
				</article>
			{/if}

			{#if featuredProjects[1]}
				{@const project = featuredProjects[1]}
				<article class="secondary-project">
					<a href={`/work/${project.slug}`}>
						<ProjectMediaPlaceholder tone="neutral" />
						<div class="secondary-project__caption">
							<h3>{project.title}</h3>
							<p>{project.summary}</p>
							<span>View project</span>
						</div>
					</a>
				</article>
			{/if}
		</div>
	</section>

	<section class="studio-section" aria-labelledby="home-studio-title">
		<div class="shell studio-grid">
			<div class="studio-heading">
				<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
				<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
			</div>

			<div class="studio-copy">
				<p class="studio-intro">{homeCopy.studio.body}</p>

				<div class="capability-note">
					<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
					<h3>{homeCopy.capabilities.title}</h3>
					<p>{homeCopy.capabilities.body}</p>
				</div>

				<a class="text-link" href="/studio">{homeCopy.studio.actionLabel}</a>
			</div>
		</div>
	</section>

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell contact-grid">
			<div class="contact-heading">
				<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
				<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
			</div>
			<div class="contact-copy">
				<p>{homeCopy.contact.body}</p>
				<a class="text-link" href="/contact">{homeCopy.contact.actionLabel}</a>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(3rem, 6vw, 5rem);
		padding-block: clamp(5rem, 9vw, 8rem) clamp(4rem, 7vw, 6rem);
	}

	.hero__grid {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
	}

	.hero__heading {
		display: grid;
		gap: 1rem;
	}

	.hero h1 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(4rem, 7vw, 7.2rem);
		font-weight: 700;
		line-height: 0.92;
	}

	.hero__intro {
		display: grid;
		gap: 1.4rem;
		align-content: end;
		padding-bottom: 0.35rem;
	}

	.hero__intro p {
		max-width: 31rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.02rem, 1.4vw, 1.15rem);
	}

	.work-section {
		padding-block: clamp(5.5rem, 9vw, 9rem);
		background: var(--surface);
	}

	.work-heading {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		align-items: end;
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}

	.work-heading__aside {
		display: grid;
		gap: 0.8rem;
		justify-items: start;
	}

	.work-heading__aside > p {
		max-width: 31rem;
		margin: 0;
		color: var(--text-muted);
	}

	.work-heading h2 {
		margin: 0;
		font-size: clamp(2.8rem, 5vw, 4.8rem);
		line-height: 0.96;
	}

	.featured-project a,
	.secondary-project a {
		text-decoration: none;
	}

	.featured-project a {
		display: grid;
		gap: 1.65rem;
	}

	.featured-project {
		padding-bottom: clamp(4.5rem, 8vw, 7rem);
	}

	.featured-project__caption {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: start;
	}

	.featured-project h3 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.8rem, 5vw, 5rem);
		line-height: 0.95;
	}

	.project-description,
	.secondary-project__caption {
		display: grid;
		gap: 1.1rem;
		align-content: start;
	}

	.project-description p,
	.secondary-project__caption p {
		max-width: 31rem;
		margin: 0;
		color: var(--text-muted);
	}

	.project-description span,
	.secondary-project__caption span {
		width: fit-content;
		font-size: 0.9rem;
		font-weight: 650;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.28em;
	}

	.secondary-project {
		padding-top: clamp(4.5rem, 8vw, 7rem);
		border-top: 1px solid var(--border);
	}

	.secondary-project a {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: start;
	}

	.secondary-project h3 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.1rem, 3.8vw, 3.5rem);
		line-height: 0.98;
	}

	.studio-section {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
		background: var(--surface-secondary);
	}

	.studio-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: start;
	}

	.studio-heading {
		display: grid;
		gap: 1rem;
	}

	.studio-heading h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.8rem, 5vw, 4.8rem);
		line-height: 0.97;
	}

	.studio-copy {
		display: grid;
		gap: 2.4rem;
		padding-top: 0.2rem;
	}

	.studio-intro,
	.capability-note > p:last-child,
	.contact-copy p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.capability-note {
		display: grid;
		gap: 0.75rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}

	.capability-note h3 {
		max-width: 18ch;
		margin: 0;
		font-size: clamp(1.6rem, 2.6vw, 2.3rem);
		font-weight: 650;
		line-height: 1.08;
	}

	.contact-section {
		padding-block: clamp(5rem, 8vw, 7rem);
		background: var(--paper);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		align-items: end;
		padding-top: clamp(2rem, 4vw, 3.5rem);
		border-top: 1px solid var(--border);
	}

	.contact-heading {
		display: grid;
		gap: 0.8rem;
	}

	.contact-heading h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.6rem, 4.8vw, 4.4rem);
		line-height: 0.98;
	}

	.contact-copy {
		display: grid;
		gap: 1.4rem;
		justify-items: start;
	}

	@media (max-width: 64rem) {
		.hero__grid,
		.work-heading,
		.featured-project__caption,
		.secondary-project a,
		.studio-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.hero__inner {
			padding-top: 4rem;
		}

		.hero h1 {
			font-size: clamp(3.15rem, 13.5vw, 4.7rem);
			line-height: 0.95;
		}

		.work-heading h2,
		.studio-heading h2,
		.contact-heading h2 {
			font-size: clamp(2.4rem, 11vw, 3.5rem);
		}
	}
</style>
