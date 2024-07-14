import RestaurantCard from "../RetaurantCard/RestaurantCard"
import {Box,Button} from "@mui/material"
import { useEffect, useState } from "react"
import Skeleton from "../Skeleton/Skeleton";

const RestaurantContainer = () =>{
    const[listOfRestaurants,setListOfRestaurant] = useState([]);
    const[filterdRestaurants,setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
       
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
    } 
   

    const handleTopRestaurants = ()=>{
        const topRatedRestaurants  = mockData.filter((restaurant)=> restaurant.info.avgRating>4 )
        setListOfRestaurant(topRatedRestaurants)
    }
    // if(listOfRestaurants.length === 0){
    //     return <Skeleton/>
    // }

    return(
        <>
        <Button sx={{marginTop:'20px'}} variant="outlined" onClick={handleTopRestaurants}>Top Rated Restaurants</Button>
        <Box display='flex' flexWrap='wrap' justifyContent='space-around' >
            {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}

        </Box>
        </>
        

    )

}
export default RestaurantContainer