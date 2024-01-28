

import React from 'react'
import { Outlet, Link } from "react-router-dom";
import ProfileFBC from "./Profile";
import ProfileCBC from "./ProfileClass"
import { Component } from "react";
import UserContext from "../utils/UserContext";
import mainImg from "../../assets/food3.jpg"
import handShake from "../../assets/handshake.png"
import rating from "../../assets/rating.png"
import orderFood from "../../assets/orderFood.png"
import delivery from "../../assets/delivery.png"
import discover from "../../assets/discovery.png"
import waiter from "../../assets/waiter.png"


const About = () => {
  return (

    <div className=''>

        <div className='flex items-center justify-center '>

        <div className='w-[10%]'>
            <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-left  ' />
        </div>

        <div className='flex flex-col gap-5 w-[40%] pl-16 '>

            <img src={handShake} alt="" className='w-[60%] ml-10' />

            <p className='font-font1 text-3xl w-[90%] '>Welcome to <Link to="/"> <span className='text-[#CB2C2C] font-font4'> FoodBell</span> </Link> , your culinary confidante! Beyond just an app, we're your flavor curator, ensuring top-notch eats reach your door effortlessly. Dive into a world of tastes, easy orders, and pure satisfaction. Let's redefine your dining journey, where every bite is an adventure!</p>
            
        </div>

        <div className='w-6/12'>
            <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-center  ' />
        </div>
            
        </div>


        <div className=' w-[70%] my-10  mx-auto'>

            <h1 className='text-center font-font5 text-4xl text-[#373267] my-5 py-5 border-b border-t'>Our Services</h1>

            <div className='flex flex-wrap gap-10 justify-evenly my-10'>

                <div className='bg-gray-100 rounded-full w-[35%] flex flex-col items-center p-2'>
                    <img src={discover} alt="" className='w-[60%]'/>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <h1 className='font-font5 text-center text-xl text-[#373267] '>Restaurant Discovery</h1>
                        <div className='text-[#37383c] font-semibold text-center text-sm'>Users can browse through a variety of restaurants, cafes, and eateries in their vicinity, exploring menus, reviews, and ratings</div>
                    </div>
                </div>

                <div className='bg-gray-100 rounded-full w-[35%] flex flex-col items-center p-2'>
                    <img src={orderFood} alt="" className='w-[60%]'/>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <h1 className='font-font5 text-center text-xl text-[#373267] '>Order Placement</h1>
                        <div className='text-[#37383c] font-semibold text-center text-sm'> Users can place orders for food items directly through the app. This often involves selecting dishes, customizing options, and specifying delivery preferences</div>
                    </div>
                </div>

                <div className='bg-gray-100 rounded-full w-[35%] flex flex-col items-center p-2'>
                    <img src={delivery} alt="" className='w-[60%]'/>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <h1 className='font-font5 text-center text-xl text-[#373267] '>Delivery Services</h1>
                        <div className='text-[#37383c] font-semibold text-center text-sm'>The app facilitates the delivery of orders to the user's specified location through a network of delivery personnel, ensuring a convenient and timely service</div>
                    </div>
                </div>

                <div className='bg-gray-100 rounded-full w-[35%] flex flex-col items-center p-2 '>
                    <img src={rating} alt="" className='w-[60%]'/>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <h1 className='font-font5 text-center text-xl text-[#373267] '>Customer Reviews and Ratings</h1>
                        <div className='text-[#37383c] font-semibold text-center text-sm'> Users can leave reviews and ratings for restaurants, helping others make informed decisions, and providing valuable feedback to the establishments</div>
                    </div>
                </div>                

            </div>

        </div>

        <div className='w-[100%] mb-10 '>
            <h1 className='text-center font-font5 text-4xl text-[#373267] my-5 py-5 border-b border-t'>Why Choose Us ?</h1>

            <div className='w-[100%] flex items-center justify-evenly '>

                <div className='w-[30%]'>
                    <img src={waiter} alt="" className='h-[400px]' />
                </div>

                <div className='w-[30%] '>
                    <h1 className='font-font2 text-4xl text-[#373267]  ' >Every flavor becomes delicious</h1>
                    <p className='text-3xl font-font1 font-semibold text-gray-600 py-4'>From your neighbourhood, from South Indian spot to the Burger and Fries you crave, Choose from a number of different restaurants</p>
                    <Link to="/restaurants">
                        <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center hover:shadow hover:shadow-red-400">{"order now >"}</button>
                    </Link>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col bg-[#CB2C2C] text-white px-10 py-1 rounded-lg'>
                        <h1 className='font-font5 text-4xl text-center'>220K+</h1>
                        <p className='font-font5 text-xl text-center'>online orders</p>
                    </div>

                    <div className='flex flex-col bg-[#CB2C2C] text-white px-10 py-1 rounded-lg'>
                        <h1 className='font-font5 text-4xl text-center'>50K+</h1>
                        <p className='font-font5 text-xl text-center'>trusted clients</p>
                    </div>

                    <div className='flex flex-col bg-[#CB2C2C] text-white px-10 py-1 rounded-lg'>
                        <h1 className='font-font5 text-4xl text-center'>30K+</h1>
                        <p className='font-font5 text-xl text-center'>customer reviews</p>
                    </div>
                </div>


            </div>



        </div>



    </div>
  )
}

export default About



// learnt class based components in about section

// class About extends Component {

//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
        
//     }

    



//     render() {
//         return (
//             <div>
//                 <UserContext.Consumer>
//                     {
//                         (data)=>{
//                             return (
//                                 <h1 className="text-2xl font-bold">Hello, {data.user.name}</h1>
//                             )
//                         }
//                     }
//                 </UserContext.Consumer>
//                 <h1>About us</h1>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur culpa odit.</p>
//                 <div>
//                     <ProfileFBC temp="propOfFuntionalComp"/>

//                 </div>
//             </div>
//         )

//     }
// }

// export default About;

/**
 * life cycle 
 * 
 * parent's render phase{
 * 
 *      parent constructor
 *      parent render
 *          
 *      children render phase{
 * 
 *          first child constructor
 *          first child render
 *          second child constructor
 *          second child render
 *      }
 * 
 *      children commit phase{
 * 
 *          DOM of children is updated
 *          
 *          first child componentDidMount
 *          second child componentDidMount
 *      }
 *      
 * 
 * }
 * parent's commit phase{
 * 
 *      DOM of parent is updated
 * 
 *      parent componentDidMount * 
 * }
 *      
 */