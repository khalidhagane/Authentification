import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Nav from './Nav';

function Layout() {
  return (
    <div className="App">
       <Nav/>
        <div className="auth-wrapper">
            {/* <div className="auth-inner"> */}
                
        <Outlet/>
        {/* </div> */}
        </div>

    </div>

  )
}

export default Layout