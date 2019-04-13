import * as types from './action-types';
import Firebase from 'services/firebase';

function register(userRegInfo) {
  return async(dispatch) => {
    try {
      dispatch({
        type: types.CHANGE_LOADING_STATUS,
        status: true
      });
      
      const { userEmail, userPassword } = userRegInfo;
      const data = await Firebase.call('registration', userEmail, userPassword);
      
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
