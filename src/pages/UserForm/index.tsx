import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface userSchema {
	name: string;
	email: string;
	phone: string;
	password: string;
}

const UserForm = () => {
	const init: userSchema = {
		name: '',
		email: '',
		phone: '',
		password: '',
	};
  const { theme } = useTheme();
	const [formData, setFormData] = useState<userSchema>(init);
	const [error, setError] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
	});

	// Form validation logic (example)

	const validate = (obj) => {
		const newError = {
			name: '',
			email: '',
			phone: '',
			password: '',
		};
		if (!obj.name) {
			newError.name = 'Name is required';
		}
		if (!obj.email) {
			newError.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(obj.email)) {
			newError.email = 'Email is invalid';
		}
		if (!obj.phone) {
			newError.phone = 'Phone number is required';
		} else if (!/^\d{10}$/.test(obj.phone)) {
			newError.phone = 'Phone number must be 10 digits';
		}
		if (!obj.password) {
			newError.password = 'Password is required';
		} else if (obj.password.length < 6) {
			newError.password = 'Password must be at least 6 characters';
		}
		setError(newError);
    console.log("newError: ", newError);
		return Object.values(newError).every((val) => val === '');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		setError((prev) => ({
			...prev,
			[name]: undefined,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const isvalid = validate(formData);
		if (!isvalid) {
      console.log('validation failed');
			return;
		}
		// Handle form submission logic here
		console.log(formData);
		setFormData(init);
	};

	return (
		<div className={`max-w-md mx-auto mt-8 p-6 ${theme === 'dark' ? "dark:bg-gray-800": "bg-white"} rounded-lg shadow-lg`}>
			<h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
				User Form
			</h1>

			<form onSubmit={handleSubmit} noValidate className="space-y-4">
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
						value={formData.name}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Enter your name"
					/>
					{/* name error message */}
					{error.name && (
						<p className="mt-1 text-sm text-red-600 dark:text-red-500">
							{error.name}
						</p>
					)}
				</div>

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
						value={formData.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Enter your email"
					/>
					{/* email error message */}
					{error.email && (
						<p className="mt-1 text-sm text-red-600 dark:text-red-500">
							{error.email}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
					>
						Phone:
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Enter your phone number"
					/>
					{/* phone error message */}
					{error.phone && (
						<p className="mt-1 text-sm text-red-600 dark:text-red-500">
							{error.phone}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
					>
						Password:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Enter your password"
					/>
					{/* password error message */}
					{error.password && (
						<p className="mt-1 text-sm text-red-600 dark:text-red-500">
							{error.password}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UserForm;
