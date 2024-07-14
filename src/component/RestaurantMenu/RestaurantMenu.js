import { Box, Breadcrumbs, Paper, Link, Typography, Stack, Stepper, Step, StepLabel } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import RestaurantMenuCard from "../RestaurantMenuCard/RestaurantMenuCard";
import { useEffect, useState } from "react";
import { RES_MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

import { useRestaurantMenu } from "../../utils/customHooks/useRestaurantMenu";
import { CategoryTwoTone } from "@mui/icons-material";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([])

    const [categories, setCategories] = useState([]);
    const { resId } = useParams()

    // const resInfo = resuseRestaurantMenu(resId)
    useEffect(() => {
        handleRestaurantData()
    }, [])

    const handleRestaurantData = async () => {
        const data = await fetch(RES_MENU_API + resId)
        const json = await data.json();


        setResInfo(json?.data?.cards[2]?.card?.card?.info)
        // setMenuItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item.card?.card?.itemCards)[0].card.card.itemCards);
        setCategories(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
    
        
    }



    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName, sla,feeDetails } = resInfo
   

    return (
        <Box height='100%' width='100%' display='flex' alignItems='center' justifyContent='center'>
            <Box width='65%' height='100%' sx={{ padding: '30px 20px' }} >
                <Breadcrumbs sx={{ fontSize: '12px', paddingBottom: '30px' }}>
                    <Link underline="hover" color='inherit' href='/'>
                        Home
                    </Link>
                    <Typography fontSize='12px'>{name}</Typography>
                </Breadcrumbs>

                <Typography variant="h5" sx={{ fontWeight: '600' }}>{name}</Typography>
                <Box sx={{ marginTop: '20px', borderRadius: '20px', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Stack spacing={2} sx={{ padding: '20px 20px' }}>
                        <Typography display='flex' alignItems="center">
                            <StarsIcon color="success" />
                            {avgRating}({totalRatingsString}). {costForTwoMessage}
                        </Typography>
                        <Typography variant="body1" >
                            {cuisines?.join(", ")}
                        </Typography>
                        {/*  verticle stepper */}
                        <Box>

                        </Box>

                        <hr style={{ backgroundColor: "#02060c0d" }} />
                        <Stack spacing={2} direction="row">
                            <Box>
                                <DirectionsBikeIcon />
                            </Box>
                            <Box display='flex' alignItems='center'>
                            {feeDetails?.message.replace(/<[^>]+>/g, '')}
                            </Box>


                        </Stack>


                    </Stack>


                </Box>

                <Box display='flex' marginTop="50px" justifyContent='center'> <Typography>Menu</Typography></Box>
                <Box sx={{ marginTop: '50px' }}>
                    {
                        categories?.length > 0 ?
                            categories.map((category, i) => <RestaurantMenuCard key={i} resData={resInfo}  menuData={category} />)
                            : <h1>Loading ...</h1>
                    }
                </Box>
            </Box>
        </Box>


    )
}

export default RestaurantMenu;