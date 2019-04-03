import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AppInput from 'components/controls/app-input';

class HomePage extends Component {
  state = {
    inputField: '',
    hasError: false
  };
  
  appInputChildren = (
    <FontAwesomeIcon
      icon='user'
      size='md'
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
    return (
      <div>
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
      </div>
    );
  }
}

export default HomePage;

