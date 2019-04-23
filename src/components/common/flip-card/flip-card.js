import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './flip-card.module.scss';
let cx = classNames.bind(styles);

const FlipCard = (props) => {
  const {
    hasVerticalFlip,
    isFlip
  } = props;
  
  const { front } = styles;
  
  const containerClasses = cx({
    container: true,
    containerVertical: hasVerticalFlip
  });
  
  const flipperClasses = cx({
    flipper: true,
    flipperVertical: hasVerticalFlip,
    flipVertical: hasVerticalFlip && isFlip,
    flipHorizontal: !hasVerticalFlip && isFlip
  });
  
  const backClasses = cx({
    back: true,
    backHorizontal: !hasVerticalFlip,
    backVertical: hasVerticalFlip
  });
  
  return (
    <div className={ containerClasses }>
      <div className={ flipperClasses }>
        <div className={ front }>
          <img
            src="https://images7.alphacoders.com/548/thumb-548306.jpg"
            alt="widget image"
          />
        </div>
        <div className={ backClasses }>
          <img
            src="https://images5.alphacoders.com/697/thumb-697989.jpg"
            alt="widget image"
          />
        </div>
      </div>
    </div>
  );
};

FlipCard.defaultProps = {
  hasVerticalFlip: false,
  isFlip: false
};

FlipCard.propTypes = {
  hasVerticalFlip: PropTypes.bool,
  isFlip: PropTypes.bool
};

export default FlipCard;
