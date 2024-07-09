import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NycAlert = ({ type, message }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      action={action}
    >
      <Alert severity={type} onClose={handleClose} sx={{ textTransform: 'capitalize' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

NycAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default NycAlert;
