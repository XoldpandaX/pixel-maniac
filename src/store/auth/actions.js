import * as types from './action-types';
import FBRequest from './firebase-requests';

function register(userRegInfo) {
  return async(dispatch, getState, { getFirebase }) => {
    try {
      dispatch({
        type: types.CHANGE_LOADING_STATUS,
        status: true
      });
      
      const { userEmail, userPassword } = userRegInfo;
      const data = await FBRequest(
        getFirebase,
        'register',
        userEmail, userPassword
      );
      
    } catch (e) {
      console.error('action: register', e);
    } finally {
      dispatch({
        type: types.CHANGE_LOADING_STATUS,
        status: false
      });
    }
  };
}

export {
  register
};
