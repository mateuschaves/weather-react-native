import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { WeatherByCoordinatesDto, CurrentWeather } from '~/@types/dto/weather';

import { AnyAction } from 'redux';

import { getCurrentWeatherActions, getCurrentWeatherTypes } from '~/store/ducks/Weather/GetCurrentWeather';
import { WeatherService } from '~/services/api/resources';

interface getCurrentWeatherSagaProps extends AnyAction {
    payload: WeatherByCoordinatesDto | null;
}

export function* GetCurrentWeatherSaga({ payload }: getCurrentWeatherSagaProps) {
  try {
    const response: AxiosResponse<CurrentWeather> = yield call(WeatherService.CurrentWeatherData, payload);
    yield put(getCurrentWeatherActions.getCurrentWeatherSuccess(response.data));
  } catch (error: any) {
    yield put(getCurrentWeatherActions.getCurrentWeatherError(error));
  }
}

export function* watchGetCurrentWeather() {
  yield takeLatest(getCurrentWeatherTypes.GET_CURRENT_WEATHER_REQUEST, GetCurrentWeatherSaga);
}
