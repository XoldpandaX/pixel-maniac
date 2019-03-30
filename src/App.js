import React, { Component } from 'react';

import ItemsList from './components/items-list';
import TopicsScreen from './containers/topics-screen';

import appClasses from './App.module.scss';
import './index.scss';

class App extends Component {
  render() {
    const { app } = appClasses;
    
    return (
      <div className={ app }>
        {/*<ItemsList />*/}
        {/*<TopicsScreen />*/}
      </div>
    );
  }
}

export default App;
