import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'store/auth/actions';

import { regExp } from '../../constants';

function withFormValidation(initialFormFields, requiredFields) {
  return (WrappedComponent) => (
    class WrappedForm extends Component {
      state = {
        data: initialFormFields,
        errors: requiredFields
      };
      
      checkName(userName) {
        return (
          userName &&
          userName.length >= 4 &&
          !regExp.verifyUserName.test(userName)
        );
      }
      
      checkEmail(email) {
        return regExp.verifyEmail.test(email);
      }
      
      checkPassword(password) {
        return regExp.verifyPassword.test(password);
      }
  
      checkPasswordEqual = (repeatPassword) => {
        return this.state.data.userPassword === repeatPassword;
      };
  
      availableChecks = {
        userName: this.checkName,
        userEmail: this.checkEmail,
        userPassword: this.checkPassword,
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
        const hasDataErrors = Object.values(errors).every((el) => !el);
        
        if (isAllDataFilled && !!hasDataErrors) {
          //this.props.dispatch(authActions.register(data));
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
  );
}

export default withFormValidation;


