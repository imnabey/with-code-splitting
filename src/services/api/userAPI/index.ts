
import qs from 'qs'

import { POST, GET } from 'src/services/http'
import { END_POINT } from 'src/constant'

const token = localStorage.getItem('token') || "";

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

const getUserAPI = (id: string) => {
  const param = {
    url: `${END_POINT}/api/users/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  return GET(param)
}

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
};

const tokenData = () => {
  token
};

export { loginAPI, registerAPI, logout, getUserAPI, tokenData }