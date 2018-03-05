// @flow

import { createStore } from 'redux';
import enhancer from './rootEnhancer';
import reducers from './rootReducer';

export default () => createStore(reducers, enhancer);
