import { put, takeEvery, call } from 'redux-saga/effects'
import { INIT_FILTER_STATE } from './status/FilterReduxState'

const PICK = 'PICK'
const DROP = 'DROP'
const INIT = 'INIT'
const PICK_ASYNC = 'PICK_ASYNC'
const DROP_ASYNC = 'DROP_ASYNC'

export const pick = (id) => ({ type: PICK, payload: id })
export const drop = () => ({ type: DROP })
export const init = () => ({ type: INIT })
export const pickAsync = (id) => ({ type: PICK_ASYNC, payload: id })
export const dropAsync = () => ({ type: DROP_ASYNC })

function* pickSaga() {
  console.log('picksaga 호출')
  yield put(pick())
}

function* dropSaga() {
  yield put(drop())
}

export function* filterSaga() {
  yield takeEvery(PICK_ASYNC, pickSaga)
  yield takeEvery(DROP_ASYNC, dropSaga)
}

const FilterReduce = (state = INIT_FILTER_STATE, action) => {
  const filterId = action.payload

  switch(action.type){
    case PICK:
      return {
        ...state,
        [filterId]: !state[filterId],
      }
    case DROP:
      return !state
    case INIT:
      return INIT_FILTER_STATE
    default:
      return state
  }
}

export default FilterReduce