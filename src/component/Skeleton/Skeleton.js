import { Box, Typography,Skeleton } from '@mui/material'
import React from 'react'

const Skeleton = () => {
return(
    <Box sx={{height:'400px' ,width:'200px'}} >
        <Skeleton variant='rectangular' sx={{height:'300px',width:'200px' }}/>
    </Box>
)  
}

export default Skeleton