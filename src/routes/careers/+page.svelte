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
			<div class="hero__meta">
				<span class="section-index">01 / Careers</span>
				<p class="eyebrow">{careersCopy.hero.eyebrow}</p>
			</div>
			<h1 id="careers-title">{careersCopy.hero.title}</h1>
			<p class="hero__body">{careersCopy.hero.body}</p>
		</div>
	</section>

	<section class="openings" aria-labelledby="career-openings-title">
		<div class="shell openings__inner">
			<div class="section-heading">
				<span class="section-index">02</span>
				<p class="eyebrow">Roles</p>
				<h2 id="career-openings-title">{careersCopy.openings.title}</h2>
			</div>

			{#if careerOpenings.length > 0}
				<div class="opening-list">
					{#each careerOpenings as opening, index (opening.id)}
						<article class="opening">
							<span class="opening__index">{String(index + 1).padStart(2, '0')}</span>
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
			<div class="section-heading">
				<span class="section-index">03</span>
				<p class="eyebrow">{careersCopy.general.eyebrow}</p>
				<h2 id="careers-general-title">{careersCopy.general.title}</h2>
			</div>
			<p>{careersCopy.general.body}</p>
		</div>
	</section>

	<section class="application" aria-labelledby="careers-application-title">
		<div class="shell split">
			<div class="section-heading">
				<span class="section-index">04</span>
				<p class="eyebrow">Application</p>
				<h2 id="careers-application-title">{careersCopy.application.title}</h2>
			</div>
			<p>{careersCopy.application.body}</p>
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
		gap: clamp(2.5rem, 6vw, 6rem);
		padding-block: clamp(5rem, 11vw, 11rem);
	}

	.hero__meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.hero__meta .eyebrow {
		color: rgb(255 255 255 / 58%);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(5rem, 13vw, 13rem);
		line-height: 0.75;
	}

	.hero__body {
		max-width: 43rem;
		margin: 0;
		color: rgb(255 255 255 / 62%);
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
		grid-template-columns: minmax(0, 0.6fr) minmax(18rem, 1.4fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.section-heading {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	h2 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(3rem, 7vw, 7rem);
		line-height: 0.84;
	}

	.opening-list {
		border-top: 1px solid var(--border);
	}

	.opening {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr) minmax(11rem, 0.35fr);
		gap: clamp(1rem, 4vw, 3rem);
		align-items: start;
		padding-block: clamp(1.5rem, 3vw, 2.5rem);
		border-bottom: 1px solid var(--border);
	}

	.opening__index {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.opening__copy {
		display: grid;
		gap: 0.7rem;
	}

	.opening h3 {
		margin: 0;
		font-size: clamp(1.8rem, 3.8vw, 3.8rem);
		line-height: 0.9;
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
		border-top: 4px solid var(--brand);
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

	.application .section-heading .eyebrow,
	.application .section-index {
		color: var(--brand);
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
			grid-template-columns: 2.5rem minmax(0, 1fr);
		}

		.opening__meta {
			grid-column: 2;
		}
	}
</style>
