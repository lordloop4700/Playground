import React from 'react'
import { createStoreHook, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import rootReducer from './reducers/index'
import Counter from './reducers/Call'

const store = createStore(rootReducer)

const App  = () => {
  return(
    <Provider store={store}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Counter />
      </View>
    </Provider>
  )
}

export default App