

import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer"

const filterData = (searchText, restaurants)=> {
  const fData = restaurants.filter((restaurant)=>{
    return restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });

  return fData;
}

const Body = ()=>{

  // let searchTxt = "KFC";   // this is how we initialise a local variable

  // use state returns an array of size 2 ie, ouput = [state, function which sets state]
  const [searchText, setSearchText] = useState("");  // this is how we initialise a local state variable  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants ] = useState([]);

  useEffect(()=>{
    // console.log("I am useeffect");
    getRestaurants();
  },[])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2668695&lng=75.70225669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  }

  // console.log("rendered");

  // not render component (early return)
  if(!allRestaurants) return null;

  // conditional rendering
  return allRestaurants?.length===0 ? <Shimmer/> :(
    <>
    {/* {console.log("render in")} */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="search something" 
          className="search-input"
          value={searchText}
          onChange={(event)=>{
            setSearchText(event.target.value);
          }}          
        />
        <button className="search-btn" onClick={()=>{
          // need to filter the data
          const data = filterData(searchText, allRestaurants);
          // then update the state - restaurants
          setFilteredRestaurants(data);
          
        }}>Search </button>        
      </div>
      
      <div className="cardBox">
          {
            // we can use map for looping
            filteredRestaurants.length===0 ? <h2>Search not found</h2> :
            filteredRestaurants.map((restaurant)=>{
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
          }
      </div>
    </> 
  )
  


}


export default Body