import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect, useSelector, shallowEqual } from 'react-redux'
// import { INIT_COUNT_STATE } from './status/count'

export const ReTest = () => {
  const state = useSelector(
    state => (
      state.counter
    ),
    shallowEqual
  )
  console.log('shibal')
  console.log(state)
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{state}</Text>
      <Text>shibal</Text>
    </View>
  )
}

// const mapStateToProps = (state) => {
//   console.log('mapState')
//   console.log(state)
//   return{
//     value: state.counter.value
//   }
// }

// export default connect(
//   mapStateToProps
// )(ReTest)