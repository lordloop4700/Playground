import { createAction, handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'
import createRequestSaga, { createRequestActionTypes } from './ReduxUtil'
import { getRooms, getAreas, getPhotos } from '../api/Api'

const SELECT_ROOM = 'room/SELECT_ROOM'
const [READ_ROOM, READ_ROOM_SUCCESS, READ_ROOM_FAILURE] = createRequestActionTypes('room/READ_ROOM')
const [READ_PHOTO, READ_PHOTO_SUCCESS, READ_PHOTO_FAILURE] = createRequestActionTypes('room/READ_PHOTO')
const [READ_AREA, READ_AREA_SUCCESS, READ_AREA_FAILURE] = createRequestActionTypes('room/READ_AREA')

export const selectRoom = createAction(SELECT_ROOM, room => room)
export const readRoom   = createAction(READ_ROOM)
export const readArea   = createAction(READ_AREA)
export const readPhoto  = createAction(READ_PHOTO, id => id)

const readRoomSaga  = createRequestSaga(READ_ROOM, getRooms)
const readAreaSaga  = createRequestSaga(READ_AREA, getAreas)
const readPhotoSaga = createRequestSaga(READ_PHOTO, getPhotos)

export function* roomSaga() {
  yield takeLatest(READ_ROOM, readRoomSaga)
  yield takeLatest(READ_AREA, readAreaSaga)
  yield takeLatest(READ_PHOTO, readPhotoSaga)
}

const initialState = {
  room: [],
  area: [],
  photo: [],
  roomInfo: null,
  roomError: null,
  areaError: null,
  photoError: null,
}

const room = handleActions({
  [READ_ROOM_SUCCESS]: (state, { payload: room }) => ({
    ...state,
    room: room.result
  }),
  [READ_ROOM_FAILURE]: (state, { payload: error }) => ({
    ...state,
    roomError: error
  }),
  [SELECT_ROOM]: (state, { payload: room }) => ({ 
    ...state,
    roomInfo: room
  }),
  [READ_AREA_SUCCESS]: (state, { payload: area }) => ({
    ...state,
    area: area.result
  }),
  [READ_AREA_FAILURE]: (state, { payload: error }) => ({
    ...state,
    areaError: error
  }),
  [READ_PHOTO_SUCCESS]: (state, { payload: photo }) => ({
    ...state,
    photo: photo.result
  }),
  [READ_PHOTO_FAILURE]: (state, { payload: error }) => ({
    ...state,
    photoError: error
  }),
}, initialState)

export default room
