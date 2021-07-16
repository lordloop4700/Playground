import AsyncStorage from '@react-native-community/async-storage'

let test = [
  {
    id: 1,
    title: '수빌리지',
    area: '1',
    year: 400,
    half_year: 200,
  },
  {
    id: 2,
    title: 'testetst',
    area: '1',
    year: 400,
    half_year: 200,
  },
  {
    id: 3,
    title: '추가',
    area: '2',
    year: 100,
    half_year: 100,
  }
]

export const STORAGE_KEY = 'soonroom_wishlist'

const saveWishList = async (data) => {
  try{
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data), () => {
      console.log('wishlist save')
    })
  }catch(err){
    console.error(err)
  }
}

const readWishList = async () => {
  const rooms = await AsyncStorage.getItem(STORAGE_KEY)
  let result = JSON.parse(rooms)

  return result
}

const deleteWishList = async ( id ) => {
  const rooms = await AsyncStorage.getItem(STORAGE_KEY)
  let result = JSON.parse(rooms)
  result = result.filter(target => parseInt(target.id) !== id)

  await saveWishList(result)
}

// saveWishList(test)

export {saveWishList, readWishList, deleteWishList}