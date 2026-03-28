

import React from 'react'
import mainImg from "../../assets/food3.jpg"
import emptycart from "../../assets/emptycart.png"
import orderDone from "../../assets/orderDone.jpg"
import hurray from "../../assets/hurray.png"
import check from "../../assets/check.png"
import { Link } from 'react-router-dom'

const EmptyCart = ({order}) => {

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:min-h-[77vh] '>

        <div className="hidden md:block md:w-[50%]">
            <img src={mainImg} alt="" className='h-52 md:h-[77vh] w-full object-cover object-center  ' />
        </div>

        <div></div>

        {order ? (            

            <div className='flex flex-col gap-4 w-full md:w-[40%] px-6 md:pl-[5%] py-10 md:py-0 '>

                <p className=' text-[#CB2C2C] text-xl md:text-2xl lg:text-4xl font-font2 relative top-8 -left-5 flex items-center gap-3'>{"Hurray! order placed"} <img src={check} alt="" className='w-12 lg:w-16'/>  </p>       
                    

                <img src={hurray} alt="" className='w-full md:w-[80%]' />

                <Link to="/restaurants">
                    <p className='text-center text-[#CB2C2C] text-xl md:text-2xl lg:text-4xl font-font2'>{"order, eat, repeat :)"}</p>
                </Link>
                {/* <p className='text-center text-[#CB2C2C] text-4xl font-font1'>{"always at yur fingertips"}</p> */}
            </div>
        ) : (
            <div className='flex flex-col gap-3 w-full md:w-[40%] px-6 md:pl-[5%] py-10 md:py-0 '>
                <p className=' text-[#CB2C2C] text-xl md:text-xl lg:text-3xl font-font1 relative top-8 -left-5'>{"Cart is empty :("}</p>

                <img src={emptycart} alt="" className='w-full md:w-[70%]' />

                <p className='text-center text-[#CB2C2C] text-sm sm:text-base md:text-base lg:text-2xl font-font1'>{"load the cart and fill your tummy :)"}</p>

                <Link to="/restaurants" className='mx-auto'>
                        <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center">{"check restaurants >"}</button>
                </Link>
            </div>
        )}

        <div className='hidden md:block md:w-[10%]'>
            <img src={mainImg} alt="" className='h-52 md:h-[77vh] w-full object-cover object-left  ' />
        </div>
        
        
    </div>
  )

}

export default EmptyCart