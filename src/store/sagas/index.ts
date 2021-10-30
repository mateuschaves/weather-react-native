import { all } from 'redux-saga/effects';

import { watchNewLocation } from './Location/NewLocation';

export default function* rootSaga() {
  yield all([
    watchNewLocation(),
  ]);
}
