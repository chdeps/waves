// @flow

import { combineReducers } from 'redux';

import { authReducer } from './Auth';
import { navReducer } from './Nav';

const rootReducer = combineReducers({
  app: authReducer,
  nav: navReducer,
});

export default rootReducer;
