import React, { useState,useEffect,Suspense, lazy } from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./pages/Home";
import Navbar from  "./component/Navbar/Navbar"
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";

import Error from "./pages/Error";
import RestaurantMenu from "./component/RestaurantMenu/RestaurantMenu";
import userContext from "./utils/userContext";
import cartContext from "./utils/cartContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
const AppLayout = () => {
    const [userName,setUserName] = useState("")

    useEffect(()=>{
        const data ={
            name:"Jyoti Kumari"
        }
        setUserName(data.name)
    },[])
    return (
        <div>   
            <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser:userName,setUserName}}>
             <Navbar/>            
             <div className="content" >
             <Outlet/>
             </div>            
             </userContext.Provider>
            </Provider>
           

        </div>

    )
}
const Grocery = lazy(()=>import("./component/Grocery/Grocery"))

const App = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                
                <Route index element={<Home/>}/>
               
                    <Route path="/grocery" element={ <Suspense fallback={<h1> Loading... </h1>}><Grocery/>  </Suspense>}/>
              
               
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/logIn" element={<LogIn/>}/>
                <Route path="/restaurant/:resId" element={<RestaurantMenu/>}/>
                <Route path="*" element={<Error/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)