import React from 'react';

import styles from './spinner.module.scss';

const Spinner = (props) => {
  const {
    loader,
    loaderSizeXL,
    loaderSizeM,
    loaderSizeL,
    loaderSizeS
  } = styles;
  // const sizes = {
  //   m: styles.sizeS,
  // };
  return (
    <div className={ `${ loader } ${ loaderSizeS }` } />
  );
};

export default Spinner;
