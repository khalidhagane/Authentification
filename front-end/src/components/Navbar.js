import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  ">
    <div className="container  ">
          <Link className="navbar-brand" to={'/'}>Marhaba</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02" >
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
  )
}

export default Navbar