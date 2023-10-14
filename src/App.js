

import React from "react" 
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestuarantMenu from "./components/RestaurantMenu"
import Profile from "./components/Profile"

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
        element: <About/>,
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
      }
    ]
  }
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);



