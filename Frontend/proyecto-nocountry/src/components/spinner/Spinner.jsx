import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'
const Spinner = () => {
  return (
    <Stack sx={{color: 'grey.500'}} spacing={2} direction='row'>
        <CircularProgress />
    </Stack>
  )
}

export default Spinner