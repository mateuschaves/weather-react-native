import styled from 'styled-components/native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { TabView } from 'react-native-tab-view';

export const WeatherSummary = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 30px;

`;

export const Container = styled.View`
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

export const WeatherTab = styled(TabView)`
    background-color: #fff;
`;
