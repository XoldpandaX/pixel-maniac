import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppInput from 'components/controls/app-input';

import styles from './login.module.scss';

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
      formInput,
      formLabel,
      formLabelInner,
      formRow,
      formCol
    } = styles;
    
    return (
      <form className={ loginForm }>
        <div className={ formRow }>
          <div className={ formCol }>
            <AppInput
              classNames={ formInput }
              labelClass={ formLabel }
              icon='user'
              labelInnerClass={ formLabelInner }
              name='userName'
              handleChange={ this.onNameChange }
              placeholder='User name'
            />
          </div>
          <div className={ formCol }>
            <AppInput
              classNames={ formInput }
              labelClass={ formLabel }
              icon='key'
              labelInnerClass={ formLabelInner }
              type='password'
              name='userPassword'
              handleChange={ this.onPasswordChange }
              placeholder='Password'
            />
          </div>
        </div>
        <button className={ `${styles.btn} ${styles.purple}` }>Login</button>
      </form>
    );
  }
}

export default LoginForm;
