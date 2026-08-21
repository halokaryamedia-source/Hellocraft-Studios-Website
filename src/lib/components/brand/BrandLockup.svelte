<script lang="ts">
	import logoCyan from '$lib/assets/brand/hellocraft-logo-cyan.png';
	import logoWhite from '$lib/assets/brand/hellocraft-logo-white.png';
	import { siteIdentity } from '$lib/content/site';

	let {
		scale = 'small',
		tone = 'cyan'
	}: {
		scale?: 'small' | 'large';
		tone?: 'cyan' | 'white';
	} = $props();
</script>

<img
	class="brand-lockup"
	class:brand-lockup--large={scale === 'large'}
	src={tone === 'white' ? logoWhite : logoCyan}
	alt={siteIdentity.name}
/>

<style>
	.brand-lockup {
		display: block;
		width: clamp(8.6rem, 12vw, 11.75rem);
		height: auto;
	}

	.brand-lockup--large {
		width: clamp(11rem, 18vw, 16rem);
	}
</style>
