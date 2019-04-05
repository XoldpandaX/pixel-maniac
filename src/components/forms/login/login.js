import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AppInput from 'components/controls/app-input';

import styles from './login.module.scss';

class LoginForm extends  Component {
  state = {
    inputField: '',
    hasError: false
  };
  
  onInputChange = (e) => {
    this.setState({ inputField: e.target.value });
  };
  
  render () {
    const {
      loginForm,
      formInput,
      formLabel,
      formLabelInner,
      formRow,
      formCol
    } = styles;
  
    const userIcon = (
      <FontAwesomeIcon
        icon='user'
        size='sm'
        color='white'
      />
    );  // stop re-render
  
    const keyIcon = (
      <FontAwesomeIcon
        icon='key'
        size='sm'
        color='white'
      />
    );  // stop re-render
    
    return (
      <form className={ loginForm }>
        <div className={ formRow }>
          <div className={ formCol }>
            <AppInput
              classNames={ formInput }
              labelClass={ formLabel }
              labelInnerClass={ formLabelInner }
              name='userName'
              handleChange={ this.onInputChange }
              placeholder='User name'
            >
              { userIcon }
            </AppInput>
          </div>
          <div className={ formCol }>
            <AppInput
              classNames={ formInput }
              labelClass={ formLabel }
              labelInnerClass={ formLabelInner }
              type='password'
              name='userPassword'
              handleChange={ this.onInputChange }
              placeholder='Password'
            >
              { keyIcon }
            </AppInput>
          </div>
        </div>
        <button className={ `${styles.btn} ${styles.purple}` }>Login</button>
      </form>
    );
  }
}

export default LoginForm;
