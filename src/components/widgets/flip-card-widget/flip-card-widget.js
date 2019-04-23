import React, {Component} from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';

import FlipCard from 'components/common/flip-card';

import styles from './flip-card-widget.module.scss';

class FlipCardWidget extends Component {
  state = {
    counter: 0,
    row: null
  };
  
  componentDidMount() {
    this.timerId = setTimeout(function tick() {
      const rand = random(0, 4);
      this.setState({ row: rand });
      
      this.timerId = setTimeout(tick.bind(this), 1000);
    }.bind(this), 1000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.stopTimer }>stop timer</button>
        <div>{ this.state.row }</div>
        <FlipCard
          frontImage='https://images7.alphacoders.com/548/thumb-548306.jpg'
          backImage='https://images5.alphacoders.com/697/thumb-697989.jpg'
          isFlip={ true }
        />
      </div>
    );
  }
}

FlipCardWidget.propTypes = {};

export default FlipCardWidget;
