import { Location } from '~/@types/dto/location';
import { CurrentWeather, ForecastWeather } from '~/@types/dto/weather';

export interface InitialChooseLocationStateProps {
    location: Location | {};
    loading: boolean;
    error: any;
}

export interface InitialNewLocationStateProps {
    location: [Location] | [];
    loading: boolean;
    error: any;
}

export interface InitialGetCurrentWeatherStateProps {
    weather: CurrentWeather | undefined;
    loading: boolean;
    error: any;
}

export interface InitialForecastWeatherStateProps {
    forecastWeather: ForecastWeather | undefined;
    loading: boolean;
    error: any;
}

export interface RootState {
    locations: InitialNewLocationStateProps,
    choosedLocation: InitialChooseLocationStateProps,
    currentWeather: InitialGetCurrentWeatherStateProps,
    forecastWeather: InitialForecastWeatherStateProps,
}
