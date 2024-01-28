

import React from 'react'
import mainImg from "../../assets/food3.jpg"
import emptycart from "../../assets/emptycart.png"
import orderDone from "../../assets/orderDone.jpg"
import hurray from "../../assets/hurray.png"
import check from "../../assets/check.png"
import { Link } from 'react-router-dom'

const EmptyCart = ({order}) => {

  return (
    <div className='flex items-center justify-center '>

        <div className="w-[50%]">
            <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-center  ' />
        </div>

        <div></div>

        {order ? (            

            <div className='flex flex-col gap-4 w-[40%] pl-[5%]  '>

                <p className=' text-[#CB2C2C] text-4xl font-font2 relative top-8 -left-5 flex items-center gap-3'>{"Hurray! order placed"} <img src={check} alt="" className='w-16'/>  </p>       
                    

                <img src={hurray} alt="" className='w-[80%]' />

                <Link to="/restaurants">
                    <p className='text-center text-[#CB2C2C] text-4xl font-font2'>{"order, eat, repeat :)"}</p>
                </Link>
                {/* <p className='text-center text-[#CB2C2C] text-4xl font-font1'>{"always at yur fingertips"}</p> */}
            </div>
        ) : (
            <div className='flex flex-col gap-3 w-[40%] pl-[5%]  '>
                <p className=' text-[#CB2C2C] text-3xl font-font1 relative top-8 -left-5'>{"Cart is empty :("}</p>

                <img src={emptycart} alt="" className='w-[70%]' />

                <p className='text-center text-[#CB2C2C] text-3xl font-font1'>{"load the cart and fill your tummy :)"}</p>

                <Link to="/restaurants" className='mx-auto'>
                        <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center">{"check restaurants >"}</button>
                </Link>
            </div>
        )}

        <div className='w-[10%]'>
            <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-left  ' />
        </div>
        
        
    </div>
  )

}

export default EmptyCart