import React, { memo } from 'react';
import PropTypes from 'prop-types';

const AppInput = (props) => {
  const {
    children,
    inputClass,
    labelClass,
    labelInnerClass,
    name,
    onInputChange,
    onInputBlur,
    placeholder,
    type
  } = props;
  
  return (
    <label
      className={ labelClass }
      htmlFor={ `id-${ name }` }
    >
      <span className={ labelInnerClass }>{ children }</span>
      <input
        id={ `id-${ name }` }
        className={ inputClass }
        type={ type }
        placeholder={ placeholder }
        onChange={ onInputChange }
        onBlur={ onInputBlur }
      />
    </label>
  );
};

AppInput.defaultProps = {
  inputClass: '',
  labelClass: '',
  labelInnerClass: '',
  type: 'text'
};

AppInput.propTypes = {
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelInnerClass: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default memo(AppInput);
