import React from 'react';
import Main from './main.js';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {
  Provider
} from 'react-redux';
import * as reducers from '../reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    );
  }
}
