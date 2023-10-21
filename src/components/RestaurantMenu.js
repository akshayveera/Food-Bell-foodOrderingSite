

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../config"
import Shimmer from "./Shimmer"
import useRestaurantsMenu from "../../utils/useRestaurantMenu";
import {useDispatch} from "react-redux";
import {addItem} from "../../utils/cartSlice"


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [restaurant, menu] = useRestaurantsMenu(resId);
   
    if(!menu || !restaurant){
        return <Shimmer/>
    }

    const dispatch = useDispatch();

    // const handleClick = ()=>{
    //     dispatch(addItem("banana"));
    // }

    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }
    
    const {name, id, city, areaName, avgRating, cloudinaryImageId} = restaurant;

    return (!menu || !restaurant) ? <Shimmer/> :(
        <div className="flex gap-6">
            <div>
                <img src={IMG_CDN_URL+cloudinaryImageId} alt="img" style={{"width":"300px"}} />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{city}</p>
                <p>{areaName}</p>
                <h3>{avgRating + " stars"}</h3>
                {/* <button className="px-8 py-2 my-5 bg-purple-300 rounded-lg" onClick={()=>handleClick()}>add</button> */}
            </div>
            <div className="w-1/3">
                <ul className="w-full">
                    <h2 className="font-bold text-2xl m-2">Menu</h2>
                    {menu.map((item)=>{
                        return (
                            <li key={item.card.info.id} 
                                className="px-2 py-4 my-2 bg-purple-100 rounded-xl flex justify-between w-full">
                                {item.card.info.name}
                                <button 
                                    className="px-4 py-1 bg-purple-300 rounded-lg"
                                    onClick={()=>addFoodItem(item?.card?.info)}>
                                        add
                                </button>
                            </li>                            
                        )
                    })}
                </ul>
            </div>
        </div>
    )


}

export default RestaurantMenu;