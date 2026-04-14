import React from 'react';
import { CountryOption } from '../../types/user';

interface PhoneFieldProps {
	countryCode: string;
	phoneValue: string;
	phoneError: string;
	countryOptions: CountryOption[];
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
	countryCode,
	phoneValue,
	phoneError,
	countryOptions,
	onChange,
}) => {
	const selectedCountry =
		countryOptions.find((country) => country.dialCode === countryCode) ||
		countryOptions[0];

	return (
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
						value={countryCode}
						onChange={onChange}
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
					value={phoneValue}
					onChange={onChange}
					className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
					placeholder={selectedCountry.placeholder}
				/>
			</div>
			{phoneError && (
				<p className="mt-1 text-sm text-red-600 dark:text-red-500">
					{phoneError}
				</p>
			)}
		</div>
	);
};

export default PhoneField;
