
import { Box, Card, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material"
import StarsIcon from '@mui/icons-material/Stars';
const RestaurantCard = (props) => {
    const restaurant = props.resData

    return (
        <Box width='350px' display='flex' flexWrap='wrap'>
            <Card sx={{ marginTop: '30px', marginRight: '30px', width: "100%", borderRadius: '10px', '&:hover': { width: '300px' } }} >
                <CardMedia component='img'
                    height='180px'
                    image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                    alt='res-logo'
                    sx={{
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <CardContent>
                    <Typography variant="body1">{restaurant.info.name}</Typography>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="body1" marginRight='10px' display='flex' alignItems='center' >
                            <StarsIcon color="success" />
                            {restaurant.info.avgRating}
                        </Typography>
                        <Typography variant="body1">
                            {restaurant.info.sla.deliveryTime} mins
                        </Typography>

                    </Box>
                    <Typography variant="body2" display='flex' flexWrap='wrap' sx={{ fontSize: '16px', color: 'rgba(2, 6, 12, 0.6)' }}>
                        {(restaurant.info.cuisines).join(", ")}
                    </Typography>
                </CardContent>
            </Card>


        </Box>

    )
}


export default RestaurantCard