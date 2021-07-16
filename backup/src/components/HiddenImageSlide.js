import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, FlatList } from 'react-native'
import Page from '../components/Page'

const Container = styled.View`
  height: 150px;
  background-color: #F2F2F2;
  justify-content: center;
  align-items: center;
`

const HiddenImageSlide = () => {
  const pageWidth = 160
  const offset = 25
  const gap = 15

  const renderItem = ({item}) => {
    return (
      <Page item={item} style={{height: '100%', width: pageWidth, marginHorizontal: gap / 2}} />
    );
  }

  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
  };
  
  const pages = [
    {
      num: 1,
      color: '#86E3CE',
      roomImage: '../assets/test0.jpg'
    },
    {
      num: 2,
      color: '#D0E6A5',
      roomImage: '../assets/test0.jpg'
    },
    {
      num: 3,
      color: '#FFDD94',
      roomImage: '../assets/test0.jpg'
    },
    {
      num: 4,
      color: '#FA897B',
      roomImage: '../assets/test0.jpg'
    },
    {
      num: 5,
      color: '#CCABD8',
      roomImage: '../assets/test0.jpg'
    },
  ];

  return(
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: (offset) / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}

export default HiddenImageSlide