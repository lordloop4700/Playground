import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { SearchBar } from '../components'
import ReadWishList from '../components/ReadWishList'
import RoomList from '../components/RoomList'

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`

const Head = styled.View`
  height: 50px;
  background-color: #ffffff;
`

const Title = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #C7DEC5;
  flex-direction: row;
`

const ConfigurationView = styled.View`
  height: 44px;
  background-color: #F2F2F2;
  align-items: center;
  justify-content: center;
`

const MarginView = styled.View`
  margin: 0px 30px;
  flex-direction: row;
`

const ImageFlexReverse = styled.View`
 flex: 1;
 flex-direction: row-reverse;
`

const ContentsView = styled.View`
  flex: 1;
  background-color: #ffffff;
`

const WishListScreen = () => {
  const [roomList, setRoomList] = useState(false)
  const _RoomListOnPress = () => {
    setRoomList(!roomList)
  }

  return(
    <Container>
      <Head>
        <SearchBar setRoomList={_RoomListOnPress}/>
      </Head>
      { roomList ?
          <ContentsView>
            <RoomList />
          </ContentsView>
        :
          <ContentsView>
            <Title>
              <Image source={require('../../assets/icons/wishlist/like_list.png')} />
              <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-4Regular', margin: 5}}>찜한 목록</Text>
            </Title>
            <ConfigurationView>
              <MarginView>
                <Text style={{flex: 2, fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>이름</Text>
                <Text style={{flex: 2, fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>구역</Text>
                <Text style={{flex: 2, fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>년세 / 반년세</Text>
                <ImageFlexReverse>
                  <Image source={require('../../assets/icons/checkbox/user_liked_list.png')}/>
                </ImageFlexReverse>
              </MarginView>
            </ConfigurationView>
            <ScrollView>
              <ReadWishList />
            </ScrollView>
          </ContentsView>
      }
      </Container>
  )
}

export default WishListScreen