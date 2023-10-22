

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import logo from "../../assets/logo.png"

export const Title = ()=>{
    return (
      <div>
        <h1 className="text-2xl font-bold">Food</h1>
        <h1 className="text-2xl font-bold">Villa</h1>
      </div>
    )
}

const Header = ()=>{

  let [btnState, setBtnState] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (      
    <div className="flex bg-purple-100 justify-evenly items-center p-5">
        <div className="flex">
          <img data-testid="logo" src={logo} alt="" className="h-16"/> 
          <Title/>
        </div>
        <ul className="flex">
            <li><Link to="/" className="px-2 ">Home</Link></li>
            <li><Link to="/about" className="px-2">About</Link></li>
            <li><Link to="/contact" className="px-2">Contact</Link></li>
            <li><Link to="/instamart" className="px-2">Instamart</Link></li>
            <li><Link to="/cart" className="px-2" data-testid="cart">Cart ({cartItems.length} items)</Link></li>            
        </ul>
        <h3 data-testid="online-status">Network Status : {useCheckStatus()?"✅":"❌"}</h3>
        { btnState ? (<button className="login-btn" onClick={()=>{
          setBtnState(false)
        }}>LogOut</button>) : (
          <div className="flex">
            <button className="login-btn" onClick={()=>{
              setBtnState(true)
            }}> LogIn </button>
            <p className="pl-4">{"Welcome "+user.name}</p>
          </div> )
        }
    </div>
  );
}

export default Header;

