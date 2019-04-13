import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppButton from 'components/common/app-button';
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
      formCol,
      buttonContainer
    } = styles;
    
    return (
      <form className={ loginForm }>
        <div className={ formRow }>
          <div className={ formCol }>
            <AuthorizationInput
              type='text'
              name='userNameLogin'
              placeholder='User name'
              errorText='mfcku'
              icon='user'
              onInputChange={ this.onNameChange }
            />
          </div>
          <div className={ formCol }>
            <AuthorizationInput
              type='password'
              name='userPasswordLogin'
              placeholder='Password'
              errorText='mfcku'
              icon='key'
              onInputChange={ this.onPasswordChange }
            />
          </div>
        </div>
        <div className={ buttonContainer }>
          <AppButton
            text='Login'
            clickHandler={ () => console.log('hello world') }
          />
        </div>
      </form>
    );
  }
}

export default LoginForm;
