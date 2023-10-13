

import { useState } from "react";
import {Link} from "react-router-dom";
// link is just a replcement for anchor tag(<a></a>) used in react for using links
// it takes "to" as prop to mention target link, like "href" in anchor tag

export const Title = ()=>{
    return (
      <>
        {/**inline styling need to be done in this */}
        <h1 style={{color:"purple"}}>Food Villa</h1>
      </>
    )
}

const Header = ()=>{

  // let [counter, setCounter ] = useState(0);
  let [btnState, setBtnState] = useState(false);

  // console.log("I am header")

    return (      
      <div className="header">
          <Title/>  
          {/* <button onClick={()=>{
            setCounter(++counter);
          }}>{"counter : "+counter}</button>               */}
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>Cart</li>
          </ul>
          { btnState ? <button className="login-btn" onClick={()=>{
            setBtnState(false)
          }}>LogOut</button> : <button className="login-btn" onClick={()=>{
            setBtnState(true)
          }}>LogIn</button>}
      </div>
    );
}

export default Header;

