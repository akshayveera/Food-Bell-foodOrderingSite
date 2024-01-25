
import React from 'react'
import mainImg from "../../assets/food3.jpg"

const Home = () => {
  return (
    <div className='flex items-center justify-center '>

      <div className='flex flex-col gap-5 w-6/12 pl-36 mb-10   '>


          <div className='font-font2 text-5xl text-[#373267]'>
            <div>Feast Your Senses,</div>
            <div>Not Just Your Appetite</div>
          </div>

          <div className='text-3xl w-9/12 font-font1 text-[#4c4f5a] '>Discover a world of culinary delights at your fingertips. From local favorites to global cuisines, we've got your cravings covered</div>

          <button className="px-4 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center w-3/12">{"order now >"}</button>

          <div className='text-[#CB2C2C] font-bold '>~ we are more than fast ~</div>
      </div>

      <div className='w-6/12'>
          <img src={mainImg} alt="" className='h-[77vh] w-full object-cover object-center  ' />
      </div>
        
    </div>
  )
}

export default Home