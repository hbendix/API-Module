import Axios, { AxiosInstance, AxiosError } from 'axios';
import { defaultHeaders } from './Headers';
import { HttpStatus } from './ResponseCode';

export const axios: AxiosInstance = Axios.create({
	timeout: 10000,
	headers: {
		...defaultHeaders,
	},
});

export function RegisterInterceptor(): void {
	axios.interceptors.response.use(response => response, async (error: AxiosError) => {
		if (!error.response) {
			// todo: handle no internet
			throw error;
		}
		if (error.response.status === HttpStatus.FORBIDDEN) {
			// user is not authenticated 
			throw error;
		}

		throw error;
	});
}
