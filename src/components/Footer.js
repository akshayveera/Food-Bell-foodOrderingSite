
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = ()=>{
    
    const {user} = useContext(UserContext);

    return (
        
        <div className="flex justify-center items-center h-20 border-t w-full font-font2 text-2xl text-[#4c4f5a] ">
            Developed by <span className="font-font2 px-2 text-[#CB2C2C]" >Akshay</span> with ❤️
        </div>
        
    )
}

export default Footer