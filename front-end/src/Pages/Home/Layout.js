import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

function Layout() {
  return (
    <div className="App" style={{height : '100wh'}}>
       <Navbar/>
        <div className="auth-wrapper">
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout