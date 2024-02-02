

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../config"
import MenuShimmer from "./MenuShimmer";
import useRestaurantsMenu from "../utils/useRestaurantMenu";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice"
import star from "../../assets/star.png"
import SomethingWentWrong from "./SomethingWentWrong";
import soldOut from "../../assets/soldOut.png"
import { Link } from "react-router-dom";


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [restaurant, menu, apiOk] = useRestaurantsMenu(resId);

   
    if(!apiOk)
    {
        return <SomethingWentWrong/>
    }

    if(!restaurant ){
        return <MenuShimmer/>
    }

    const dispatch = useDispatch();

    // const handleClick = ()=>{
    //     dispatch(addItem("banana"));
    // }

    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }

    
    const {name, id, city, cuisines, locality, areaName, avgRating, cloudinaryImageId, totalRatingsString} = restaurant;

    return (!restaurant) ? <MenuShimmer/> :(


        <div className=" ">

            <div className="flex gap-10 py-10 border-b justify-evenly w-[80%] mx-auto">

                <div className="w-[25%]">
                    <img src={IMG_CDN_URL+cloudinaryImageId} alt="img" className="w-full h-48 object-cover rounded-lg" />
                </div>

                <div className="flex justify-between w-[60%]">
                    <div>
                        <h1 className="text-2xl font-semibold mt-3">{name}</h1>
                        <p className="font-font1 text-2xl">{city}</p>
                        <p className="text-gray-500 text-sm">{cuisines.join(", ")}</p>
                        <p className="text-gray-500 text-sm">{"near " + locality}</p>
                        <p className="text-gray-500 text-sm">{areaName}</p>                 


                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center border-2 rounded-lg my-10 ">

                        <div className="flex gap-2 items-center border-b w-full justify-center p-2">
                            <img src={star} alt="" className="h-7" />
                            <h3 className="text-2xl font-bold text-[#CB2C2C]">{avgRating}</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center ">
                            <p className="font-bold text-lg" >{totalRatingsString.slice(0,4)}</p>
                            <p className="text-xs text-gray-500" >{totalRatingsString.slice(4)}</p>
                        </div>
                    </div>
                </div>

            </div>

            {
                menu ? (

                    <div className="flex items-center justify-center">
                 <div className="w-7/12">
                    <div className="w-full">
                        <h2 className=" text-2xl font-font5 p-4 border-b text-center">Menu</h2>
                        <ul data-testid="menu">
                            {menu.map((item)=>{

                                return (                                    
                                    <li key={item.card.info.id} 
                                        className="px-2 py-4 my-2 flex justify-between w-full border-b">
                                        
                                        <div className="flex flex-col gap-2 w-[70%] justify-between">
                                            <div>
                                                <p className="font-semibold text-xl">{item.card.info.name}</p>

                                                {
                                                    (item.card.info.price) ? (
                                                        <p className="font-semibold text-gray-700 text-lg">{"₹ " +  (parseInt(item.card.info.price)/100)}</p>
                                                        ) : (
                                                            (item.card.info.defaultPrice) ? (
                                                                <p className="font-semibold text-gray-700 text-lg">{"₹ " +  (parseInt(item.card.info.defaultPrice)/100)}</p>
                                                            ) : "" 
                                                        )
                                                }                                                

                                            </div>

                                            <div className="flex gap-1 items-center">
                                                <img src={star} alt="" className="h-5"/>
                                                <p className="font-bold text-lg text-[#CB2C2C]">{item.card.info.ratings.aggregatedRating.rating}</p>
                                            </div>


                                            <p className="text-xs text-gray-400">{item.card.info.description}</p>


                                        </div>
                                        
                                        <div className="flex flex-col items-center">
                                            <img src={IMG_CDN_URL+item.card.info.imageId} alt="" className="h-28 w-36 object-cover rounded-lg "/>
                                            <button 
                                                data-testid="add-btn"
                                                className="px-4 py-1 bg-[#CB2C2C] font-font5 text-lg text-white rounded-lg relative bottom-4  hover:shadow hover:shadow-red-400"
                                                onClick={()=>addFoodItem(item?.card?.info)}>
                                                    add
                                            </button>

                                        </div>

                                    </li>                            
                                )
                            })}
                        </ul>
                    </div>
                </div>         
            </div>

                ) : (

                    <div className="flex items-center justify-evenly w-[60%] mx-auto my-4 h-[35vh]  ">

                        <div className="w-[50%] flex flex-col items-center gap-5">
                            <p className="font-font2 text-2xl text-center text-[#373267]">Currently this restaurant is not serving! retry later</p>

                            <Link to="/restaurants">
                                <button className="font-font5 text-xl bg-[#CB2C2C] px-10 py-2 rounded-lg  text-white ">explore other restaurants</button>
                            </Link>


                        </div>
                        
                    </div>

                )
            }

            

        </div>
    )


}

export default RestaurantMenu;