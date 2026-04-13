

import React from 'react';

interface SortCompProps {
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
	setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
	sortBy: string;
	order: 'asc' | 'desc';
}

const SortComp: React.FC<SortCompProps> = ({ setSortBy, setOrder, sortBy, order }) => {
	const handleSortChange = (value: string) => {
		if (value === 'default') {
			setSortBy('');
			setOrder('asc');
		} else {
			const [field, direction] = value.split('-');
			setSortBy(field);
			setOrder(direction as 'asc' | 'desc');
		}
	};

	const currentValue = sortBy ? `${sortBy}-${order}` : 'default';

	return (
		<div className="flex items-center gap-2">
			<label htmlFor="sort-select" className="font-medium text-gray-700 dark:text-gray-300">
				Sort by:
			</label>
			<select
				id="sort-select"
				value={currentValue}
				onChange={(e) => handleSortChange(e.target.value)}
				className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-40"
			>
				<option value="default">Default</option>
				<option value="price-asc">Price: Low to High</option>
				<option value="price-desc">Price: High to Low</option>
				<option value="title-asc">Name: A to Z</option>
				<option value="title-desc">Name: Z to A</option>
			</select>
		</div>
	);
};

export default SortComp;