import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <Box component="section" className="container">
    <Header />
    {children}
    <Footer />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
