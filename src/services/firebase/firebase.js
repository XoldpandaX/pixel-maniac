import app from 'firebase/app';
import 'firebase/auth';
import config from './firebase-config';

import { showNotification } from 'utils';

class FireBase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }
  
  call = async (methodName, ...args) => {
    try {
      return await this[methodName](...args);
    } catch (e) {
      console.error('FireBase: errorBoundary', e);
  
      showNotification({
        title: methodName,
        type: 'error',
        message: e.message
      });
      throw new Error(e);
    }
  };
  
  registration = (email, password) => (
    this.auth.createUserWithEmailAndPassword(email, password)
  );
  
  signIn = (email, password) => (
    this.auth.signInWithEmailAndPassword(email, password)
  );
  
  signOut = () => (
    this.auth.signOut()
  );
}

export default FireBase;
