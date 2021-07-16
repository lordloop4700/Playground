import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View`
  height: 225;
  width: 90%;
  background-color: #C7DEC5;
`

const SettingTextView = ({text}) => {
  return(
    <Container>
      <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-4Regular', color: '#00358A'}}>{text}</Text>
      <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-4Regular', color: '#00358A'}}>코딩독</Text>
      <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-4Regular'}}>코딩독은 순천향대에서 시작한 IT기반 기술 창업을 목표로 하는 스타트업입니다. 현재 기획4명, 개발 4명의 인원으로 구성되어 있습니다. 프로젝트 순룸은 순천향대학교 학생들의 자취방 정보 불균형을 해소하기 위해 시작한 공익성 프로젝트입니다. 순룸은 현재 코딩독 사비로 운영중입니다.</Text>
    </Container>
  )
}

export default SettingTextView