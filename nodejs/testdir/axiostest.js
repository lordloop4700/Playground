const axios = require('axios')

const readRoomsDataApi = async () => {
  const result = await axios.get('http://dev.codingdog.co.kr:45556/user/room/read')
  console.log('api\n' + JSON.stringify(result.data))
  return result.data
}

readRoomsDataApi()

const codingdog = 'http://dev.codingdog.co.kr:45556'
const API = axios.create({ withCredentials: true })

const getRooms  = async () =>  {
  const result = await API.get(`${codingdog}/user/room/read`)
  console.log(result.data)
}


console.log('testeststs')
getRooms()