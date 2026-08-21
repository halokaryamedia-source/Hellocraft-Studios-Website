<script lang="ts">
	import { studioCopy, studioProofItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Studio — Hellocraft Studios</title>
	<meta name="description" content={studioCopy.hero.body} />
</svelte:head>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="studio-title">
		<p class="eyebrow">{studioCopy.hero.eyebrow}</p>
		<h1 id="studio-title">{studioCopy.hero.title}</h1>
		<p>{studioCopy.hero.body}</p>
	</section>

	<section class="section split" aria-labelledby="studio-capabilities-title">
		<div>
			<p class="eyebrow">{studioCopy.capabilities.eyebrow}</p>
			<h2 id="studio-capabilities-title">{studioCopy.capabilities.title}</h2>
		</div>
		<p>{studioCopy.capabilities.body}</p>
	</section>

	<section class="section split" aria-labelledby="studio-approach-title">
		<div>
			<p class="eyebrow">{studioCopy.approach.eyebrow}</p>
			<h2 id="studio-approach-title">{studioCopy.approach.title}</h2>
		</div>
		<p>{studioCopy.approach.body}</p>
	</section>

	{#if studioProofItems.length > 0}
		<section class="section" aria-labelledby="studio-proof-title">
			<h2 id="studio-proof-title">{studioCopy.proof.title}</h2>
			<ul>
				{#each studioProofItems as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>
	{/if}

	<section class="section contact-block" aria-labelledby="studio-contact-title">
		<h2 id="studio-contact-title">{studioCopy.contact.title}</h2>
		<p>{studioCopy.contact.body}</p>
		<a href="/contact">{studioCopy.contact.actionLabel}</a>
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
	.contact-block {
		display: grid;
		gap: 1rem;
	}

	.hero p:last-child,
	.split > p,
	.contact-block p {
		max-width: var(--measure);
	}

	.split {
		display: grid;
		gap: 1.5rem;
	}

	.eyebrow,
	h1,
	h2,
	p {
		margin: 0;
	}

	@media (min-width: 48rem) {
		.split {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		}
	}
</style>
