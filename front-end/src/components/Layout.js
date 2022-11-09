import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="App">
       <Navbar/>
        <div className="auth-wrapper">
        {/* <div className="auth-inner"> */}
        
        <Outlet/>
        {/* </div> */}
        </div>
    </div>
  )
}

export default Layout