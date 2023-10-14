
import React from "react";

// as functional component is just a function which returns JSX
// class component is also just a class that has a mandatory method render() which returns JSX

class Profile extends React.Component {
    constructor(props){
        super(props);
        // creating a state in CBC
        this.state = {
            userInfo : {
                name : "no name",
                bio : "no bio",
                avatar_url : "no url",
                location : "no location"
            }
        }

        console.log(this.props.name+" - constructor");
    }

    async componentDidMount(){
        console.log(this.props.name+" - componentDidMount (before API call)")
        // this is the best place to make an API call
        // this is executed after rendering
        // const data = await fetch("https://api.github.com/users/akshaymarch7");
        // const json = await data.json();
        // console.log(json)

        // this.setState({userInfo : json});

        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP");
        }, 1000);        

        console.log(this.props.name+" - componentDidMount (after API call)");
    };

    componentDidUpdate(prevProps, prevState){
        // if(this.state.count !== this.prevState.count){
        //     // this block executes only when count is updated
        // }
        // if(this.state.count2 !== his.prevState.count2 ||
        //     this.state.count3 !== his.prevState.count3 ){
        //         // this block executes when count2 or count3 is updated
        // }
        // the code outside conditions will execute for every update
        console.log("child - componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("child - componentWillUnmount");
        // use case of this is we use to clear up things when we leave the page
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                {console.log(this.props.name+" - render")}
                <h1>Profile class component</h1>
                <h1>Name : {this.state.userInfo.name}</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <p>Bio : {this.state.userInfo.bio}</p>
                <h3>Location : {this.state.userInfo.location}</h3>
            </div>
        )
    }
}

export default Profile;

/**
 * 
 * parent constructor
 * parent render
 *      first child constructor
 *      first child render
 *      
 *      first child componentDidMount (before API call)
 * 
 *      API call (this makes the further function async, therefore js stops its execution only for that function until fetch is returned
 *      but js really don't stop its execution, it skips the async part and starts executing it's synchronous part 
 *      that's why it starts executing parent's compoundDidMount 
 *      and then after fetch is completed the remaining part of async method or child's componentDidMount is executed 
 * 
 * parent componentDidMount 
 * 
 *      json is logged
 *      first child componentDidMount (after API call)
 *      
 *      child render
 *      child - componentDidUpdate
 *      child - componentWillUnmount
 * 
 *      
 *         
 */