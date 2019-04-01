import React, { Component } from 'react';

import AppInput from 'components/controls/app-input';
import AnotherTest from 'components/another-test/another-test.js';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Test extends Component {
  state = {
    inputField: ''
  };
  
  appInputChildren = <AnotherTest/>; // stop rerender
  
  onInputChange = (e) => {
    this.setState({ inputField: e.target.value });
  };
  
  onInputBlur = (e) => {
    console.info(e);
  };
  
  
  render() {
    return (
      <div>
        <p>{ this.state.inputField }</p>
        <AppInput
          onInputChange={ this.onInputChange }
          onInputBlur={ this.onInputBlur }
          placeholder='User Name'
        >
          { this.appInputChildren }
        </AppInput>
      </div>
    );
  }
}

export default Test;
