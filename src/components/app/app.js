import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/pages/home';

import './app.css';

class App extends Component {
  
  render () {
    return (
      <div className='app'>
        <main style={ { padding: '50px 50px 2px' } }>
          <header>this is a header</header>
          <Switch>
            <Route
              path='/'
              component={ HomePage }
              exact
            />
          </Switch>
          <footer>this is a footer</footer>
        </main>
      </div>
    );
  }
}

export default App;
