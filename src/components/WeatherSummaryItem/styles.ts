import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    min-width: 40%;
    margin-bottom: 8px;
    justify-content: flex-start;
`;

export const WeatherLabel = styled.Text`
    font-weight: 600;
    color: ${colors.labelColor};
    margin-bottom: 4px;
`;

export const WeatherValue = styled.Text`
    font-weight: 700;
`;

export const WeatherContainer = styled.View``;

export const WeatherIconContainer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${colors.bacgkroundLightColor};
    border-radius: 90px;
    width: 45px;
    height: 45px;
    margin: 8px;
`;
