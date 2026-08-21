<script lang="ts">
	let {
		variant = 'card',
		label = 'Project media',
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
	<div class="media__empty">Media placeholder</div>
</div>

<style>
	.media {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		aspect-ratio: 16 / 9;
		padding: clamp(1rem, 2.4vw, 1.5rem);
		background: var(--ink-soft);
		color: var(--surface);
	}

	.media--hero {
		min-height: clamp(24rem, 52vw, 48rem);
		aspect-ratio: auto;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.media__meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.media__empty {
		display: grid;
		place-items: center;
		color: rgb(255 255 255 / 24%);
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
</style>
