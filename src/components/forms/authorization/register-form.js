import React from 'react';
import PropTypes from 'prop-types';

import AuthorizationInput from 'components/controls/authorization-input';

import styles from './authorization.module.scss';

const RegisterForm = (props) => {
  const {
    loginForm,
    formRow,
    formRowTwoItems,
    formCol,
    formColTwoItems,
    someText
  } = styles;
  
  const onNameChange= () => ({ target: { value } }) => this.setState({ userName: value });
  const onPasswordChange = () => ({ target: { value } }) => this.setState({ password: value });
  
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
            onInputChange={ onNameChange }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='email'
            name='userEmail'
            placeholder='Email'
            errorText='mfcku'
            icon='envelope'
            onInputChange={ onPasswordChange }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='password'
            name='userPassword'
            placeholder='User Name'
            errorText='mfcku'
            icon='key'
            onInputChange={ onPasswordChange }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='password'
            name='userPassword'
            placeholder='Password'
            errorText='mfcku'
            icon='key'
            onInputChange={ onPasswordChange }
          />
        </div>
      </div>
      <p className={ someText }>Optional</p>
      <div className={ formRowTwoItems }>
        <div className={ formColTwoItems }>
          <AuthorizationInput
            type='text'
            name='userFirstName'
            placeholder='Repeat password'
            errorText='mfcku'
            icon='id-card'
            onInputChange={ onPasswordChange }
          />
        </div>
        <div className={ formColTwoItems }>
          <AuthorizationInput
            type='text'
            name='userLastName'
            placeholder='Last name'
            errorText='mfcku'
            icon='id-card'
            onInputChange={ onPasswordChange }
          />
        </div>
      </div>
      <button className={ `${styles.btn} ${styles.purple}` }>Login</button>
    </form>
  );
};

export default RegisterForm;
