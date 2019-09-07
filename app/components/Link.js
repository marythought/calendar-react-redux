import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, active, onClick }) => {(
  if (active) {
    return (<span>{children}</span>)
  } else {
    return (
      <a
        href='#'
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </a>
    )
  }
});

export default Link;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
