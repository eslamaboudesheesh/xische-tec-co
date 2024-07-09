import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const NycLoading = () => (
  <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress color="secondary" />
  </Box>
);

export default NycLoading;
