import React from 'react';
import PropTypes from 'prop-types';

import styles from './loader.module.scss';

const Loader = ({ size, className }) => {
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

Loader.defaultProps = {
  className: ''
};

Loader.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']).isRequired
};

export default Loader;
