import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export function makeRequest<T = any>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  return api(url, options)
    .then((res) => res.data)
    .catch((error) => Promise.reject(error?.response?.data?.message ?? 'Error'))
}
