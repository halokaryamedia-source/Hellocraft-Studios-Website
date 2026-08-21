<svelte:head>
	<title>Hellocraft Studios</title>
	<meta
		name="description"
		content="Technical foundation for the Hellocraft Studios website."
	/>
</svelte:head>

<main class="scaffold">
	<p class="label">Technical scaffold</p>
	<h1>Hellocraft Studios</h1>
	<p>Public website content and final visual direction are intentionally not implemented yet.</p>
</main>

<style>
	.scaffold {
		display: grid;
		min-height: 100svh;
		place-content: center;
		gap: 1rem;
		padding: var(--page-gutter);
	}

	.label,
	h1,
	p {
		margin: 0;
	}

	.label {
		font-size: 0.875rem;
	}

	h1 {
		font-size: clamp(2rem, 7vw, 4rem);
		line-height: 1;
	}

	p {
		max-width: 46rem;
		line-height: 1.6;
	}
</style>
