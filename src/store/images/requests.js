import { requestImage } from 'utils';

function getHighestRatedImageCollection({ page, infoLevel = null }) {
  return requestImage.get('', {
    params: {
      method: 'highest_rated',
      infoLevel,
      page
    }
  })
}

export {
  getHighestRatedImageCollection
}
