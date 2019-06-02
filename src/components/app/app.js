import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHighestRatedImageCollection } from 'store/images/actions';
import { CSSTransition } from 'react-transition-group';

import GlobalLoader from 'components/common/global-loader';
import HomePage from 'components/pages/home';

import styles from './app.module.scss';

class App extends Component {
  state = {
    isAppRender: false
  };
  
  async componentDidMount() {
    await this.props.dispatch(fetchHighestRatedImageCollection());
    this.setState({ isAppRender: true })
  }
  
  render () {
    const { isAppRender } = this.state;
    const { app, appContainer } = styles;
    
    const loader = !isAppRender && <GlobalLoader />;
  
    return (
      <div className={ app }>
        { loader }
        <header style={{height: '80px'}}>this is a header</header>
        <CSSTransition
          classNames='app-slide'
          in={ isAppRender }
          timeout={{ enter: 400 }}
          unmountOnExit
        >
          <main className={ appContainer }>
            <Switch>
              <Route
                path='/'
                component={HomePage}
                exact
              />
            </Switch>
          </main>
        </CSSTransition>
        <footer>this is a footer</footer>
      </div>
    );
  }
}

export default connect(null)(App);
