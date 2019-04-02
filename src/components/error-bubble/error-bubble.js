import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './error-bubble.module.scss';

const ErrorBubble = ({ errorText }) => {
  const {
    errorBubble,
    textShows
  } = styles;
  
  return (
    <div className={ errorBubble }>
      {/*<span className={ `${ textShows }` }>{ errorText }</span>*/}
      <span>{ errorText }</span>
    </div>
  );
};

ErrorBubble.defaultProps = {
  errorText: ''
};

ErrorBubble.propTypes = {
  errorText: PropTypes.string.isRequired
};

export default memo(ErrorBubble);
