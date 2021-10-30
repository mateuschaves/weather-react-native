import { all } from 'redux-saga/effects';

import { watchNewLocation } from './Location/NewLocation';
import { watchChooseLocation } from './Location/ChooseLocation';
import { watchGetCurrentWeather } from './Weather/GetCurrentWeather';
import { watchGetForecastWeather } from './Weather/GetForecastWeather';

export default function* rootSaga() {
  yield all([
    watchNewLocation(),
    watchChooseLocation(),
    watchGetCurrentWeather(),
    watchGetForecastWeather(),
  ]);
}
