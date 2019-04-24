import pick from 'lodash/pick';
import { collectionKeysToCamelCase } from 'utils';


function highestRatedImageMapper(images) {
  const mappedImages = images
    .filter((image, idx) => idx <= 45)
    .map((image) => pick(image, ['id', 'url_thumb']));
  
  const camelCasedImages = collectionKeysToCamelCase(mappedImages);
  return {
    flipSlider: camelCasedImages.splice(0, 8),
    classicSlider: camelCasedImages.splice(0, 14),
    singleVerticalSlider: camelCasedImages.splice(0, 9),
    singleHorizontalSlider: [...camelCasedImages]
  };
}

export {
  highestRatedImageMapper
}
