import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './authorization-form.module.scss';

const AuthorizationFormContainer = (props) => {
  const {
    children,
    title,
    type
  } = props;
  
  const {
    authorizationFormContainer,
    containerTitle,
    containerHeader
  } = styles;
  
  const renderIcon = (type) => {
    const icons = {
      register: 'paper-plane',
      login: 'key'
    };
    
    return (
      <FontAwesomeIcon
        icon={ icons[type] }
        color='white'
        size='sm'
      />
    );
  };
  
  return (
    <div className={ authorizationFormContainer }>
      <header className={ containerHeader }>
        { renderIcon(type) }
        <h3 className={ containerTitle }>{ title }</h3>
      </header>
      { children }
    </div>
  );
};

AuthorizationFormContainer.defaultProps = {
  classNames: ''
};

AuthorizationFormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
  classNames: PropTypes.string,
  type: PropTypes.oneOf(['register', 'login']).isRequired
};

export default AuthorizationFormContainer;
