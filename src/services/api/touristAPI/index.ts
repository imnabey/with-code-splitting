import { GET } from 'src/services/http'
import { END_POINT } from 'src/constant'

const getTouristListAPI = (page: number, data: number) => {
  const token = localStorage.getItem('token') || "";
  const param = {
    url: `${END_POINT}/api/Tourist?per_page=${page}&page=${data}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  return GET(param)
}

export { getTouristListAPI }
