import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./CartContainerItem.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../utils/redux/cartSlice';

const CartContainerItem = ({item}) => {

    const dispatch = useDispatch();

    const handleDelete = (item)=>{
        dispatch(removeItem(item.card.info.id))
    }
  return (
    <Box sx={{ margin: '30px 40px' }} display='flex' alignItems='center' gap='30px' >
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
      <Box  display='flex' alignItems='center' gap='15px' >
          <RemoveIcon className='removeIcon'/>
          <Typography sx={{color:' #60b246'}}>
              1
          </Typography>
          <AddIcon className='addIcon' />
         
        
      </Box>
      
      
      <Typography display='flex' alignItems='center'>
        <CurrencyRupeeIcon/>
        {item.card.info.defaultPrice?(item.card.info.defaultPrice)/100:(item.card.info.price?(item.card.info.price)/100:(item.card.finalPrice)/100)}
      </Typography>
      <Box display='flex' alignItems='center'>
      <DeleteIcon className='deleteIcon' onClick={()=>handleDelete(item)}/>
      </Box>
      
      
    </Stack>

  </Box>
  )
}

export default CartContainerItem