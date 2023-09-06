import { POST } from 'src/services/http'
import { END_POINT } from 'src/constant'
import qs from 'qs'

const loginAPI = (data: { email: string, password: string }) => {
  const param = {
    url: `${END_POINT}/api/authaccount/login`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
  return POST(param)
}

const registerAPI = (data: { email: string, password: string }) => {
  const param = {
    url: `${END_POINT}/api/authaccount/registration`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
  return POST(param)
}

export { loginAPI, registerAPI }