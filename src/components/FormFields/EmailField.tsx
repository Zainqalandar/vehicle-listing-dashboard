import React from 'react';

interface EmailFieldProps {
	value: string;
	error: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailField: React.FC<EmailFieldProps> = ({ value, error, onChange }) => {
	return (
		<div>
			<label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
			>
				Email:
			</label>
			<input
				type="email"
				id="email"
				name="email"
				value={value}
				onChange={onChange}
				className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
				placeholder="Enter your email"
			/>
			{error && (
				<p className="mt-1 text-sm text-red-600 dark:text-red-500">
					{error}
				</p>
			)}
		</div>
	);
};

export default EmailField;
