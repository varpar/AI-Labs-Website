<script>
	import {onMount} from 'svelte';
  let gsap;
  let text;

	const CELL_SIZE = 20;
	let dimensions = { width: 0, height: 0 };
	let grid = [];
	let currColor = '#000'; // Default background color

	// Function to update grid dimensions and initialize grid
	const updateDimensions = () => {
		const width = Math.ceil(window.innerWidth / CELL_SIZE);
		const height = Math.ceil(window.innerHeight / CELL_SIZE);
		dimensions = { width, height };
		grid = Array(height)
			.fill()
			.map(() =>
				Array(width)
					.fill()
					.map(() => (Math.random() > 0.85 ? 1 : 0))
			);
	};

	// Game of Life logic for updating grid
	const updateGrid = () => {
		if (!grid.length) return;

		grid = grid.map((row, i) =>
			row.map((cell, j) => {
				let neighbors = 0;
				for (let di = -1; di <= 1; di++) {
					for (let dj = -1; dj <= 1; dj++) {
						if (di === 0 && dj === 0) continue;
						const ni = i + di;
						const nj = j + dj;
						if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length) {
							neighbors += grid[ni][nj];
						}
					}
				}
				if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
				if (cell === 0 && neighbors === 3) return 1;
				return cell;
			})
		);
	};

	let interval;

	// Svelte lifecycle methods
	onMount(async () => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		interval = setInterval(updateGrid, 200);

		

    if (typeof window !== "undefined") {
            const module = await import('gsap');
            const textModule = await import('gsap/TextPlugin');
            gsap = module.default;
            text = textModule.default;
            gsap.registerPlugin(text);

            const tl = gsap.timeline(
				{repeat:-1,}
			);

			tl.to(".t1", {
				opacity:1,
				duration:0.5,
				ease:"none",
			})
			tl.to(".t1", {
				opacity:0,
				duration:0.5,
				delay:1,
				ease:"none",
			})
			.to(".t2", {
				opacity:1,
				duration:0.5,
				ease:"none",
			})
			.to(".t2", {
				opacity:0,
				duration:0.5,
				delay:1,
				ease:"none",
			})
			.to(".t3", {
				opacity:1,
				duration:0.5,
				ease:"none",
			})
			.to(".t3", {
				opacity:0,
				duration:0.5,
				delay:1,
				ease:"none",
			})
        }

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', updateDimensions);
		};
	});

	const handleMouseEnter = (color) => {
		currColor = color;
	};

	const handleMouseLeave = () => {
		currColor = '#000'; // Reset to default background color
	};
</script>

<section class="relative w-full min-h-screen items-center justify-center flex flex-col">
	<!-- Game of Life Background -->
	<div class="absolute top-0 left-0 w-full h-full opacity-10">
		<div
			class="grid gap-px"
			style="grid-template-columns: repeat({dimensions.width}, minmax(0, 1fr)); width: 100%; height: 100%;"
		>
			{#each grid as row, i}
				{#each row as cell, j}
					<div
						class="transition-colors duration-[1200ms]"
						style="background-color: {cell ? 'purple' : 'transparent'}"
					></div>
				{/each}
			{/each}
		</div>
	</div>

	<!-- Content Overlay -->

    <ul class="hidden md:flex items-center gap-4 justify-around p-4 cofo w-1/2 text-xl z-[100000]">
        <li>
            <a
                href="/"
                on:mouseenter={() => handleMouseEnter('purple')}
                on:mouseleave={handleMouseLeave}>Read</a
            >
        </li>
        <li>
            <a
                href="/"
                on:mouseenter={() => handleMouseEnter('black')}
                on:mouseleave={handleMouseLeave}>Talk</a
            >
        </li>
		<li>
            <a
                href="/"
                on:mouseenter={() => handleMouseEnter('black')}
                on:mouseleave={handleMouseLeave}>Hear</a
            >
        </li>
    </ul>
	<div class="relative z-10 w-full text-center">
		<div class="text-[12vw] flex mx-auto justify-center items-center flex-wrap px-4">
			<div class="text-[#432357]">#be</div>
			<div class="relative text-[#ef7f1a] w-1/2" id="explore">
				<div class="t1 absolute z-10 opacity-1 bottom-0  translate-y-1/2 left-0" style="transition: opacity 0.5s;">Limitless</div>	
				<div class="t2 absolute z-10 opacity-0 bottom-0 left-0  translate-y-1/2" style="transition: opacity 0.5s;">aMentor</div>	
				<div class="t3 absolute z-10 opacity-0 bottom-0 left-0  translate-y-1/2" style="transition: opacity 0.5s;">aStudent</div>	
			</div>
		</div>
	</div>

	<div class="absolute bottom-12 w-full mx-auto flex justify-center cofo text-black/70 text-sm md:text-base px-4">
		Powered by Jaipuria
	</div>

	<div
		id="#demo"
		class="absolute bottom-4 animate-bounce w-full mx-auto flex justify-center"
	>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill="currentColor" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/></svg>
	</div>
</section>

<style>
	.cofo div:first-child {
		font-weight: bold;
	}
	.cofo div:last-child {
		color: #ff6600;
	}
</style>
