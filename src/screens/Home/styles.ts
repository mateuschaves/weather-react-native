import styled from 'styled-components/native';
import { Video } from 'expo-av';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
    flex: 1%;
    background-color: rgb(197, 205, 173);
`;

export const BackgroundVideo = styled(Video)`
    height: 400px;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
`;

export const Body = styled.View`
    flex-direction: column;
    padding: 16px;
    height: 65%;
`;

export const EmptyBody = styled.View`
    justify-content: center;
    align-items: center;
`;

export const EmptyTitle = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
`;

export const Animation = styled(LottieView)`
    width: 200px;
    height: 200px;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 8px;
    border-width: 1px;
    border-color: #000;
    justify-content: center;
    align-items: center;
    padding: 8px 16px 8px 16px;
    margin-top: 16px;
`;

export const ButtonTitle = styled.Text`
    font-size: 18px;
    font-weight: 400;
`;
