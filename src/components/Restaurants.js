
/**
 * how to write path to import a file
 * 
 *  "./" - current folder
 * "../" - parent folder
 * "../../" - parent's parent folder
 */

import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper"
import useCheckStatus from "../utils/useCheckStatus";
import { FETCH_RESTAURANTS_URL } from "../config"
import UserContext from "../utils/UserContext";
import SomethingWentWrong from "./SomethingWentWrong";
import sad from "../../assets/sad.png"

const Restaurants = () => {

  // use state returns an array of size 2 ie, ouput = [state, function which sets state]
  const [searchText, setSearchText] = useState("");  // this is how we initialise a local state variable 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [apiOk, setApiOk] = useState(true);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {

    try{
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setApiOk(true);
    }
    catch(err)
    {
      setApiOk(false);
    }

  }

  const online = useCheckStatus();

  if (!online) {
    return (
      <>
        <h1>
          ⚠️ Oops! you are offline
        </h1>
        <p>🔴 please check your network connection</p>
      </>
    )
  }

  // this is for handling rejections if API is not working
  if(!apiOk){
    return <SomethingWentWrong/>
  }

  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="">
      <div className="flex justify-center p-2 mt-5">
        <input
          data-testid="search-input"
          type="text"
          placeholder="search restaurants"
          className="px-5 py-2 m-2 border-[2px] rounded-lg border-[#CB2C2C] w-[40%] outline-none"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            if(event.target.value === '')
            {
              setFilteredRestaurants(allRestaurants);
            }
          }}
        />

        <button data-testid="search-btn" className="bg-[#CB2C2C] px-6 py-3 m-2 rounded-lg font-font5 text-white text-xl hover:shadow hover:shadow-red-400" onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);

        }}>Search </button>

        {/* below things are used to understand useContext  */}
        {/* <input value={user.name} onChange={
          (event)=>{
            setUser({
              ...user,
              name : event.target.value,
            });
          }
        }></input>
        
        <input className="ml-4" value={user.email} onChange={
          (event)=>{
            setUser({
              ...user,
              email : event.target.value,
            });
          }
        }></input> */}
        
      </div>      

      <div className="flex flex-wrap py-5 w-[85%] mx-auto justify-evenly " data-testid="res-list">
        {
          filteredRestaurants?.length === 0 ? (
            <div className="my-10">
              <img src={sad} alt="" className="mb-4" />
              <p className="text-center text-4xl font-font1 text-[#CB2C2C] my-4 ">No matching results</p>
            </div>
          ) :
            filteredRestaurants?.map((restaurant) => {          
              return (
                <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              )
            })
        }
      </div>

    </div>
  )



}


export default Restaurants