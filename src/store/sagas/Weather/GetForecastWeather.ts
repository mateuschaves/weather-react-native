import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ForecastWeatherByCoordinatesDto } from '~/@types/dto/weather';

import { AnyAction } from 'redux';

import { getForecastWeatherActions, getForecastWeatherTypes } from '~/store/ducks/Weather/GetForecastWeather';
import { WeatherService } from '~/services/api/resources';
import { ForecastWeather } from '../../../@types/dto/weather';

interface getForecastWeatherSagaProps extends AnyAction {
    payload: ForecastWeatherByCoordinatesDto | null;
}

export function* GetForecastWeatherSaga({ payload }: getForecastWeatherSagaProps) {
  try {
    const response: AxiosResponse<ForecastWeather> = yield call(WeatherService.ForecastWeatherData, payload);
    yield put(getForecastWeatherActions.getForecastWeatherSuccess(response.data));
  } catch (error: any) {
    yield put(getForecastWeatherActions.getForecastWeatherError(error));
  }
}

export function* watchGetForecastWeather() {
  yield takeLatest(getForecastWeatherTypes.GET_FORECAST_WEATHER_REQUEST, GetForecastWeatherSaga);
}
