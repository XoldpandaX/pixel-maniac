import React, { Component } from 'react';

import AuthorizationFormContainer from 'components/template-containers/authorization-form';
import { LoginForm, RegisterForm } from 'components/forms/authorization';

import styles from './home.module.scss';

class HomePage extends Component {
  state = {
    inputField: '',
    hasError: false
  };
  
  render() {
    const {
      homePage,
      authorizationCol,
      widgetCol
    } = styles;
    
    return (
      <div className={ homePage }>
        <section className={ widgetCol }>
          <p>WIDGET SIDE</p>
        </section>
        <section className={ authorizationCol }>
          <AuthorizationFormContainer
            type='login'
            title='Login'
          >
            <LoginForm />
          </AuthorizationFormContainer>
          <AuthorizationFormContainer
            type='register'
            title='Register'
          >
            <RegisterForm />
          </AuthorizationFormContainer>
        </section>
      </div>
    );
  }
}

export default HomePage;

