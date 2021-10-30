import styled from 'styled-components/native';
import AnimatedNumbers from 'react-native-animated-numbers';

export const Value = styled(AnimatedNumbers)`
    color: #000;
    font-size: 90px;
    font-weight: 600;
`;

export const TemperatureUnit = styled.Text`
    color: #000;
    font-size: 90px;
    font-weight: 600;
    margin: 0;
`;

export const TemperatureInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TemperatureDescription = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;

export const TemperatureDescriptionContainer = styled.View`
    flex-direction: column;
    width: 100px;
`;

export const TemperatureContainer = styled.View`
    flex-direction: row;
`;

export const WeatherIcon = styled.Image`
    width: 70px;
    height: 50px;
`;
