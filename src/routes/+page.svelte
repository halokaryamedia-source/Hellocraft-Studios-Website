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
		<div class="shell editorial-frame editorial-frame--dark hero__frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>01 / 05</span>
				<span>Intro</span>
			</aside>

			<div class="editorial-body hero__body">
				<div class="hero__topline">
					<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
					<span>Hellocraft / Studio</span>
				</div>

				<h1 id="home-title">{homeCopy.hero.title}</h1>

				<div class="hero__deck">
					<p>{homeCopy.hero.body}</p>
					<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
				</div>

				<div class="hero__media">
					<ProjectMediaPlaceholder variant="hero" index="HC" label="Featured work preview" />
				</div>
			</div>
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell editorial-frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>02 / 05</span>
				<span>Work</span>
			</aside>

			<div class="editorial-body">
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
		</div>
	</section>

	<section class="studio-section" aria-labelledby="home-studio-title">
		<div class="shell editorial-frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>03 / 05</span>
				<span>Studio</span>
			</aside>

			<div class="editorial-body studio-section__body">
				<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
				<div class="studio-section__main">
					<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
					<div class="studio-section__copy">
						<p>{homeCopy.studio.body}</p>
						<a class="text-link" href="/studio">{homeCopy.studio.actionLabel}</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="capabilities-section" aria-labelledby="home-capabilities-title">
		<div class="shell editorial-frame editorial-frame--dark">
			<aside class="editorial-rail" aria-hidden="true">
				<span>04 / 05</span>
				<span>Capabilities</span>
			</aside>

			<div class="editorial-body capabilities-section__body">
				<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
				<div class="capabilities-section__main">
					<h2 id="home-capabilities-title">{homeCopy.capabilities.title}</h2>
					<p>{homeCopy.capabilities.body}</p>
				</div>
			</div>
		</div>
	</section>

	{#if proofItems.length > 0}
		<section class="proof-section" aria-labelledby="home-proof-title">
			<div class="shell editorial-frame">
				<aside class="editorial-rail" aria-hidden="true">
					<span>Proof</span>
					<span>Evidence</span>
				</aside>

				<div class="editorial-body proof-section__body">
					<div class="proof-section__heading">
						<p class="eyebrow">Credibility</p>
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
			</div>
		</section>
	{/if}

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell editorial-frame editorial-frame--dark">
			<aside class="editorial-rail" aria-hidden="true">
				<span>05 / 05</span>
				<span>Contact</span>
			</aside>

			<div class="editorial-body contact-section__body">
				<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
				<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
				<div class="contact-section__footer">
					<p>{homeCopy.contact.body}</p>
					<a class="text-link" href="/contact">{homeCopy.contact.actionLabel}</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--ink);
		color: var(--surface);
	}

	.hero__frame {
		padding-block: clamp(4.5rem, 8vw, 8.5rem) clamp(3.5rem, 7vw, 6rem);
	}

	.hero__body {
		display: grid;
		gap: clamp(2rem, 4vw, 4rem);
	}

	.hero__topline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		color: rgb(255 255 255 / 52%);
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	.hero__topline .eyebrow {
		color: var(--surface);
	}

	.hero h1 {
		max-width: 10.5ch;
		margin: 0;
		font-size: clamp(4.25rem, 10.5vw, 11rem);
		line-height: 0.79;
	}

	.hero__deck {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--inverse-border);
	}

	.hero__deck p {
		max-width: 36rem;
		margin: 0;
		color: rgb(255 255 255 / 60%);
	}

	.hero .text-link,
	.contact-section .text-link {
		color: var(--surface);
	}

	.hero__media {
		width: min(100%, 86rem);
		margin-left: auto;
		padding-top: clamp(1rem, 3vw, 2rem);
	}

	.work-section,
	.studio-section,
	.proof-section {
		padding-block: var(--space-section);
	}

	.section-heading {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.65fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
		margin-bottom: clamp(2rem, 4vw, 4rem);
		padding-bottom: 1.6rem;
		border-bottom: 1px solid var(--border);
	}

	.section-heading > div {
		display: grid;
		gap: 0.85rem;
	}

	.section-heading h2,
	.studio-section h2,
	.capabilities-section h2,
	.proof-section h2,
	.contact-section h2 {
		margin: 0;
		font-size: clamp(3rem, 6.8vw, 7rem);
		line-height: 0.85;
	}

	.section-heading > p,
	.studio-section__copy p,
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
		background: var(--surface);
	}

	.studio-section__body,
	.capabilities-section__body,
	.contact-section__body {
		display: grid;
		gap: clamp(2rem, 5vw, 4.5rem);
	}

	.studio-section__main,
	.capabilities-section__main {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.65fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.studio-section__copy {
		display: grid;
		gap: 1.5rem;
	}

	.capabilities-section {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.capabilities-section__main > p {
		color: rgb(255 255 255 / 58%);
	}

	.proof-section__body {
		display: grid;
		grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
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
		font-size: clamp(1.12rem, 2.1vw, 1.62rem);
		font-weight: 700;
	}

	.contact-section {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.contact-section h2 {
		max-width: 11ch;
		font-size: clamp(4rem, 9.5vw, 10rem);
	}

	.contact-section__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.4rem;
		border-top: 1px solid var(--inverse-border);
	}

	.contact-section__footer p {
		color: rgb(255 255 255 / 56%);
	}

	@media (max-width: 64rem) {
		.section-heading,
		.studio-section__main,
		.capabilities-section__main,
		.proof-section__body {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.hero__topline,
		.hero__deck,
		.contact-section__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.hero__topline {
			align-items: flex-start;
			flex-direction: column;
		}

		.hero h1 {
			font-size: clamp(3.6rem, 18vw, 5.7rem);
		}

		.hero__media {
			width: 100%;
		}
	}
</style>
