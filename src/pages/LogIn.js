import { Dialog, DialogContent, DialogTitle, DialogContentText, Box, TextField } from '@mui/material'
import React from 'react'

const LogIn = ({ login }) => {
  return (

    <Box >
      <Dialog open={login}>
          <DialogTitle>
            Log In
          </DialogTitle>
          <DialogContent sx={{width: '400px', height:'600px'}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
          />
          </DialogContent>
      </Dialog>
    </Box>


  )
}

export default LogIn