import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native'
import SettingHeader from '../../components/SettingHeader'
import SettingTextView from '../../components/SettingTextView'

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

const TextViewStyled = styled.View`
  height: 225;
  width: 80%;
  border-radius: 5px;
  background-color: #C7DEC5;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px #00000029;
`

const TextContainer = styled.View`
  height: 90%;
  width: 90%;
`

const OneLineText = styled.Text`
  flex: 1;
  font-size: 12px;
  font-family: 'S-CoreDream-4Regular';
`

const BlueText = styled.Text`
  font-size: 12px;
  font-family: 'S-CoreDream-4Regular';
  color: #00358A;
`

const TitleView = styled.View`
  height: 25px;
  width: 80%;
`

const CodingDog = () => {
  return(
    <TitleView>
      <Image source={require('../../../assets/icons/codingdog/team_logo.png')}/>
    </TitleView>
  )
}

const SoonRoom = () => {
  return(
    <View style={{width: 27, height: 20}}>
      <Image style={{height: 20, width: 27}} source={require('../../../assets/soonroomLogo.png')}/>
    </View>
  )
}

const TeamIntroScreen = () => {
  return(
    <Container>
      <Head>
        <SettingHeader text={'팀 소개'}/>
      </Head>
      <TextSection>
        <CodingDog />
        <TextViewStyled>
          <TextContainer>
            <OneLineText>
              <BlueText>코딩독</BlueText>
              은 순천향대학에서 시작한 IT기반 기술 창업을 목표로 하는 스타트업입니다.
            </OneLineText>
            <OneLineText>
              현재 기획 4명, 개발 4명의 인원으로 구성되어 있습니다.
            </OneLineText>
            <OneLineText>
              프로젝트  <SoonRoom />은 순천향대학교 학생들의 자취방 {`\n`}정보 불균형을 해소하기 위해 시작한 {`\n`}
              <BlueText>공익성 프로젝트</BlueText>입니다.
            </OneLineText>
            <OneLineText>
              <SoonRoom />은 현재 코딩독 사비로 운영중입니다.
            </OneLineText>
          </TextContainer>
        </TextViewStyled>
      </TextSection>
    </Container>
  )
}

export default TeamIntroScreen