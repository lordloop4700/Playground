import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import {Button, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { useSelector, useDispatch } from 'react-redux';
import { pick, drop, init, pickAsync, dropAsync } from '../redux/FilterRedux';

const Container = styled.View`
  flex: 1;
`

const Header = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const OptionViewSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`

const SearchButtonView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`

const ImageSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const OptionStyled = styled.Text`
  font-size: 14;
  color: ${({select}) => select ? '#000' : '#BCBCBC'};
  font-family: 'S-CoreDream-5Medium';
`

const ResetButton = () => {
  const dispatch = useDispatch()
  const _onPress = () => {
    const initFilter = dispatch(init())
    initFilter
  }

  return(
    <TouchableOpacity onPress={_onPress}>
      <Image source={require('../../assets/icons/reset/reset_filter.png')}/>
    </TouchableOpacity>
  )
}

const OptionButton = ({ text, id }) => {
  const dispatch = useDispatch()
  
  const [selectOption, setSelectOption] = useState(false)
  const state = useSelector(state => state.FilterReduce)
  
  const _onPress = () => {
    const selectFilter = dispatch(pick(id))
    selectFilter
  }

  useEffect(() => {
    // console.log('============')
    // console.log(id)
    // console.log(state.FilterReduce[id])
    // console.log('++++++++++++')
    setSelectOption(state[id])
  })

  return(
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={_onPress} style={{alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text style={{fontSize: 14, color: '#BCBCBC', fontFamily: 'S-CoreDream-5Medium'}}>{text}</Text> */}
        <OptionStyled select={selectOption}>{text}</OptionStyled>
      </TouchableOpacity>
    </View>
  )
}

const FilterSearchButton = () => {
  
  const state = useSelector(state => state.FilterReduce)
  const _onPress = () => {
    console.log(state)
  }

  return(
    <View style={{height: 30, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={{height: '100%', width: '75%'}} onPress={_onPress}>
        <LinearGradient colors={['#839F80', '#C7DEC5']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
          <Text style={{fontSize: 11, fontFamily: 'S-CoreDream-6Bold'}}>검 색</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const FilterModal = ({ setModalVisiable }) => {
  return(
    <Container>
      <Header>
        <ImageSection>
          <ResetButton />
        </ImageSection>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 17, fontFamily: 'S-CoreDream-5Medium'}}>검색조건</Text>
        </View>
        <ImageSection>
          <TouchableOpacity onPress={() => setModalVisiable()}>
            <Image source={require('../../assets/icons/close/close_filter.png')}/>
          </TouchableOpacity>
        </ImageSection>
      </Header>

      <TitleView>
        <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>구역</Text>
      </TitleView>
      <OptionViewSection>
        <OptionButton text={'1구역'} id={'area_1'}/>
        <OptionButton text={'2구역'} id={'area_2'}/>
        <OptionButton text={'3구역'} id={'area_3'}/>
        <OptionButton text={'4구역'} id={'area_4'}/>
      </OptionViewSection>

      <TitleView>
        <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>방 종류</Text>
      </TitleView>
      <OptionViewSection>
        <View style={{flex: 1}} />
        <OptionButton text={'1인실'} id={'room'}/>
        <OptionButton text={'다인실'} id={'rooms'}/>
        <View style={{flex: 1}} />
      </OptionViewSection>

      <TitleView>
        <Text style={{fontSize: 16, fontFamily: 'S-CoreDream-5Medium'}}>매물 종류</Text>
      </TitleView>
      <OptionViewSection>
        <View style={{flex: 1}} />
        <OptionButton text={'년세'} id={'year'}/>
        <OptionButton text={'반년세'} id={'half_year'}/>
        <View style={{flex: 1}} />
      </OptionViewSection>

      <SearchButtonView>
        <FilterSearchButton />
      </SearchButtonView>
    </Container>
  )
}

export default FilterModal