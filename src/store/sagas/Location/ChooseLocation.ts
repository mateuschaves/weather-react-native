import { put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { Location } from '~/@types/dto/location';

import * as NavigationService from '~/navigation/NavigationService';

import { chooseLocationActions, chooseLocationTypes } from '~/store/ducks/Location/ChooseLocation';
import { getCurrentWeatherActions } from '../../ducks/Weather/GetCurrentWeather';
import { getForecastWeatherActions } from '../../ducks/Weather/GetForecastWeather';

interface chooseLocationSagaProps extends AnyAction {
    payload: Location | null;
}

export function* ChooseLocationSaga({ payload }: chooseLocationSagaProps) {
  try {
    yield put(chooseLocationActions.chooseLocationSuccess(payload));

    const { lat, lng } = payload?.geometry?.location;

    yield put(getCurrentWeatherActions.getCurrentWeather({ latitude: lat, longitude: lng }));
    yield put(getForecastWeatherActions.getForecastWeather({ latitude: lat, longitude: lng, exclude: 'hourly,minutely' }));
    NavigationService.goBack();
  } catch (error: any) {
    yield put(chooseLocationActions.chooseLocationError(error));
  }
}

export function* watchChooseLocation() {
  yield takeLatest(chooseLocationTypes.CHOOSE_LOCATION_REQUEST, ChooseLocationSaga);
}
