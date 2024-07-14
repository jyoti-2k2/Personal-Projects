import { Box, IconButton, TextField } from "@mui/material"
// import RestaurantContainer from "../RestaurantContainer/RestaurantContainer"
import RestaurantCard from "../RetaurantCard/RestaurantCard";
import { useState, useEffect, useContext } from "react"
import { Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Skeleton from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import userContext from "../../utils/userContext";



const BodyContainer = () => {
    const [searchText, setSerachtext] = useState("")
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchFilterdRestaurant, setSearchFilterdRestaurant] = useState(new Array(14));
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchFilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    const handleTopRestaurants = () => {
        const filterResAccToRating = searchFilterdRestaurant.filter((res) => (
            res.info.avgRating > 4
        ))
        setSearchFilterdRestaurant(filterResAccToRating)
    }
  


    const handleSearchRestaurant = () => {
        const filterdRestaurants = listOfRestaurants.filter((res) => (
            res.info.name.toLowerCase().includes(searchText.toLowerCase())

        ))
        setSearchFilterdRestaurant(filterdRestaurants)

    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline!!  please check your internet connection</h1>
        )
    }

    const{setUserName} = useContext(userContext)
    const{loggedInUser} = useContext(userContext)
    
  
    return (
        <div className="main-container">
            <Box height='45px' width='700px' display='flex' alignItems='center'>
                <TextField variant="outlined" sx={{ width: '500px' }} type="text" value={searchText} onChange={(e) => setSerachtext(e.target.value)} />
                <IconButton
                    sx={{ marginLeft: '20px', height: '45px', width: '45px', padding: '30px' }}
                    onClick={handleSearchRestaurant}
                >
                    <SearchIcon fontSize="large" />
                </IconButton>
            </Box>


            <Box>
                <Button sx={{ marginTop: '20px' }} variant="outlined" onClick={handleTopRestaurants}>Top Rated Restaurants</Button>

                {/* use of userContext */}

                {/* <TextField variant="outlined" sx={{height:'30px'}}  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/> */}
                <Box display='flex' flexWrap='wrap' justifyContent='space-around' >

                    {searchFilterdRestaurant?.length ?
                        searchFilterdRestaurant.map((restaurant) => (
                            <Link style={{textDecoration:'none'}} key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                              <RestaurantCard resData={restaurant}/>
                            </Link>

                        ))
                
                        : <h1>Loading...</h1>
                    }


                </Box>
            </Box>


        </div>
    )
}

export default BodyContainer