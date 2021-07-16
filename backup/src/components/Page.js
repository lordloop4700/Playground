import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native'

const PageItem = styled.View`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

export default function Page({item, style}) {
  const imageURL = item.roomImage
  const navigation = useNavigation()
  const _onPress = () => {  
    navigation.dispatch(CommonActions.navigate('Detailpage'))
  }

  return (
    <TouchableOpacity onPress={_onPress}>
      <PageItem color={item.color} style={style}>
          <Image source={require('../../assets/test0.jpg')} style={{ height: '95%', width: '100%'}}/>
      </PageItem>
    </TouchableOpacity>
  );
}