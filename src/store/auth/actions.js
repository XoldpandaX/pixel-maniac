import * as types from './action-types';

function register(userData) {
  return async(dispatch) => {
    console.info(userData);
  };
}

export {
  register
};
