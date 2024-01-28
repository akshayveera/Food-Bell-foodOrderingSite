
import React from 'react'
import mainImg from "../../assets/food3.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center justify-center '>

      <div className='w-[10%]'>
          <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-left  ' />
      </div>

      <div className='flex flex-col gap-5 w-[40%] pl-16  '>


          <div className='font-font2 text-5xl text-[#373267]'>
            <div>Feast Your Senses,</div>
            <div>Not Just Your Appetite</div>
          </div>

          <div className='text-3xl w-[50%] font-font1 text-[#4c4f5a] '>Discover a world of culinary delights at your fingertips. From local favorites to global cuisines, we've got your cravings covered</div>

          <Link to="/restaurants">
            <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center w-3/12 hover:shadow hover:shadow-red-400">{"order now >"}</button>
          </Link>

          <div className='text-[#CB2C2C] font-bold '>~ we are more than fast ~</div>
      </div>

      <div className='w-6/12'>
          <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-center  ' />
      </div>
        
    </div>
  )
}

export default Home