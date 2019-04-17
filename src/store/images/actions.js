import { getHighestRatedImageCollection } from './requests';

function fetchHighestRatedImageCollection() {
  return async (dispatch) => {
    const images = await getHighestRatedImageCollection({ page: 1 });
  };
}

export {
  fetchHighestRatedImageCollection
}
