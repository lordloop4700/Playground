import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import SearchBar from '../components/SearchBar'
import BottomBoard from '../components/BottomBoard'
import BottomAccodion from '../components/BottomAccordion'
// import NaverMap from '../naver/NaverMap'
// import MainWebView from '../kakaos/WebView'
import RoomList from '../components/RoomList'
import HiddenImageSlide from '../components/HiddenImageSlide'
import GoogleMap from '../google-map/GoogleMap'

const Container = styled.View`
  flex: 1;
`

const Head = styled.View`
  height: 50px;
  background-color: #ffffff;
`

const Middle = styled.View`
  flex: 1;
`

const AccordionView = styled.View`
  /* height: ${({value}) => value ? 100 : 30}px; */
  height: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #33A23D4D;
`

const Bottom = styled.View`
  height: 80;
`

const ContentsView = styled.View`
  flex: 1;
  background-color: #ffffff;
`

const AccodionTextImageView = styled.View`
  flex: 1;
  flex-direction: row;
`

const RoomNameView = styled.View`
  flex: 9;
  justify-content: center;
  background-color: #C7DEC5;
`

const RoomName = styled.Text`
  font-size: 16px;
  font-family: 'S-CoreDream-5Medium';
  margin-left: 20px;
`

const ArrowView = styled.View`
  flex: 1;
  background-color: #0D7E00;
  justify-content: center;
  align-items: center;
`

const ChangeImage = ({accordionState}) => {
  if(accordionState === true){
    return(
      <Image source={require('../../assets/icons/carousel/downroom.png')}/>
    )
  }else{
    return(
      <Image source={require('../../assets/icons/carousel/uproom.png')} />
    )
  }
}

const MainScreen = () => {
  const [roomList, setRoomList] = useState(false)
  const _RoomListOnPress = () => {
    setRoomList(!roomList)
  }

  const [isAccordion, setIsAccordion] = useState(false)

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
            <Middle>
              <GoogleMap />
            </Middle>
            <TouchableOpacity onPress={() => setIsAccordion(!isAccordion)}>
              <AccordionView value={isAccordion}>
                <AccodionTextImageView>
                  <RoomNameView>
                    <RoomName>수빌리지(검색용)</RoomName>
                  </RoomNameView>
                  <ArrowView>
                    <ChangeImage accordionState={isAccordion}/>
                  </ArrowView>
                </AccodionTextImageView>
              </AccordionView>
            </TouchableOpacity>
            {isAccordion ? <HiddenImageSlide /> : <View />}
          </ContentsView>
      }
      <Bottom>
        <BottomBoard />
      </Bottom>
    </Container>
  )
}

export default MainScreen