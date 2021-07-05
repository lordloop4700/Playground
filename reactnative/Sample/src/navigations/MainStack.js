import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import { Image } from 'react-native'
import styled from 'styled-components/native'

const Stack = createStackNavigator()

const HeaderButton = styled.TouchableOpacity`
  width: 50;
  height: 50;
`

const HeaderRight = styled.TouchableOpacity`
  width: 30;
  height: 30;
`

const LogoTitle = () => {
  return(
    <HeaderButton style={{resizeMode:'contain'}}>
      <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../../assets/soonroomLogo.png')} />
    </HeaderButton>
  )
}

const IconSetting = () => {
  return(
    <HeaderRight>
      <Image source={require('../../assets/icons/settings/settings.png')} style={{ width: 30, height: 30, resizeMode: 'contain'}} />
    </HeaderRight>
  )
}

const MainStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="Mainpage1" 
      screenOptions={{
        headerTitle: <LogoTitle />,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerRight: () => <IconSetting />,
        headerRightContainerStyle: {paddingRight: 10},
      }}
      
    >
      <Stack.Screen name="Mainpage1" component={MainScreen} />
    </Stack.Navigator>
  )
}

export default MainStack