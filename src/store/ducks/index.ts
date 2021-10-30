import { combineReducers } from 'redux';

import { setLocationReducer as setLocation } from './Location/SetLocation';

const reducers = combineReducers({
  setLocation,
});

export default reducers;
