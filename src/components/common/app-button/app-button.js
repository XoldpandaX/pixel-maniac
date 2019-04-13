import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/common/loader';

import styles from './app-button.module.scss';

const AppButton = (props) => {
  const {
    text,
    isLoading,
    isWide,
    clickHandler
  } = props;
  
  const {
    btn,
    primary,
    disabled,
    wide
  } = styles;
  
  const classNames = `
    ${ btn } ${ isLoading && disabled }
    ${ primary }
    ${ isWide && wide }
  `;
  const content = isLoading ? <Loader size='m' /> : text;
  
  return (
    <button
      className={ classNames }
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
