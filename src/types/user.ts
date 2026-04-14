export interface UserSchema {
	name: string;
	email: string;
	countryCode: string;
	phone: string;
	password: string;
}

export interface UserError {
	name: string;
	email: string;
	countryCode: string;
	phone: string;
	password: string;
}

export type CountryOption = {
	code: string;
	dialCode: string;
	label: string;
	flag: string;
	placeholder: string;
};
