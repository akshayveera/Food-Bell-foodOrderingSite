
import React, { useState } from 'react'
import star from "../../assets/star.png"
import { IMG_CDN_URL } from "../config"

const RestaurantMenuCard = ({menuData}) => {

    const menu = menuData?.itemCards;

    const isOpenVal = (menuData?.title === "Recommended") ? true : false;

    const [isOpen, setIsOpen] = useState(isOpenVal);

  return (
    <div className="flex items-center justify-center">

        <div className="w-7/12">
            <div className="w-full">
                <div className=" text-xl font-font5 py-4 border-b flex justify-between cursor-pointer" onClick={()=>{
                    setIsOpen(!isOpen);
                }}>
                    <h2>{menuData?.title + " (" + menu.length + ")" }</h2>

                    {isOpen ? <img className='h-4' src={"https://cdn-icons-png.flaticon.com/128/271/271239.png"} alt="" /> : <img className='h-4' src={"https://cdn-icons-png.flaticon.com/128/32/32195.png"} alt="" />}
                </div>

                { isOpen && (

                    <ul data-testid="menu">
                        {menu.map((item)=>{
                            return (                                    
                                <li key={item.card.info.id} 
                                    className="px-2 py-4 my-2 flex justify-between w-full border-b">
                                    
                                    <div className="flex flex-col gap-2 w-[70%] justify-between">
                                        <div>
                                            <p className="font-semibold text-lg">{item.card.info.name}</p>

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
                                        
                                        {item.card.info.ratings.aggregatedRating.rating && (
                                            <div className="flex gap-1 items-center">
                                                <img src={star} alt="" className="h-5"/>
                                                <p className="font-bold text-lg text-[#CB2C2C]">{item.card.info.ratings.aggregatedRating.rating}</p>
                                            </div>
                                        )}


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

                )}
            </div>
        </div>         
    </div>
  )
}

export default RestaurantMenuCard