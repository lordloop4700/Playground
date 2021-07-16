import React from 'react'
import styled from 'styled-components/native'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import AreaTag from './AreaTag'

const TitleView = styled.View`
  height: 32px;
  width: 100%;
  background-color: #EFEFEF;
  justify-content: center;
  align-items: center;
`

const RoomView = styled.View`
  height: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`

const Title = ({ text }) => {
  return(
    <TitleView>
      <View style={{ width: '80%' }}>
        <Text style={{ fontSize: 11, fontFamily: 'S-CoreDream-4Regular'}}>{text}</Text>
      </View>
    </TitleView>
  )
}

const RoomNameAndArea = () => {
  return(
    <TouchableOpacity>
      <RoomView>
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ flex: 1, fontSize: 12, fontFamily: 'S-CoreDream-5Medium'}}>가나빌</Text>
          <AreaTag area={'1'}/>
        </View>
      </RoomView>
    </TouchableOpacity>
  )
}

const RoomList = () => {
  return(
    <ScrollView>
        <Title text={'ㄱ'}/>
        <RoomNameAndArea />
    </ScrollView>
  )
}

export default RoomList