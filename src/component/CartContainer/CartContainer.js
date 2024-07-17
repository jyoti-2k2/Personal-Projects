import { Typography, Box, Stack,Button } from '@mui/material'
import React from 'react'

import EmptyCartItem from './EmptyCartItem/EmptyCartItem';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../utils/redux/cartSlice';
import CartContainerItem from './CartContainerItem/CartContainerItem';

const CartContainer = ({ items }) => {
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearItems());
  }

  if(items.length === 0){
    return(
      <EmptyCartItem />
    )
  }else{
  return (
    <Box display="flex" justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e9ecee', height: '100%', width: '100%' }}>
      <Box height='83vh' width='50vw' sx={{ backgroundColor: 'white', margin: '30px 0px' }}>
        <Typography sx={{color:'darkgrey', fontSize:'30px',margin:'30px 40px' ,fontWeight:'800'}}>My Order</Typography>
        {items.map((item) =><CartContainerItem item={item} key={item.card.info.id}/>
        )}  

        <Button variant='contained' color='error' sx={{marginLeft:'40px'}} onClick={handleClearCart}>clear cart</Button>
      </Box>



    </Box>
  )
}
}

export default CartContainer