

import { useState } from "react";

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
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
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

