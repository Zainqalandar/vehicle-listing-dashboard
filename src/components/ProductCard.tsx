import type { ProductSchema } from '../types/product';
import { useTheme } from '../hooks/useTheme';

const ProductCard = ({ product }: { product: ProductSchema }) => {
	const { theme } = useTheme();

	return (
		<div className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:shadow-xl hover:-translate-y-1 ${theme === 'dark' ? 'bg-gray-800 shadow-gray-700' : 'bg-white'}`}>
			<img
				src={product.thumbnail}
				alt={product.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{product.title}</h3>
				<p className={`text-sm mb-3 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{product.description}</p>
				<p className="font-semibold text-blue-600 dark:text-blue-400">${product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
