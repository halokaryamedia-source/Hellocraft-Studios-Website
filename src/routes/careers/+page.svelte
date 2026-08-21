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
			<div class="hero__copy">
				<p class="eyebrow">{careersCopy.hero.eyebrow}</p>
				<h1 id="careers-title">{careersCopy.hero.title}</h1>
				<p>{careersCopy.hero.body}</p>
			</div>
			<div class="hero__badge" aria-hidden="true"><span>JOIN<br />THE<br />CRAFT</span></div>
		</div>
	</section>

	<section class="openings" aria-labelledby="career-openings-title">
		<div class="shell">
			<div class="section-heading">
				<p class="eyebrow">01 / Roles</p>
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
								{#if opening.href}<a href={opening.href}>View role <span aria-hidden="true">↗</span></a>{/if}
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
				<p class="eyebrow">02 / {careersCopy.general.eyebrow}</p>
				<h2 id="careers-general-title">{careersCopy.general.title}</h2>
			</div>
			<p>{careersCopy.general.body}</p>
		</div>
	</section>

	<section class="application" aria-labelledby="careers-application-title">
		<div class="shell application__inner">
			<div class="application__star" aria-hidden="true"></div>
			<div>
				<p class="eyebrow">03 / Application</p>
				<h2 id="careers-application-title">{careersCopy.application.title}</h2>
			</div>
			<p>{careersCopy.application.body}</p>
		</div>
	</section>
</main>

<style>
	.shell {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.hero {
		background: var(--brand);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.55fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
		padding-block: clamp(4rem, 10vw, 10rem);
	}

	.hero__copy {
		display: grid;
		gap: 1.2rem;
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(4rem, 10vw, 10rem);
		line-height: 0.83;
	}

	.hero__copy > p:last-child {
		max-width: var(--measure);
		margin: 0;
		color: rgb(12 13 14 / 70%);
	}

	.hero__badge {
		display: grid;
		place-items: center;
		aspect-ratio: 1;
		border: 1px solid rgb(12 13 14 / 25%);
		border-radius: 50%;
		background: var(--surface);
		transform: rotate(7deg);
	}

	.hero__badge span {
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(2rem, 5vw, 4.5rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.75;
		text-align: center;
	}

	.openings,
	.general {
		padding-block: var(--space-section);
	}

	.section-heading {
		display: grid;
		gap: 0.8rem;
		margin-bottom: clamp(2rem, 5vw, 4rem);
	}

	h2 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.5rem, 6vw, 6rem);
		line-height: 0.9;
	}

	.opening-list {
		border-top: 1px solid var(--border);
	}

	.opening {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr) minmax(12rem, 0.35fr);
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
		gap: 0.6rem;
	}

	.opening h3 {
		margin: 0;
		font-size: clamp(1.6rem, 3.5vw, 3.2rem);
		line-height: 0.95;
	}

	.opening__copy p,
	.opening__meta p {
		margin: 0;
		color: var(--text-muted);
	}

	.opening__meta {
		display: grid;
		gap: 0.8rem;
		justify-items: start;
	}

	.opening__meta a {
		font-weight: 850;
		text-underline-offset: 0.3em;
	}

	.pending-state {
		padding: 2rem;
		border: 1px dashed var(--border);
		border-radius: var(--radius-sm);
	}

	.general {
		border-top: 1px solid var(--border);
		background: var(--surface);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.split > div {
		display: grid;
		gap: 1rem;
	}

	.split > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.application {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.application__inner {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) minmax(18rem, 0.7fr);
		gap: clamp(1.5rem, 5vw, 5rem);
		align-items: start;
	}

	.application__inner > div:nth-child(2) {
		display: grid;
		gap: 1rem;
	}

	.application__inner > p {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 66%);
	}

	.application__star {
		width: clamp(3rem, 6vw, 5rem);
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	@media (max-width: 60rem) {
		.hero__inner,
		.split,
		.application__inner {
			grid-template-columns: 1fr;
		}

		.hero__badge {
			width: min(18rem, 62vw);
		}
	}

	@media (max-width: 44rem) {
		.opening {
			grid-template-columns: 2.5rem minmax(0, 1fr);
		}

		.opening__meta {
			grid-column: 2;
		}
	}
</style>
