<script lang="ts">
	import BrandSymbol from '$lib/components/brand/BrandSymbol.svelte';
	import { siteIdentity } from '$lib/content/site';

	let { scale = 'small' }: { scale?: 'small' | 'large' } = $props();
</script>

<span class="brand-lockup" class:brand-lockup--large={scale === 'large'}>
	<span class="brand-lockup__mark"><BrandSymbol size="100%" /></span>
	<span class="brand-lockup__name">{siteIdentity.name}</span>
</span>

<style>
	.brand-lockup {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(1rem, 1.7vw, 1.25rem);
		font-weight: 900;
		letter-spacing: -0.05em;
		line-height: 1;
	}

	.brand-lockup__mark {
		width: 1.65rem;
		flex: 0 0 auto;
		transition: transform var(--motion-fast) ease-out;
	}

	.brand-lockup--large {
		gap: 1rem;
		font-size: clamp(2rem, 5vw, 4.5rem);
		letter-spacing: -0.06em;
		line-height: 0.95;
	}

	.brand-lockup--large .brand-lockup__mark {
		width: clamp(3rem, 6vw, 5.5rem);
	}

	:global(a:hover) .brand-lockup__mark,
	:global(a:focus-visible) .brand-lockup__mark {
		transform: rotate(12deg) scale(1.06);
	}
</style>
