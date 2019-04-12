import React from 'react';
import PropTypes from 'prop-types';

import styles from './spinner.module.scss';

const Spinner = ({ size, className }) => {
  const { loader } = styles;
  const sizes = {
    s: styles.loaderSizeS,
    m: styles.loaderSizeM,
    l: styles.loaderSizeL,
    xl: styles.loaderSizeXL,
  };
  
  const classNames = className
    ? `${ loader } ${ sizes[size] }`
    : `${ className } ${ loader } ${ sizes[size] }`;
  
  return (
    <div className={ classNames } />
  );
};

Spinner.defaultProps = {
  className: ''
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']).isRequired
};

export default Spinner;
