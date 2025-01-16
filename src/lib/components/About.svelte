 <script>
    import { onMount } from 'svelte';
    let gsap;
    let ScrollTrigger;

    onMount(async () => {
        if (typeof window !== 'undefined') {
            const module = await import('gsap');
            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            gsap = module.default;
            ScrollTrigger = scrollTriggerModule.default;
            gsap.registerPlugin(ScrollTrigger);

            const mm = gsap.matchMedia();

            // Desktop animations
            mm.add("(min-width: 1024px)", () => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#about',
                        pin: true,
                        start: 'top 0%',
                        end: 'top -100%',
                        scrub: 1,
                    }
                });

                tl.fromTo(".timeline-img1",{
                    y:500,
                    opacity:0,
                    rotate:-10,
                },{
                    y:-100,
                    duration:1,
                    opacity:1,
                    stagger:0.5,
                    scrub:1,
                    rotate:-3
                })
               
                tl.fromTo(".timeline-img2",{
                    y:500,
                    opacity:0,
                    x:200,
                    rotate:-10,
                },{
                    y:0,
                    duration:1,
                    opacity:1,
                    stagger:0.5,
                    scrub:1,
                    x:150,
                    rotate:-7
                })
               
                tl.fromTo(".timeline-img3",{
                    y:500,
                    opacity:0,
                    rotate:10,
                    x:400,
                },{
                    y:100,
                    duration:1,
                    opacity:1,
                    stagger:0.5,
                    scrub:1,
                    x:300,
                    rotate:5
                })
                
                tl.to(".timeline-img1",{
                    opacity:0,
                })
                tl.to(".timeline-img2",{
                    opacity:0,
                })
                tl.to(".timeline-img3",{
                    opacity:0,
                })

                tl.to(".timeline-text",{
                    opacity:1
                })
            });

            // Mobile/Tablet animations
            mm.add("(max-width: 1023px)", () => {
               gsap.to(".timeline-img1-p",{
                scrollTrigger:{
                    trigger:'.timeline-img1-p',
                    start:'top 70%',
                    y:-300,
                    end:'bottom 60%',
                    scrub:1,
                },
                opacity:1,
                y:0,
                rotate:7,
               })
               gsap.to(".timeline-img2-p",{
                scrollTrigger:{
                    trigger:'.timeline-img2-p',
                    start:'top 70%',
                    end:'bottom 60%',
                    scrub:1,
                },
                opacity:1,
                y:0,
                rotate:-5,
               })
               gsap.to(".timeline-img3-p",{
                scrollTrigger:{
                    trigger:'.timeline-img3-p',
                    start:'top 70%',
                    end:'bottom 60%',
                    scrub:1,
                },
                opacity:1,
                y:0,
                rotate:3,
               })
               gsap.to(".timeline-text-p",{
                scrollTrigger:{
                    trigger:'.timeline-text-p',
                    start:'top 70%',
                    end:'bottom 60%',
                    scrub:1,
                },
                opacity:1,
               })
            });
        }
    });
</script>

<section class="px-4 md:px-8 py-8  flex flex-col lg:flex-row items-center  lg:space-y-0 lg:space-x-16 min-h-screen" id="about">
    <!-- Left Section -->
    <div class="text-[12vw] leading-none  w-1/2 flex-col">
        <p>About</p>
        <div class="text-right flex text-orange-500">
            <p class="overflow-hidden w-[70%]">//////////////////////////</p>
            <p class="w-[30%]">AI</p>
        </div>
        <div class="text-right flex text-purple-900">
            <p class="w-[70%]">Labs</p>
            <p class="overflow-hidden w-[30%]">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
        </div>
    </div>


       

    <!-- Right Section with Images and Text -->
    <div class="right-section relative w-full lg:w-1/2  md:flex hidden flex-col items-center min-h-[60vh] lg:h-screen overflow-visible">
        <img src="monkey.png" class="timeline-img1 absolute w-1/2 md:w-64 lg:w-auto bottom-0 rounded-md -translate-x-1/2 -translate-y-1/2" alt="img">
        <img src="monkey.png" class="timeline-img2 absolute w-1/2 md:w-64 lg:w-auto bottom-0 rounded-md -translate-x-1/2 -translate-y-1/2" alt="img">
        <img src="monkey.png" class="timeline-img3 absolute w-1/2 md:w-64 lg:w-auto bottom-0 rounded-md -translate-x-1/2 -translate-y-1/2" alt="img">
        <div class="absolute bottom-1/2 flex gap-4 flex-col items-center justify-center timeline-text opacity-0 translate-y-1/2 h-fit py-4 px-4 lg:px-0">
            <p class="text-base md:text-lg lg:text-xl border-t border-dashed border-black pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <p class="text-base md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <p class="text-base md:text-lg lg:text-xl border-b border-dashed border-black pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <button type="button" class="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md border-orange-500 hover:bg-orange-600 hover:border-orange-600">Know More?</button>
        </div>
       
        
    </div>

    <div class="right-section relative w-full lg:w-1/2  md:hidden flex flex-col items-center min-h-[60vh] lg:h-screen overflow-visible">
        <img src="monkey.png" class="timeline-img1-p opacity-0 rounded-md" alt="img">
        <img src="monkey.png" class="timeline-img2-p opacity-0 rounded-md" alt="img">
        <img src="monkey.png" class="timeline-img3-p opacity-0 rounded-md" alt="img">
        <div class="flex gap-4 flex-col items-center justify-center timeline-text-p opacity-0 ">
            <p class="text-base md:text-lg lg:text-xl border-t border-dashed border-black pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <p class="text-base md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <p class="text-base md:text-lg lg:text-xl border-b border-dashed border-black pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente, assumenda eaque consequatur dolor accusantium itaque excepturi adipisci impedit error obcaecati nobis inventore animi iure est totam nisi rerum rem.</p>
            <button type="button" class="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md border-orange-500 hover:bg-orange-600 hover:border-orange-600">Know More?</button>
        </div>
       
        
    </div>
</section>
