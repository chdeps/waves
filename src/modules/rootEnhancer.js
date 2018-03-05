// @flow

import { applyMiddleware, compose } from 'redux';
import { navMiddleware } from './Nav';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootEnhancer = composeEnhancers(applyMiddleware(navMiddleware));

export default rootEnhancer;
