import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopRatedImages } from 'store/images/selectors';
import random from 'lodash/random';

import FlipCardWidget from 'containers/image-widget/childs/flip-card-widget';
import TapeSliderWidget from 'containers/image-widget/childs/tape-slider-widget';

import styles from './image-widget.module.scss';
const { imageWidget } = styles;

class ImageWidget extends Component {
  state = {
    counter: 0,
    row: null,
    timeout: 1000,
    images: []
  };
  
  async componentDidMount() {
    await this.setState({ images: this.props.flipSliderImages });
    
    this.timerId = setTimeout(function tick() {
      const rand = random(0, this.state.images.length - 1);
      
      this.setState((state) => {
        return {
          images: state.images
            .map((img, idx) => idx === rand
              ? { ...img, isFlip: !state.images[rand].isFlip }
              : img
            )
        };
      });
      
      this.timerId = setTimeout(tick.bind(this), this.state.timeout);
    }.bind(this), this.state.timeout);
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
      tapeSliderImages,
      singleVerticalSlider,
      singleHorizontalSlider
    } = this.props;
    console.info(tapeSliderImages);
    
    return (
      <div
        style={{
          width: '100%',
          overflow: 'hidden'
        }}
        className={ imageWidget }
      >
        <FlipCardWidget images={ images } />
        {/*<TapeSliderWidget images={ tapeSliderImages }/>*/}
      </div>
    );
  }
}

ImageWidget.propTypes = {};

export default connect((state) => ({
  flipSliderImages: getTopRatedImages(state, 'flipSlider'),
  tapeSliderImages: getTopRatedImages(state, 'classicSlider'),
  singleVerticalSliderImages: getTopRatedImages(state, 'singleVerticalSlider'),
  singleHorizontalSliderImages: getTopRatedImages(state, 'singleHorizontalSlider'),
}))(ImageWidget);
