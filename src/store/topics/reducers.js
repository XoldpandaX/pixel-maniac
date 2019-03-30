import * as types from './action-types';
import Immutable from 'seamless-immutable';
import keys from 'lodash/keys';
import keyBy from 'lodash/keyBy';

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

//selectors
export const getTopicsByUrl = (state) => state.topics.topicsByUrl;
export const getTopicsUrlArray = (state) => keys(state.topics.topicsByUrl);
export const getSelectedTopicsUrls = (state) => state.topics.selectedTopicsByUrl;
export const getSelectedTopicUrlsMap = (state) => keyBy(state.topics.selectedTopicsByUrl);
