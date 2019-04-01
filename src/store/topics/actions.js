import * as types from './action-types';
import * as topicsSelectors from './reducers';

function fetchTopics() {
  return async(dispatch) => {
    try{
      //const subredditArray = await RedditService.getDefaultSubreddits();
      //const topicsByUrl = keyBy(subredditArray, ({ url }) => url);
      
      // dispatch({
      //   type: types.TOPICS_FETCHED,
      //   topicsByUrl
      // });
    } catch (e) {
      console.error(`fetchTopics ${ e }`)
    }
  }
}

function selectTopic(topicUrl) {
  return (dispatch, getState) => {
    const selectedTopics = topicsSelectors.getSelectedTopicsUrls(getState());
    const newSelectedTopics = selectedTopics.length < 3
      ? selectedTopics.concat(topicUrl)
      : selectedTopics.slice(1).concat(topicUrl);
    
    dispatch({
      type: types.TOPICS_SELECTED,
      selectedTopicsUrl: newSelectedTopics
    });
  };
}

export {
  fetchTopics,
  selectTopic
};
