import React, { useContext } from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../utils/redux/cartSlice';



const RestaurantMenuList = ({ item }) => {
    const dispatch = useDispatch()



    const handleCartItems = (item) => {
        dispatch(addItem(item))

    }

    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Box aria-label="right">
                    <Stack spacing={1}>
                        <Typography variant='h6' sx={{ color: 'rgba(2, 6, 12, 0.75)', fontWeight: '700' }}>{item.card.info.name}</Typography>
                        <Typography variant='body1' display='flex' alignItems='center' sx={{ fontWeight: '600' }}><CurrencyRupeeIcon fontSize='small' />{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : (item.card.info.finalPrice ? item.card.info.finalPrice / 100 : "")}</Typography>
                        <Box fontSize='10px' color='black'>

                            <Typography variant='body1' display='flex' alignItems='center'>
                                {item.card.info.ratings ? <Box display='flex' alignItems='center'><StarIcon fontSize='small' color='success' /> {item.card.info.ratings.aggregatedRating.rating}({item.card.info.ratings.aggregatedRating.ratingCountV2})</Box> : ""}
                            </Typography>
                            <Typography fontSize='16px' sx={{ color: 'rgba(2, 6, 12, 0.6)', marginTop: '20px', marginBottom: '60px' }}>{item.card.info.description}</Typography>

                        </Box>


                    </Stack>
                </Box>
                <Box aria-label='left' display='flex' sx={{ marginLeft: '50px' }} flexDirection='column'>
                    <img style={{ height: '150px', width: '150px', borderRadius: '20px' }} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} />
                    <Button variant='outlined' color='success' onClick={() => { handleCartItems(item) }}
                        sx={{ background: 'white', position: 'absolute', width: '120px', borderRadius: '10px', fontSize: '18px', fontWeight: '900', marginLeft: '15px', marginTop: '140px' }}
                    >
                        ADD
                    </Button>
                </Box>

            </Box>
            <hr />
        </>
    )
}

export default RestaurantMenuList