import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  width: 93%;
  height: 85%;
  flex-direction: row;
  background-color: #E5E5E5;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #00000029;
  margin: 3px auto;
  align-items: center;
  justify-content: center;
`

const ListIcon = styled.Image`
  width: 30px;
  height: 30px;
`

const InputBox = styled.TextInput`
  width: 75%;
  height: 100%;
  padding: 10px;
  margin: 0;
  font-size: 15px;
`

const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
`

const SearchBar = () => {
  return(
    <Container>
      <ListIcon source={require('../../assets/icons/all-rooms/all_room.png')}/>
      <InputBox placeholder="빌라명을 입력해주세요"/>
      <SearchIcon source={require('../../assets/icons/search-rooms/search_room.png')}/>
    </Container>
  )
}

export default SearchBar