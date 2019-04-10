import app from 'firebase/app';
import 'firebase/auth';

import config from './firebase-config';

class FireBase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }
  
  registerUser = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}

export default FireBase;
