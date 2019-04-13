import React from 'react';
import PropTypes from 'prop-types';
import { authorizationErrors } from '../../../constants';

import AppButton from 'components/common/app-button';
import AuthorizationInput from 'components/controls/authorization-input';
import withFormValidation from 'containers/hoc/with-form-validation';

import styles from './authorization.module.scss';

const RegisterForm = (props) => {
  const {
    data: {
      userName,
      userEmail,
      userPassword,
      userRepeatPassword,
      userFirstName,
      userLastName
    },
    errors,
    isLoading,
    handleInput,
    handleSubmit,
    handleBlur
  } = props;
  
  const {
    loginForm,
    formRow,
    formRowTwoItems,
    formCol,
    formColTwoItems,
    someText
  } = styles;
  
  return (
    <form className={ loginForm }>
      <div className={ formRow }>
        <div className={ formCol }>
          <AuthorizationInput
            type='text'
            name='userName'
            value={ userName }
            placeholder='User name'
            hasError={ errors.userName }
            errorText={ authorizationErrors.username }
            icon='user'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='email'
            name='userEmail'
            value={ userEmail }
            placeholder='Email'
            hasError={ errors.userEmail }
            errorText={ authorizationErrors.email }
            icon='envelope'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='password'
            name='userPassword'
            value={ userPassword }
            placeholder='Password'
            hasError={ errors.userPassword }
            errorText={ authorizationErrors.password }
            icon='key'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
        <div className={ formCol }>
          <AuthorizationInput
            type='password'
            name='userRepeatPassword'
            value={ userRepeatPassword }
            placeholder='Repeat password'
            hasError={ errors.userRepeatPassword }
            errorText={ authorizationErrors.passwordRepeat }
            icon='key'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
      </div>
      <p className={ someText }>Optional</p>
      <div className={ formRowTwoItems }>
        <div className={ formColTwoItems }>
          <AuthorizationInput
            type='text'
            name='userFirstName'
            value={ userFirstName }
            placeholder='First name'
            errorText='mfcku'
            icon='id-card'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
        <div className={ formColTwoItems }>
          <AuthorizationInput
            type='text'
            name='userLastName'
            value={ userLastName }
            placeholder='Last name'
            errorText='mfcku'
            icon='id-card'
            onInputChange={ handleInput }
            onHandleBlur={ handleBlur }
          />
        </div>
      </div>
      <AppButton
        text='Register'
        isWide={ true }
        isLoading={ isLoading }
        clickHandler={ handleSubmit }
      />
    </form>
  );
};

RegisterForm.defaultProps = {
  isLoading: false
};

RegisterForm.propTypes = {
  data: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired,
    userRepeatPassword: PropTypes.string.isRequired,
    userFirstName: PropTypes.string.isRequired,
    userLastName: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    userName: PropTypes.bool.isRequired,
    userEmail: PropTypes.bool.isRequired,
    userPassword: PropTypes.bool.isRequired,
    userRepeatPassword: PropTypes.bool.isRequired
  }).isRequired,
  isLoading: PropTypes.bool,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const initialFormFields = { // TODO after test set empty strings
  data: {
    userName: 'dddd',
    userEmail: 'dd@dd.dd',
    userPassword: '123456q.',
    userRepeatPassword: '123456q.',
    userFirstName: 'dfsdf',
    userLastName: 'sfsdf'
  },
  errors: {
    userName: false,
    userEmail: false,
    userPassword: false,
    userRepeatPassword: false
  }
};

export default withFormValidation(
  initialFormFields.data,
  initialFormFields.errors
)(RegisterForm);
