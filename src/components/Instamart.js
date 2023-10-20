
import {useState} from "react";

const Section = ({title, isVisible, setIsVisible})=>{

    // const [isVisible, setIsVisible] = useState(false);
    // const [btn, setBtn] = useState("show");

    return (
        <div className="border border-black p-4 m-2">
            <div className="flex-col mb-3">
                <h1 className="font-bold text-xl">{title}</h1>
                {isVisible ? 
                (                    
                    <div className="">
                    <button className="px-5 mx-5 cursor-pointer-pointer border border-purple-400 bg-purple-200 rounded-lg" onClick={()=>{
                        setIsVisible();
                    }}>hide</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam vitae dignissimos officia sit quod, mollitia nesciunt, voluptas tenetur voluptatibus, maiores aut aperiam eaque earum. Esse aut nobis ratione fuga mollitia repellendus reiciendis commodi, harum sequi repellat! Aperiam accusamus est nam praesentium magni velit nihil suscipit exercitationem, odio saepe cumque porro culpa quos error consectetur similique sequi iste at nobis necessitatibus vitae doloribus natus sed unde.</p> 
                    </div>
                    
                ):(
                    <button className="px-5 mx-5 cursor-pointer-pointer border border-purple-400 bg-purple-200 rounded-lg" onClick={()=>{
                        setIsVisible();
                    }}>show</button>                   
                    
                )                                 
                
                }
            </div>
            
            
        </div>
    )
}


const Instamart = ()=>{
    const [visibleSection, setVisibleSection] = useState(null);
    return(
        <div>
            <h1 className="text-3xl font-bold text-center">Instamart</h1>
            <div>
                <Section title="About Instamart" 
                isVisible = {visibleSection === "about"}
                setIsVisible = {
                    ()=>{
                        visibleSection === "about" ? (
                            setVisibleSection(null)
                        ) : (
                            setVisibleSection("about")
                        )
                    }
                }
                />
            </div>
            <div>
                <Section title="Team Instamart" 
                isVisible= {visibleSection === "team"}
                setIsVisible = {
                    ()=>{
                        visibleSection === "team" ? (
                            setVisibleSection(null)
                        ) : (
                            setVisibleSection("team")
                        )
                    }
                }
                />
            </div>
            <div>
                <Section title="Careers" 
                isVisible= {visibleSection === "career"}
                setIsVisible = {
                    ()=>{
                        visibleSection === "career" ? (
                            setVisibleSection(null)
                        ) : (
                            setVisibleSection("career")
                        )
                    }
                }
                />                
            </div>

        </div>
    )
}

export default Instamart;