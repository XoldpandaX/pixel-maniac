import firebase from 'firebase';

import { FIREBASE_CONFIG } from 'config';

export default function initFirebase() {
  return firebase.initializeApp({
    ...FIREBASE_CONFIG,
    apiKey: process.env.REACT_APP_FIREBASE_KEY
  });
}
