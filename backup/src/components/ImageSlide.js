import React, { useState } from 'react'
import styled from 'styled-components/native'
import { SliderBox } from 'react-native-image-slider-box'

const Container = styled.View`
  flex: 1;
`

const ImageSlide = () => {
  const [parentHeight, setParentHeight] = useState(0);
  const onLayout = event => {
    const { height } = event.nativeEvent.layout;
    setParentHeight(height);
  };

  let _images = [
    require('../../assets/test0.jpg'),
    require('../../assets/test1.png'),
    require('../../assets/test2.jpeg'),
    require('../../assets/test3.jpg'),
    require('../../assets/testroom1.jpg'),
    require('../../assets/kimetsunoyaiba.jpg'),
  ]

  return(
    <Container onLayout={onLayout}>
      <SliderBox images={_images} sliderBoxHeight={parentHeight} />
    </Container>
  )
}

export default ImageSlide