import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AppInput from 'components/controls/app-input/app-input';

import styles from './authorization-input.module.scss';

const AuthorizationInput = (props) => {
  const {
    onInputChange,
    icon,
    name,
    placeholder,
    errorText,
    type
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
      handleChange={ onInputChange }
      placeholder={ placeholder }
      errorText={ errorText }
      type={ type }
    />
  );
};

AuthorizationInput.defaultProps = {
  icon: '',
  placeholder: '',
  errorText: ''
};

AuthorizationInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(['user', 'key', 'envelope']),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default memo(AuthorizationInput);
