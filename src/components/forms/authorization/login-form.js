import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthorizationInput from 'components/controls/authorization-input';

import styles from './authorization.module.scss';

class LoginForm extends  Component {
  state = {
    userName: '',
    password: '',
    hasError: false
  };
  
  onNameChange = ({ target: { value } }) => this.setState({ userName: value });
  onPasswordChange = ({ target: { value } }) => this.setState({ password: value });
  
  render () {
    const {
      loginForm,
      formRow,
      formCol
    } = styles;
    
    return (
      <form className={ loginForm }>
        <div className={ formRow }>
          <div className={ formCol }>
            <AuthorizationInput
              type='text'
              name='userName'
              placeholder='User Name'
              errorText='mfcku'
              icon='user'
              onInputChange={ this.onNameChange }
            />
          </div>
          <div className={ formCol }>
            <AuthorizationInput
              type='password'
              name='userPassword'
              placeholder='User Name'
              errorText='mfcku'
              icon='key'
              onInputChange={ this.onPasswordChange }
            />
          </div>
        </div>
        <button className={ `${styles.btn} ${styles.purple}` }>Login</button>
      </form>
    );
  }
}

export default LoginForm;
