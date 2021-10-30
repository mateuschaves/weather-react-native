import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import {
  Container, WeatherContainer, WeatherIconContainer, WeatherLabel, WeatherValue,
} from './styles';

interface WeatherSummaryItemProps {
    weatherLabel: string;
    weatherValue: string;
    iconName: string;
}

export default function WeatherSummaryItem({iconName, weatherLabel, weatherValue}: WeatherSummaryItemProps) {
  return (
    <Container>
      <WeatherIconContainer>
        <Ionicons name={iconName} size={25} />
      </WeatherIconContainer>
      <WeatherContainer>
        <WeatherLabel>
          {weatherLabel}
        </WeatherLabel>
        <WeatherValue>
          {weatherValue}
        </WeatherValue>
      </WeatherContainer>
    </Container>
  );
}
