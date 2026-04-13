import { useProducts } from '../hooks/useProducts';
import Loader from './Loader';
import ProductCard from './ProductCard';
import type { ProductSchema, ProductsSchema } from '../types/product';

const ProductList = ({
	search,
	sortBy,
	order,
}: {
	search: string;
	sortBy?: string;
	order?: 'asc' | 'desc';
}) => {
	// const [page, setPage] = useState(0);

	const limit = 16;

	const { data, isLoading, isError, error } = useProducts({
		search,
		sortBy,
		order,
		limit,
		// skip: page * limit,
	});

	console.log('data', data);

	if (isError) {
		return (
			<div className="flex justify-center items-center h-64">
				<p className="text-red-500 text-lg">
					Error: {(error as Error).message}
				</p>
			</div>
		);
	}

	return (
		<div>
			<div className="flex justify-center mb-5">
				{isLoading && <Loader />}
			</div>
			{data && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5 max-w-7xl mx-auto">
					{(data as ProductsSchema).products.map(
						(product: ProductSchema) => (
							<ProductCard key={product.id} product={product} />
						),
					)}
				</div>
			)}
			{
				data && (data as ProductsSchema).products.length === 0 && (
					<div className="flex justify-center items-center h-64">
						<p className="text-gray-500 text-lg">No products found.</p>
					</div>
				)
			}
		</div>
	);
};

export default ProductList;
