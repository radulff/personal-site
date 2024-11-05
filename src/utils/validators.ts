export const validators = {
	isStringValid: (str: string) => str.trim().length > 0,
	isEmailValid: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
};
