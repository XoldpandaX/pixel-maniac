import pick from 'lodash/pick';
import chunk from 'lodash/chunk';
import { collectionKeysToCamelCase } from 'utils';


function highestRatedImageMapper(images) {
  const mappedImages = images
    .filter((image, idx) => idx <= 45)
    .map((image) => pick(image, ['id', 'url_thumb']));
  
  const camelCasedImages = collectionKeysToCamelCase(mappedImages);
  
  return {
    flipSlider: chunk(camelCasedImages.splice(0, 8), 2)
      .map((el, idx) => {
        const { id: firstId, ...restFirstEl } = el[0];
        const { id: secondId, ...restSecondEl } = el[1];
        
        return {
          id: `${ firstId }${ secondId }`,
          front: restFirstEl,
          back: restSecondEl,
          isFlip: false,
          hasVerticalFlip: idx % 2 !== 0
        }
      }),
    classicSlider: camelCasedImages.splice(0, 14),
    singleVerticalSlider: camelCasedImages.splice(0, 9),
    singleHorizontalSlider: [...camelCasedImages]
  };
}

export {
  highestRatedImageMapper
}
