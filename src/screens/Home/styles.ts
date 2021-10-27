import styled from 'styled-components/native';
import { Video } from 'expo-av';
import AnimatedNumbers from 'react-native-animated-numbers';

export const BackgroundVideo = styled(Video)`
    height: 400px;
    position: absolute;
    top: 190px;
    left: 0;
    right: 0;
`;

export const Temperature = styled(AnimatedNumbers)`
    color: #000;
    font-size: 95px;
    font-weight: 600;
`;

export const TemperatureUnit = styled.Text`
    color: #000;
    font-size: 95px;
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

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    margin-top: 20px;
`;

export const CityInfoContainer = styled.View`
    flex-direction: column;
`;

export const City = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const Date = styled.Text`
    font-size: 17px;
    margin-top: 4px;
`;

export const TemperatureContainer = styled.View`
    flex-direction: row;
`;
