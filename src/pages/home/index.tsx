import { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList';
import SearchFiled from '../../components/SearchFiled';
import SortComp from '../../components/SortComp';

const Home = () => {
	const [search, setSearch] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');
	const [sortBy, setSortBy] = useState<string>('');
	const [order, setOrder] = useState<'asc' | 'desc'>('asc');

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);

		return () => clearTimeout(timer);
	}, [search]);

	return (
		<>
			<h1 className="text-center text-3xl font-bold my-5 text-gray-800 dark:text-white">
				Vehicle Listing Dashboard
			</h1>
			<div className="flex justify-between items-center my-5 gap-5 flex-wrap max-w-7xl mx-auto">
				<SearchFiled setSearch={setSearch} search={search} />
				<SortComp
					setSortBy={setSortBy}
					setOrder={setOrder}
					sortBy={sortBy}
					order={order}
				/>
			</div>
			<ProductList
				search={debouncedSearch}
				sortBy={sortBy}
				order={order}
			/>
		</>
	);
};

export default Home;
