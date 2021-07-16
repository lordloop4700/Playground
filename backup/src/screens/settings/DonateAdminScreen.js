import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native'
import SettingHeader from '../../components/SettingHeader'
import SettingTextView from '../../components/SettingTextView'
import { DONATEACCOUNT } from '../../../text/AppTextContainer'

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

const TitleView = styled.View`
  height: 70px;
  width: 80%;
`

const TitleTextImage = styled.View`
  flex-direction: row;
`

const UnderLine = styled.View`
  width: 80%;
  height: 1px;
  border: 1px solid black;
`

const DonateAdmin = () => {
  return(
    <Container>
      <Head>
        <SettingHeader text={'설정'}/>
      </Head>
      <TextSection>
        <TitleView>
          <TitleTextImage>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 24, fontFamily: 'S-CoreDream-5Medium'}}>Donate for</Text>
            </View>
            <Image source={require('../../../assets/icons/donate/donate_logo.png')}/>
          </TitleTextImage>
          <UnderLine />
        </TitleView>
        <TextView>
          <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-4Regular'}}>{DONATEACCOUNT}</Text>
        </TextView>
      </TextSection>
    </Container>
  )
}

export default DonateAdmin