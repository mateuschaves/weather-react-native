import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { InitialGetCurrentWeatherStateProps, RootState } from '~/@types/store/app.state';

import Header from '~/components/Header';
import Temperature from '~/components/Temperature';

interface WeatherConditionProps {
  city: string;
  date: string;
  handleAddPlaceClick: () => void;
  temperature: number;
  temperatureDescription: string;
  temperatureUnit: string;
}

export default function WeatherCondition({
  city,
  date,
  temperature,
  temperatureDescription,
  temperatureUnit,
  handleAddPlaceClick,
}: WeatherConditionProps) {
  const { weather, loading } = useSelector<RootState, InitialGetCurrentWeatherStateProps>(
    (state) => state.currentWeather,
  );

  return (
    <>
      <Header
        city={_.get(weather, 'name', city)}
        date={new Date().toLocaleDateString()}
        handleAddPlaceClick={handleAddPlaceClick}
      />
      <Temperature
        temperature={parseInt(_.get(weather, 'main.temp', temperature), 10)}
        temperatureDescription={_.get(weather, 'weather[0].description', temperatureDescription)}
        temperatureUnit="º"
      />
    </>
  );
}
