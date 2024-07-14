import { Typography, Box, Stack,Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EmptyCartItem from './EmptyCartItem/EmptyCartItem';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../utils/redux/cartSlice';

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
        {items.map((item) => <Box sx={{ margin: '30px 40px' }} display='flex' alignItems='center' gap='30px' >
          <Box sx={{ height: "100px", width: "100px" }} >
            <img style={{ height: '100px', width: '100px' }} 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} 
            alt='food_image' />
          </Box>
          <Stack spacing={3}direction='row' sx={{marginRight:'30px'}}>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '800', color: '#282c3f' }
              }>
              {item.card.info.name}
            </Typography>
            <Box sx={{height:'40px' , width:'150px', border:'1px solid #60b246'}} display='flex' alignItems='center' justifyContent='space-evenly'>
            <Button>
                <RemoveIcon sx={{color:' #60b246'}}/>
              </Button>
              
              <Typography sx={{color:' #60b246'}}>1</Typography>
              
              <Button>
                <AddIcon sx={{color:' #60b246'}}/>
              </Button>
            </Box>
            
            <Typography display='flex' alignItems='center'>
              <CurrencyRupeeIcon/>
              {(item.card.info.price)/100}
            </Typography>
            
          </Stack>

        </Box>
        )}  

        <Button variant='contained' color='error' sx={{marginLeft:'40px'}} onClick={handleClearCart}>clear cart</Button>
      </Box>



    </Box>
  )
}
}

export default CartContainer