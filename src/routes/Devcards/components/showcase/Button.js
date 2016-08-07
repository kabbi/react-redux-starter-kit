import React, { PropTypes } from 'react';
import { Button as BSButton } from 'react-bootstrap';

const Button = ({ disabled, loading, onClick, children }) => (
  <BSButton bsStyle="success" disabled={disabled || loading} onClick={onClick}>
    {loading ? 'Loading...' : children}
  </BSButton>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
