import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Image, Text, View, Button } from 'react-native'
import { List } from 'react-native-paper';
import { Linking } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native'
import FilterModal from './FilterModal';
import Modal from 'react-native-modal'


const Container = styled.View`
  flex: 1;
  /* border: 1px solid black; */
  box-shadow: 0px -5px 5px #00000029;
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

const ModalViewSection = styled.View`
  height: 45%;
  width: 85%;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #54884F;
`

const FilterButton = () => {
  const [isModalVisiable, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisiable)
  }
  return(
    <UtilBotton onPress={toggleModal}>
      <Image source={require('../../assets/icons/search-filters/search_filter.png')} style={{ height: 30, width: 30, resizeMode:'contain' }} />
      <Text>검색조건</Text>
      <Modal isVisible={isModalVisiable} hasBackdrop={false} style={{alignItems: 'center', justifyContent: 'center'}} onBackdropPress={toggleModal} >
        <ModalViewSection>
          <FilterModal setModalVisiable={setModalVisible}/>
        </ModalViewSection>
      </Modal>
    </UtilBotton>
  )
}

const WishlistButton = () => {
  const navigation = useNavigation()
  const _onPress = () => {  
    navigation.dispatch(CommonActions.navigate('WishListpage'))
  }

  return(
    <UtilBotton onPress={_onPress}>
      <Image source={require('../../assets/icons/wishlist/like_list.png')} style={{ height: 30, width: 30, resizeMode:'contain' }} />
      <Text>찜목록</Text>
    </UtilBotton>
  )
}

const CallRoomAdminButton = () => {
  const _onPress = () => {
    Linking.openURL(`tel:01082707605`)
  }

  return(
    <UtilBotton onPress={_onPress}>
      <Image source={require('../../assets/icons/call/call.png')} />
      <Text>전화하기</Text>
    </UtilBotton>
  )
}

const IWish = () => {
  const [iwant, setIWant] = useState(false)
  let ImageURL
  
  if(iwant === true){
    ImageURL = '../../assets/icons/wish-heart/touched_heart.png'
  }else{
    ImageURL = '../../assets/icons/wish-heart/untouched_heart.png'
  }

  const _onPress = () => {
    setIWant(!iwant)
  }

  return(
    <UtilBotton onPress={_onPress}>
      { iwant ? <Image source={require('../../assets/icons/wish-heart/touched_heart.png')} />
              : <Image source={require('../../assets/icons/wish-heart/untouched_heart.png')} />
      }
      <Text>찜하기</Text>
    </UtilBotton>
  )
}

const BottomBoard = ({isDetail}) => {
  return(
    <Container>
      <UtilContainer>
        <BottomUtilView>
          {isDetail ? <CallRoomAdminButton /> : <FilterButton />}
        </BottomUtilView>
        <BottomUtilView>
          {isDetail ? <IWish /> : <WishlistButton />}
        </BottomUtilView>
      </UtilContainer>
    </Container>
  )
}

export default BottomBoard