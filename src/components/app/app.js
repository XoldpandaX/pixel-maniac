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
    isAppRender: false,
    timeout: 1500
  };
  
  async componentDidMount() {
    await this.props.dispatch(fetchHighestRatedImageCollection());
    
    setTimeout(() => {
      this.setState({ isAppRender: true })
    }, this.state.timeout);
  }
  
  render () {
    const { isAppRender } = this.state;
    const { app } = styles;
    
    const loader = !isAppRender && <GlobalLoader />;
  
    return (
      <div className={app}>
        <CSSTransition
          classNames='a-slide'
          in={ isAppRender }
          timeout={{ enter: 400 }}
          unmountOnExit
        >
          <main style={{padding: '50px 50px 2px'}}>
            <div>
              <header>this is a header</header>
              <Switch>
                <Route
                  path='/'
                  component={HomePage}
                  exact
                />
              </Switch>
              <footer>this is a footer</footer>
            </div>
          </main>
        </CSSTransition>
        { loader }
      </div>
    );
  }
}

export default connect(null)(App);
