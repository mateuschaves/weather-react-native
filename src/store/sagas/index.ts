import { all } from 'redux-saga/effects';

import { watchSayHi } from './Greeting/SayHi';

export default function* rootSaga() {
  yield all([
    watchSayHi(),
  ]);
}
