import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './loader.module.scss';
let cx = classNames.bind(styles);

const Loader = ({ size, className }) => {
  const sizes = {
    s: styles.loaderSizeS,
    m: styles.loaderSizeM,
    l: styles.loaderSizeL,
    xl: styles.loaderSizeXL,
  };
  
  const loaderClasses = cx(
    sizes[size],
    className,
    { loader: true }
  );
  
  return <div className={ loaderClasses } />;
};

Loader.defaultProps = {
  className: ''
};

Loader.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']).isRequired,
  classNames: PropTypes.string
};

export default Loader;
