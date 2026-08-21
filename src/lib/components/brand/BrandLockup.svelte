<script lang="ts">
	import { siteIdentity } from '$lib/content/site';

	let { scale = 'small' }: { scale?: 'small' | 'large' } = $props();
</script>

<span class="brand-lockup" class:brand-lockup--large={scale === 'large'}>{siteIdentity.name}</span>

<style>
	.brand-lockup {
		display: inline-block;
		font-family: 'Aptos Display', 'Segoe UI Variable Display', 'Segoe UI', system-ui, sans-serif;
		font-size: clamp(1rem, 1.2vw, 1.08rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	.brand-lockup--large {
		font-size: clamp(1.45rem, 2.7vw, 2.3rem);
	}
</style>
