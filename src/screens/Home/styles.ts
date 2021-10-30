import styled from 'styled-components/native';
import { Video } from 'expo-av';

// eslint-disable-next-line import/no-extraneous-dependencies
import { TabView } from 'react-native-tab-view';

export const BackgroundVideo = styled(Video)`
    height: 400px;
    position: absolute;
    top: 190px;
    left: 0;
    right: 0;
`;

export const Body = styled.View`
    flex-direction: column;
    padding: 16px;
    height: 65%;
`;

export const Footer = styled.View`
    background-color: #fff;
    border-radius: 16px;
    padding-top: 16px;
    height: 35%;
`;

export const FooterTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    margin-left: 16px;
    text-align: left;
    align-items: center;
`;

export const WeatherSummary = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 30px;

`;

export const WeatherSummaryItem = styled.View`
    flex-direction: row;
    align-items: center;
    min-width: 40%;
    margin-bottom: 8px;
    justify-content: flex-start;
`;

export const WeatherLabel = styled.Text`
    font-weight: 600;
    color: rgb(191, 191, 191);
    margin-bottom: 4px;
`;

export const WeatherValue = styled.Text`
    font-weight: 700;
`;

export const WeatherContainer = styled.View``;

export const WeatherIconContainer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgb(230, 230, 230);
    border-radius: 90px;
    width: 45px;
    height: 45px;
    margin: 8px;
`;

export const WeatherTab = styled(TabView)`
    background-color: #fff;
`;

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
    background-color: rgb(230, 230, 230);
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
    width: 50px;
    height: 50px;
    margin-right: 16px;
    margin-left: 16px;
`;
