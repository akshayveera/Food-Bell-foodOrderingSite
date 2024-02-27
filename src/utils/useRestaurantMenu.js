
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

            console.log("restaurnat",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            
            // 0
            setRestaurant(json?.data?.cards[2]?.card?.card?.info);
            // 2
            setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards); 
        }catch{
            setApiOk(false);
        }

    }
    
    return [restaurant, menu, apiOk];

}

export default useRestaurantsMenu;