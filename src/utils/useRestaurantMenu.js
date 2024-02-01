
import {useState, useEffect} from "react"; 
import { FETCH_MENU_URL } from "../config";

const useRestaurantsMenu = (resId) =>{

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);
    const [apiOk, setApiOk] = useState(true);

    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){

        try{
            const link = FETCH_MENU_URL+resId;
            const data = await fetch(link);
            const json = await data.json();
    
            // console.log(json);
            console.log("restaurant")
            console.log(json?.data?.cards[0]?.card?.card?.info);
            console.log("menu")
            console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    
            setRestaurant(json?.data?.cards[0]?.card?.card?.info);
            setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards); 
        }catch{
            setApiOk(false);
        }

    }
    
    return [restaurant, menu, apiOk];

}

export default useRestaurantsMenu;