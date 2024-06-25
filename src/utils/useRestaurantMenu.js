
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

            let rest = null, menu = null;

            json?.data?.cards?.map((item)=>{

                if(!rest && item?.card?.card?.info)
                {
                    rest = item?.card?.card?.info;
                }

                if(!menu && item?.groupedCard)
                {
                    menu = item?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                }

                console.log(menu);
            })

            // console.log("restaurnat head",json?.data?.cards[0]?.card?.card?.info);
            // console.log("restaurnat",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            
            // 0,2 - json?.data?.cards[2]?.card?.card?.info
            setRestaurant(rest);
            // 2,4
            setMenu(menu); 
        }catch{
            setApiOk(false);
        }

    }
    
    return [restaurant, menu, apiOk];

}

export default useRestaurantsMenu;