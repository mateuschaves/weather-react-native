import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './NavigationService';

import Home from '../screens/Home';
import Places from '../screens/Places';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Place" component={Places} options={{ headerTransparent: true, title: '', headerBackTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
