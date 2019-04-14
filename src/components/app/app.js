import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/pages/home';

import styles from './app.module.scss';

class App extends Component {
  
  render () {
    const {
      app
    } = styles;
    
    return (
      <div className={ app }>
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
