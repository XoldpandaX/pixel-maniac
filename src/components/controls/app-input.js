import React from 'react';
import PropTypes from 'prop-types';

const AppInput = (props) => {
  const {
    onInputChange,
    placeholder,
    className,
    id
  } = props;
  
  return (
    <input
      id={ id }
      className={ className }
      type="text"
      placeholder={ placeholder }
      onChange={ onInputChange }
    />
  );
};

AppInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string
};

export default AppInput;
