<script>
	import { PrismicRichText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import { page } from '$app/stores';

	export let data;
    const info = data.page.data.slices
</script>



<section>
    <PrismicRichText field={info[0]?.primary.title} />
</section>  