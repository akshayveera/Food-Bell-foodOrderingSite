

import { IMG_CDN_URL } from "../config";
import {useContext} from "react";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({name, avgRating, cuisines, areaName, cloudinaryImageId}) =>{

    const {user} = useContext(UserContext);

    return (
      <div className="w-56 h-auto bg-purple-200 rounded-lg m-4 p-3 shadow-xl ">
            <img src= {IMG_CDN_URL+cloudinaryImageId} alt="image" className="w-full h-52 object-center  rounded-lg"></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>{avgRating + "  stars"}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p className="font-bold">Try it {user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default RestaurantCard