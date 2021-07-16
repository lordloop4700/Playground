import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native'
import SettingHeader from '../../components/SettingHeader'
import SettingTextView from '../../components/SettingTextView'
import { WEBURL, INSTAGRAM, EMAIL } from '../../../text/AppTextContainer'

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

const ContentsView = styled.View`
  height: 225;
  width: 90%;
  justify-content: center;
`

const OneLineContent = styled.View`
  height: 35px;
  width: 100%;
  margin: 12px 0px;
  flex-direction: row;
  align-items: center;
`

const TextStyled = styled.Text`
  font-size: 16px;
  font-family: 'S-CoreDream-4Regular';
  margin-left: 10px;
`

const TitleView = styled.View`
  height: 48px;
  width: 80%;
`

const UnderLine = styled.View`
  width: 80%;
  height: 1px;
  border: 1px solid black;
`

const ContactAdmin = () => {
  return(
    <Container>
      <Head>
        <SettingHeader text={'문의하기'}/>
      </Head>
      <TextSection>
        <TitleView>
          <Text style={{fontSize: 24, fontFamily: 'S-CoreDream-5Medium'}}>Contact Us</Text>
          <UnderLine />
        </TitleView>
        <TextView>
          <ContentsView>
            <OneLineContent>
              <Image source={require('../../../assets/icons/contact/icon_website.png')}/>
              <TextStyled>{WEBURL}</TextStyled>
            </OneLineContent>
            <OneLineContent>
              <Image source={require('../../../assets/icons/contact/icon_instagram.png')}/>
              <TextStyled>{INSTAGRAM}</TextStyled>
            </OneLineContent>
            <OneLineContent>
              <Image source={require('../../../assets/icons/contact/icon_email.png')}/>
              <TextStyled>{EMAIL}</TextStyled>
            </OneLineContent>
          </ContentsView>
        </TextView>
      </TextSection>
    </Container>
  )
}

export default ContactAdmin