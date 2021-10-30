/* eslint-disable camelcase */
export interface WeatherByCoordinatesDto {
    latitude: number;
    longitude: number;
}

export interface ForecastWeatherByCoordinatesDto extends WeatherByCoordinatesDto {
    exclude: string;
}

export interface CurrentWeather {
    coord: {
        lat: number;
        lon: number;
    },
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }],
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    },
    wind: {
        speed: number;
        deg: number;
    },
    id: number;
    name: string;
    cod: number;
}

export interface ForecastWeather {
    daily: [{
        dt: number;
        temp: {
            max: number;
            min: number;
        },
        weather: [{
            id: number;
            main: string;
            description: string;
            icon: string;
        }]
    }]
}
