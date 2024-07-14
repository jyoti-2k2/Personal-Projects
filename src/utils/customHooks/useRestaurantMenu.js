import { useEffect, useState } from "react"
import { RES_MENU_API } from "../../utils/constants";

export const useRestaurantMenu = ({ resId }) => {
    const [resInfo, setResInfo] = useState([]);
    

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async()=>{
         const data = await fetch(RES_MENU_API+resId);
         const json = await  data.json();
         setResInfo(json?.data?.cards[2]?.card?.card?.info)
    }

    return resInfo

}

