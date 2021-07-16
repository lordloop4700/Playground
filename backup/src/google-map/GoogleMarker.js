import React from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const test = [

]

const GoogleMapMarker = () => {
  const _onPress = () => {
    console.log('showbal')
  }

  return(
    <>
      <Marker 
        image={require('../../assets/icons/marker/room_instruction.png')}
        coordinate={{latitude: 36.77456539680548, longitude: 126.93514461305568}}
        onPress={_onPress}
        title={'shibal'}
        // key={}
      />
    </>
  )
}

export default GoogleMapMarker