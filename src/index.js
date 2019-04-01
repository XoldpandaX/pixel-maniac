import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from 'components/app';
import 'index.scss';

import * as reducers from './store'

import { createFontAwesomeIcons } from 'utils';
createFontAwesomeIcons();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);
const application = (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(application, document.getElementById('root'));
