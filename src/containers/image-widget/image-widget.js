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
    interval: 1000,
    flipCardSlider: {
      images: []
    },
    tapeCardSlider: {
      images: []
    },
    availableSliders: ['flip', 'tape']
  };
  
  tapeSliderInst = React.createRef();
  
  async componentDidMount() {
    this.initState();
    
    this.timerId = setInterval(() => {
      const { availableSliders } = this.state;
      const activeSliderIdx = random(0, availableSliders.length - 1);
  
      if (availableSliders[activeSliderIdx] === 'flip') {
        this.flipRandomCard();
      } else if (availableSliders[activeSliderIdx] === 'tape') {
        this.tapeSliderInst.current.scrollSlide();
      }
    }, this.state.interval);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  
  initState() {
    const { flipSliderImages, tapeSliderImages } = this.props;
    
    this.setState({ flipCardSlider: { images: flipSliderImages } });
    this.setState({ tapeCardSlider: { images: tapeSliderImages } });
  }
  
  flipRandomCard() {
    const rand = random(0, this.state.flipCardSlider.images.length - 1);
    this.setState(({ flipCardSlider: { images } }) => (
      {
        flipCardSlider: {
          images: images.map((img, idx) => idx === rand
              ?  { ...img, isFlip: !images[rand].isFlip }
              : img
            )
        }
      }
    ));
  }
  
  render() {
    const {
      tapeSliderImages,
      singleVerticalSlider,
      singleHorizontalSlider
    } = this.props;
    
    const {
      flipCardSlider: { images: flipImages }
    } = this.state;
  
    const { imageWidget } = styles;
    
    return (
      <div className={ imageWidget }>
        <FlipCardWidget images={ flipImages } />
        <TapeSliderWidget
          ref={ this.tapeSliderInst }
          images={ tapeSliderImages }
          imagesInRow={ 7 }
        />
        {/*<TapeSliderWidget*/}
        {/*  images={ tapeSliderImages }*/}
        {/*  imagesInRow={ 6 }*/}
        {/*/>*/}
        {/*<TapeSliderWidget*/}
        {/*  images={ tapeSliderImages }*/}
        {/*  imagesInRow={ 10 }*/}
        {/*/>*/}
      </div>
    );
  }
}

export default connect((state) => ({
  flipSliderImages: getTopRatedImages(state, 'flipSlider'),
  tapeSliderImages: getTopRatedImages(state, 'classicSlider'),
  singleVerticalSliderImages: getTopRatedImages(state, 'singleVerticalSlider'),
  singleHorizontalSliderImages: getTopRatedImages(state, 'singleHorizontalSlider'),
}))(ImageWidget);
