import { WeatherByCoordinatesDto, CurrentWeather } from '~/@types/dto/weather';
import { InitialGetCurrentWeatherStateProps } from '~/@types/store/app.state';

export const getCurrentWeatherTypes = {
  GET_CURRENT_WEATHER_REQUEST: 'weather/GET_CURRENT_WEATHER_REQUEST',
  GET_CURRENT_WEATHER_SUCCESS: 'weather/GET_CURRENT_WEATHER_SUCCESS',
  GET_CURRENT_WEATHER_ERROR: 'weather/GET_CURRENT_WEATHER_ERROR',
};

export const getCurrentWeatherActions = {
  getCurrentWeather: (data: WeatherByCoordinatesDto | null) => ({
    type: getCurrentWeatherTypes.GET_CURRENT_WEATHER_REQUEST,
    payload: data,
  }),
  getCurrentWeatherSuccess: (data: CurrentWeather | null) => ({
    type: getCurrentWeatherTypes.GET_CURRENT_WEATHER_SUCCESS,
    payload: data,
  }),
  getCurrentWeatherError: (error: any) => ({
    type: getCurrentWeatherTypes.GET_CURRENT_WEATHER_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: CurrentWeather | null;
}

const initialState: InitialGetCurrentWeatherStateProps = {
  weather: undefined,
  loading: false,
  error: null,
};

export const getCurrentWeatherReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case getCurrentWeatherTypes.GET_CURRENT_WEATHER_REQUEST:
      return { ...state, loading: true };
    case getCurrentWeatherTypes.GET_CURRENT_WEATHER_SUCCESS:
      return { ...state, loading: false, weather: action.payload };
    case getCurrentWeatherTypes.GET_CURRENT_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
