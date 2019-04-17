import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from 'store/auth/selectors';
import { logout } from 'store/auth/actions';
import { fetchHighestRatedImageCollection } from 'store/images/actions';

import AuthorizationFormContainer from 'components/template-containers/authorization-form';
import { LoginForm, RegisterForm } from 'components/forms/authorization';

import styles from './home.module.scss';

class HomePage extends Component {
  componentDidMount() {
    console.info(this.props.user);
  }
  
  render() {
    const {
      homePage,
      authorizationCol,
      widgetCol
    } = styles;
    
    const authorizationForms = !this.props.user && (
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
          <p>WIDGET SIDE</p>
        </section>
        { authorizationForms }
        {
          this.props.user && (
            <button onClick={ () => this.props.dispatch(logout()) }>logout</button>
          )
        }
        <button onClick={ () => this.props.dispatch(fetchHighestRatedImageCollection()) }>TEST</button>
      </div>
    );
  }
}

export default connect((state) => ({
  user: getUserData(state)
}))(HomePage);

