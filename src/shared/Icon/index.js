import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Icon = ({ icon, color = '#1C1D21', size = 18, className = 'dark', ...props }) => (
  <i className={`las ${icon} radix-icon ${className}`} style={{ color, fontSize: `${size}px` }} {...props} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
