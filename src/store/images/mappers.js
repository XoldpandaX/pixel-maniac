import pick from 'lodash/pick';
import { collectionKeysToCamelCase } from 'utils';


function highestRatedImageMapper(images) {
  const mapped =  images
    .filter((image, idx) => idx <= 37)
    .map((image) => pick(image, ['id', 'url_thumb']));
  
  return collectionKeysToCamelCase(mapped);
}

export {
  highestRatedImageMapper
}
