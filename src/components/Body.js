
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
import { filterData } from "../../utils/helper"
import useRestaurantList from "../../utils/useRestaurantsList"
import useCheckStatus from "../../utils/useCheckStatus";
import { FETCH_RESTAURANTS_URL } from "../config"
import UserContext from "../../utils/UserContext";

const Body = () => {

  // use state returns an array of size 2 ie, ouput = [state, function which sets state]
  const [searchText, setSearchText] = useState("");  // this is how we initialise a local state variable 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    // console.log("I am useeffect");
    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();

    console.log(json);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // console.log("rendered");

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

  // conditional rendering
  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <>
      {/* {console.log("render in")} */}
      <div className="flex justify-center p-2 bg-purple-300">
        <input
          type="text"
          placeholder="search something"
          className="px-2 py-1 m-2 border-2 rounded-lg border-purple-200"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button className="bg-purple-100 px-5 py-1 m-2 rounded-lg" onClick={() => {
          // need to filter the data
          const data = filterData(searchText, allRestaurants);
          // then update the state - restaurants
          setFilteredRestaurants(data);

        }}>Search </button>
        <input value={user.name} onChange={
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
        }></input>
      </div>

      <div className="flex flex-wrap">
        {
          // we can use map for looping
          filteredRestaurants.length === 0 ? <h2>Search not found</h2> :
            filteredRestaurants.map((restaurant) => {
              // const toLink = "/restaurnats/"+restaurant.info.id;            
              return (
                <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              )
            })
        }
      </div>
    </>
  )



}


export default Body