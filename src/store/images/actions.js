import random from 'lodash/random';

import * as types from './action-types';
import { getHighestRatedImageCollection } from './requests';
import { highestRatedImageMapper } from './mappers';

function fetchHighestRatedImageCollection() {
  return async (dispatch) => {
    try {
      const [
        { data: { wallpapers: images1 } },
        { data: { wallpapers: images2 } },
      ] = await Promise.all([
        getHighestRatedImageCollection({ page: random(1, 50) }),
        getHighestRatedImageCollection({ page: random(51, 100) })
      ]);
  
      dispatch({
        type: types.SET_HIGHEST_RATED_IMAGES,
        images: highestRatedImageMapper([...images1, ...images2])
      });
    } catch (e) {
      console.error('action: fetchHighestRatedImageCollection', e);
    }
  };
}

export {
  fetchHighestRatedImageCollection
}
