import * as types from './action-types';

function register(userRegInfo) {
  return async(dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      dispatch({
        type: types.CHANGE_LOADING_STATUS,
        status: true
      });
      
      //const { userEmail, userPassword } = userRegInfo;
      
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
