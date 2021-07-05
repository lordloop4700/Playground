import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import BottomBoard from '../components/BottomBoard'
import BottomAccodion from '../components/BottomAccordion'
// import MainWebView from '../kakaos/WebView'

const Container = styled.View`
  flex: 1;
`

const TestText = styled.Text`
  color: red;
`

const Head = styled.View`
  height: 50px;
  background-color: #ffffff;
`

const Middle = styled.View`
  flex: 1;
`

const AccordionView = styled.View`
  height: 30;
`

const Bottom = styled.View`
  height: 80;
`

const MainScreen = () => {

  return(
    <Container>
      <Head>
        <SearchBar />
      </Head>
      <Middle>
        {/* <MainWebView /> */}
        <Text>testsetsts</Text>
      </Middle>
      <AccordionView>
        <BottomAccodion />
      </AccordionView>
      <Bottom>
        <BottomBoard />
      </Bottom>
    </Container>
  )
}

export default MainScreen