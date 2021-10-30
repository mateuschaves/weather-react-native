import { combineReducers } from 'redux';

import { newLocationReducer as locations } from './Location/NewLocation';
import { chooseLocationReducer as choosedLocation } from './Location/ChooseLocation';

const reducers = combineReducers({
  locations,
  choosedLocation,
});

export default reducers;
