<script lang="ts">
	import { contentIsDemo } from '$lib/content/demo';
	import { careerApplication, careerOpenings, careersCopy } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Careers — Hellocraft Studios</title>
	<meta name="description" content={careersCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="careers-title">
		<div class="shell hero__inner">
			<div class="hero__heading">
				<p class="section-label">{careersCopy.hero.label}</p>
				<h1 id="careers-title">{careersCopy.hero.title}</h1>
			</div>

			<div class="hero__support">
				<p>{careersCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="openings" aria-labelledby="career-openings-title">
		<div class="shell openings__inner">
			<div class="openings__heading">
				<h2 id="career-openings-title">{careersCopy.openings.title}</h2>
			</div>

			<div class="openings__content">
				{#if !contentIsDemo && careerOpenings.length > 0}
					<div class="opening-list">
						{#each careerOpenings as opening (opening.id)}
							<article class="opening">
								<div class="opening__main">
									<h3>{opening.title}</h3>
									<p>{opening.summary}</p>
								</div>

								<div class="opening__aside">
									{#if opening.location || opening.engagement}
										<p class="opening__meta">
											{opening.location ?? ''}{opening.location && opening.engagement ? ' · ' : ''}{opening.engagement ?? ''}
										</p>
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
		</div>
	</section>

	{#if !contentIsDemo && careerOpenings.length > 0 && careerApplication}
		<section class="application" aria-labelledby="careers-application-title">
			<div class="shell application__inner">
				<div class="application__heading">
					<p class="section-label">Applications</p>
					<h2 id="careers-application-title">{careerApplication.title}</h2>
				</div>

				<div class="application__copy">
					<p>{careerApplication.body}</p>
				</div>
			</div>
		</section>
	{/if}
</main>

<style>
	.hero {
		background: var(--surface);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
		padding-block: clamp(5rem, 8vw, 7.5rem) clamp(5.5rem, 9vw, 8rem);
	}

	.hero__heading,
	.openings__heading,
	.application__heading {
		display: grid;
		gap: 1rem;
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(3.6rem, 6vw, 6rem);
		line-height: 0.94;
	}

	.hero__support {
		display: grid;
		align-content: end;
		padding-bottom: 0.35rem;
	}

	.hero__support p,
	.application__copy p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.hero__support p {
		font-size: clamp(1.05rem, 1.4vw, 1.22rem);
		line-height: 1.58;
	}

	.openings {
		padding-block: clamp(6rem, 10vw, 9rem);
		background: var(--paper);
	}

	.openings__inner {
		display: grid;
		grid-template-columns: minmax(12rem, 0.48fr) minmax(0, 1.52fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: start;
	}

	.openings__heading h2,
	.application__heading h2 {
		max-width: 15ch;
		margin: 0;
		font-size: clamp(2.75rem, 4.7vw, 4.6rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.openings__heading h2 {
		font-size: clamp(1.8rem, 2.8vw, 2.6rem);
		line-height: 1.02;
	}

	.opening-list {
		border-top: 1px solid var(--border);
	}

	.opening {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(10rem, 0.3fr);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
		padding-block: clamp(2rem, 3.5vw, 3rem);
		border-bottom: 1px solid var(--border);
	}

	.opening__main,
	.opening__aside {
		display: grid;
		align-content: start;
		justify-items: start;
	}

	.opening__main {
		gap: 0.9rem;
	}

	.opening__aside {
		gap: 1rem;
	}

	.opening h3 {
		max-width: 17ch;
		margin: 0;
		font-size: clamp(1.8rem, 3vw, 2.9rem);
		font-weight: 670;
		line-height: 1;
	}

	.opening__main p,
	.opening__meta {
		max-width: 38rem;
		margin: 0;
		color: var(--text-muted);
	}

	.opening__meta {
		font-size: 0.86rem;
		font-weight: 600;
	}

	.pending-state {
		margin: 0;
		padding-block: clamp(2rem, 4vw, 3rem);
		border-block: 1px solid var(--border);
		color: var(--text-muted);
		font-size: clamp(1rem, 1.3vw, 1.1rem);
	}

	.application {
		padding-block: clamp(5.5rem, 8vw, 7.5rem);
		background: var(--surface);
	}

	.application__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: end;
		padding-top: clamp(2rem, 4vw, 3rem);
		border-top: 1px solid var(--border);
	}

	.application__copy {
		display: grid;
		align-content: end;
		padding-bottom: 0.3rem;
	}

	.application__copy p {
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	@media (max-width: 64rem) {
		.hero__inner,
		.openings__inner,
		.application__inner {
			grid-template-columns: 1fr;
		}

		.hero__inner {
			gap: 2.75rem;
		}

		.hero__support,
		.application__copy {
			max-width: 38rem;
		}

		.openings__inner {
			gap: 2.75rem;
		}
	}

	@media (max-width: 46rem) {
		h1 {
			font-size: clamp(3.1rem, 13.5vw, 4.75rem);
			line-height: 0.95;
		}

		.application__heading h2 {
			font-size: clamp(2.6rem, 11vw, 3.7rem);
		}

		.opening {
			grid-template-columns: 1fr;
			gap: 1.3rem;
		}
	}
</style>
