import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';

import * as reducers from 'store';
import { FIREBASE_CONFIG } from 'config';
import { firebaseInit } from 'utils';

export default function storeCreator() {
  return (
    createStore(
      combineReducers({
        ...reducers,
        firebaseReducer,
        firestoreReducer
      }),
      compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebaseInit()),
        reduxFirestore(FIREBASE_CONFIG)
      )
    )
  );
}