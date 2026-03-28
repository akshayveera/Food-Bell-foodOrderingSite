
import React from 'react'
import mainImg from "../../assets/food3.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>

      {/* mobile only image banner */}
      <div className='block md:hidden w-full'>
          <img src={mainImg} alt="" className='h-[45vh] sm:h-[50vh] w-full object-cover object-center' />
      </div>

      <div className='hidden md:block md:w-[10%] md:h-screen'>
          <img src={mainImg} alt="" className='h-full w-full object-cover object-left  ' />
      </div>

      <div className='flex-1 flex flex-col gap-5 w-full md:w-[40%] px-5 md:pl-16 py-8 md:justify-center '>


          <div className='font-font2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-[#373267] '>
            <div>Feast Your Senses,</div>
            <div>Not Just Your Appetite</div>
          </div>

          <div className='text-sm sm:text-base md:text-base lg:text-lg xl:text-2xl w-full md:w-[70%] lg:w-[60%] font-font1 text-[#4c4f5a] '>Discover a world of culinary delights at your fingertips. From local favorites to global cuisines, we've got your cravings covered</div>

          <Link to="/restaurants">
            <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center hover:shadow hover:shadow-red-400">{"order now >"}</button>
          </Link>

          <div className='text-[#CB2C2C] font-bold '>~ we are more than fast ~</div>
      </div>

      <div className='hidden md:block md:w-6/12 md:h-screen'>
          <img src={mainImg} alt="" className='h-full w-full object-cover object-center  ' />
      </div>
        
    </div>
  )
}

export default Home