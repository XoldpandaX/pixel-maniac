import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.scss';

import * as reducers from './store'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);
const createApp = (app, root) => {
  ReactDOM.render(app, document.getElementById(root));
};
const app = (
  <Provider store={ store }>
    <App />
  </Provider>
);

createApp(app, 'root');
