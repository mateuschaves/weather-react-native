import { combineReducers } from 'redux';

import { newLocationReducer as locations } from './Location/NewLocation';

const reducers = combineReducers({
  locations,
});

export default reducers;
