<script lang="ts">
	import { page } from '$app/state';

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
	<div class="shell error-page__inner">
		<div class="error-page__meta">
			<span class="section-index">{page.status}</span>
			<p class="eyebrow">Hellocraft Studios</p>
		</div>
		<h1>{title}</h1>
		<div class="error-page__footer">
			<p>{body}</p>
			<div class="actions">
				<a class="text-link" href="/">Back to home</a>
				<a class="text-link" href="/work">View work</a>
			</div>
		</div>
	</div>
</main>

<style>
	.error-page {
		min-height: 70svh;
		border-top: 4px solid var(--brand);
		background: var(--ink);
		color: var(--surface);
	}

	.error-page__inner {
		display: grid;
		gap: clamp(2.5rem, 7vw, 7rem);
		padding-block: clamp(5rem, 12vw, 12rem);
	}

	.error-page__meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.error-page__meta .eyebrow {
		color: rgb(255 255 255 / 58%);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(5rem, 13vw, 13rem);
		line-height: 0.75;
	}

	.error-page__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.5rem;
		border-top: 1px solid var(--inverse-border);
	}

	.error-page__footer > p {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 60%);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.actions .text-link {
		color: var(--surface);
	}

	@media (max-width: 46rem) {
		.error-page__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
