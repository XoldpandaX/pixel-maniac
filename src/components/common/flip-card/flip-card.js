import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './flip-card.module.scss';

let cx = classNames.bind(styles);

const FlipCard = (props) => {
  const [isFlip, changeFlipStatus] = useState(false);
  
  const {
    container,
    containerVertical,
    flipper,
    flipperVertical,
    front,
    back,
    backHorizontal,
    backVertical,
    flipHorizontalRight,
    flipVertical
  } = styles;
  
  
  return (
    <div className={ `${ container } ${ containerVertical }` }>
      <div className={ `${ flipper } ${ flipperVertical } ${ flipVertical }` }>
        <div className={ front }>
          <img
            src="https://images7.alphacoders.com/548/thumb-548306.jpg"
            alt="widget image"
          />
        </div>
        <div className={ `${ back } ${ backVertical }` }>
          <img
            src="https://images5.alphacoders.com/697/thumb-697989.jpg"
            alt="widget image"
          />
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {

};

export default FlipCard;
