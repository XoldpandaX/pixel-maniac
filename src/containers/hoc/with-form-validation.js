import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'store/auth/actions';
import Immutable from 'seamless-immutable';

import { showNotification } from '../../utils'
import { regExp } from '../../constants';

const withFormValidation = (initialFormFields, requiredFields) => (WrappedComponent) => {
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

      const isAllDataFilled = Object.values(data).every((el) => el.length);
      const hasSomeFilledField = Object.values(data).some((el) => el.length);
      const hasDataErrors = Object.values(errors).every((el) => !el);

      if (isAllDataFilled && !!hasDataErrors) {
        this.props.dispatch(authActions.register(data));
        console.info(data);
      } else if (hasSomeFilledField && !isAllDataFilled) {
        showNotification({
          title: 'Form error',
          type: 'error',
          message: 'Fill in all the fields',
          timeout: 2500
        });
      }
    };

    render () {
      return (
        <WrappedComponent
          { ...this.props }
          { ...this.state }
          handleInput={ this.handleInput }
          handleSubmit={ this.handleSubmit }
          handleBlur={ this.handleBlur }
        />
      );
    }
  }
  
  return connect(null)(WrappedForm);
};



export default withFormValidation;


