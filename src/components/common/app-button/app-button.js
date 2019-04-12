import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/common/loader';

import styles from './app-button.module.scss';

const AppButton = (props) => {
  const {
    type,
    text,
    isLoading
  } = props;
  
  const {
    actionButton,
    blue,
    red,
    green,
    yellow
  } = styles;
  
  const classNames = `${ actionButton } ${ blue }`;
  const content = isLoading ? <Loader size='m' /> : text;
  
  return (
    <button
      className={ classNames }>{ content }</button>
  );
};

AppButton.defaultProps = {
  isLoading: false
};

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default memo(AppButton);
