import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { InitialGetCurrentWeatherStateProps, RootState } from '~/@types/store/app.state';

import Header from '~/components/Header';
import Temperature from '~/components/Temperature';
import { capitalizeFirstLetter } from '~/utils/stringFormatUtil';
import { formatToDateString } from '~/utils/dateFormatUtil';

interface WeatherConditionProps {
  city: string;
  handleAddPlaceClick: () => void;
  temperature: number;
  temperatureDescription: string;
}

export default function WeatherCondition({
  city,
  temperature,
  temperatureDescription,
  handleAddPlaceClick,
}: WeatherConditionProps) {
  const { weather } = useSelector<RootState, InitialGetCurrentWeatherStateProps>(
    (state) => state.currentWeather,
  );

  return (
    <>
      <Header
        city={_.get(weather, 'name', city)}
        date={formatToDateString(new Date())}
        handleAddPlaceClick={handleAddPlaceClick}
      />
      <Temperature
        temperature={parseInt(_.get(weather, 'main.temp', temperature), 10)}
        temperatureDescription={capitalizeFirstLetter(_.get(weather, 'weather[0].description', temperatureDescription))}
        temperatureUnit="º"
        iconUri={`http://openweathermap.org/img/wn/${_.get(weather, 'weather[0].icon', '01')}@2x.png`}
      />
    </>
  );
}
