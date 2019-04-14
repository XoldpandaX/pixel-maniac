import React from 'react';
import PropTypes from 'prop-types';

import { authorizationErrors } from '../../../constants';

import AppButton from 'components/common/app-button';
import AuthorizationInput from 'components/controls/authorization-input';
import withFormValidation from 'containers/hoc/with-form-validation';

import styles from './authorization.module.scss';

const LoginForm = (props) => {
  const {
    data: {
      userEmail,
      userPassword,
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
    formCol,
    buttonContainer
  } = styles;
  
  return (
    <form className={ loginForm }>
      <div className={ formRow }>
        <div className={ formCol }>
          <AuthorizationInput
            type='text'
            name='userEmail'
            value={ userEmail }
            placeholder='Email'
            hasError={ errors.userEmail }
            errorText={ authorizationErrors.email }
            icon='user'
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
      </div>
      <div className={ buttonContainer }>
        <AppButton
          text='Login'
          isLoading={ isLoading }
          clickHandler={ handleSubmit }
        />
      </div>
    </form>
  );
};

LoginForm.defaultProps = {
  isLoading: false
};

LoginForm.propTypes = {
  data: PropTypes.shape({
    userEmail: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
  })
};

const initialFormFields = {
  data: {
    userEmail: '',
    userPassword: ''
  },
  errors: {
    userEmail: false,
    userPassword: false
  }
};

export default withFormValidation(
  initialFormFields.data,
  initialFormFields.errors,
  'login'
)(LoginForm);
