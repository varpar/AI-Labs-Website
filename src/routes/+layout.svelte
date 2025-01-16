<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let isLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 300);
	});

</script>


<div class="transition-opacity duration-500 ease-[cubic-bezier(0.2,0,0,1)]  {isLoaded ? 'opacity-100' : 'opacity-0'}">

	<header class="">
		<Navbar />
	</header>
	<main>
		<slot />
	</main>
	  <footer class="mt-36 py-12 px-4 md:px-8">
		<div class="md:border-t border-black max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 ">
		  <!-- Logo Section -->
		  <div class="grid items-center justify-center mx-auto md:justify-start">
			<img src="logo.png" alt="Dunderville Bird Logo" class="max-w-[15vw] max-h-[15vw]"/>
		  </div>
	  
		  <!-- General Info Section -->
		  <div class="space-y-4 text-gray-700 p-4 md:border-l border-black">
			<h3 class="font-medium text-gray-900">General & New Business</h3>
			<div>
			  <a href="/" class="hover:text-gray-900">hi@dunderville.se</a>
			  <p>M: 072 398 27 33</p>
			</div>
			
			<div class="mt-6 space-y-2">
			  <div>
				<p class="font-medium">Erik Arheden - Producer</p>
				<a href="mailto:erik@dunderville.se" class="hover:text-gray-900">erik@dunderville.se</a>
				<p>M: 072 398 27 33</p>
			  </div>
			  
			  <div class="mt-4">
				<p class="font-medium">Jonas Kornhall - Producer</p>
				<a href="mailto:jonas@dunderville.se" class="hover:text-gray-900">jonas@dunderville.se</a>
				<p>M: 070 673 86 45</p>
			  </div>
			</div>
		  </div>
	  
		  <!-- Address & Social Section -->
		  <div class="space-y-4 text-gray-700 p-4">
			<h3 class="font-medium text-gray-900">Address</h3>
			<div>
			  <p>Dunderville AB</p>
			  <p>Jörgen Kocksgatan 73A</p>
			  <p>211 20, Malmö</p>
			</div>
	  
			<div class="mt-6">
			  <h3 class="font-medium text-gray-900">On the web</h3>
			  <div class="space-y-2 mt-2">
				<a href="https://instagram.com/dunderville" class="block hover:text-gray-900">Instagram ↗</a>
				<a href="https://vimeo.com/dunderville" class="block hover:text-gray-900">Vimeo ↗</a>
			  </div>
			</div>
		  </div>
		</div>
	  </footer>
</div>


