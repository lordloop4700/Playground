import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AreaTag from '../components/AreaTag'
import { saveWishList, readWishList, deleteWishList } from '../util/Storage'
import LoadingIndicator from './LoadingIndicator'
import AsyncStorage from '@react-native-community/async-storage'


const Container = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
`

const DataView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
  flex-direction: row;
`

const ImageFlexReverse = styled.View`
  flex: 1;
  flex-direction: row-reverse;
`

const AreaView = styled.View`
  height: 16;
  width: 40;
  /* border: 1.5px solid #0D3692;
  border-radius: 15px; */
  align-items: center;
  justify-content: center;
`

const BetweenView = styled.View`
  height: 1px;
  width: 95%;
  border: 1px solid #E9E9E9;
`

const OneLineRoomData = ({ roomdata, setStorage }) => {
  console.log('여기는 onlineroomdata의 storage 콘솔입니다')
  console.log(roomdata)
  const _onPress = async () => {
    await deleteWishList(roomdata.id)
    const changeData = await readWishList()
    setStorage(changeData)
  }

  return(
    <DataView>
      <Text style={{flex: 2, fontSize: 16, fontFamily: 'S-CoreDream-4Regular'}}>{roomdata.title}</Text>
      <View style={{flex: 2}}>
        <AreaView>
          <AreaTag area={roomdata.area}/>
        </AreaView>
      </View>
      <Text style={{flex: 2, fontSize: 16, fontFamily: 'S-CoreDream-4Regular'}}>{roomdata.year} / {roomdata.half_year}</Text>
      <ImageFlexReverse>
        <TouchableOpacity onPress={_onPress}>
          <Image style={{height: 18, width: 20}} source={require('../../assets/icons/wish-heart/touched_heart.png')}/>
        </TouchableOpacity>
      </ImageFlexReverse>
    </DataView>
  )
}

const ReadWishList = () => {
  const [loading, setLoading] = useState(null)
  const [storage, setStorage] = useState(null)

  useEffect(() => {
    const CheckStorageLoading = async () => {
      try{
        console.log('=======시작=======')
        setLoading(true)
        const data = await readWishList()
        setStorage(data)
      }catch(err){
        console.log('[+]DB error' + err)
      }
      setLoading(false)
    }
    CheckStorageLoading()
  }, [])

  return(
    <>
      {loading ? <LoadingIndicator /> : 
      storage === null ? <></>:
      storage.map((room, index) => (
        <Container>
          <OneLineRoomData roomdata={room} key={room.id} setStorage={setStorage} />
          <BetweenView />
        </Container>
      ))}
    </>
  )
}

export default ReadWishList