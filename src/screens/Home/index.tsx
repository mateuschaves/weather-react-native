import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Video } from 'expo-av';

import Swiper from 'react-native-swiper';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/@types/store/app.state';
import { InitialNewLocationStateProps } from '../../@types/store/app.state';

import WeatherCondition from '~/components/WeatherCondition';
import Footer from '~/components/Footer';

import EmptyAnimation from '~/assets/animations/empty.json';
import RomeVideo from '~/assets/videos/newyork.mp4';

import * as NavigationService from '~/navigation/NavigationService';

import {
  BackgroundVideo,
  Body,
  EmptyBody,
  Animation,
  EmptyTitle,
} from './styles';
import Header from '~/components/Header';
import { chooseLocationActions } from '../../store/ducks/Location/ChooseLocation';

export default function Home() {
  const video = useRef<Video>(null);

  const [temperature, setTemperature] = useState(0);
  const [stepList, setStepList] = useState<React.ReactNode>([]);
  const { location, loading } = useSelector<RootState, InitialNewLocationStateProps>((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    video.current?.playAsync();
    setTimeout(() => setTemperature(21), 300);
  }, []);

  useEffect(() => {
    setStepList(location.map(() => (
      <WeatherCondition
        city="New York"
        date="Today, Oct 31 12:23"
        temperature={temperature}
        temperatureDescription="Sunny and warm"
        temperatureUnit="º"
        handleAddPlaceClick={handleAddPlaceClick}
      />
    )));
  }, [location.length]);

  function handleAddPlaceClick() {
    NavigationService.navigate('Place', null);
  }

  function renderEmptyLocationList() {
    return (
      <SafeAreaView>
        <Header
          date=""
          city=""
          handleAddPlaceClick={() => handleAddPlaceClick()}
        />
        <EmptyBody>
          <Animation
            autoPlay
            loop
            source={EmptyAnimation}
          />
          <EmptyTitle>Nenhum local cadastrado !</EmptyTitle>
        </EmptyBody>
      </SafeAreaView>
    );
  }

  function renderWeatherContent() {
    return (
      <SafeAreaView>
        <Body>
          <BackgroundVideo ref={video} source={RomeVideo} resizeMode="stretch" isLooping onLoad={() => video.current?.playAsync()} />
          <Swiper
            activeDotColor="#000"
            showsPagination
            containerStyle={{ marginBottom: 0, paddingBottom: 0 }}
            onIndexChanged={index => dispatch(chooseLocationActions.chooseLocation(location[index]))}
          >
            {stepList.map((step) => step)}
          </Swiper>
        </Body>
        <Footer />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(197, 205, 173)' }}>
      {location.length > 0 ? renderWeatherContent() : renderEmptyLocationList()}
    </View>
  );
}
