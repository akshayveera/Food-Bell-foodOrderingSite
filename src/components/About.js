

import { Outlet } from "react-router-dom";
import ProfileFBC from "./Profile";
import ProfileCBC from "./ProfileClass"
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    



    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        (data)=>{
                            return (
                                <h1 className="text-2xl font-bold">Hello, {data.user.name}</h1>
                            )
                        }
                    }
                </UserContext.Consumer>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur culpa odit.</p>
                <div>
                    <ProfileFBC temp="propOfFuntionalComp"/>

                </div>
            </div>
        )

    }
}

export default About;

/**
 * life cycle 
 * 
 * parent's render phase{
 * 
 *      parent constructor
 *      parent render
 *          
 *      children render phase{
 * 
 *          first child constructor
 *          first child render
 *          second child constructor
 *          second child render
 *      }
 * 
 *      children commit phase{
 * 
 *          DOM of children is updated
 *          
 *          first child componentDidMount
 *          second child componentDidMount
 *      }
 *      
 * 
 * }
 * parent's commit phase{
 * 
 *      DOM of parent is updated
 * 
 *      parent componentDidMount * 
 * }
 *      
 */