

import React from 'react'
import sww from "../../assets/sww.png"
import { Link } from 'react-router-dom'

const SomethingWentWrong = () => {
  return (
    <div className='flex flex-col items-center '>
        <img src={sww} alt="" className='mx-auto my-5' />

        <Link to="/" >
            <button className='font-font5 bg-[#CB2C2C] text-xl text-white px-4 py-2 rounded-lg'>Go to Home</button>
        </Link>

        <p className='w-[70%] text-gray-500 text-sm my-9'>** note : this website is using swiggy's API to fetch the restaurants data. But Swiggy's API is CORS(Cross Origin Reseourse Sharing) protected so it doesn't allow directly from localhost, you need to have a proxy for CORS, one of the way is to add "Allow CORS" extension to your browser **   </p>
    </div>
  )
}

export default SomethingWentWrong