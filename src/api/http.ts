import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(response => ({
  ...response,
}))

export const GET = (path: string, params?: object) =>
  instance.get(path, { params })

export const POST = (path: string, body?: object) => instance.post(path, body)

export const PUT = (path: string, body?: object) => instance.put(path, body)

export const PATCH = (path: string, body?: object) => instance.patch(path, body)

export const DELETE = (path: string, body?: object) =>
  instance.delete(path, body)
