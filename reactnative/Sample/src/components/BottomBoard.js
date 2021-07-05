import React from 'react'
import styled from 'styled-components/native'
import { Image, Text } from 'react-native'
import { List } from 'react-native-paper';

const Container = styled.View`
  flex: 1;
  border: 1px solid black;
`

const UtilContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

const BottomUtilView = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`

const UtilBotton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

const FilterButton = () => {
  return(
    <UtilBotton>
      <Image source={require('../../assets/icons/search-filters/search_filter.png')} style={{ height: 30, width: 30, resizeMode:'contain' }} />
      <Text>검색조건</Text>
    </UtilBotton>
  )
}

const WishlistButton = () => {
  return(
    <UtilBotton>
      <Image source={require('../../assets/icons/wishlist/like_list.png')} style={{ height: 30, width: 30, resizeMode:'contain' }} />
      <Text>찜목록</Text>
    </UtilBotton>
  )
}



const BottomBoard = () => {
  return(
    <Container>
      <UtilContainer>
        <BottomUtilView>
          <FilterButton />
        </BottomUtilView>
        <BottomUtilView>
          <WishlistButton />
        </BottomUtilView>
      </UtilContainer>
    </Container>
  )
}

export default BottomBoard