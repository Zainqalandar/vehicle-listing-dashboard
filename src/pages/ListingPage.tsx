import { useProducts } from '../hooks/useProducts';

const ListingPage = () => {
	const { data, isLoading, error } = useProducts({});

	return (
		<div className="p-8">
			{isLoading && <p className="text-center text-lg text-gray-600 dark:text-gray-400">Loading...</p>}
			{error && <p className="text-center text-red-500 text-lg">Error: {(error as Error).message}</p>}
			{data && (
				<div>
					<h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Products</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{(data as any).products.map((product: any) => (
							<div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 overflow-hidden p-4">
								<h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{product.title}</h2>
								<p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{product.description}</p>
								<p className="text-blue-600 dark:text-blue-400 font-semibold">Price: ${product.price}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ListingPage;
