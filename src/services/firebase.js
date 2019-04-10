import app from 'firebase/app';
import 'firebase/auth';

import config from './firebase-config';

class FireBase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }
  
  register = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };
  
  signIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  
  signOut = () => {
    return this.auth.signOut();
  }
}

export default FireBase;
