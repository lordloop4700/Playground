import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import { MainScreen, DetailScreen, SettingScreen, TeamIntroScreen, VersionInfo, ContactAdmin, DonateAdmin, WishListScreen } from '../screens'


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
  const navigation = useNavigation()
  const _onPress = () => {
    navigation.dispatch(CommonActions.navigate('Mainpage1'))
  }

  return(
    <HeaderButton style={{resizeMode:'contain'}} onPress={_onPress}>
      <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../../assets/soonroomLogo.png')} />
    </HeaderButton>
  )
}

const IconSetting = () => {
  const navigation = useNavigation()

  return(
    <HeaderRight onPress={() => navigation.dispatch(CommonActions.navigate('Settingpage'))}>
      <Image source={require('../../assets/icons/settings/settings.png')} style={{ width: 25, height: 25, resizeMode: 'contain'}} />
    </HeaderRight>
  )
}

const MainStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="Mainpage1" 
      screenOptions={{
        headerTitle: () => (
          <LogoTitle />
        ),
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerRight: () => <IconSetting />,
        headerRightContainerStyle: {paddingRight: 10},
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen name="Mainpage1" component={MainScreen} />
      <Stack.Screen name="Detailpage" component={DetailScreen} />
      <Stack.Screen name="Settingpage" component={SettingScreen} />
      <Stack.Screen name="TeamIntropage" component={TeamIntroScreen} />
      <Stack.Screen name="VersionInfopage" component={VersionInfo} />
      <Stack.Screen name="Contactpage" component={ContactAdmin} />
      <Stack.Screen name="Donatepage" component={DonateAdmin} />
      <Stack.Screen name="WishListpage" component={WishListScreen} />
    </Stack.Navigator>
  )
}

export default MainStack