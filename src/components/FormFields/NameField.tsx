import React from 'react';

interface NameFieldProps {
	value: string;
	error: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameField: React.FC<NameFieldProps> = ({ value, error, onChange }) => {
	return (
		<div>
			<label
				htmlFor="name"
				className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
			>
				Name:
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={value}
				onChange={onChange}
				className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
				placeholder="Enter your name"
			/>
			{error && (
				<p className="mt-1 text-sm text-red-600 dark:text-red-500">
					{error}
				</p>
			)}
		</div>
	);
};

export default NameField;
