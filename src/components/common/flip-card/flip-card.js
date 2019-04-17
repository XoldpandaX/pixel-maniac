import React from 'react';
import PropTypes from 'prop-types';

import styles from './flip-card.scss';

const FlipCard = (props) => {
  const {
    container,
    flipper,
    front,
    back
  } = props;
  
  return (
    <div className='flip-container'>
      <div className='flipper flr'>
        <div className='front'>
          <img
            src="https://images7.alphacoders.com/548/thumb-548306.jpg"
            alt="widget image"
          />
        </div>
        <div className='back'>
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
