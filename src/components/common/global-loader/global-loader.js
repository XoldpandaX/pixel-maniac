import React from 'react';
import uid from 'uid';

import styles from './global-loader.module.scss';

const GlobalLoader = () => {
  const { container, ldsRoller } = styles;
  
  const loaderBody = new Array(8)
    .fill(' ')
    .map(() => <div key={ uid('3') } />);
  
  return (
    <div className={ container }>
      <div className={ ldsRoller }>
        { loaderBody }
      </div>
    </div>
  );
};

export default GlobalLoader;
