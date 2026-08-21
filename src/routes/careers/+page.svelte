<script lang="ts">
	import { careerOpenings, careersCopy } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Careers — Hellocraft Studios</title>
	<meta name="description" content={careersCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="careers-title">
		<div class="shell hero__inner">
			<p class="eyebrow">{careersCopy.hero.eyebrow}</p>
			<h1 id="careers-title">{careersCopy.hero.title}</h1>
			<p class="hero__body">{careersCopy.hero.body}</p>
		</div>
	</section>

	<section class="openings" aria-labelledby="career-openings-title">
		<div class="shell openings__inner">
			<div class="section-heading">
				<p class="eyebrow">Roles</p>
				<h2 id="career-openings-title">{careersCopy.openings.title}</h2>
			</div>

			{#if careerOpenings.length > 0}
				<div class="opening-list">
					{#each careerOpenings as opening (opening.id)}
						<article class="opening">
							<div class="opening__copy">
								<h3>{opening.title}</h3>
								<p>{opening.summary}</p>
							</div>
							<div class="opening__meta">
								{#if opening.location || opening.engagement}
									<p>{opening.location ?? ''}{opening.location && opening.engagement ? ' · ' : ''}{opening.engagement ?? ''}</p>
								{/if}
								{#if opening.href}<a class="text-link" href={opening.href}>View role</a>{/if}
							</div>
						</article>
					{/each}
				</div>
			{:else}
				<p class="pending-state">{careersCopy.openings.emptyState}</p>
			{/if}
		</div>
	</section>

	<section class="general" aria-labelledby="careers-general-title">
		<div class="shell split">
			<div>
				<p class="eyebrow">{careersCopy.general.eyebrow}</p>
				<h2 id="careers-general-title">{careersCopy.general.title}</h2>
			</div>
			<p>{careersCopy.general.body}</p>
		</div>
	</section>

	<section class="application" aria-labelledby="careers-application-title">
		<div class="shell split">
			<div>
				<p class="eyebrow">Application</p>
				<h2 id="careers-application-title">{careersCopy.application.title}</h2>
			</div>
			<p>{careersCopy.application.body}</p>
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
		gap: clamp(1.5rem, 4vw, 3rem);
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(4.5rem, 10vw, 10rem);
		line-height: 0.84;
	}

	.hero__body {
		max-width: 43rem;
		margin: 0;
		color: var(--text-muted);
	}

	.openings,
	.general,
	.application {
		padding-block: var(--space-section);
	}

	.openings {
		background: var(--surface);
	}

	.openings__inner {
		display: grid;
		grid-template-columns: minmax(0, 0.65fr) minmax(18rem, 1.35fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.section-heading,
	.split > div {
		display: grid;
		align-content: start;
		gap: 0.8rem;
	}

	h2 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3rem, 6.5vw, 6.5rem);
		line-height: 0.9;
	}

	.opening-list {
		border-top: 1px solid var(--border);
	}

	.opening {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(11rem, 0.35fr);
		gap: clamp(1rem, 4vw, 3rem);
		align-items: start;
		padding-block: clamp(1.5rem, 3vw, 2.5rem);
		border-bottom: 1px solid var(--border);
	}

	.opening__copy {
		display: grid;
		gap: 0.7rem;
	}

	.opening h3 {
		margin: 0;
		font-size: clamp(1.8rem, 3.6vw, 3.6rem);
		line-height: 0.92;
	}

	.opening__copy p,
	.opening__meta p {
		margin: 0;
		color: var(--text-muted);
	}

	.opening__meta {
		display: grid;
		gap: 0.75rem;
		justify-items: start;
	}

	.opening__meta .text-link {
		font-size: 0.7rem;
	}

	.pending-state {
		padding-block: 2rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	.general {
		background: var(--paper);
	}

	.application {
		background: var(--ink);
		color: var(--surface);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.application .split > p {
		color: rgb(255 255 255 / 58%);
	}

	@media (max-width: 64rem) {
		.openings__inner,
		.split {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.opening {
			grid-template-columns: 1fr;
		}
	}
</style>
