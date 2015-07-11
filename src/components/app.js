import React from 'react';
import Main from './main.js';
import {
  createRedux
} from 'redux';
import {
  Provider
} from 'redux/react';
import * as messages from '../stores/store';

const redux = createRedux(messages);

export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() => <Main />}
      </Provider>
    );
  }
}
