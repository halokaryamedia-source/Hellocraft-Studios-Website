<script lang="ts">
	import { page } from '$app/state';
	import BrandSymbol from '$lib/components/brand/BrandSymbol.svelte';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'Page not found' : 'Something went wrong');
	const body = $derived(
		isNotFound
			? 'The page you are looking for does not exist or may have moved.'
			: 'This page could not be displayed. You can return to the site or continue browsing our work.'
	);
</script>

<svelte:head>
	<title>{title} — Hellocraft Studios</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main id="main-content" class="error-page">
	<div class="error-page__inner">
		<div class="error-page__copy">
			<p class="status">{page.status}</p>
			<h1>{title}</h1>
			<p class="body">{body}</p>
			<div class="actions">
				<a class="primary-action" href="/">Back to home <span aria-hidden="true">→</span></a>
				<a class="secondary-action" href="/work">View work</a>
			</div>
		</div>

		<div class="error-page__art" aria-hidden="true">
			<BrandSymbol size="68%" tone="surface" rotation="-8deg" />
			<span>{page.status}</span>
		</div>
	</div>
</main>

<style>
	.error-page {
		background: var(--brand);
	}

	.error-page__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.7fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		min-height: clamp(36rem, 72svh, 58rem);
		margin-inline: auto;
		padding-block: clamp(4rem, 10vw, 9rem);
	}

	.error-page__copy {
		display: grid;
		gap: 1.25rem;
	}

	.status {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 900;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(4rem, 10vw, 10rem);
		line-height: 0.82;
	}

	.body {
		max-width: var(--measure);
		margin: 0;
		color: rgb(12 13 14 / 72%);
		font-size: clamp(1rem, 1.7vw, 1.2rem);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.primary-action,
	.secondary-action {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 2.75rem;
		padding: 0.85rem 1.1rem;
		border-radius: 999px;
		font-weight: 850;
		text-decoration: none;
	}

	.primary-action {
		min-width: 11rem;
		background: var(--ink);
		color: var(--surface);
	}

	.secondary-action {
		border: 1px solid rgb(12 13 14 / 32%);
	}

	.error-page__art {
		position: relative;
		display: grid;
		place-items: center;
		min-height: clamp(20rem, 40vw, 34rem);
		overflow: hidden;
		border: 1px solid rgb(12 13 14 / 24%);
		border-radius: var(--radius-md);
		background: var(--ink);
	}

	.error-page__art > span {
		position: absolute;
		right: 1rem;
		bottom: 0.75rem;
		color: var(--brand);
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(3rem, 8vw, 7rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.8;
	}

	@media (max-width: 56rem) {
		.error-page__inner {
			grid-template-columns: 1fr;
		}
	}
</style>
