import { useSelector, useDispatch } from "react-redux"
import { increseCount } from './counter'
import { View, Text, Button } from 'react-native'

const dispatch = useDispatch()

const { count } = useSelector(state => state.counter)

const increse = () => {
  dispatch(increseCount())
}

const Counter = () => {
  return(
    <View>
      {count}
      <Button onPress={increse}>증가</Button>
    </View>
  )
}

export default Counter