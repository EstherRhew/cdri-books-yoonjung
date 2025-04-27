import Axios, { InternalAxiosRequestConfig } from 'axios';

const API_URL = 'https://dapi.kakao.com/v3';

const axios = Axios.create({
  baseURL: `${API_URL}`,
});

interface ApiResponse<T> {
  status: number;
  success: boolean;
  data: T | null;
  error?: unknown;
}

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (apiKey) {
    config.headers.Authorization = `KakaoAK ${apiKey}`;
  }
  return config;
});

axios.interceptors.response.use(
  res => res,
  err => {
    const errRes: ApiResponse<null> = {
      status: err.response?.status || 500,
      success: false,
      data: null,
      error: err,
    };
    return Promise.reject(errRes);
  }
);

export const api = {
  get: <T>(url: string, params?: Record<string, unknown>) => axios.get<T>(url, { params }),
};
