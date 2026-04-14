import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import NameField from '../../components/FormFields/NameField';
import EmailField from '../../components/FormFields/EmailField';
import PhoneField from '../../components/FormFields/PhoneField';
import PasswordField from '../../components/FormFields/FormPasswordField';
import SubmitButton from '../../components/FormFields/SubmitButton';
import {
	validateForm,
	validateField,
	isFormValid,
} from '../../services/validationService';
import type { UserError, UserSchema } from '../../types/user';
import { COUNTRY_OPTIONS } from '../../constants/countryOptions';
const UserForm = () => {
	const initialFormData: UserSchema = {
		name: '',
		email: '',
		countryCode: '+1',
		phone: '',
		password: '',
	};

	const initialError: UserError = {
		name: '',
		email: '',
		countryCode: '',
		phone: '',
		password: '',
	};

	const { theme } = useTheme();
	const [formData, setFormData] = useState<UserSchema>(initialFormData);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [error, setError] = useState<UserError>(initialError);
	const [success, setSuccess] = useState<string>('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		const fieldName = name as keyof UserSchema;

		if (success) {
			setSuccess('');
		}

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));

		// Validate only the changed field
		const fieldError = validateField(fieldName, value);
		setError((prev) => ({
			...prev,
			[fieldName]: fieldError,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors = validateForm(formData);
		setError(newErrors);

		if (!isFormValid(newErrors)) {
			setSuccess('');
			return;
		}

		// Form is valid - reset it
		setFormData(initialFormData);
		setSuccess('Form submitted successfully!');
	};

	return (
		<div
			className={`max-w-xl mx-auto mt-16 p-6 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}
		>
			<h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
				User Form
			</h1>

			{success && (
				<p className="mb-4 text-center text-green-700 dark:text-green-300 font-medium">
					{success}
				</p>
			)}

			<form onSubmit={handleSubmit} noValidate className="space-y-4">
				<NameField
					value={formData.name}
					error={error.name}
					onChange={handleChange}
				/>

				<EmailField
					value={formData.email}
					error={error.email}
					onChange={handleChange}
				/>

				<PhoneField
					countryCode={formData.countryCode}
					phoneValue={formData.phone}
					phoneError={error.phone}
					countryOptions={COUNTRY_OPTIONS}
					onChange={handleChange}
				/>

				<PasswordField
					value={formData.password}
					error={error.password}
					showPassword={showPassword}
					onChange={handleChange}
					onToggleShow={() => setShowPassword((prev) => !prev)}
				/>

				<SubmitButton>Submit</SubmitButton>
			</form>
		</div>
	);
};

export default UserForm;
