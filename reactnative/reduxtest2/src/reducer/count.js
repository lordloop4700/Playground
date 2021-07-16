import { INIT_COUNT_STATE } from "../status/count";
import { INCREMENT, DECREMENT } from "../actions/count";
import { combineReducers } from "redux";
import { delay, put, all } from 'redux-saga/effects';

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

const counter = (state = INIT_COUNT_STATE, action) => {
  switch(action.type){
    case INCREMENT:
      return{
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return{
        ...state,
        value: state.value - 1
      }
    default:
      return state
  } 
}

const counterReducer = combineReducers({ counter })
export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default counterReducer