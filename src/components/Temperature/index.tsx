import React from 'react';

import {
  TemperatureInfo,
  TemperatureDescriptionContainer,
  TemperatureDescription,
  TemperatureContainer,
  TemperatureUnit,
  Value,
  WeatherIcon,
} from './styles';

interface TemperatureProps {
    temperatureDescription: string;
    temperature: number;
    temperatureUnit: string;
    iconUri: string;
}

export default function Temperature({
  temperatureDescription,
  temperature,
  temperatureUnit,
  iconUri,
}: TemperatureProps) {
  return (
    <TemperatureInfo>
      <TemperatureDescriptionContainer>
        <WeatherIcon resizeMode="cover" source={{ uri: iconUri }} />
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
