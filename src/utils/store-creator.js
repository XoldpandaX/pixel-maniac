import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import * as reducers from 'store';

export default function storeCreator() {
  return (
    createStore(
      combineReducers({
        ...reducers,
        firebase: firebaseReducer,
        firestore: firestoreReducer
      }),
      compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore({
          apiKey: process.env.REACT_APP_FIREBASE_KEY,
          authDomain: process.env.REACT_APP_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_DATABASE_URL,
          projectId: process.env.REACT_APP_PROJECT_ID,
          storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
        }),
        reactReduxFirebase(firebase.initializeApp({
          apiKey: process.env.REACT_APP_FIREBASE_KEY,
          authDomain: process.env.REACT_APP_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_DATABASE_URL,
          projectId: process.env.REACT_APP_PROJECT_ID,
          storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
        }), { attachAuthIsReady: true })
      )
    )
  );
}
