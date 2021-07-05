/*global kakao*/
import React, { useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { View } from 'react-native'
import styled from 'styled-components/native'

const { kakao } = window;

const MapContents = styled.View`
  width: 100%;
  height: 100%;
`

// const MapContainer = () => {

//   useEffect(() => {
//     const container = document.getElementById('myMap')
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3
//     }
//     const map = new kakao.maps.Map(container, options);
//   }, [])

//   return (
//     <MapContents id="Mymap"></MapContents>
//   )
// }

// export default MapContainer; 

const MainWebView = () => {
  // useEffect(() => {
  //   const container = document.getElementById('myMap');
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   };
  //   const map = new kakao.maps.Map(container, options);
  // }, [])

  return(
    <WebView source={{uri: `https://dapi.kakao.com/v2/maps/sdk.js?appkey=0c85594c1a8d0ab8ceec6ba7b2af4acc`}} />
  )
}

export default MainWebView