import * as types from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  user: null,
  additional: {
    isLoading: false
  }
});

export default function reduce (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_LOADING_STATUS:
      return state.merge({
        additional: {
          isLoading: action.status
        }
      });
    default:
      return state;
  }
}
