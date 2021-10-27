import { combineReducers } from 'redux';

import { sayHiReducer as sayHi } from './Greeting/SayHi';

const createRootReducers = () => combineReducers({
  sayHi,
});

export default createRootReducers;
