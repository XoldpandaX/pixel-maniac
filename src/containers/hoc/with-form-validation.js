import React, { Component } from 'react';

import { regExp } from '../../constants';

export function withFormValidation(initialFormFields, requiredFields) {
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
  
      checkPasswordEqual = () => {
        const { userPassword, userRepeatPassword } = this.state.data;
        return userPassword === userRepeatPassword;
      };
  
      availableChecks = {
        userName: this.checkName,
        userEmail: this.checkEmail,
        userPassword: this.checkPassword,
        userRepeatPassword: this.checkPasswordEqual
      };
      
      changeErrorVal = (name, val) => {
        this.setState(({ errors }) => ({
          errors: {
            ...errors,
            [name]: val
          }
        }))
      };
      
      changeDataVal = (name, val) => {
        this.setState(({ data }) => ({
          data: {
            ...data,
            [name]: val
          }
        }))
      };
      
      handleInput = ({ target: { name, value } }) => {
        const trimmedValue = value.trim();
        
        if (!this.state.errors[name]) {
          this.changeDataVal(name, trimmedValue);
        } else {
          this.changeDataVal(name, trimmedValue);
          const res = this.availableChecks[name](trimmedValue);
          return res && this.changeErrorVal(name, false);
        }
      };
      
      handleBlur = ({ target: { name, value } }) => {
        const trimmedValue = value.trim();
        const res = trimmedValue ? this.availableChecks[name](trimmedValue) : false;
        
        if (trimmedValue !== '' && !res) {
          this.changeErrorVal(name, true);
        }
      };
      
      handleSubmit = (e) => {
        e.preventDefault();
        console.info('sfsdf');
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


