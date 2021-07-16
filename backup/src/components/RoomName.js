import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const RoomName = () => {
  return(
    <Container>
      <Text style={{fontSize: 26, fontFamily: 'S-CoreDream-5Medium'}}>수빌리지</Text>
    </Container>
  )
}

export default RoomName