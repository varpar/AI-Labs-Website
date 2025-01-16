<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let showNavbar = false;
    let showMenu = false;
    let isMobileMenuOpen = false;

    if (browser) {
        onMount(() => {
            const handleScroll = () => {
                showNavbar = window.scrollY > 300;
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        });
    }

    const toggleMenu = () => {
        showMenu = !showMenu;
        isMobileMenuOpen = !isMobileMenuOpen;
    };
</script>

<section class="{showNavbar ? 'opacity-100' : 'opacity-0'} transition-all duration-200 fixed top-0 left-0 right-0 z-[100000] px-4 md:px-8 lg:px-16 border-b py-4 w-full mx-auto flex justify-between items-center text-black bg-[#f8f2f2]">
    <!-- Logo and Navigation -->
    <div class="flex items-center z-[10000000] gap-4 md:gap-16 lg:gap-32 w-full justify-between ">
        <img src="/logo.png" alt="Jaipuria" class="h-8 md:h-10" />

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8 lg:gap-16 text-lg lg:text-xl">
            <li class="hover:text-gray-600 cursor-pointer">
                Read
            </li>
            <li class="hover:text-gray-600 cursor-pointer">
                Talk
            </li>
            <li class="hover:text-gray-600 cursor-pointer">
                Hear
            </li>
        </ul>
    </div>

    <!-- Mobile Menu Button -->
    <button 
        class="{showMenu ? 'rotate-45' : ''} transition-all duration-200 flex items-center z-[10000000] md:hidden" 
        on:click={toggleMenu}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path fill="black" d="M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4zm.503 4.5q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
        </svg>
    </button>

    <!-- Mobile Navigation Menu -->
    
        <div class="fixed inset-0 backdrop-blur-xl z-[100] md:hidden {isMobileMenuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200">
            <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                <a href="/" on:click={toggleMenu} class="hover:text-red-600" style="transition: opacity 0.5s; opacity: {isMobileMenuOpen ? 1 : 0}; transition-delay: 0.25s;">Read</a>
                <a href="/" on:click={toggleMenu} class="hover:text-red-600" style="transition: opacity 0.5s; opacity: {isMobileMenuOpen ? 1 : 0}; transition-delay: 0.25s;">Talk</a>
                <a href="/" on:click={toggleMenu} class="hover:text-red-600" style="transition: opacity 0.5s; opacity: {isMobileMenuOpen ? 1 : 0}; transition-delay: 0.25s;">Hear</a>
            </div>
        </div>
    
</section>
