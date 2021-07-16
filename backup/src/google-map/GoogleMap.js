import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import GoogleMapMarker from './GoogleMarker'
import { getRoomsData } from '../redux/RoomsData'
import { useSelector, useDispatch } from 'react-redux';
// import useActions from '../redux/useActions'

const AREA_1 = { latitude: 36.77324088810785, longitude: 126.93248555211902 }
const AREA_2 = { latitude: 36.773017445964015, longitude: 126.92946002059419 }
const AREA_3 = { latitude: 36.77633463548659, longitude: 126.93215295825517 }
const AREA_4 = { latitude: 36.77456539680548, longitude: 126.93514461305568 }

const AreaCircle = ({ region, fill }) => {
  const ref = useRef()
  const _onLayout = () => {
    if(ref.current){
      ref.current.setNativeProps({ fillColor: fill })
    }
  }

  return(
    <MapView.Circle
      ref={() => ref}
      center={region}
      radius={100}
      fillColor={fill}
      strokeColor={'transparent'}
      onLayout={_onLayout}
    />
  )
}

const GoogleMap = () => {
  const { room, area, photo } = useSelector(({ room }) => ({
    room: room.room,
    area: room.area,
    photo: room.photo
  }))
  console.log(room, area, photo)
  
  return(
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 36.77454690595654,
          longitude: 126.93253082534099,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        minZoomLevel={15}
      >
        <AreaCircle region={AREA_1} fill={'rgba(45, 81, 160, 0.25)'} />
        <AreaCircle region={AREA_2} fill={'rgba(95, 182, 102, 0.25)'}/>
        <AreaCircle region={AREA_3} fill={'rgba(254, 120, 56, 0.25)'}/>
        <AreaCircle region={AREA_4} fill={'rgba(62, 183, 219, 0.25)'}/>
        <GoogleMapMarker />
      </MapView>
    </View>
  )
}

export default GoogleMap