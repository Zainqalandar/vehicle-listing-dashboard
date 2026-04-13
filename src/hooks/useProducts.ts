import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productApi';

export const useProducts = (params: {
	search?: string;
	sortBy?: string;
	order?: 'asc' | 'desc';
	limit?: number;
	skip?: number;
}) => {
	return useQuery({
		queryKey: ['products', params],
		queryFn: fetchProducts,
	});
};