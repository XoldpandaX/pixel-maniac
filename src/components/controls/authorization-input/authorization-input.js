import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AppInput from 'components/controls/app-input/app-input';

import styles from './authorization-input.module.scss';

const AuthorizationInput = (props) => {
  const {
    icon,
    name,
    placeholder,
    hasError,
    errorText,
    type,
    value,
    onInputChange,
    onHandleBlur
  } = props;
  
  const {
    authInput,
    authLabel,
    authLabelInner
  } = styles;
  
  return (
    <AppInput
      classNames={ authInput }
      labelClass={ authLabel }
      icon={ icon }
      labelInnerClass={ authLabelInner }
      name={ name }
      placeholder={ placeholder }
      hasError={ hasError }
      errorText={ errorText }
      type={ type }
      value={ value }
      handleChange={ onInputChange }
      handleBlur={ onHandleBlur }
    />
  );
};

AuthorizationInput.defaultProps = {
  icon: '',
  placeholder: '',
  errorText: '',
  value: '',
  hasError: false
};

AuthorizationInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(['user', 'key', 'envelope', 'id-card']),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default memo(AuthorizationInput);
