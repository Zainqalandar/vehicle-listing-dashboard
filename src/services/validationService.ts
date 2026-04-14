// import { UserSchema, UserError } from '../types/user';

import type { UserError, UserSchema } from "../types/user";

export const validateForm = (obj: UserSchema): UserError => {
	const newError: UserError = {
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
	} else if (!/^\d{6}$/.test(obj.password)) {
		newError.password = 'Password must be exactly 6 digits';
	}

	return newError;
};

export const validateField = (
	fieldName: keyof UserSchema,
	value: string,
): string => {
	switch (fieldName) {
		case 'name':
			return value ? '' : 'Name is required';

		case 'email':
			if (!value) return 'Email is required';
			if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
			return '';

		case 'phone':
			if (!value) return 'Phone number is required';
			if (!/^\d{7,15}$/.test(value))
				return 'Phone number must contain 7 to 15 digits';
			return '';

		case 'password':
			if (!value) return 'Password is required';
			if (!/^\d{6}$/.test(value))
				return 'Password must be exactly 6 digits';
			return '';

		default:
			return '';
	}
};

export const isFormValid = (errors: UserError): boolean => {
	return Object.values(errors).every((val) => val === '');
};
