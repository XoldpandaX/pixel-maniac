import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import FlipCard from 'components/common/flip-card';

import styles from './flip-card-widget.module.scss';
import random from "lodash/random";
let cx = classNames.bind(styles);

class FlipCardWidget extends Component {
  state = {
    numOfLoadedImages: 0,
    updatedImages: []
  };
  
  componentDidMount() {
    this.setState({ updatedImages: this.props.images });
  }
  
  updateNumOfLoadedImages = () => {
    this.setState((state) => ({
      numOfLoadedImages: state.numOfLoadedImages + 1
    }));
  };
  
  flipRandomCard() {
    const rand = random(0, this.state.updatedImages.length - 1);
    this.setState((state) => (
      {
        updatedImages: state.updatedImages
          .map((img, idx) => idx === rand
            ? { ...img, isFlip: !state.updatedImages[rand].isFlip }
            : img
          )
      }
    ));
  }
  
  render() {
    const { numOfLoadedImages, updatedImages } = this.state;
    const { images } = this.props;
    const { flipCardWidget } = styles;
    
    const cardElClasses = cx('widget-border', ['cardEl']);
    // 2 because of two sides of card with images
    const isAllImagesLoaded = numOfLoadedImages === images.length * 2;
    
    return (
      <div
        style={{ display: isAllImagesLoaded ? '' : 'none' }}
        className={ flipCardWidget }
      >
        {
          updatedImages.map(({ id, front, back, isFlip, hasVerticalFlip }) => (
            <div
              className={ cardElClasses }
              key={ id }
            >
              <FlipCard
                id={ id }
                frontImage={ front.urlThumb }
                backImage={ back.urlThumb }
                isFlip={ isFlip }
                hasVerticalFlip={ hasVerticalFlip }
                width='240px'
                height='163px'
                onImageLoad={ this.updateNumOfLoadedImages }
              />
            </div>
          ))
        }
      </div>
    );
  }
}

FlipCardWidget.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      back: PropTypes.shape({ urlThumb: PropTypes.string }).isRequired,
      front: PropTypes.shape({ urlThumb: PropTypes.string }).isRequired,
      hasVerticalFlip: PropTypes.bool.isRequired,
      isFlip: PropTypes.bool.isRequired
    })
  )
};

export default FlipCardWidget;
