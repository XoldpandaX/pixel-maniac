import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createFontAwesomeIcons, storeCreator } from 'utils';

import App from 'components/app';

import 'typeface-ubuntu';
import 'index.scss';

createFontAwesomeIcons();
const store = storeCreator();

const application = (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(application, document.getElementById('root'));
