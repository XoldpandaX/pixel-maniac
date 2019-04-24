export const getTopRatedImages = ({ images: { highestRatedImages } }, field = '') => {
  return field && Object.keys(highestRatedImages).includes(field)
    ? highestRatedImages[field]
    : highestRatedImages;
};
