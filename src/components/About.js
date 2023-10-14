

import { Outlet } from "react-router-dom";
import ProfileFBC from "./Profile";
import ProfileCBC from "./ProfileClass"
import { Component } from "react";

// const About2 = ()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur culpa odit.</p>
//             <div>
//                 <ProfileFBC temp="propOfFuntionalComp"/>
//                 <ProfileCBC temp="propOfClassComp"/>
//             </div>
//         </div>
//     )
// }

class About extends Component {

    constructor(props) {
        super(props);
        console.log("parent - constructor");
    }

    componentDidMount() {
        console.log("parent - componentDidMount");
        
    }

    // componentDidUpdate(){
    //     console.log("parent - componentDidUpdate");
    // }

    // componentWillUnmount(){
    //     console.log("parent - componentWillUnmount");
    // }

    render() {
        return (
            <div>
                {
                    console.log("parent - render")
                }
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur culpa odit.</p>
                <div>
                    {/* <button onClick={()=>{
                        this.setState({
                            count : this.state.count+1
                        })
                    }}>Click : {this.state.count}</button> */}
                    <ProfileFBC temp="propOfFuntionalComp"/>
                    {/* <ProfileCBC temp="propOfClassComp" name="first child" /> */}
                    {/* <ProfileCBC temp="propOfClassComp" name="second child" /> */}
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