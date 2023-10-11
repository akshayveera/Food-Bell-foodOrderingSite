

import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({name, avgRating, cuisines, areaName, cloudinaryImageId}) =>{
    return (
      <div className="card">
            <img src= {IMG_CDN_URL+cloudinaryImageId} alt="image"></img>
            <h2>{name}</h2>
            <h4>{avgRating}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        </div>
    )
}

export default RestaurantCard