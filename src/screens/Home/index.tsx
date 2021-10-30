import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, View, useWindowDimensions, ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { TabBar, SceneMap } from 'react-native-tab-view';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

import * as NavigationService from '~/navigation/NavigationService';

import RomeVideo from '~/assets/videos/newyork.mp4';
import {
  WeatherSummary,
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
  Body,
  Footer,
  FooterTitle,
  WeatherSummaryItem,
  WeatherLabel,
  WeatherValue,
  WeatherContainer,
  WeatherIconContainer,
  WeatherTab,
  WeatherContainerItem,
  WeatherConditionTitle,
  WeatherDayForecast,
  WeatherIcon,
  WeatherMaxAndMin,
} from './styles';

const WeatherSummaryComponent = () => (
  <WeatherSummary>
    <WeatherSummaryItem>
      <WeatherIconContainer>
        <Ionicons name="sunny-outline" size={25} />
      </WeatherIconContainer>
      <WeatherContainer>
        <WeatherLabel>
          Feel like
        </WeatherLabel>
        <WeatherValue>
          34ºC
        </WeatherValue>
      </WeatherContainer>
    </WeatherSummaryItem>

    <WeatherSummaryItem>
      <WeatherIconContainer>
        <Ionicons name="golf-outline" size={25} />
      </WeatherIconContainer>
      <WeatherContainer>
        <WeatherLabel>
          Wind
        </WeatherLabel>
        <WeatherValue>
          10 km/h
        </WeatherValue>
      </WeatherContainer>
    </WeatherSummaryItem>

    <WeatherSummaryItem>
      <WeatherIconContainer>
        <Ionicons name="thermometer-outline" size={25} />
      </WeatherIconContainer>
      <WeatherContainer>
        <WeatherLabel>
          Pressure
        </WeatherLabel>
        <WeatherValue>
          1023 hPa
        </WeatherValue>
      </WeatherContainer>
    </WeatherSummaryItem>

    <WeatherSummaryItem>
      <WeatherIconContainer>
        <Ionicons name="water-outline" size={25} />
      </WeatherIconContainer>
      <WeatherContainer>
        <WeatherLabel>
          Humidity
        </WeatherLabel>
        <WeatherValue>
          89 %
        </WeatherValue>
      </WeatherContainer>
    </WeatherSummaryItem>
  </WeatherSummary>
);

const WeatherForecastComponent = () => (
  <ScrollView>
    <WeatherContainerItem>
      <WeatherDayForecast>
        Sat
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/03d@2x.png' }} />
      <WeatherConditionTitle>
        Light rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>25º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Sun
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
      <WeatherConditionTitle>
        Moderate rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>17º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Mon
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/01d@2x.png' }} />
      <WeatherConditionTitle>
        Clear sky
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>23º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>29º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Tue
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
      <WeatherConditionTitle>
        Light rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>25º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Wed
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
      <WeatherConditionTitle>
        Light rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>25º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Thu
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
      <WeatherConditionTitle>
        Light rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>25º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>

    <WeatherContainerItem>
      <WeatherDayForecast>
        Fri
      </WeatherDayForecast>
      <WeatherIcon source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
      <WeatherConditionTitle>
        Light rain
      </WeatherConditionTitle>

      <WeatherMaxAndMin>
        <Ionicons name="arrow-down-outline" size={25} />
        <WeatherConditionTitle>20º</WeatherConditionTitle>
        <Ionicons name="arrow-up-outline" size={25} />
        <WeatherConditionTitle>25º</WeatherConditionTitle>
      </WeatherMaxAndMin>
    </WeatherContainerItem>
  </ScrollView>
);

const renderTabBar = (props: any) => (
  <TabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: '#fff' }}
    activeColor="black"
    inactiveColor="rgb(191, 191, 191)"
  />
);

const renderScene = SceneMap({
  now: WeatherSummaryComponent,
  daily: WeatherForecastComponent,
});

export default function Home() {
  const dispatch = useDispatch();
  const layout = useWindowDimensions();

  const video = React.useRef<Video>(null);

  const [temperature, setTemperature] = useState(0);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'now', title: 'Now' },
    { key: 'daily', title: 'Daily' },
  ]);

  useEffect(() => {
    video.current?.playAsync();
    setTimeout(() => setTemperature(21), 300);
  }, []);

  function handleAddPlaceClick() {
    NavigationService.navigate('Place', null);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(197, 205, 173)' }}>
      <SafeAreaView>
        <Body>
          <BackgroundVideo ref={video} source={RomeVideo} resizeMode="stretch" isLooping />
          <Header>
            <CityInfoContainer>
              <City>New York</City>
              <Date>Today, Aug 29 02:35</Date>
            </CityInfoContainer>

            <Ionicons name="add" size={40} onPress={handleAddPlaceClick}/>
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
                  fontSize: 90,
                  fontWeight: '500',
                }}
                animationDuration={600}
              />
              <TemperatureUnit>º</TemperatureUnit>
            </TemperatureContainer>
          </TemperatureInfo>
        </Body>
      </SafeAreaView>
      <Footer>
        <FooterTitle>
          Weather
          {' '}
          {index === 0 ? 'now' : 'in the next 5 days' }
        </FooterTitle>
        <WeatherTab
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{
            backgroundColor: '#fff',
            marginBottom: 60,
            color: 'black',
          }}
          sceneContainerStyle={{
            backgroundColor: '#fff',
            color: 'black',
          }}
          tabBarPosition="bottom"
          renderTabBar={renderTabBar}
        />
      </Footer>
    </View>
  );
}
