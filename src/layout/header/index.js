import React from 'react';
import { Box } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import './style.scss';

const Header = () => (
  <Box component="header" className="header">
    <img src={logo} alt="NYC logo" />
  </Box>
);

export default Header;
