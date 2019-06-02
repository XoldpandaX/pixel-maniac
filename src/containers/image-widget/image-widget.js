import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTopRatedImages } from 'store/images/selectors';
import random from 'lodash/random';

import FlipCardWidget from 'containers/image-widget/childs/flip-card-widget';
import TapeSliderWidget from 'containers/image-widget/childs/tape-slider-widget';

import styles from './image-widget.module.scss';

class ImageWidget extends Component {
  state = {
    counter: 0,
    interval: 5000,
    availableSliders: ['flip', 'tape']
  };
  
  tapeSliderInst = React.createRef();
  flipSliderInst = React.createRef();
  
  async componentDidMount() {
    this.timerId = setInterval(() => {
      const { availableSliders } = this.state;
      const activeSliderIdx = random(0, availableSliders.length - 1);
  
      if (availableSliders[activeSliderIdx] === 'flip') {
        this.flipSliderInst.current.flipRandomCard();
      } else if (availableSliders[activeSliderIdx] === 'tape') {
        this.tapeSliderInst.current.scrollSlide();
      }
    }, this.state.interval);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  
  render() {
    const {
      flipSliderImages,
      tapeSliderInstImages,
      singleVerticalSlider,
      singleHorizontalSlider
    } = this.props;
  
    const { imageWidget } = styles;
    
    return (
      <div className={ imageWidget }>
        <FlipCardWidget
          ref={ this.flipSliderInst }
          images={ flipSliderImages }
        />
        <TapeSliderWidget
          ref={ this.tapeSliderInst }
          images={ tapeSliderInstImages }
          imagesInRow={ 7 }
        />
      </div>
    );
  }
}

export default connect((state) => ({
  flipSliderImages: getTopRatedImages(state, 'flipSlider'),
  tapeSliderInstImages: getTopRatedImages(state, 'classicSlider'),
  singleVerticalSliderImages: getTopRatedImages(state, 'singleVerticalSlider'),
  singleHorizontalSliderImages: getTopRatedImages(state, 'singleHorizontalSlider'),
}))(ImageWidget);
