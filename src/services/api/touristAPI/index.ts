import qs from 'qs'

import { GET, POST, DELETE, PUT } from 'src/services/http'
import { END_POINT } from 'src/utils/constant'

const getTouristListAPI = (data: { page: number, token: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist?page=${data.page}`,
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  }
  return GET(param)
}

const getTouristByIdAPI = (data: { id: string, token: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${data.id}`,
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  }
  return GET(param)
}

const addTouristAPI = (data: { tourist_name: string, tourist_email: string, tourist_location: string, token: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist`,
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
  return POST(param)
}

const deleteTouristAPI = (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string, token: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${data.id}`,
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
  return DELETE(param)
}

const updateTouristAPI = (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string, token: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${data.id}`,
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
  return PUT(param)
}


export { getTouristListAPI, addTouristAPI, deleteTouristAPI, getTouristByIdAPI, updateTouristAPI }
