

import {useParams} from "react-router-dom";
// useParam is a hook provided by react-touter-dom for reading dynamic url
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../config"
import Shimmer from "./Shimmer"


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){
        const link = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2668695&lng=75.70225669999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER";
        const data = await fetch(link);
        const json = await data.json();

        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards); 

    }

    // this is because we are assigning null at the beggining and accessing then without fetch in that case it throws error
    // to handle that error we use this
    if(!menu || !restaurant){
        return <Shimmer/>
    }
    // we can also write this condition directly using ternary operator at return statement only

    const {name, id, city, areaName, avgRating, cloudinaryImageId} = restaurant;
    return (
        <div style={{"display":"flex", "gap":"30px" }}>
            <div>
                <img src={IMG_CDN_URL+cloudinaryImageId} alt="img" style={{"width":"300px"}} />
            </div>
            <div style={{"maxWidth": "400px"}}>
                <h1>{name}</h1>
                <p>{city}</p>
                <p>{areaName}</p>
                <h3>{avgRating + " stars"}</h3>
            </div>
            <div>
                <ul style={{"marginInline":"20px"}}>
                    <h2>Menu</h2>
                    {menu.map((item)=>{
                        return (
                            <li key={item.card.info.id}>{item.card.info.name}</li>                            
                        )
                    })}
                </ul>
            </div>
        </div>
    )


}

export default RestaurantMenu;