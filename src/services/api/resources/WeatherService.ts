import client from '../client';
import { WeatherByCoordinatesDto } from '~/@types/dto/weather';

const CurrentWeatherData = (weatherByCoordinatesDto: WeatherByCoordinatesDto) => client({
  url: 'weather',
  method: 'GET',
  params: {
    lat: weatherByCoordinatesDto.latitude,
    lon: weatherByCoordinatesDto.longitude,
  },
});

export default { CurrentWeatherData };
