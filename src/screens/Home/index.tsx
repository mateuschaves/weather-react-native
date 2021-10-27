import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { sayHiActions } from '~/store/ducks/Greeting/SayHi';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sayHiActions.sayHi({ message: 'oi' }));
  }, []);

  return (
    <View>
      <Text />
    </View>
  );
}
