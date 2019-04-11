import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './error-bubble.module.scss';

const ErrorBubble = ({ errorText }) => {
  const { errorBubble } = styles;
  
  return (
    <div className={ errorBubble }>
      <span className='a-elastic-slide'>{ errorText }</span>
    </div>
  );
};

ErrorBubble.propTypes = {
  errorText: PropTypes.string.isRequired
};

export default memo(ErrorBubble);
