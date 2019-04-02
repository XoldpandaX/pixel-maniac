import React, { Component } from 'react';

import AppInput from 'components/controls/app-input';
import AnotherTest from 'components/another-test/another-test.js';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Test extends Component {
  state = {
    inputField: '',
    hasError: false
  };
  
  appInputChildren = <AnotherTest/>; // stop rerender
  
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

export default Test;
