<script>
    import { onMount } from 'svelte';
    let scrollText = "Local • Food • Art • History • Nature • Sports";
    let scrollPosition = 0;

    onMount(() => {
        const scrollInterval = setInterval(() => {
            scrollPosition = (scrollPosition + 1) % scrollText.length;
        }, 100);
        return () => {
            clearInterval(scrollInterval);
        };
    });
</script>

<style>
    .scrolling-text {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        font-size: 1.5rem;
        color: #333;
    }
    .scrolling-text::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        animation: scroll 10s linear infinite;
    }
    @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    }
</style>

<div class="flex justify-center items-center h-screen">
    <div class="relative">
        <div class="animate-pulse rounded-full w-24 h-24 bg-black flex items-center justify-center">
            <!-- Icon or image can be placed here -->
        </div>
        <div class="scrolling-text" data-text={scrollText.substring(scrollPosition) + " " + scrollText.substring(0, scrollPosition)}></div>
    </div>
</div>
