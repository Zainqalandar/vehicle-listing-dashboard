export const fetchProducts = async ({ queryKey }: { queryKey: [string, { search?: string; sortBy?: string; order?: 'asc' | 'desc'; limit?: number; skip?: number }] }) => {
	const [, { search, sortBy, order, limit, skip }] = queryKey;

	console.log('fetching products with params:', { search, sortBy, order, limit, skip });

	let url = 'https://dummyjson.com/products';

	const params = new URLSearchParams();

	if (search) {
		url = `https://dummyjson.com/products/search`;
		params.append('q', search);
	}

	if (sortBy) {
		params.append('sortBy', sortBy);
		if (order) {
			params.append('order', order);
		}
	}

	if (limit) {
		params.append('limit', limit.toString());
	}

	if (skip) {
		params.append('skip', skip.toString());
	}

	const queryString = params.toString();
	if (queryString) {
		url += `?${queryString}`;
	}

	const res = await fetch(url);
	console.log('fetching products from URL:', url);

	return res.json();
};