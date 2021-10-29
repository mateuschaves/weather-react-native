import '~/config/reactotron';
import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from '~/screens/Home';
import Places from '~/screens/Places';

import { persistor, store } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Places />
      </PersistGate>
    </Provider>
  );
}
