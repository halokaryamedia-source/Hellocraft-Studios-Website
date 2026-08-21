<script lang="ts">
	let {
		variant = 'card',
		label = 'Demo media',
		index = '01'
	}: {
		variant?: 'card' | 'hero';
		label?: string;
		index?: string;
	} = $props();
</script>

<div class="media" class:media--hero={variant === 'hero'} aria-hidden="true">
	<div class="media__meta">
		<span>{label}</span>
		<span>{index}</span>
	</div>
	<div class="media__field">Demo media field</div>
</div>

<style>
	.media {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		aspect-ratio: 16 / 9;
		padding: clamp(1rem, 2.2vw, 1.4rem);
		border: 1px solid var(--border);
		background: var(--surface-secondary);
		color: var(--ink);
	}

	.media--hero {
		aspect-ratio: 21 / 9;
		padding: clamp(1.15rem, 2.6vw, 1.75rem);
	}

	.media__meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		color: var(--text-muted);
		font-size: 0.74rem;
		font-weight: 600;
	}

	.media__field {
		display: grid;
		place-items: center;
		padding: 2rem;
		color: rgb(22 23 25 / 38%);
		font-size: 0.8rem;
		text-align: center;
	}
</style>
