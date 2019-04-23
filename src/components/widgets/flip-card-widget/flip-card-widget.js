import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlipCard from 'components/common/flip-card';

import styles from './flip-card-widget.module.scss';

class FlipCardWidget extends Component {
  state = {
    counter: 0
  };
  
  componentDidMount() {
    this.timerId = setTimeout(function tick() {
      this.setState({ counter: this.state.counter += 1 });
      this.timerId = setTimeout(tick.bind(this), 2000);
    }.bind(this), 2000);
  }
  
  stopTimer = () => {
    clearTimeout(this.timerId);
  };
  
  render() {
    return (
      <div>
        <button onClick={ this.stopTimer }>stop timer</button>
        <div>{ this.state.counter }</div>
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
