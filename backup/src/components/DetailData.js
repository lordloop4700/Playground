import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native'

const Container = styled.View`
  flex: 1;
`

const HowMuchView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #F2F2F2;
`
const DivHowMuchView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TagView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
const TagStyled = styled.View`
  font-size: 12px;
  padding: 4px 8px;
  margin: 0px 4px;
  background-color: #0D7E0033;
  border-radius: 8px;
`

const BuildOptionView = styled.View`
  flex: 2;
`

const BuildOptionLayout = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const BuildOptionContainer = styled.View`
  height: 90%;
  width: 85%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const OneBuildOptionView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const BuildOptionText = styled.Text`
  flex: 1;
  font-size: 12px;
  font-family: 'S-CoreDream-5Medium';
  margin-top: 10px;
`

const BetweenView = styled.View`
  height: 60%;
  width: 1px;
  border: 1px solid #E9E9E9;
`

const TagLayout = styled.View`
  flex: 1;
  width: 80%;
  flex-direction: row;
  align-items: center;
`

const YearsPrice = ({price}) => {
  return(
    <Text style={{ fontSize: 20, fontFamily: 'S-CoreDream-5Medium' }}>년세 {price}</Text>
  )
}

const HalfYearsPrice = ({price}) => {
  return(
    <Text style={{ fontSize: 20, fontFamily: 'S-CoreDream-5Medium' }}>반년세 {price}</Text>
  )
}

const TagText = ({text}) => {
  return(
    <TagStyled>
      <Text style={{fontFamily: 'S-CoreDream-5Medium'}}>{text}</Text>
    </TagStyled>
  )
}

const BuildOption = () => {
  return(
    <BuildOptionContainer>
      <OneBuildOptionView>
        <View style={{ flex: 2 }}>
          <Image source={require('../../assets/icons/build-option/cctv/icon_cctv.png')}/>
        </View>
        <BuildOptionText>CCTV</BuildOptionText>
      </OneBuildOptionView>
      <OneBuildOptionView>
        <View style={{ flex: 2 }}>
          <Image source={require('../../assets/icons/build-option/postbox/icon_postbox.png')}/>
        </View>
        <BuildOptionText>무인택배함</BuildOptionText>
      </OneBuildOptionView>
      <OneBuildOptionView>
        <View style={{ flex: 2 }}>
          <Image source={require('../../assets/icons/build-option/fire/icon_firefighter.png')}/>
        </View>
        <BuildOptionText>소방시설</BuildOptionText>
      </OneBuildOptionView>
      <OneBuildOptionView>
        <View style={{ flex: 2 }}>
          <Image source={require('../../assets/icons/build-option/parking/icon_parking.png')}/>
        </View>
        <BuildOptionText>주차장</BuildOptionText>
      </OneBuildOptionView>
    </BuildOptionContainer>
  )
}

const DetailData = () => {
  return(
    <Container>
      <HowMuchView>
        <DivHowMuchView>
          <YearsPrice price={400} />
        </DivHowMuchView>
        <BetweenView />
        <DivHowMuchView>
          <HalfYearsPrice price={200} />
        </DivHowMuchView>
      </HowMuchView>
      <TagView>
        <TagLayout>
          <TagText text={'1구역'}/>
          <TagText text={'리모델링'}/>
          <TagText text={'도시가스'}/> 
        </TagLayout>
        <TagLayout>

        </TagLayout>
        {/* 수정: 가져온 값에 따라서 반복하도록 설정하고, 특정 갯수가 되거나, 길이를 넘으면 아랫줄로 넘기는 기능이 필요함. */}
      </TagView>
      <BuildOptionView>
        <BuildOptionLayout>
          <BuildOption />
        </BuildOptionLayout>
        <BuildOptionLayout>
          <BuildOption />
        </BuildOptionLayout>
      </BuildOptionView>
    </Container>
  )
}

export default DetailData