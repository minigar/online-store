import axios, { AxiosRequestConfig } from "axios";

const BASE_URL =
  process.env.REACT_APP_NEXT_PUBLIC_SERVICE_URL || "http://localhost:3001";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3001",
  },
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

export const http = httpClient;
