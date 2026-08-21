<script lang="ts">
	import BrandSymbol from '$lib/components/brand/BrandSymbol.svelte';

	let {
		variant = 'card',
		label = 'Project visual'
	}: {
		variant?: 'card' | 'hero';
		label?: string;
	} = $props();
</script>

<div class="media" class:media--hero={variant === 'hero'} aria-hidden="true">
	<span class="media__label">{label}</span>
	<div class="media__symbol">
		<BrandSymbol
			size="100%"
			tone={variant === 'hero' ? 'brand' : 'surface'}
			rotation={variant === 'hero' ? '-10deg' : '-8deg'}
		/>
	</div>
</div>

<style>
	.media {
		position: relative;
		display: grid;
		align-items: end;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		padding: clamp(1rem, 3vw, 1.5rem);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background:
			linear-gradient(90deg, rgb(12 13 14 / 7%) 1px, transparent 1px) 0 0 / 2rem 2rem,
			linear-gradient(rgb(12 13 14 / 7%) 1px, transparent 1px) 0 0 / 2rem 2rem,
			var(--brand);
	}

	.media--hero {
		min-height: clamp(24rem, 60vw, 54rem);
		aspect-ratio: auto;
		padding: clamp(1rem, 3vw, 2rem);
		border-color: var(--inverse-border);
		background:
			linear-gradient(90deg, rgb(255 255 255 / 8%) 1px, transparent 1px) 0 0 / 3rem 3rem,
			linear-gradient(rgb(255 255 255 / 8%) 1px, transparent 1px) 0 0 / 3rem 3rem,
			#17191b;
		color: var(--surface);
	}

	.media__label {
		position: relative;
		z-index: 2;
		width: fit-content;
		padding: 0.45rem 0.65rem;
		border-radius: 999px;
		background: var(--ink);
		color: var(--surface);
		font-size: 0.7rem;
		font-weight: 850;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.media--hero .media__label {
		padding: 0;
		border-radius: 0;
		background: transparent;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
	}

	.media__symbol {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(48%, 10rem);
		transform: translate(-50%, -50%);
	}

	.media--hero .media__symbol {
		width: min(48%, 24rem);
	}
</style>
