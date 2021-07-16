import React from 'react'
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReTest } from './test'
import CButton from './exctest'
import ViewTest from './ViewTest'

// import counterReducer from './reducer/count'
import { rootSaga } from './redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
  )
)

sagaMiddleware.run(rootSaga)

const App = () => {
  console.log(rootReducer)
  return(
    <Provider store={store}>
      <ReTest />
      <CButton />
      {/* <ViewTest /> */}
    </Provider>
  )
}

export default App