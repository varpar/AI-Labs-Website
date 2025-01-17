<script>
    import { onMount, onDestroy } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    let isLoaded = false;


    import { PrismicImage, PrismicLink, PrismicRichText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';

	export let data;
    const blogs = data.page.data.blogs;
  
   
    // Initialize GSAP animations
    onMount(async () => {

        setTimeout(() => {
			isLoaded = true;
		}, 300);
			
            gsap.registerPlugin(ScrollTrigger);

           const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.blog',
                pin: true,
                start: 'top top',
                end: 'bottom+=300 top',
                scrub: 1,
                // markers: true,
            }
           })

           tl.to('.blogs-container',{
            x: '-100%',
           })
        }
    );


    onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
  </script>
  
  <section class="relative h-screen p-2 overflow-hidden blog transition-opacity duration-300 {isLoaded ? 'opacity-100' : 'opacity-0'} ">
    <!-- Background -->
    <div class="absolute inset-2 flex items-center justify-center bg-orange-400 rounded-[40px] z-0">
      <div class="text-[12vw] font-bold text-white text-center">
        <p>Curated ----</p>
        <p>---- Blogs</p>
      </div>
    </div>
  
    <!-- Blogs Container -->
    <div class="blogs-container flex w-full overflow-visible z-10 relative translate-x-[110%] h-full gap-2">
      {#each blogs as blog (blog.title)}
        <div
            class="blog-card flex flex-col flex-1 items-center justify-center h-full bg-white rounded-[40px] lg:w-[33%] md:w-[50%] sm:min-w-[500px] sm:w-[500px]"
        >
          <PrismicImage
            field={blog.cover}
            class="mb-4 w-full h-60 object-cover rounded-lg"
          />
          <div class="text-2xl font-semibold text-gray-800">
              <PrismicRichText field={blog.title} />
          </div>

          <div class="text-gray-600 text-center">
            <PrismicRichText field={blog.subtitle} />
          </div>
          <PrismicLink field={blog.link} class="text-gray-600 text-center">
            Read More
          </PrismicLink>
        </div>
      {/each}
    </div>
  </section>
  

