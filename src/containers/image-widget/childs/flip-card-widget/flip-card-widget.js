import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import FlipCard from 'components/common/flip-card';

import styles from './flip-card-widget.module.scss';

class FlipCardWidget extends Component {
  state = {
    numOfLoadedImages: 0
  };
  
  updateNumOfLoadedImages = () => {
    this.setState((state) => ({
      numOfLoadedImages: state.numOfLoadedImages + 1
    }));
  };
  
  render() {
    const { numOfLoadedImages } = this.state;
    const { images } = this.props;
    const { flipCardWidget, cardEl } = styles;
  
    // 2 because of two sides of card with images
    const isAllImagesLoaded = numOfLoadedImages === images.length * 2;
    
    return (
      <div
        style={{ display: isAllImagesLoaded ? '' : 'none' }}
        className={ flipCardWidget }
      >
        {
          images.map(({ id, front, back, isFlip, hasVerticalFlip }) => (
            <div
              className={ cardEl }
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
  images: PropTypes.array.isRequired
};

export default FlipCardWidget;
