

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useCheckStatus from "../../utils/useCheckStatus";
import UserContext from "../../utils/UserContext";
import {useSelector} from "react-redux";

export const Title = ()=>{
    return (
      <>
        <h1 className="text-3xl font-bold">Food Villa</h1>
      </>
    )
}

const Header = ()=>{

  let [btnState, setBtnState] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (      
    <div className="flex bg-purple-100 justify-evenly items-center p-5">
        <Title/>  
        <ul className="flex">
            <li><Link to="/" className="px-2 ">Home</Link></li>
            <li><Link to="/about" className="px-2">About</Link></li>
            <li><Link to="/contact" className="px-2">Contact</Link></li>
            <li><Link to="/instamart" className="px-2">Instamart</Link></li>
            <li><Link to="/cart" className="px-2">Cart ({cartItems.length} items)</Link></li>            
        </ul>
        <h3>Network Status : {useCheckStatus()?"✅":"❌"}</h3>
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

