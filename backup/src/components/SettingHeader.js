import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container  = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const SettingHeader = ({text}) => {
  return(
    <Container>
      <Text style={{fontSize: 20, fontFamily: 'S-CoreDream-5medium'}}>{text}</Text>
    </Container>
  )
}

export default SettingHeader