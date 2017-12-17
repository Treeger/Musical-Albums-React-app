import { takeLatest } from 'redux-saga/effects';
import {
  fetchAlbumsSaga,
 } from './albumsSaga';
import {
  ALBUMS_FETCH,
 } from '../actions/types';

export default function* rootSaga() {
  yield [
    takeLatest(ALBUMS_FETCH, fetchAlbumsSaga),
  ];
}
