

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import logo from "../../assets/foodbell.png"
import cart from "../../assets/cart.png"

export const Title = ()=>{
    return (
      <div className="flex gap-1">
        <h1 className="text-4xl text-[#CB2C2C]  font-font4">Food</h1>
        <h1 className="text-4xl text-[#CB2C2C] font-font4">Bell</h1>
      </div>
    )
}

const Header = ()=>{

  let [btnState, setBtnState] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems);

  //#CB2C2C

  return (      
    <div className="flex border-b justify-between items-center px-5 py-7 " >

        <div className="w-[30%] items-center mx-auto">
          <Link to="/" className="flex justify-center">
            <img data-testid="logo" src={logo} alt="" className="h-10 "/> 
            <Title/>
          </Link>
        </div>

        <ul className="flex gap-7  w-[60%] items-center justify-center">
            <li><Link to="/" className="text-lg font-font5">Home</Link></li>
            <li><Link to="/restaurants" className="text-lg font-font5">Restaurants</Link></li>
            <li><Link to="/about" className="text-lg font-font5 ">About Us</Link></li>
            <li><Link to="/contact" className="text-lg font-font5">Contact Us</Link></li>
            {/* <li><Link to="/instamart" className="text-lg font-font5">Instamart</Link></li> */}                       
        </ul>

        
        {/* <h3 data-testid="online-status">Network Status : {useCheckStatus()?"✅":"❌"}</h3> */}
        {/* this is used to check the network status of the user */}

        <div className="flex gap-5 items-center w-[30%] justify-center">
          <Link to="/cart" className=" font-font5 flex items-center gap-1" data-testid="cart">
            {/* <p className="text-[#CB2C2C] text-2xl">Cart</p> */}
            <img src={cart} alt="" className="h-8" />
            <p className="bg-[#CB2C2C] h-5 w-5 text-center text-sm rounded-full text-white relative right-4 bottom-3">{cartItems.length}</p>
          </Link>

          { btnState ? (<button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{
            setBtnState(false)
          }}>Log Out</button>) : (
              <button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center hover:shadow hover:shadow-red-400" onClick={()=>{
                setBtnState(true)
              }}> Log In </button>)
          }

        </div>

    </div>
  );
}

export default Header;

