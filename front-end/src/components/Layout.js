import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Outlet } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/marhaba'}>Marhaba</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/register'}>Sign up</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/profile'}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="auth-wrapper">
            <div className="auth-inner">
        <Outlet/>
        </div>
        </div>

    </div>

  )
}

export default Layout