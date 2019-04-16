import * as types from './action-types';
import FBRequest from './firebase-requests';
import { requestImage } from 'utils';

function register(userRegInfo) {
  return async(dispatch, getState, { getFirebase }) => {
    try {
      dispatch({
        type: types.CHANGE_REGISTER_LOADING_STATUS,
        status: true
      });
      
      const {
        userEmail,
        userPassword,
        userName,
        userFirstName,
        userLastName
      } = userRegInfo;
      
      await FBRequest(getFirebase, 'register', userEmail, userPassword);
      await FBRequest(getFirebase, 'updateProfile', {
        displayName: `${ userName }:${ userFirstName }-${ userLastName }`,
        photoURL: null
      });
  
      // const data = await requestImage.get('', { // TODO remove when remember
      //   params: {
      //     method: 'newest',
      //     page: 10
      //   }
      // });
    } catch (e) {
      console.error('action: register', e);
    } finally {
      dispatch({
        type: types.CHANGE_REGISTER_LOADING_STATUS,
        status: false
      });
    }
  };
}

function login({ email, password }) {
  return async(dispatch, getState, { getFirebase }) => {
    try {
      dispatch({
        type: types.CHANGE_LOGIN_LOADING_STATUS,
        status: true
      });
      
      await FBRequest(
        getFirebase,
        'signIn',
        email,
        password
      );
      
    } catch (e) {
      console.error('action: login', e);
    } finally {
      dispatch({
        type: types.CHANGE_LOGIN_LOADING_STATUS,
        status: false
      });
    }
  };
}

function logout() {
  return async(dispatch, getState, { getFirebase}) => {
    try {
      await FBRequest(getFirebase, 'signOut');
    } catch (e) {
      console.error('action: logout', e);
    } finally {
      console.info('logout');
    }
  };
}

export {
  register,
  login,
  logout
};
