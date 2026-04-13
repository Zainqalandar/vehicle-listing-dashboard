import { useProducts } from '../hooks/useProducts';
import Loader from './Loader';
import ProductCard from './ProductCard';
import type { ProductSchema, ProductsSchema } from '../types/product';



const ProductList = ({ search, sortBy, order }: { search: string; sortBy?: string; order?: 'asc' | 'desc' }) => {
	// const [page, setPage] = useState(0);

	const limit = 10;

	const { data, isLoading, isError, error } = useProducts({
		search,
		sortBy,
		order,
		limit,
		// skip: page * limit,
	});

	console.log('search', search);

	return (
		<div>
			<div className="flex justify-center mb-5">
				{isLoading && <Loader />}
			</div>
			{isError && (
				<p className="text-center text-red-500">
					Error: {(error as Error).message}
				</p>
			)}
			{data ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5 max-w-7xl mx-auto">
					{(data as ProductsSchema).products.map((product: ProductSchema) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				<p className="text-center">No products found.</p>
			)}
		</div>
	);
};

export default ProductList;
