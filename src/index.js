import React from 'react';
import App from './components/app';
import {
  encryptText
} from './crypto/api';
require('style!purecss');
require('style!./css/css.css');

React.render(<App />, document.getElementById('root'));

encryptText('hello');
