import * as types from './action-types';
import Firebase from 'services/firebase';

function register(userRegInfo) {
  return async(dispatch) => {
    try {
      const { userEmail, userPassword } = userRegInfo;
      const data = await Firebase.call('registration', userEmail, userPassword);
      console.info(data);
      console.info('sdfsdf');
    } catch (e) {
      console.error('action: register', e);
    }
  };
}

export {
  register
};
