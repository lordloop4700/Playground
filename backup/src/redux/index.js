import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import FilterReduce, { filterSaga } from './FilterRedux';
import loading from './loading';
import room, { roomSaga } from './RoomsData';

const rootReducer = combineReducers({ FilterReduce, loading, room});
export function* rootSaga() {
  yield all([filterSaga(), roomSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;