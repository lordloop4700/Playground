import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {increase, decrease, increaseAsync, decreaseAsync} from './redux/counter'
import { View, Text, Button } from 'react-native'

export default CButton = () => {
  const dispatch = useDispatch()
  const onIncrement = () => dispatch(increaseAsync())
  const onDecrement = () => dispatch(decreaseAsync())

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={onIncrement} title='+' />
      <Button onPress={onDecrement} title='-' />
    </View>
  )
}

// const mapDispatchToProps = ( dispatch ) => {
//   return {
//     onIncrement: () => dispatch(increment()),
//     onDecrement: () => dispatch(decrement()),
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps,
// )(CButton)