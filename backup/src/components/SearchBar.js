import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const HeadCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Container = styled.View`
  display: flex;
  width: 93%;
  height: 75%;
  flex-direction: row;
  background-color: #E5E5E5;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #00000029;
  align-items: center;
  justify-content: center;
`

const ListIcon = styled.Image`
  width: 18px;
  height: 17px;
`

const InputBox = styled.TextInput`
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 0;
  font-size: 15px;
  font-family: 'S-CoreDream-3Light';
`

const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`

const RoomListButton = ({ onPress }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <ListIcon source={require('../../assets/icons/all-rooms/all_room.png')}/>
    </TouchableOpacity>
  )
}

const SearchButton = () => {
  const _onPress = () => {
    
  }

  return(
    <TouchableOpacity onPress={_onPress}>
      <SearchIcon source={require('../../assets/icons/search-rooms/search_room.png')}/>
    </TouchableOpacity>
  )
}

const SearchBar = ({ setRoomList }) => {

  return(
    <HeadCenter>
      <Container>
        <RoomListButton onPress={() => setRoomList()}/>
        <InputBox placeholder="빌라명을 입력해주세요"/>
        <SearchButton />
      </Container>
    </HeadCenter>
  )
}

export default SearchBar