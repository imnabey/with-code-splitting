import { GET, POST, DELETE, PUT } from 'src/services/http'
import { END_POINT } from 'src/constant'
import qs from 'qs'

const token = localStorage.getItem('token') || "";

const headerJson = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

const headerXWwwForm = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/x-www-form-urlencoded',
}

const getTouristListAPI = (page: number) => {
  const param = {
    url: `${END_POINT}/api/Tourist?page=${page}`,
    headers: {
      ...headerJson
    },
  }
  return GET(param)
}

const getTouristByIdAPI = (id: string) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${id}`,
    headers: {
      ...headerJson
    },
  }
  return GET(param)
}

const addTouristAPI = (data: { tourist_name: string, tourist_email: string, tourist_location: string }) => {
  console.log(data, "data")
  const param = {
    url: `${END_POINT}/api/Tourist`,
    headers: {
      ...headerXWwwForm
    },
    data: qs.stringify(data),
  }
  return POST(param)
}

const deleteTouristAPI = (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${data.id}`,
    headers: {
      ...headerXWwwForm
    },
    data: qs.stringify(data),
  }
  return DELETE(param)
}

const updateTouristAPI = (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string }) => {
  const param = {
    url: `${END_POINT}/api/Tourist/${data.id}`,
    headers: {
      ...headerXWwwForm
    },
    data: qs.stringify(data),
  }
  return PUT(param)
}


export { getTouristListAPI, addTouristAPI, deleteTouristAPI, getTouristByIdAPI, updateTouristAPI }
