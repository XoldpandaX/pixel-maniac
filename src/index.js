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

const application = (store) => (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);

store.firebaseAuthIsReady.then(() => { // render application when user auth checking is end
  render(application(store), document.getElementById('root'));
});
