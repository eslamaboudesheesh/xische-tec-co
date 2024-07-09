import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <p>{children}</p>;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
