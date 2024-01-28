

import React , {useState} from "react" 
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Restaurants from "./components/Restaurants"
import Footer from "./components/Footer"
// import About from "./components/About"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestuarantMenu from "./components/RestaurantMenu"
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import Shimmer from "./components/Shimmer"
import UserContext from "../src/utils/UserContext"
import {Provider} from "react-redux";
import store from "../src/utils/store"
import Home from "./components/Home"


import {lazy, Suspense} from "react"

// dynamic loading
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = ()=>{

  const [user, setUser] = useState({
      name : "Akshay",
      email : "akshay@gmail.com"
  })

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={
          {
            user : user,
            setUser : setUser,
          }      
        }>  
          <Header/>
          <Outlet/>
          <Footer/>
        </UserContext.Provider>
      </Provider>
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
        element: <Home/>
      },
      {
        path: '/restaurants',
        element : <Restaurants/>
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
        element: <ContactUs/>
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




