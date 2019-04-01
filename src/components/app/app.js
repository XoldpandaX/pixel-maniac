import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from 'components/test';

import './app.css';

class App extends Component {
  
  render () {
    return (
      <div className='app'>
        <header>this is a header</header>
        <Switch>
          <Route
            path='/'
            component={ Test }
            exact
          />
        </Switch>
        <footer>this is a footer</footer>
      </div>
    );
  }
}

export default App;
