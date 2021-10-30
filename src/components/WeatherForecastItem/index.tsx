import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import {
  WeatherContainerItem,
  WeatherConditionTitle,
  WeatherDayForecast,
  WeatherIcon,
  WeatherMaxAndMin,
} from './styles';

interface WeatherForecastItemProps {
    day: string;
    iconUri: string;
    conditionTitle: string;
    max: string;
    min: string;
}

export default function WeatherForecastItem({ day, iconUri, conditionTitle, max, min }: WeatherForecastItemProps) {
  return (
    <WeatherContainerItem>
      <WeatherDayForecast>
        {day}
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: iconUri }} />
      <WeatherConditionTitle>
        {conditionTitle}
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={20} />
        <WeatherConditionTitle>{max}</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={20} />
        <WeatherConditionTitle>{min}</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>
  );
}
