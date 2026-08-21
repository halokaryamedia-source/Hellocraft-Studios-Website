<script lang="ts">
	import { siteIdentity } from '$lib/content/site';

	let { scale = 'small' }: { scale?: 'small' | 'large' } = $props();
</script>

<span class="brand-lockup" class:brand-lockup--large={scale === 'large'}>{siteIdentity.name}</span>

<style>
	.brand-lockup {
		display: inline-block;
		font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, sans-serif;
		font-size: clamp(1rem, 1.25vw, 1.1rem);
		font-weight: 720;
		letter-spacing: -0.025em;
		line-height: 1;
	}

	.brand-lockup--large {
		font-size: clamp(1.4rem, 2.8vw, 2.35rem);
	}
</style>
