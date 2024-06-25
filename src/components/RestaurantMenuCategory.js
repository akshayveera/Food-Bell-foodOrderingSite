
import React from 'react'
import RestaurantMenuCard from './RestaurantMenuCard';

const RestaurantMenuCategory = ({catData}) => {

    console.log("catData", catData);

  return (
    <div className="flex flex-col items-center">
        <div className='w-7/12 h-5 bg-gray-100'></div>
        
        <div className="w-7/12">
            <div className="w-full">

                <div className=" text-xl font-font5 py-4 flex justify-between cursor-pointer">{catData?.title}</div>
            </div>
        </div>        

        <ul data-testid="menu" className='w-full px-10'>                    
            {catData?.categories?.map((item)=>{
                return <RestaurantMenuCard key={item?.title} menuData={item}/>
            })}
        </ul>
    </div>
  )
}

export default RestaurantMenuCategory