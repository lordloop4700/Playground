import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import SettingHeader from '../../components/SettingHeader'
import SettingTextView from '../../components/SettingTextView'
import { APPVERSION } from '../../../text/AppTextContainer'

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`
const Head = styled.View`
  height: 50px;
`

const TextSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TextView = styled.View`
  height: 225;
  width: 80%;
  border-radius: 5px;
  background-color: #C7DEC5;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px #00000029;
`

const VersionInfo = () => {
  return(
    <Container>
      <Head>
        <SettingHeader text={'버전 정보'}/>
      </Head>
      <TextSection>
        <TextView>
          <Text style={{ fontSize: 20, fontFamily: 'S-CoreDream-4Regular' }}>{ APPVERSION }</Text>
        </TextView>
      </TextSection>
    </Container>
  )
}

export default VersionInfo