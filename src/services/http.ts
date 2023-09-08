import axios, { AxiosError } from 'axios'
// import services from '.'
// import utils from '../utils'

interface MethodValueTypes {
  url: string
  data?: any
  headers?: any
  params?: any
}

interface OptionsTypes {
  authErrorRedirect?: string
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

// intercept api calls here to log people out if api response 401
// usually happens when token is no longer valid
axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  async function (err) {
    return interceptorErrorHandling(err)
  },
)

const POST = async (value: MethodValueTypes, options?: OptionsTypes) => {
  const { url, data, headers } = value
  // console.log()
  const response = await axios.post(url, data, {
    headers: headers,
  })
  return response.data
  // const token = utils.store.get('token') || ''
  // try {

  // } catch (error) {
  //   throw error
  // }
}

const PATCH = async (value: MethodValueTypes, options?: OptionsTypes) => {
  const { url, data, headers } = value
  // const token = utils.store.get('token') || ''
  const response = await axios.patch(url, data, {
    headers: headers,
  })
  return response.data
  // try {
  //   const response = await axios.patch(url, data, {
  //     headers: headers,
  //   })
  //   return response
  // } catch (error) {
  //   throw error
  // }
}

const PUT = async (value: MethodValueTypes, options?: OptionsTypes) => {
  const { url, data, headers } = value
  // const token = utils.store.get('token') || ''
  const response = await axios.put(url, data, {
    headers: headers,
  })
  return response.data
  // try {
  //   const response = await axios.put(url, data, {
  //     headers: headers,
  //   })
  //   return response
  // } catch (error) {
  //   throw error
  // }
}

const DELETE = async (value: MethodValueTypes, options?: OptionsTypes) => {
  const { url, data, headers } = value
  // const token = utils.store.get('token') || ''
  const response = await axios.delete(url, {
    headers: headers,
  })
  return response.data
  // try {
  //   const response = await axios.put(url, data, {
  //     headers: headers,
  //   })
  //   return response
  // } catch (error) {
  //   throw error
  // }
}

const GET = async (value: MethodValueTypes, options?: OptionsTypes) => {
  const { url, headers, params } = value
  // const token = utils.store.get('token') || ''

  const response = await axios.get(url, {
    headers: headers,
    params,
  })

  // console.log(response.data, "response.data")
  return response.data
  // try {

  // } catch (error) {
  //   // throw error
  // }
}

export { POST, PATCH, PUT, GET, DELETE }
