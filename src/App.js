

import React, { Suspense } from "react" 
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestuarantMenu from "./components/RestaurantMenu"
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import Shimmer from "./components/Shimmer"
// import Instamart from "./components/Instamart"

/**
 * 
 * chunking
 * code splitting
 * dynamic bundling
 * lazy loading
 * on demand loading
 * dynamic import
 * 
 * these are all refer to same thing that is chunking our code or splitting our code
 * that means in large scale application the code is very big so we break them in chunks or we split them into different part
 * so that we can only load the code in the browser which is required * 
 */

import {lazy, Suspense} from "react"

// dynamic loading
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"))
// upon On demand loading  -->  upon render  -->  suspend loading

/**
 * here we splitted the code    of Instamart and About
 * that means the code of Instamart and About is loaded into browser only when user try to access it 
 */



const AppLayout = ()=>{
    return (
        <>  
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    );
};

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children : [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <Suspense fallback={
          <h1>Loading ...</h1>
        }>
          <About/>
        </Suspense>,
        children: [
          {
            path: "profile",
            // this path turns out to be : localhost:1234/about/profile
            // if path : "/profile" ====>  localhost:1234/profile
            element: <Profile/>
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path : "/restaurants/:resId",
        // :resId is used for dynamic routing
        // we can use any identfier for dynamic part if routing 
        // but we have to access with the same idenfifer when we want to access this using useParams hook
        element: <RestuarantMenu/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/instamart",
        element : <Suspense fallback={
          <Shimmer/>
        }>
          <Instamart/>
        </Suspense>
      },

    ]
  }
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);



