import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './flip-card.module.scss';
let cx = classNames.bind(styles);

const FlipCard = (props) => {
  const {
    hasVerticalFlip,
    isFlip,
    frontImage,
    backImage,
    id,
    width,
    height
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
            src={ frontImage }
            alt={ `widget ${ id } `}
            width={ width }
            height={ height }
          />
        </div>
        <div className={ backClasses }>
          <img
            src={ backImage }
            alt={ `widget ${ id } `}
            width={ width }
            height={ height }
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
  isFlip: PropTypes.bool,
  frontImage: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired
};

export default FlipCard;
