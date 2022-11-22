import { Snackbar } from '@mui/material'
import React from 'react'

const Toast = ({open, handleClose, action, message}) => {
  return (
    <div>
        <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message={message}
  action={action}
/>
    </div>
  )
}

export default Toast