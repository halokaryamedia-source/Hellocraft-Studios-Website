<script lang="ts">
	let {
		variant = 'card',
		label = 'Demo media',
		index = '01',
		tone = 'neutral'
	}: {
		variant?: 'card' | 'hero';
		label?: string;
		index?: string;
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
	<div class="media__planes">
		<span class="media__plane media__plane--one"></span>
		<span class="media__plane media__plane--two"></span>
		<span class="media__plane media__plane--three"></span>
	</div>
	<div class="media__meta">
		<span>{label}</span>
		<span>{index}</span>
	</div>
</div>

<style>
	.media {
		position: relative;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border: 1px solid var(--border);
		background: #dedad2;
	}

	.media--hero {
		aspect-ratio: 21 / 9;
	}

	.media__planes,
	.media__plane {
		position: absolute;
		inset: 0;
	}

	.media__plane--one {
		right: auto;
		width: 44%;
		background: #25292d;
	}

	.media__plane--two {
		left: 44%;
		right: auto;
		width: 13%;
		background: var(--brand);
	}

	.media__plane--three {
		left: 57%;
		background: #d9e4e5;
	}

	.media--brand {
		background: #d6e8ee;
	}

	.media--brand .media__plane--one {
		width: 31%;
		background: #1e252a;
	}

	.media--brand .media__plane--two {
		left: 31%;
		width: 29%;
		background: var(--brand);
	}

	.media--brand .media__plane--three {
		left: 60%;
		background: #cbd8d8;
	}

	.media--dark {
		background: #1d2023;
	}

	.media--dark .media__plane--one {
		width: 59%;
		background: #1d2023;
	}

	.media--dark .media__plane--two {
		left: 59%;
		width: 11%;
		background: var(--brand);
	}

	.media--dark .media__plane--three {
		left: 70%;
		background: #d8d5cd;
	}

	.media__meta {
		position: absolute;
		right: clamp(0.85rem, 2vw, 1.35rem);
		bottom: clamp(0.75rem, 2vw, 1.15rem);
		left: clamp(0.85rem, 2vw, 1.35rem);
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		color: rgb(21 22 23 / 66%);
		font-size: 0.76rem;
		font-weight: 600;
	}

	.media--dark .media__meta {
		color: rgb(255 255 255 / 68%);
	}
</style>
