import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import ErrorBubble from 'components/error-bubble';
import './app-input.scss';

class AppInput extends PureComponent {
  state = { hasError: false };
  
  componentDidUpdate({ hasError }, prevState, snapshot) {
    this.props.hasError !== hasError
    && this.setState({ hasError: this.props.hasError })
  }
  
  render() {
    const {
      errorText,
      children,
      inputClass,
      labelClass,
      labelInnerClass,
      name,
      handleBlur,
      handleChange,
      placeholder,
      type
    } = this.props;
    
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
          onChange={ handleChange }
          onBlur={ handleBlur }
        />
        <CSSTransition
          in={ this.state.hasError }
          timeout={ 400 }
          classNames='error'
          unmountOnExit
        >
          <ErrorBubble errorText={ errorText } />
        </CSSTransition>
      </label>
    );
  }
}

AppInput.defaultProps = {
  hasError: false,
  errorText: '',
  inputClass: '',
  labelClass: '',
  labelInnerClass: '',
  type: 'text'
};

AppInput.propTypes = {
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelInnerClass: PropTypes.string,
  name: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default AppInput;
