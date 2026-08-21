<script lang="ts">
	import logoWhite from '$lib/assets/brand/hellocraft-logo-white.png';

	let {
		variant = 'card',
		tone = 'neutral'
	}: {
		variant?: 'card' | 'hero';
		tone?: 'brand' | 'dark' | 'neutral';
	} = $props();
</script>

<div
	class="media"
	class:media--hero={variant === 'hero'}
	class:media--brand={tone === 'brand'}
	class:media--dark={tone === 'dark'}
	aria-hidden="true"
>
	{#if tone === 'brand'}
		<img src={logoWhite} alt="" />
	{/if}
</div>

<style>
	.media {
		position: relative;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: #dcd8cf;
	}

	.media--hero {
		aspect-ratio: 21 / 9;
	}

	.media--brand {
		display: grid;
		place-items: center;
		background: var(--brand);
	}

	.media--brand img {
		width: min(42%, 23rem);
		height: auto;
	}

	.media--dark {
		background: #202225;
	}
</style>
