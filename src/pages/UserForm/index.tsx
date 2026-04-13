import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface userSchema {
	name: string;
	email: string;
	countryCode: string;
	phone: string;
	password: string;
}

type CountryOption = {
	code: string;
	dialCode: string;
	label: string;
	flag: string;
	placeholder: string;
};

const countryOptions: CountryOption[] = [
	{ code: 'US', dialCode: '+1', label: 'United States', flag: '🇺🇸', placeholder: '123 456 7890' },
	{ code: 'IN', dialCode: '+91', label: 'India', flag: '🇮🇳', placeholder: '91234 56789' },
	{ code: 'PK', dialCode: '+92', label: 'Pakistan', flag: '🇵🇰', placeholder: '3012 345678' },
	{ code: 'GB', dialCode: '+44', label: 'United Kingdom', flag: '🇬🇧', placeholder: '7123 456789' },
	{ code: 'AE', dialCode: '+971', label: 'United Arab Emirates', flag: '🇦🇪', placeholder: '5012 345678' },
];

const UserForm = () => {
	const init: userSchema = {
		name: '',
		email: '',
		countryCode: '+1',
		phone: '',
		password: '',
	};
	const { theme } = useTheme();
	const [formData, setFormData] = useState<userSchema>(init);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [error, setError] = useState<Record<keyof userSchema, string>>({
		name: '',
		email: '',
		countryCode: '',
		phone: '',
		password: '',
	});

	const selectedCountry =
		countryOptions.find((country) => country.dialCode === formData.countryCode) ||
		countryOptions[0];

	// Form validation logic (example)

	const validate = (obj: userSchema) => {
		const newError: Record<keyof userSchema, string> = {
			name: '',
			email: '',
			countryCode: '',
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
		} else if (!/^\d{7,15}$/.test(obj.phone)) {
			newError.phone = 'Phone number must contain 7 to 15 digits';
		}
		if (!obj.password) {
			newError.password = 'Password is required';
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(obj.password)
		) {
			newError.password =
				'Password must be 8+ chars, include uppercase, lowercase, number & special character';
		}
		setError(newError);
		console.log('newError: ', newError);
		return Object.values(newError).every((val) => val === '');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		const fieldName = name as keyof userSchema;
		setFormData((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
		setError((prev) => ({
			...prev,
			[fieldName]: '',
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
		<div
			className={`max-w-md mx-auto mt-8 p-6 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}
		>
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
					<div className="flex gap-2">
						<div className="relative w-20">
							<select
								id="countryCode"
								name="countryCode"
								value={formData.countryCode}
								onChange={handleChange}
								className="w-full appearance-none px-3 py-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							>
								{countryOptions.map((country) => (
									<option key={country.code} value={country.dialCode}>
										{country.flag} {country.dialCode}
									</option>
								))}
							</select>
							<span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
								▾
							</span>
						</div>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder={selectedCountry.placeholder}
						/>
					</div>
					{/* phone error message */}
					{error.phone && (
						<p className="mt-1 text-sm text-red-600 dark:text-red-500">
							{error.phone}
						</p>
					)}
				</div>

				<div className="relative">
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
						placeholder="Enter your password"
					/>

					{/* Show/Hide Button */}
					<button
						type="button"
						onClick={() => setShowPassword((prev) => !prev)}
						className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
					>
						{showPassword ? 'Hide' : 'Show'}
					</button>
				</div>
        {/* password error message */}
        {error.password && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">
            {error.password}
          </p>
        )}

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
