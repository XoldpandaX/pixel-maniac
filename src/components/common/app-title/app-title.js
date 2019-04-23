import React, { createElement, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './app-title.module.scss';
let cx = classNames.bind(styles);

const AppTitle = (props) => {
  const {
    level,
    children,
    classNames,
    color,
    hasTextShadow
  } = props;
  
  const titleClasses = cx(classNames, {
    appTitle: true,
    textShadow: hasTextShadow
  });
  
  const availableLevels = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3'
  };
  
  return createElement(
    `${ availableLevels[level] }`,
    {
      className: titleClasses,
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
