import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AuthorizationFormContainer from 'components/template-containers/authorization-form';
import AppInput from 'components/controls/app-input';

import styles from './home.module.scss';

class HomePage extends Component {
  state = {
    inputField: '',
    hasError: false
  };
  
  appInputChildren = (
    <FontAwesomeIcon
      icon='user'
      size='sm'
      color='white'
    />
  ); // stop re-render
  
  onInputChange = (e) => {
    this.setState({ inputField: e.target.value });
  };
  
  onInputBlur = (e) => {
    console.info(e);
  };
  
  showError = () => {
    this.setState({ hasError: true });
  };
  
  hideError = () => {
    this.setState({ hasError: false });
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
          <p>WIDGEET SIDE</p>
        </section>
        <section className={ authorizationCol }>
          <AuthorizationFormContainer
            type='login'
            title='Login'
          >
            <>
              <button onClick={ this.showError }>show error</button>
              <button onClick={ this.hideError }>hide error</button>
              <p>{ this.state.inputField }</p>
              <AppInput
                handleChange={ this.onInputChange }
                handleBlur={ this.onInputBlur }
                placeholder='User Name'
                hasError={ this.state.hasError }
                errorText='Error mfcka'
              >
                { this.appInputChildren }
              </AppInput>
            </>
          </AuthorizationFormContainer>
        </section>
      </div>
    );
  }
}

export default HomePage;

