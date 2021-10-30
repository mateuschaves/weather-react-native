import { ForecastWeatherByCoordinatesDto } from '~/@types/dto/weather';
import { InitialForecastWeatherStateProps } from '../../../@types/store/app.state';
import { ForecastWeather } from '../../../@types/dto/weather';

export const getForecastWeatherTypes = {
  GET_FORECAST_WEATHER_REQUEST: 'weather/GET_FORECAST_WEATHER_REQUEST',
  GET_FORECAST_WEATHER_SUCCESS: 'weather/GET_FORECAST_WEATHER_SUCCESS',
  GET_FORECAST_WEATHER_ERROR: 'weather/GET_FORECAST_WEATHER_ERROR',
};

export const getForecastWeatherActions = {
  getForecastWeather: (data: ForecastWeatherByCoordinatesDto | null) => ({
    type: getForecastWeatherTypes.GET_FORECAST_WEATHER_REQUEST,
    payload: data,
  }),
  getForecastWeatherSuccess: (data: ForecastWeather | null) => ({
    type: getForecastWeatherTypes.GET_FORECAST_WEATHER_SUCCESS,
    payload: data,
  }),
  getForecastWeatherError: (error: any) => ({
    type: getForecastWeatherTypes.GET_FORECAST_WEATHER_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: ForecastWeather | null;
}

const initialState: InitialForecastWeatherStateProps = {
  forecastWeather: undefined,
  loading: false,
  error: null,
};

export const getForecastWeatherReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case getForecastWeatherTypes.GET_FORECAST_WEATHER_REQUEST:
      return { ...state, loading: true };
    case getForecastWeatherTypes.GET_FORECAST_WEATHER_SUCCESS:
      return { ...state, loading: false, forecastWeather: action.payload };
    case getForecastWeatherTypes.GET_FORECAST_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
