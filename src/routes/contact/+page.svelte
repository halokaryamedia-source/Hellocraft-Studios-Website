<script lang="ts">
	import { contactCopy, contactMethods } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Contact — Hellocraft Studios</title>
	<meta name="description" content={contactCopy.hero.body} />
</svelte:head>

<main id="main-content" class="page">
	<section class="hero" aria-labelledby="contact-title">
		<p class="eyebrow">{contactCopy.hero.eyebrow}</p>
		<h1 id="contact-title">{contactCopy.hero.title}</h1>
		<p>{contactCopy.hero.body}</p>
	</section>

	<section class="section" aria-labelledby="contact-methods-title">
		<h2 id="contact-methods-title">{contactCopy.methods.title}</h2>

		{#if contactMethods.length > 0}
			<ul class="contact-list">
				{#each contactMethods as method (method.href)}
					<li>
						<a href={method.href} rel={method.external ? 'noreferrer' : undefined}>{method.label}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="placeholder">{contactCopy.methods.emptyState}</p>
		{/if}
	</section>

	<section class="section" aria-labelledby="contact-inquiry-title">
		<h2 id="contact-inquiry-title">{contactCopy.inquiry.title}</h2>
		<p class="measure">{contactCopy.inquiry.body}</p>
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
	.section {
		display: grid;
		gap: 1rem;
	}

	.hero p:last-child,
	.measure {
		max-width: var(--measure);
	}

	.contact-list {
		display: grid;
		gap: 0.75rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.eyebrow,
	h1,
	h2,
	p {
		margin: 0;
	}

	.placeholder {
		font-family: monospace;
	}
</style>
