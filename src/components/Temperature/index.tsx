import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import {
  TemperatureInfo,
  TemperatureDescriptionContainer,
  TemperatureDescription,
  TemperatureContainer,
  TemperatureUnit,
  Value,
} from './styles';

interface TemperatureProps {
    temperatureDescription: string;
    temperature: number;
    temperatureUnit: string;
}

export default function Temperature({
  temperatureDescription,
  temperature,
  temperatureUnit,
}: TemperatureProps) {
  return (
    <TemperatureInfo>
      <TemperatureDescriptionContainer>
        <Ionicons name="cloudy-night-outline" size={40} />
        <TemperatureDescription>{temperatureDescription}</TemperatureDescription>
      </TemperatureDescriptionContainer>
      <TemperatureContainer>
        <Value
          animateToNumber={temperature}
          fontStyle={{
            fontSize: 80,
            fontWeight: '500',
          }}
          animationDuration={600}
        />
        <TemperatureUnit>{temperatureUnit}</TemperatureUnit>
      </TemperatureContainer>
    </TemperatureInfo>
  );
}
