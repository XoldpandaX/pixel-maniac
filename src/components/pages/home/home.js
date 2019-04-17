import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from 'store/auth/selectors';
import { logout } from 'store/auth/actions';

import AuthorizationFormContainer from 'components/template-containers/authorization-form';
import FlipCard from 'components/common/flip-card';
import { LoginForm, RegisterForm } from 'components/forms/authorization';

import styles from './home.module.scss';

class HomePage extends Component {
  render() {
    const {
      homePage,
      authorizationCol,
      widgetCol
    } = styles;
    
    const { user, dispatch } = this.props;
    
    const authorizationForms = !user && (
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
    );
    
    return (
      <div className={ homePage }>
        <section className={ widgetCol }>
          <FlipCard/>
        </section>
        { authorizationForms }
        {
          this.props.user && (
            <button onClick={ () => dispatch(logout()) }>
              logout
            </button>
          )
        }
      </div>
    );
  }
}

export default connect((state) => ({
  user: getUserData(state)
}))(HomePage);

