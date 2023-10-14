

import {useParams} from "react-router-dom";
// useParam is a hook provided by react-touter-dom for reading dynamic url
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../config"
import Shimmer from "./Shimmer"
import useRestaurantsMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{
    const {resId} = useParams();

    // const [restaurant, setRestaurant] = useState(null);
    // const [menu, setMenu] = useState(null);

    // console.log("component before hook");

    const [restaurant, menu] = useRestaurantsMenu(resId);

    // console.log("component after hook");    
    
    // we can also write this condition directly using ternary operator at return statement only
    // this is because we are assigning null at the beggining and accessing then without fetch in that case it throws error

    if(!menu || !restaurant){
        return <Shimmer/>
    }
    
    const {name, id, city, areaName, avgRating, cloudinaryImageId} = restaurant;
    return (!menu || !restaurant) ? <Shimmer/> :(
        <div style={{"display":"flex", "gap":"30px" }}>
            {console.log("component - return")}
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