import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('blog', params.uid);
    console.log(page)
	return {
		page
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('blog');

    console.log("pages are:",pages)

	return pages.map((page) => {
		return { uid: page.uid };
	});
}