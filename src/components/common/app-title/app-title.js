import React, { createElement, memo } from 'react';
import PropTypes from 'prop-types';

import styles from './app-title.module.scss';

const AppTitle = (props) => {
  const {
    level,
    children,
    classNames,
    color,
    hasTextShadow
  }= props;
  
  const { appTitle, textShadow } = styles;
  
  const textShadowClass = hasTextShadow ? textShadow : null;
  
  const availableLevels = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3'
  };
  
  return createElement(
    `${ availableLevels[level] }`,
    {
      className: `${ appTitle } ${ textShadowClass } ${ classNames }`,
      style: { color },
    },
    children
  );
};

AppTitle.defaultProps = {
  classNames: '',
  color: '#fff',
  hasTextShadow: true
};

AppTitle.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  color: PropTypes.string,
  hasTextShadow: PropTypes.bool
};

export default memo(AppTitle);
