

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import logo from "../../assets/foodbell.png"
import cart from "../../assets/cart.png"

export const Title = ()=>{
    return (
      <div className="flex gap-1">
        <h1 className="text-2xl lg:text-4xl text-[#CB2C2C]  font-font4">Food</h1>
        <h1 className="text-2xl lg:text-4xl text-[#CB2C2C] font-font4">Bell</h1>
      </div>
    )
}

const Header = ()=>{

  let [btnState, setBtnState] = useState(false);
  let [menuOpen, setMenuOpen] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems);

  //#CB2C2C

  return (      
    <div className="border-b px-5 py-4 relative" >

      <div className="flex justify-between items-center">

        <div className="items-center">
          <Link to="/" className="flex justify-center">
            <img data-testid="logo" src={logo} alt="" className="h-7 lg:h-10 "/> 
            <Title/>
          </Link>
        </div>

        {/* hamburger button - only visible on mobile */}
        <button className="block md:hidden p-2" onClick={()=> setMenuOpen(!menuOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>

        {/* desktop nav */}
        <ul className="hidden md:flex gap-3 lg:gap-7 items-center justify-center">
            <li><Link to="/" className="text-sm lg:text-lg font-font5 hover:text-[#CB2C2C] hover:border-b-2 hover:border-[#CB2C2C]">Home</Link></li>
            <li><Link to="/restaurants" className="text-sm lg:text-lg font-font5 hover:text-[#CB2C2C] hover:border-b-2 hover:border-[#CB2C2C]">Restaurants</Link></li>
            <li><Link to="/about" className="text-sm lg:text-lg font-font5 hover:text-[#CB2C2C] hover:border-b-2 hover:border-[#CB2C2C]">About Us</Link></li>
            <li><Link to="/contact" className="text-sm lg:text-lg font-font5 hover:text-[#CB2C2C] hover:border-b-2 hover:border-[#CB2C2C]">Contact Us</Link></li>
            {/* <li><Link to="/instamart" className="text-lg font-font5">Instamart</Link></li> */}                       
        </ul>

        
        {/* <h3 data-testid="online-status">Network Status : {useCheckStatus()?"✅":"❌"}</h3> */}
        {/* this is used to check the network status of the user */}

        <div className="hidden md:flex gap-5 items-center justify-center">
          <Link to="/cart" className=" font-font5 flex items-center gap-1" data-testid="cart">
            {/* <p className="text-[#CB2C2C] text-2xl">Cart</p> */}
            <img src={cart} alt="" className="h-6 lg:h-8" />
            <p className="bg-[#CB2C2C] h-5 w-5 text-center text-sm rounded-full text-white relative right-4 bottom-3">{cartItems.length}</p>
          </Link>

          { btnState ? (<button className="login-btn w-16 lg:w-20 text-center py-1 lg:py-2 bg-[#CB2C2C] text-white rounded-lg flex text-sm lg:text-lg font-font5 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{
            setBtnState(false)
          }}>Log Out</button>) : (
              <button className="login-btn w-16 lg:w-20 text-center py-1 lg:py-2 bg-[#CB2C2C] text-white rounded-lg flex text-sm lg:text-lg font-font5 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{
                setBtnState(true)
              }}> Log In </button>)
          }

        </div>

      </div>

      {/* mobile nav overlay - shown when hamburger is clicked */}
      { menuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-lg md:hidden flex flex-col px-5 py-4 gap-3 border-t">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="text-lg font-font5 hover:text-[#CB2C2C]" onClick={()=> setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/restaurants" className="text-lg font-font5 hover:text-[#CB2C2C]" onClick={()=> setMenuOpen(false)}>Restaurants</Link></li>
            <li><Link to="/about" className="text-lg font-font5 hover:text-[#CB2C2C]" onClick={()=> setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" className="text-lg font-font5 hover:text-[#CB2C2C]" onClick={()=> setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
          <div className="flex items-center gap-4 pt-2 border-t">
            <Link to="/cart" className="font-font5 flex items-center gap-1" data-testid="cart" onClick={()=> setMenuOpen(false)}>
              <img src={cart} alt="" className="h-8" />
              <p className="bg-[#CB2C2C] h-5 w-5 text-center text-sm rounded-full text-white relative right-4 bottom-3">{cartItems.length}</p>
            </Link>
            { btnState ? (<button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{ setBtnState(false) }}>Log Out</button>) : (
              <button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{ setBtnState(true) }}> Log In </button>)
            }
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;

