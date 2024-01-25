

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import logo from "../../assets/foodbell.png"

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
  console.log(cartItems);

  //#CB2C2C

  return (      
    <div className="flex border-b justify-between items-center p-5 " >
        <div className="flex ml-24">
          <img data-testid="logo" src={logo} alt="" className="h-10 "/> 
          <Title/>
        </div>
        <ul className="flex gap-7 pr-28">
            <li><Link to="/" className="text-lg font-font5">Home</Link></li>
            <li><Link to="/restaurants" className="text-lg font-font5">Restaurants</Link></li>
            <li><Link to="/about" className="text-lg font-font5 ">About</Link></li>
            <li><Link to="/contact" className="text-lg font-font5">Contact</Link></li>
            {/* <li><Link to="/instamart" className="text-lg font-font5">Instamart</Link></li> */}                       
        </ul>

        
        {/* <h3 data-testid="online-status">Network Status : {useCheckStatus()?"✅":"❌"}</h3> */}
        {/* this is used to check the network status of the user */}

        <div className="flex gap-5 items-center">
          <Link to="/cart" className="text-lg font-font5" data-testid="cart">Cart ({cartItems.length} items)</Link>

          { btnState ? (<button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center" onClick={()=>{
            setBtnState(false)
          }}>Log Out</button>) : (
              <button className="login-btn w-20 text-center py-2 bg-[#CB2C2C] text-white rounded-lg flex text-lg font-font5 mr-24 justify-center" onClick={()=>{
                setBtnState(true)
              }}> Log In </button>)
          }

        </div>

    </div>
  );
}

export default Header;

