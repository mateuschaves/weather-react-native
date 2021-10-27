import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { sayHiActions } from '~/store/ducks/Greeting/SayHi';

import RomeVideo from '~/assets/videos/church.mp4';

import {
  BackgroundVideo,
  Temperature,
  TemperatureInfo,
  TemperatureDescription,
  TemperatureDescriptionContainer,
  Header,
  CityInfoContainer,
  City,
  Date,
  TemperatureUnit,
  TemperatureContainer,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();

  const video = React.useRef<Video>(null);

  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    dispatch(sayHiActions.sayHi({ message: 'oi' }));
    video.current?.playAsync();
    setTimeout(() => setTemperature(21), 300);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(197, 205, 173)', padding: 16 }}>
      <SafeAreaView>
        <BackgroundVideo ref={video} source={RomeVideo} resizeMode="stretch" isLooping />
        <Header>
          <CityInfoContainer>
            <City>Roma</City>
            <Date>Today, Aug 25 02:35</Date>
          </CityInfoContainer>

          <Ionicons name="add" size={40} />
        </Header>
        <TemperatureInfo>
          <TemperatureDescriptionContainer>
            <Ionicons name="cloudy-night-outline" size={40} />
            <TemperatureDescription>Sunny and warm</TemperatureDescription>
          </TemperatureDescriptionContainer>
          <TemperatureContainer>
            <Temperature
              animateToNumber={temperature}
              fontStyle={{
                fontSize: 95,
                fontWeight: '700',
              }}
              animationDuration={600}
            />
            <TemperatureUnit>º</TemperatureUnit>
          </TemperatureContainer>
        </TemperatureInfo>
      </SafeAreaView>
    </View>
  );
}
