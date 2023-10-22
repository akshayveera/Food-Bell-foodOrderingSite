
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = ()=>{
    
    const {user} = useContext(UserContext);

    return (
        
        <div className="flex justify-center items-center p-5 bg-purple-200 w-full">
            Developed by {user.name} with ❤️
        </div>
        
    )
}

export default Footer