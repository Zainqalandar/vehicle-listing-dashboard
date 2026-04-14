import React from 'react';

interface PasswordFieldProps {
	value: string;
	error: string;
	showPassword: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onToggleShow: () => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
	value,
	error,
	showPassword,
	onChange,
	onToggleShow,
}) => {
	return (
		<div>
			<label
				htmlFor="password"
				className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
			>
				Password:
			</label>
			<div className="relative">
				<input
					type={showPassword ? 'text' : 'password'}
					id="password"
					name="password"
					value={value}
					onChange={onChange}
					className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 pr-10"
					placeholder="Enter your password"
				/>

				{/* Show/Hide Button */}
				<button
					type="button"
					onClick={onToggleShow}
					className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
				>
					{showPassword ? 'Hide' : 'Show'}
				</button>
			</div>
			{error && (
				<p className="mt-1 text-sm text-red-600 dark:text-red-500">
					{error}
				</p>
			)}
		</div>
	);
};

export default PasswordField;
