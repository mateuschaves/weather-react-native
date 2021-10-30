import React, { useState, useEffect } from 'react';

import { ScrollView, useWindowDimensions } from 'react-native';
import { TabBar, SceneMap } from 'react-native-tab-view';

import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getForecastWeatherActions } from '../../store/ducks/Weather/GetForecastWeather';
import { InitialGetCurrentWeatherStateProps, RootState } from '~/@types/store/app.state';
import { InitialForecastWeatherStateProps } from '../../@types/store/app.state';

import WeatherForecastItem from '../WeatherForecastItem';
import WeatherSummaryItem from '../WeatherSummaryItem';

import {
  Container, FooterTitle, WeatherTab, WeatherSummary,
} from './styles';

export default function Footer() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const weather = useSelector<RootState, InitialGetCurrentWeatherStateProps>(
    (state) => state.currentWeather,
  );
  const forecastWeather = useSelector<RootState, InitialForecastWeatherStateProps>(
    (state) => state.forecastWeather,
  );

  const feelsLike = _.get(weather, 'weather.main.feels_like', 0);
  const windSpeed = _.get(weather, 'weather.wind.speed', 0);
  const pressure = _.get(weather, 'weather.main.pressure', 0);
  const humidity = _.get(weather, 'weather.main.humidity', 0);

  const lat = _.get(weather, 'weather.coord.lat', 0);
  const lon = _.get(weather, 'weather.coord.lon', 0);

  useEffect(() => {
    if (index) {
      dispatch(
        getForecastWeatherActions.getForecastWeather({ latitude: lat, longitude: lon, exclude: 'hourly,minutely' }),
      );
    }
  }, [index]);

  const [routes] = useState([
    { key: 'now', title: 'Agora' },
    { key: 'daily', title: 'Diariamente' },
  ]);

  const WeatherSummaryComponent = () => (
    <WeatherSummary>
      <WeatherSummaryItem
        iconName="sunny-outline"
        weatherLabel="Sensação"
        weatherValue={`${feelsLike} ºC`}
      />
      <WeatherSummaryItem
        iconName="golf-outline"
        weatherLabel="Vento"
        weatherValue={`${windSpeed} km/h`}
      />
      <WeatherSummaryItem
        iconName="thermometer-outline"
        weatherLabel="Pressão"
        weatherValue={`${pressure} hPa`}
      />
      <WeatherSummaryItem
        iconName="water-outline"
        weatherLabel="Humidade"
        weatherValue={`${humidity} %`}
      />
    </WeatherSummary>
  );

  const WeatherForecastComponent = () => (
    <ScrollView>
      {forecastWeather.forecastWeather?.daily.map((day) => (
        <WeatherForecastItem
          key={day.dt}
          day="Sat"
          iconUri={`http://openweathermap.org/img/wn/${_.get(day, 'weather[0].icon', '01')}@2x.png`}
          conditionTitle={String(_.get(day, 'weather[0].description'))}
          max={`${parseInt(_.get(day, 'temp.max', 0), 10)} º`}
          min={`${parseInt(_.get(day, 'temp.min', 0), 10)} º`}
        />
      ))}
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

  return (
    <Container>
      <FooterTitle>
        Tempo
        {index === 0 ? ' agora' : ' nos próximos 8 dias'}
      </FooterTitle>
      <WeatherTab
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{
          backgroundColor: '#fff',
          color: 'black',
        }}
        sceneContainerStyle={{
          backgroundColor: '#fff',
          color: 'black',
        }}
        tabBarPosition="bottom"
        renderTabBar={renderTabBar}
      />
    </Container>
  );
}
