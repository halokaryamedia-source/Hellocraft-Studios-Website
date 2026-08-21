<script lang="ts">
	import { siteIdentity } from '$lib/content/site';

	let { scale = 'small' }: { scale?: 'small' | 'large' } = $props();
</script>

<span class="brand-lockup" class:brand-lockup--large={scale === 'large'}>{siteIdentity.name}</span>

<style>
	.brand-lockup {
		display: inline-block;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(1rem, 1.4vw, 1.15rem);
		font-weight: 900;
		letter-spacing: -0.035em;
		line-height: 1;
	}

	.brand-lockup--large {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}
</style>
