
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const Footer = ()=>{
    
    const {user} = useContext(UserContext);

    return (
        <div className="border-t">

            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 px-5 py-8">

                <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#CB2C2C] font-font4">Food</h2>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#CB2C2C] font-font4">Bell</h2>
                    </div>
                    <p className="font-font1 text-[#4c4f5a] text-sm md:text-base lg:text-lg">Feast your senses, not just your appetite</p>
                    <p className="font-font5 text-xs md:text-sm text-gray-400">~ we are more than fast ~</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-font5 text-sm md:text-base lg:text-lg text-[#373267] border-b border-[#CB2C2C] pb-1 w-fit">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">Home</Link></li>
                        <li><Link to="/restaurants" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">Restaurants</Link></li>
                        <li><Link to="/about" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">About Us</Link></li>
                        <li><Link to="/contact" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-font5 text-sm md:text-base lg:text-lg text-[#373267] border-b border-[#CB2C2C] pb-1 w-fit">Connect</h3>
                    <a href="https://github.com/akshayveera" target="_blank" rel="noreferrer" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">GitHub ↗</a>
                    <Link to="/contact" className="font-font5 text-sm md:text-base text-[#4c4f5a] hover:text-[#CB2C2C]">Get in touch ↗</Link>
                </div>

            </div>

        </div>
    )
}

export default Footer