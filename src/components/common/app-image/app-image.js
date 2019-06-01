import React from 'react';
import PropTypes from 'prop-types';

function AppImage({ classNames, src, alt, width, height, onLoad }) {
  const classes = classNames.length && classNames.toString().split(',').join(' ');
  
  return (
    <img
      className={ classes }
      src={ src }
      alt={ alt }
      width={ width }
      height={ height }
      onLoad={ onLoad }
    />
  );
}

AppImage.defaultProps = {
  classNames: [],
  width: '',
  height: ''
};

AppImage.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onLoad: PropTypes.func
};

export default AppImage;
