import React from 'react';
import PropTypes from 'prop-types';

import styles from './tape-slider-widget.module.scss';

const TapeSliderWidget = ({ images }) => {
  const slideWidth = 150;
  const sliderWrapperWidth = slideWidth * images.length;
  
  const imagesElements = (sliderImages) => sliderImages.map(({ id, urlThumb }) => {
    return (
      <div
        key={ id }
        style={{
          width: `${slideWidth}px`,
          float: 'left',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          style={{
            border: '1px solid rgba(255,255,255,.25)'
          }}
          src={ urlThumb }
          alt='slider element'
        />
      </div>
    );
  });
  
  return (
    <div style={{
      overflow: 'hidden',
      width: `${sliderWrapperWidth}px`,
      height: '300px'
    }}>
      { imagesElements(images) }
    </div>
  );
};

TapeSliderWidget.propTypes = {

};

export default TapeSliderWidget;
