import * as types from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  topicsByUrl: null,
  selectedTopicsByUrl: [],
  selectionFinalized: false
});

export default function reduce (state = initialState, action = {}) {
  switch (action.type) {
    case types.TOPICS_FETCHED:
      return state.merge({ topicsByUrl: action.topicsByUrl });
    case types.TOPICS_SELECTED:
      return state.merge({ selectedTopicsUrl: action.selectedTopicsUrl });
    default:
      return state;
  }
}
