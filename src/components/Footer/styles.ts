import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

// eslint-disable-next-line import/no-extraneous-dependencies
import { TabView } from 'react-native-tab-view';
import colors from '~/theme/colors';

const paddingBottom = Platform.OS === 'ios' ? (initialWindowMetrics?.insets?.bottom || 0) + 10 : 0;

export const WeatherSummary = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 30px;
`;

export const Container = styled.View`
    background-color: ${colors.white};
    border-radius: 16px;
    padding-top: 16px;
    height: 35%;
    padding-bottom: ${paddingBottom}px;
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
    background-color: ${colors.white};
`;
