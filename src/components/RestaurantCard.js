

import { IMG_CDN_URL } from "../config";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import star from "../../assets/star.png";


const RestaurantCard = ({name, avgRating, cuisines, areaName, cloudinaryImageId}) =>{

    const {user} = useContext(UserContext);

    return (
      <div className="w-[17.2rem] h-auto rounded-lg m-4 p-1">
            <img src= {IMG_CDN_URL+cloudinaryImageId} alt="image" className="w-[17rem] h-44 object-center object-cover rounded-lg "></img>
            <div className="px-2">
                <h2 className="font-semibold text-lg text-[#444]">{name.slice(0,25) + "..."}</h2>
                <div className="flex gap-1 items-center">
                    <img src={star} alt="" className="h-5"/>
                    <h4 className="font-bold text-lg">{avgRating}</h4>
                </div>
                <p className="text-[#888] text-sm">{cuisines.join(",").slice(0,35) + "..."}</p>
                <p className="text-[#888] text-sm">{areaName}</p>
            </div>
            {/* <p className="font-bold">Try it {user.name}</p> */}
            {/* <p>{user.email}</p> */}
        </div>
    )
}

export default RestaurantCard