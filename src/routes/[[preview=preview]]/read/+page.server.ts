import { error } from '@sveltejs/kit';
import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch });

	try {
		const page = await client.getSingle('blogs');
		return { page };
	} catch (e) {
		// Log the error for debugging
		console.error('Prismic Error:', e);
		// Throw a user-friendly error
		throw error(404, 'Page not found');
	}
}

export function entries() {
	return [{}];
}