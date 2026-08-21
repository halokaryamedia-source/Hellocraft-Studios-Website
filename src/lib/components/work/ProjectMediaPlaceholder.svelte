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
	<div class="media__rail"></div>
	<div class="media__topline">
		<span>{label}</span>
		<span>{index}</span>
	</div>
	<div class="media__field">
		<span class="media__ghost">HC</span>
		<span class="media__coordinate">X / 000&nbsp;&nbsp;Y / 000</span>
	</div>
	<div class="media__footer">
		<span>Hellocraft Studios</span>
		<span>Development preview</span>
	</div>
</div>

<style>
	.media {
		position: relative;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		padding: clamp(1rem, 2.4vw, 1.5rem);
		background: var(--ink-soft);
		color: var(--surface);
		clip-path: polygon(
			0 0,
			calc(100% - var(--cut)) 0,
			100% var(--cut),
			100% 100%,
			var(--cut) 100%,
			0 calc(100% - var(--cut))
		);
		transition: transform var(--motion-medium) cubic-bezier(0.2, 0.75, 0.2, 1);
	}

	.media::after {
		position: absolute;
		inset: clamp(1rem, 3vw, 2.4rem);
		border: 1px solid rgb(255 255 255 / 9%);
		content: '';
		pointer-events: none;
	}

	.media--hero {
		min-height: clamp(27rem, 55vw, 52rem);
		aspect-ratio: auto;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.media__rail {
		position: absolute;
		top: 15%;
		bottom: 15%;
		left: 0;
		z-index: 3;
		width: clamp(0.28rem, 0.55vw, 0.48rem);
		background: var(--brand);
		transition: bottom var(--motion-medium) ease-out, top var(--motion-medium) ease-out;
	}

	.media__topline,
	.media__footer {
		position: relative;
		z-index: 4;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.64rem;
		font-weight: 800;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	.media__footer {
		color: rgb(255 255 255 / 52%);
	}

	.media__field {
		position: relative;
		z-index: 2;
		display: grid;
		align-items: end;
		justify-items: end;
		padding: clamp(1rem, 4vw, 3rem);
	}

	.media__ghost {
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(5rem, 15vw, 15rem);
		font-weight: 900;
		letter-spacing: -0.09em;
		line-height: 0.7;
		color: rgb(255 255 255 / 7%);
	}

	.media__coordinate {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 0.6rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		color: rgb(255 255 255 / 34%);
		text-transform: uppercase;
		transform: translate(-50%, -50%) rotate(-90deg);
	}

	.media::before {
		position: absolute;
		right: -7%;
		bottom: -22%;
		width: 38%;
		aspect-ratio: 1;
		border: 1px solid rgb(41 171 226 / 48%);
		content: '';
		transform: rotate(32deg);
		transition: transform var(--motion-medium) ease-out;
	}

	:global(.project-card a:hover) .media,
	:global(.project-card a:focus-visible) .media {
		transform: translateY(-0.18rem);
	}

	:global(.project-card a:hover) .media__rail,
	:global(.project-card a:focus-visible) .media__rail {
		top: 10%;
		bottom: 10%;
	}

	:global(.project-card a:hover) .media::before,
	:global(.project-card a:focus-visible) .media::before {
		transform: rotate(42deg) scale(1.04);
	}
</style>
