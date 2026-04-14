import React from 'react';
import { useTheme } from '../hooks/useTheme';

const SearchFiled = ({
	setSearch,
	search,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	search: string;
}) => {
	const { theme } = useTheme();
	const clearSearch = () => {
		setSearch('');
	};

	return (
		<div className="relative w-64">
			<input
				type="text"
				placeholder="Search..."
				className={`w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md 
				focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
				 ${ theme === "dark" ? "bg-gray-700" : "bg-white"} text-gray-900 dark:text-white 
				placeholder-gray-500 dark:placeholder-gray-400`}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{/* Clear Button */}
			{search && (
				<button
					onClick={clearSearch}
					className="absolute right-2 top-1/2 -translate-y-1/2 
					text-gray-400 hover:text-red-500 transition"
				>
					✕
				</button>
			)}
		</div>
	);
};

export default SearchFiled;
