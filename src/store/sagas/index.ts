import { all } from 'redux-saga/effects';

import { watchNewLocation } from './Location/NewLocation';
import { watchChooseLocation } from './Location/ChooseLocation';

export default function* rootSaga() {
  yield all([
    watchNewLocation(),
    watchChooseLocation(),
  ]);
}
