import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { axios } from './HttpInstance';

const sendRequest = <T>(config: AxiosRequestConfig): Promise<T> => axios.request<T, AxiosResponse<T>>(config)
	.then(res => Promise.resolve(res.data))
	.catch((error: AxiosError) => Promise.reject(error?.response?.data ?? error));

export const getFactory = <T>(url: string) => sendRequest<T>(
	{ url, method: 'GET' as const as any },
);

export const postFactory = <T, K>(url: string, body: T) => sendRequest<K>(
	{
		url,
		method: 'POST' as const as any,
		data: body,
	},
);

export const putFactory = <T, K>(url: string, body: T) => sendRequest<K>(
	{
		url,
		method: 'PUT' as const as any,
		data: body,
	},
);

export const deleteFactory = (url: string) => sendRequest<void>(
	{ url, method: 'GET' as const as any },
);
