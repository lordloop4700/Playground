import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 37px;
  margin: 10px 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #00000029;
  background-color: #C7DEC5;
`

const SettingButton = ({text, screen}) => {
  const navigation = useNavigation()
  
  const _onPress = () => {
    navigation.dispatch(CommonActions.navigate(screen))  
  }

  return(
    <Container onPress={_onPress}>
      {/* <View style={{paddingLeft: '60%', paddingRight: '60%'}}> */}
        <Text style={{fontSize: 15, fontFamily: 'S-CoreDream-4Regular'}}>{text}</Text>
      {/* </View> */}
    </Container>
  )
}

export default SettingButton