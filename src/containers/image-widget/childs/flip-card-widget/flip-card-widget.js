import React  from 'react';
import PropTypes from 'prop-types';

import FlipCard from 'components/common/flip-card';

import styles from './flip-card-widget.module.scss';

const FlipCardWidget = ({ images }) => {
  const { flipCardWidget, cardEl } = styles;
  
  return (
    <div className={ flipCardWidget }>
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
              width='245px'
              height='163px'
            />
          </div>
        ))
      }
    </div>
  );
};

FlipCardWidget.propTypes = {
  images: PropTypes.array.isRequired
};

export default FlipCardWidget;
