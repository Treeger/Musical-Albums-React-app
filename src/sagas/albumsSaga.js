import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAILED,
 } from '../actions/types';

const url = 'https://api.myjson.com/bins/xdaqj';

export function* fetchAlbumsSaga() {
  try {
    const responce = yield call(axios.get, url);
    yield put({ type: ALBUMS_FETCH_SUCCESS, payload: responce.data });
   } catch (e) {
     console.log('error fetching data');
     yield put({ type: ALBUMS_FETCH_FAILED, message: e.message });
     return;
   }
}
