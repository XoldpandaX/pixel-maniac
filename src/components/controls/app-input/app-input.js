import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ErrorBubble from 'components/error-bubble';

class AppInput extends PureComponent {
  state = { hasError: false };
  
  componentDidUpdate({ hasError }, prevState, snapshot) {
    this.props.hasError !== hasError
    && this.setState({ hasError: this.props.hasError })
  }
  
  render() {
    console.info('sdf');
    const {
      errorText,
      classNames,
      labelClass,
      icon,
      labelText,
      labelInnerClass,
      name,
      handleBlur,
      handleChange,
      placeholder,
      type
    } = this.props;
    
    const animationTimeouts = {
      enter: 400,
      exit: 250
    };
    
    const labelIcon = icon && (
      <FontAwesomeIcon
        icon={ icon }
        size='sm'
        color='white'
      />
    );
    
    return (
      <label
        className={ labelClass }
        htmlFor={ `id-${ name }` }
      >
        <span className={ labelInnerClass }>{ labelIcon || labelText }</span>
        <input
          id={ `id-${ name }` }
          className={ classNames }
          type={ type }
          placeholder={ placeholder }
          onChange={ handleChange }
          onBlur={ handleBlur }
        />
        <CSSTransition
          classNames='a-slide'
          in={ this.state.hasError }
          timeout={{ ...animationTimeouts }}
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
  name: '',
  classNames: '',
  labelClass: '',
  icon: '',
  labelText: '',
  labelInnerClass: '',
  type: 'text'
};

AppInput.propTypes = {
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  labelClass: PropTypes.string,
  icon: PropTypes.oneOf(['user', 'key']),
  labelText: PropTypes.string,
  labelInnerClass: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default AppInput;
