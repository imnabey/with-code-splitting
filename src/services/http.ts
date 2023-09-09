/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios'
interface MethodValueTypes {
  url: string
  data?: any
  headers?: any
  params?: any
}

const TIMEOUT = 25000 //15 sec
axios.defaults.timeout = TIMEOUT

const axiosInstance = axios.create()

const interceptorErrorHandling = (err: AxiosError) => {
  if (err.response && err.response.status === 401) {
    // remove token etc
  }
  return Promise.reject(err)
}

axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  async function (err) {
    return interceptorErrorHandling(err)
  },
)

const POST = async (value: MethodValueTypes) => {
  const { url, data, headers } = value
  try {
    const response = await axios.post(url, data, {
      headers: headers,
    })
    return response.data
  } catch (error) {
    // throw error
  }
}

const PATCH = async (value: MethodValueTypes) => {
  const { url, data, headers } = value

  try {
    const response = await axios.patch(url, data, {
      headers: headers,
    })
    return response.data
  } catch (error) {
    // throw error
  }
}

const PUT = async (value: MethodValueTypes) => {
  const { url, data, headers } = value

  try {
    const response = await axios.put(url, data, {
      headers: headers,
    })
    return response.data
  } catch (error) {
    // throw error
  }
}

const DELETE = async (value: MethodValueTypes) => {
  const { url, data, headers } = value

  try {
    const response = await axios.put(url, data, {
      headers: headers,
    })
    return response.data
  } catch (error) {
    // throw error
  }
}


const GET = async (value: MethodValueTypes) => {
  const { url, headers, params } = value
  try {
    const response = await axios.get(url, {
      headers: headers,
      params,
    })
    return response.data
  } catch (error) {
    // throw error
  }
}

export { POST, PATCH, PUT, GET, DELETE }
