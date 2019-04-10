import * as types from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  user: null
});

export default function reduce (state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
