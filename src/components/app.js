import React from 'react';
import Main from './main.js';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import {
  devTools,
  persistState
} from 'redux-devtools';
import {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';
import {
  Provider
} from 'react-redux';
import * as reducers from '../reducers/reducer';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Main />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools
            store={store}
            monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
