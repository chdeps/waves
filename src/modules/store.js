// @flow

import { createStore } from 'redux';
import enhancer from 'waves/src/modules/rootEnhancer';
import reducers from 'waves/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
