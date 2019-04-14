import * as types from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  user: null,
  additional: {
    isRegisterLoading: false,
    isLoginLoading: false
  }
});

export default function reduce (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_REGISTER_LOADING_STATUS:
      return state.merge({
        additional: {
          isRegisterLoading: action.status
        }
      });
    case types.CHANGE_LOGIN_LOADING_STATUS:
      return state.merge({
        additional: {
          isLoginLoading: action.status
        }
      });
    default:
      return state;
  }
}
