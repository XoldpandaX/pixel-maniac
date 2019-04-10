import keys from "lodash/keys";
import keyBy from "lodash/keyBy";

export const getTopicsByUrl = (state) => state.topics.topicsByUrl;
export const getTopicsUrlArray = (state) => keys(state.topics.topicsByUrl);
export const getSelectedTopicsUrls = (state) => state.topics.selectedTopicsByUrl;
export const getSelectedTopicUrlsMap = (state) => keyBy(state.topics.selectedTopicsByUrl);
