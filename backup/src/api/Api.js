import axios from 'axios'

const codingdog = 'http://dev.codingdog.co.kr:45556'
const API = axios.create({ withCredentials: true })

export const testapi = async () => {
  const result = await axios.get('http://dev.codingdog.co.kr:45556/user/room/read')
  return result
}


export const getRooms  = () => API.get(`${codingdog}/user/room/read`)
export const getAreas  = () => API.get(`${codingdog}/user/location/read`)
export const getPhotos = (id) => API.get(`${codingdog}/user/pictures/read/${id}`)