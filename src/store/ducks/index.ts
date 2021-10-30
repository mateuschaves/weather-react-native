import { combineReducers } from 'redux';

import { newLocationReducer as locations } from './Location/NewLocation';
import { chooseLocationReducer as choosedLocation } from './Location/ChooseLocation';
import { getCurrentWeatherReducer as currentWeather } from './Weather/GetCurrentWeather';
import { getForecastWeatherReducer as forecastWeather } from './Weather/GetForecastWeather';

const reducers = combineReducers({
  locations,
  choosedLocation,
  currentWeather,
  forecastWeather,
});

export default reducers;
