import { GET } from 'src/services/http'
import { END_POINT } from 'src/constant'

const getTouristListAPI = (page: number, data: number) => {
  const param = {
    url: `${END_POINT}/api/Tourist?per_page=${page}&page=${data}`,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE4MTIyOWQyLWVmMDEtNDE4My1iMTc2LWNkNGI1MDIwMDdlMyIsImVtYWlsIjoibmFiaWxhaEBnbWFpbC5jb20iLCJuYW1lIjoiTmFiaWxhaCIsImlhdCI6MTY5MzkyMDk5NSwiZXhwIjoxNjk0MDA3Mzk1fQ.MyfIFpnZb1Y3xOOAAI_DtMdsw6QN_sgnxfR1FEmccQk`,
      'Content-Type': 'application/json',
    },
  }
  return GET(param)
}

export { getTouristListAPI }
