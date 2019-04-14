import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'seamless-immutable';
import * as authActions from 'store/auth/actions';
import * as authSelectors from 'store/auth/selectors';

import { showNotification } from '../../utils'
import { regExp } from '../../constants';

const withFormValidation = (initialFormFields, requiredFields, submitType) =>
  (WrappedComponent) => {
  class WrappedForm extends Component {
    state = Immutable({
      data: initialFormFields,
      errors: requiredFields
    });
  
    static checkName(userName) {
      return (
        userName &&
        userName.length >= 4 &&
        !regExp.verifyUserName.test(userName)
      );
    }

    static checkEmail(email) {
      return regExp.verifyEmail.test(email);
    }

    static checkPassword(password) {
      return regExp.verifyPassword.test(password);
    }

    checkPasswordEqual = (repeatPassword) => {
      return this.state.data.userPassword === repeatPassword;
    };

    availableChecks = {
      userName: WrappedForm.checkName,
      userEmail: WrappedForm.checkEmail,
      userPassword: WrappedForm.checkPassword,
      userRepeatPassword: this.checkPasswordEqual
    };

    changeStateFieldVal = (name, val, changedField) => {
      this.setState((prevState) => ({
        [changedField]: {
          ...prevState[changedField],
          [name]: val
        }
      }))
    };

    handleInput = ({ target: { name, value } }) => {
      const trimmedValue = value.trim();

      if (!this.state.errors[name]) {
        this.changeStateFieldVal(name, trimmedValue, 'data');
      } else {
        this.changeStateFieldVal(name, trimmedValue, 'data');
        const res = trimmedValue
          ? this.availableChecks[name](trimmedValue)
          : false;

        return res && this.changeStateFieldVal(name, false, 'errors');
      }
    };

    handleBlur = ({ target: { name, value } }) => {
      const trimmedValue = value.trim();
      const checkFunction = this.availableChecks[name];

      const res = trimmedValue && checkFunction
        ? checkFunction(trimmedValue)
        : false;

      if (trimmedValue !== '' && !res && checkFunction) {
        this.changeStateFieldVal(name, true, 'errors');
      }
    };

    handleSubmit = (e) => {
      e.preventDefault();

      const { data, errors } = this.state;
      const hasDataErrors = Object.values(errors).every((el) => !el);
      
      const isAllDataFilled = Object.entries(data)
        .filter(([fieldKey]) => {
          const optionalFields = ['userFirstName', 'userLastName'];
          return !optionalFields.includes(fieldKey);
        })
        .map(([fieldKeykey, fieldValue]) => fieldValue)
        .every((fieldValue) => fieldValue.length);
      
      const hasOneFilledField = Object.values(data).some((field) => field);

      if (isAllDataFilled && !!hasDataErrors) {
        const { dispatch } = this.props;
        const { userEmail, userPassword } = data;
        
        return submitType === 'register'
          ? dispatch(authActions.register(data))
          : dispatch(authActions.login({ email: userEmail, password: userPassword }))
      }
      
      if (hasOneFilledField) {
        showNotification({
          title: 'Form error',
          type: 'error',
          message: `Fill in all the fields to ${ submitType }`,
          timeout: 2500
        });
      }
    };

    render () {
      const {
        isRegisterLoading,
        isLoginLoading,
        ...props
      } = this.props;
      
      const loadingStatus = submitType === 'register' ? isRegisterLoading : isLoginLoading;
  
      return (
        <WrappedComponent
          { ...props }
          { ...this.state }
          isLoading={ loadingStatus }
          handleInput={ this.handleInput }
          handleSubmit={ this.handleSubmit }
          handleBlur={ this.handleBlur }
        />
      );
    }
  }
  
  return connect((state) =>({
    isRegisterLoading: authSelectors.getRegisterLoadingStatus(state),
    isLoginLoading: authSelectors.getLoginLoadingStatus(state)
  }))(WrappedForm);
};



export default withFormValidation;


