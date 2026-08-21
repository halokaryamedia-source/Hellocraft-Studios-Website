<script lang="ts">
	type Tone = 'brand' | 'ink' | 'surface';

	let {
		size = '2rem',
		tone = 'brand',
		rotation = '0deg'
	}: {
		size?: string;
		tone?: Tone;
		rotation?: string;
	} = $props();
</script>

<span
	class="brand-symbol"
	class:brand-symbol--ink={tone === 'ink'}
	class:brand-symbol--surface={tone === 'surface'}
	style={`--brand-symbol-size: ${size}; --brand-symbol-rotation: ${rotation};`}
	aria-hidden="true"
></span>

<style>
	.brand-symbol {
		display: block;
		width: var(--brand-symbol-size);
		max-width: 100%;
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(
			50% 0%,
			61% 34%,
			98% 25%,
			70% 50%,
			98% 76%,
			62% 66%,
			50% 100%,
			39% 66%,
			2% 76%,
			30% 50%,
			2% 25%,
			39% 34%
		);
		transform: rotate(var(--brand-symbol-rotation));
	}

	.brand-symbol--ink {
		background: var(--ink);
	}

	.brand-symbol--surface {
		background: var(--surface);
	}
</style>
