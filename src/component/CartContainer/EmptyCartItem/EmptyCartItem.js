import { Box, Typography,Button } from '@mui/material'
import {Link} from "react-router-dom"
import React from 'react'
import empty_cart_img from "../../../Assets2/empty-cart.png"

const EmptyCartItem = () => {
  return (
    <Box display='flex'  alignItems='center' flexDirection='column'>
        <img style={{height:'350px', width:'350px'}} src={empty_cart_img}/>
        <Typography sx={{fontSize:'28px', fontWeight:'600' }}>Your cart is empty</Typography>
        <Typography sx={{fontSize:'15px', fontWeight:'400', marginBottom:'50px'}}    >You can go to home page to view more restaurants</Typography>
        <Link to="/">
           <Button variant="contained" color='warning' sx={{ padding:'10px' }} disableElevation disableRipple>
              SEE RESTAURANT NEAR YOU
           </Button>
        </Link>
        
    
    </Box>
  )
}

export default EmptyCartItem