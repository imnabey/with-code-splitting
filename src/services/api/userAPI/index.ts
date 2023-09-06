import { POST } from 'src/services/http'
import { END_POINT } from 'src/constant'

const loginAPI = () => {
  const param = {
    url: `${END_POINT}/api/authaccount/login`,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return POST(param)
}



export { loginAPI }
