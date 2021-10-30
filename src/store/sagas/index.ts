import { all } from 'redux-saga/effects';

import { watchSetLocation } from './Location/SetLocation';

export default function* rootSaga() {
  yield all([
    watchSetLocation(),
  ]);
}
