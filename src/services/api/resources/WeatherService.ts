import client from '../client';
import {
  ForecastWeatherByCoordinatesDto,
  WeatherByCoordinatesDto,
} from '~/@types/dto/weather';

const CurrentWeatherData = (weatherByCoordinatesDto: WeatherByCoordinatesDto) =>
  client({
    url: 'weather',
    method: 'GET',
    params: {
      lat: weatherByCoordinatesDto.latitude,
      lon: weatherByCoordinatesDto.longitude,
      lang: 'pt',
      units: 'metric',
    },
  });

const ForecastWeatherData = (
  forecastWeatherByCoordinatesDto: ForecastWeatherByCoordinatesDto
) => client({
    url: 'onecall',
    method: 'GET',
    params: {
      lat: forecastWeatherByCoordinatesDto.latitude,
      lon: forecastWeatherByCoordinatesDto.longitude,
      exclude: forecastWeatherByCoordinatesDto.exclude,
      lang: 'pt',
      units: 'metric',
    },
  });

export default { CurrentWeatherData, ForecastWeatherData };
