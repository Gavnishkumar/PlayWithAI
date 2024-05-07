import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Snacker({openSnack,setOpenSnack, snackMessage,snackType}) {
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log(openSnack)
    setOpenSnack(false);
  };

  return (
    <div>
      
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackType}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
