import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopRatedImages } from 'store/images/selectors';
import random from 'lodash/random';

import FlipCardWidget from 'components/widgets/flip-card-widget';

import styles from './image-widget.module.scss';

class ImageWidget extends Component {
  state = {
    counter: 0,
    row: null,
    images: []
  };
  
  async componentDidMount() {
    await this.setState({ images: this.props.flipSlider });
    
    this.timerId = setTimeout(function tick() {
      const rand = random(0, this.state.images.length - 1);
      
      this.setState((state) => {
        return {
          images: state.images.map((img, idx) => {
            return idx === rand ? { ...img, isFlip: !state.images[rand].isFlip } : img;
          })
        };
      });
      
      this.timerId = setTimeout(tick.bind(this), 5000);
    }.bind(this), 5000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  
  render() {
    const {
      row,
      images
    } = this.state;
    
    const {
      flipSlider,
      classicSlider,
      singleVerticalSlider,
      singleHorizontalSlider
    } = this.props;
    
    return (
      <div style={{width: '100%' }}>
        <FlipCardWidget images={ images } />
      </div>
    );
  }
}

ImageWidget.propTypes = {};

export default connect((state) => ({
  flipSlider: getTopRatedImages(state, 'flipSlider'),
  classicSlider: getTopRatedImages(state, 'classicSlider'),
  singleVerticalSlider: getTopRatedImages(state, 'singleVerticalSlider'),
  singleHorizontalSlider: getTopRatedImages(state, 'singleHorizontalSlider'),
}))(ImageWidget);