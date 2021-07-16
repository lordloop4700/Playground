import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import SettingHeader from '../../components/SettingHeader'
import SettingButton from '../../components/SettingButton'

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`

const Head = styled.View`
  height: 50px;
  background-color: #ffffff;
`

const ButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const SettingScreen = () => {
  return(
    <Container>
      <Head>
        <SettingHeader text={'설정'}/>
      </Head>
      <ButtonView>
        <SettingButton text={'팀 소개'} screen={'TeamIntropage'}/>
        <SettingButton text={'버전 정보'} screen={'VersionInfopage'}/>
        <SettingButton text={'문의하기'} screen={'Contactpage'}/>
        <SettingButton text={'후원하기'} screen={'Donatepage'}/>
      </ButtonView>
    </Container>
  )
}

export default SettingScreen