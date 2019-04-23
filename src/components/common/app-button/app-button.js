import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Loader from 'components/common/loader';

import styles from './app-button.module.scss';
let cx = classNames.bind(styles);

const AppButton = (props) => {
  const {
    text,
    isLoading,
    isWide,
    clickHandler
  } = props;
  
  const btnClasses = cx({
    btn: true,
    primary: true,
    disabled: isLoading,
    wide: isWide
  });
  
  const content = isLoading ? <Loader size='m' /> : text;
  
  return (
    <button
      className={ btnClasses }
      disabled={ isLoading }
      onClick={ clickHandler }
    >
      { content }
    </button>
  );
};

AppButton.defaultProps = {
  isLoading: false,
  isWide: false
};

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isWide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
};

export default memo(AppButton);
