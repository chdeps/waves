// @flow

import { RootNavigator } from 'waves/src/RootNavigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const initialNavState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('root')
);

export const navReducer = (state = initialNavState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const navListener = createReduxBoundAddListener('root');
