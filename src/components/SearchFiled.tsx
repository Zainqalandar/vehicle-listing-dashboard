import React from 'react';

const SearchFiled = ({
	setSearch,
	search,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	search: string;
}) => {
	return (
		<input
			type="text"
			placeholder="Search..."
			className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};

export default SearchFiled;
