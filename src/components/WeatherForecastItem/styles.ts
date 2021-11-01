import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const WeatherMaxAndMin = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const WeatherContainerItem = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 0 16px 0 16px;
    align-items: center;
    background-color: ${colors.bacgkroundLightColor};
    border-radius: 8px;
    margin-top: 8px;
`;

export const WeatherConditionTitle = styled.Text`
    flex: 1;
    font-size: 20px;
    font-weight: 400;
`;

export const WeatherDayForecast = styled.Text`
    flex: 0.4;
    font-size: 20px;
    font-weight: 700;
`;

export const WeatherIcon = styled.Image`
    flex: 0.2;
    width: 50px;
    height: 50px;
    margin-right: 16px;
    margin-left: 16px;
`;
