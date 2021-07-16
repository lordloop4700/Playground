import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import BottomBoard from '../components/BottomBoard'
import RoomName from '../components/RoomName'
import ImageSlide from '../components/ImageSlide'
import DetailData from '../components/DetailData'

const Container = styled.View`
  flex: 1;
`
const Head = styled.View`
  height: 50px;
  background-color: #ffffff;
`

const RoomNameView = styled.View`
  flex: 2;
  background-color: #0D7E0033;
`

const TipView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

const RoomImageView = styled.View`
  height: 230;
`

const DetailDataView = styled.View`
  flex: 8;
  background-color: #ffffff;
`
const Bottom = styled.View`
  height: 80;
`

const TipText = () => {
  const tip = 'Tip! \"순룸 보고 연락드렸습니다\"라고 하시면 빠른 문의가 가능합니다'

  return(
    <Text style={{ fontSize: 10, fontFamily: 'S-CoreDream-4Regular'}}>{tip}</Text>
  )
}

const DetailScreen = () => {
  return(
    <Container>
      <Head>
        <SearchBar />
      </Head>
      <RoomNameView>
        <RoomName />
      </RoomNameView>
      <TipView>
        <TipText />
      </TipView>      
      <RoomImageView>
        <ImageSlide />
      </RoomImageView>
      <DetailDataView>
        <DetailData />
      </DetailDataView>
      <Bottom>
        <BottomBoard isDetail={true}/>
      </Bottom>
    </Container>
  )
}

export default DetailScreen