import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Video } from 'expo-av';

import Swiper from 'react-native-swiper';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/@types/store/app.state';
import { InitialNewLocationStateProps } from '../../@types/store/app.state';

import WeatherCondition from '~/components/WeatherCondition';
import Footer from '~/components/Footer';

import EmptyAnimation from '~/assets/animations/empty.json';
import ChurchVideo from '~/assets/videos/church.mp4';

import * as NavigationService from '~/navigation/NavigationService';

import {
  BackgroundVideo, Body, EmptyBody, Animation, EmptyTitle, Container, Button, ButtonTitle
} from './styles';
import Header from '~/components/Header';
import { chooseLocationActions } from '../../store/ducks/Location/ChooseLocation';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const video = useRef<Video>(null);

  const [temperature] = useState(0);
  const [stepList, setStepList] = useState<React.ReactNode>([]);
  const { location } = useSelector<RootState, InitialNewLocationStateProps>(
    (state) => state.locations,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    video.current?.playAsync();
  }, []);

  useEffect(() => {
    setStepList(
      location.map((item) => (
        <WeatherCondition
          key={item.id}
          city=""
          date=""
          temperature={temperature}
          temperatureDescription=""
          temperatureUnit="º"
          handleAddPlaceClick={handleAddPlaceClick}
        />
      )),
    );
  }, [location.length]);

  function handleAddPlaceClick() {
    NavigationService.navigate('Place', null);
  }

  function renderEmptyLocationList() {
    return (
      <SafeAreaView>
        <Header date="" city="" handleAddPlaceClick={() => handleAddPlaceClick()} />
        <EmptyBody>
          <Animation autoPlay loop source={EmptyAnimation} />
          <EmptyTitle>Nenhum local cadastrado !</EmptyTitle>
          <Button onPress={() => handleAddPlaceClick()}>
            <ButtonTitle>Adicionar</ButtonTitle>
          </Button>
        </EmptyBody>
      </SafeAreaView>
    );
  }

  function renderWeatherContent() {
    return (
      <>
        <SafeAreaView>
          <Body>
            <BackgroundVideo ref={video} source={ChurchVideo} resizeMode="stretch" isLooping />
            <Swiper
              activeDotColor="#000"
              onIndexChanged={(index) => dispatch(chooseLocationActions.chooseLocation(location[index]))}
              pagingEnabled
              automaticallyAdjustContentInsets
              bounces
              showsPagination={false}
              showsButtons
              buttonWrapperStyle={{
                marginTop: 120,
              }}
              nextButton={<Ionicons name="chevron-forward-outline" size={30} />}
              prevButton={<Ionicons name="chevron-back-outline" size={30} />}
            >
              {stepList?.map((step, index) => (
                <WeatherCondition
                  key={index}
                  city=""
                  date=""
                  temperature={temperature}
                  temperatureDescription=""
                  temperatureUnit="º"
                  handleAddPlaceClick={() => handleAddPlaceClick()}
                />
              ))}
            </Swiper>
          </Body>
        </SafeAreaView>
        <Footer />
      </>
    );
  }

  return (
    <Container>
      {location.length > 0 ? renderWeatherContent() : renderEmptyLocationList()}
    </Container>
  );
}
