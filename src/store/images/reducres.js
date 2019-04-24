import Immutable from 'seamless-immutable';

import * as types from './action-types';

const initialState = Immutable({
  highestRatedImages: {
    flipSlider: [],
    classicSlider: [],
    singleVerticalSlider: [],
    singleHorizontalSlider: []
  },
  additional: {
    isImagesLoading: false
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_IMAGES_LOADING_STATUS:
      return state.merge({
        additional: {
          isImagesLoading: action.status
        }
      });
    case types.SET_HIGHEST_RATED_IMAGES:
      return state.merge({
        highestRatedImages: action.images
      });
    default:
      return state;
  }
}

