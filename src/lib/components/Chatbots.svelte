<script>
	import { onMount } from 'svelte';

	let gsap;
	const left = '<<<<<';
	const right = '>>>>';
	let ScrollTrigger;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const module = await import('gsap');
			const scrollTriggerModule = await import('gsap/ScrollTrigger');
			gsap = module.default;
			ScrollTrigger = scrollTriggerModule.default;
			gsap.registerPlugin(ScrollTrigger);

			const tl = gsap.timeline({
				scrollTrigger: {
					scrub: 1,
					trigger: '.chatbots'
				}
			});

			tl.to('.chatbots-text', {
				xPercent: -130
			});
		}
	});
</script>

<div id="pin-windmill" class="mt-12">
	<div class="chatbots">
		<div class="flex justify-center items-center mb-6 md:mb-12">
			<h1 class="text-[10vw] font-bold chatbots-text text-nowrap overflow-x-clip flex items-center  translate-x-1/2">
				<p class="text-orange-500">//</p>AI IS NOT JUST A COURSE <p class="text-orange-500">//</p>
			</h1>
		</div>

		<div class="flex flex-col md:flex-row h-[90vh] md:h-[70vh] items-center mx-auto justify-center mt-12 md:mt-24">
			<div class="relative w-3/4 md:w-1/3 h-full">
				<div class="absolute top-4 left-4 md:top-15 md:left-15 w-full h-full bg-black bg-opacity-30 z-0"></div>
				<iframe
					id="embed-preview-iframe"
					loading="eager"
					src="https://embed.pickaxeproject.com/axe?id=JAI_VNVPB&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
					width="100%"
					height="100%"
					class="drop-shadow-xl"
					style="border:1px solid rgba(0, 0, 0, 1); position: relative; z-index: 1;"
					frameBorder="0"
					title="iframe"
				></iframe>
			</div>

			<img
				src="arrow-smooth.png"
				alt="arrow"
				class="hidden md:block w-16 md:w-[10vw] -rotate-[30deg] -scale-x-[1] z-[100] mx-4"
			/>

			<div class="flex flex-col justify-center text-center w-fit mt-4" id="chats">
				<p class="text-lg md:text-xl font-bold italic">for</p>
				<p class="text-4xl md:text-6xl font-bold">Students</p>
				<p class="text-3xl md:text-5xl font-bold">to</p>
				<p class="text-4xl md:text-6xl font-bold">Explore</p>
			</div>
		</div>


		<div class="flex flex-col md:flex-row h-[90vh] md:h-[70vh] items-center mx-auto justify-center mt-12 md:mt-28">
			<div class="flex flex-col justify-center text-center w-fit mb-4" id="chats">
				<p class="text-lg md:text-xl font-bold italic">for</p>
            <p class="text-4xl md:text-6xl font-bold">Teachers</p>
				<p class="text-3xl md:text-5xl font-bold">to</p>
				<p class="text-4xl md:text-6xl font-bold">Experiment</p>
			</div>

			<img src="arrow-smooth.png" alt="arrow" class="hidden md:block w-16 md:w-[10vw] rotate-[30deg] z-[100] mx-4" />

			<div class="relative w-3/4 md:w-1/3 h-full">
				<div class="absolute top-4 right-4 md:top-15 md:right-15 w-full h-full bg-black bg-opacity-30 z-0"></div>
				<iframe
					id="embed-preview-iframe"
					loading="eager"
					src="https://embed.pickaxeproject.com/axe?id=JAI_VNVPB&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
					width="100%"
					height="100%"
					class="drop-shadow-xl"
					style="border:1px solid rgba(0, 0, 0, 1); position: relative; z-index: 1;"
					frameBorder="0"
					title="iframe"
				></iframe>
			</div>
		</div>
	</div>
</div>

