

import { IMG_CDN_URL } from "../config";
import {useContext} from "react";
import UserContext from "../../utils/UserContext";


const RestaurantCard = ({name, avgRating, cuisines, areaName, cloudinaryImageId}) =>{

    const {user} = useContext(UserContext);

    return (
      <div className="w-56 h-auto border-2 border-purple-400 m-4 p-3">
            <img src= {IMG_CDN_URL+cloudinaryImageId} alt="image" className="w-52"></img>
            <h2>{name}</h2>
            <h4>{avgRating + "  stars"}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p className="font-bold">Try it {user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default RestaurantCard