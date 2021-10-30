import styled from 'styled-components/native';
import { Video } from 'expo-av';
import LottieView from 'lottie-react-native';

export const BackgroundVideo = styled(Video)`
    height: 400px;
    position: absolute;
    top: 25%;
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
