<script lang="ts">
	import { careerOpenings, careersCopy } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Careers — Hellocraft Studios</title>
	<meta name="description" content={careersCopy.hero.body} />
</svelte:head>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="careers-title">
		<p class="eyebrow">{careersCopy.hero.eyebrow}</p>
		<h1 id="careers-title">{careersCopy.hero.title}</h1>
		<p>{careersCopy.hero.body}</p>
	</section>

	<section class="section" aria-labelledby="career-openings-title">
		<h2 id="career-openings-title">{careersCopy.openings.title}</h2>

		{#if careerOpenings.length > 0}
			<div class="opening-list">
				{#each careerOpenings as opening (opening.id)}
					<article class="opening">
						<h3>{opening.title}</h3>
						<p>{opening.summary}</p>
						{#if opening.location || opening.engagement}
							<p class="opening-meta">
								{opening.location ?? ''}{opening.location && opening.engagement ? ' · ' : ''}{opening.engagement ?? ''}
							</p>
						{/if}
						{#if opening.href}<a href={opening.href}>View role</a>{/if}
					</article>
				{/each}
			</div>
		{:else}
			<p class="placeholder">{careersCopy.openings.emptyState}</p>
		{/if}
	</section>

	<section class="section split" aria-labelledby="careers-general-title">
		<div>
			<p class="eyebrow">{careersCopy.general.eyebrow}</p>
			<h2 id="careers-general-title">{careersCopy.general.title}</h2>
		</div>
		<p>{careersCopy.general.body}</p>
	</section>

	<section class="section" aria-labelledby="careers-application-title">
		<h2 id="careers-application-title">{careersCopy.application.title}</h2>
		<p class="measure">{careersCopy.application.body}</p>
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

	.hero,
	.section,
	.opening-list,
	.opening {
		display: grid;
		gap: 1rem;
	}

	.hero p:last-child,
	.split > p,
	.measure,
	.opening p {
		max-width: var(--measure);
	}

	.opening {
		padding-block: 1.5rem;
		border-top: 1px solid currentColor;
	}

	.opening-meta {
		font-size: 0.875rem;
	}

	.split {
		display: grid;
		gap: 1.5rem;
	}

	.eyebrow,
	h1,
	h2,
	h3,
	p {
		margin: 0;
	}

	.placeholder {
		font-family: monospace;
	}

	@media (min-width: 48rem) {
		.split {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		}
	}
</style>
