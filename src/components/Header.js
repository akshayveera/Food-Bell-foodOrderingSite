

import { useState, useContext } from "react";
import {Link} from "react-router-dom";
// link is just a replcement for anchor tag(<a></a>) used in react for using links
// it takes "to" as prop to mention target link, like "href" in anchor tag
import useCheckStatus from "../../utils/useCheckStatus";
import UserContext from "../../utils/UserContext";

export const Title = ()=>{
    return (
      <>
        {/**inline styling need to be done in this */}
        <h1 className="text-3xl font-bold">Food Villa</h1>
      </>
    )
}

const Header = ()=>{

  // let [counter, setCounter ] = useState(0);
  let [btnState, setBtnState] = useState(false);

  const {user} = useContext(UserContext);

  return (      
    <div className="flex bg-purple-100 justify-evenly items-center p-5">
        <Title/>  
        {/* <button onClick={()=>{
          setCounter(++counter);
        }}>{"counter : "+counter}</button>               */}
        <ul className="flex">
            <li><Link to="/" className="px-2 ">Home</Link></li>
            <li><Link to="/about" className="px-2">About</Link></li>
            <li><Link to="/contact" className="px-2">Contact</Link></li>
            <li><Link to="/cart" className="px-2">Cart</Link></li>
            <li><Link to="/instamart" className="px-2">Instamart</Link></li>
            
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

