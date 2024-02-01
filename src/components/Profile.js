
import {useState, useEffect} from "react";

const Profile = (props)=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            // console.log("NAMASTE REACT");
        }, 1000);

        return()=>{
            // this is executed when the component is leaving the page (unmounting)
            clearInterval(timer);
        }
    })

    return (
        <div>
            <h2>This is Profile Functional Component</h2>
            <p>props of functional component : {props.temp}</p>
            <div>
                <p>count : {count}</p>
                <p>count2 : {count2}</p>
                <button onClick={()=>{
                    setCount(count+1)
                    setCount2(count2+2)
                }
                }>Count</button>
            </div>
        </div>
    )
}

export default Profile;