import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const role = localStorage.getItem("role")
    const email = localStorage.getItem('email')
    // console.log(role);
    // console.log(email);

  return (
    
    <nav className="navbar navbar-expand-lg fixed-top  ">
    <div className="container  ">
          <Link className="navbar-brand" to={'/'}><img className=' imgNavbar ' src={window.location.origin + '/img/Logo-navbar.png'} alt="logonavbar" /></Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02" >
            <ul className="navbar-nav ml-auto">
            { 
            email?
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to={'/logout'}>logout</Link>
                </li>
              :
                <>
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to={'/login'}>Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to={'/register'}>Sign up</Link>
                </li> 
                </>
                }
              
                {
                role=="manager" ?
                <>
                  <li className="nav-item">
                  <Link className="nav-link text-dark fw-bolder" to={'/manager'}>manager</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder"  to={'/profile'}>Profile</Link>
                </li>
                </>
                :role=="livreur" ?
                <>
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to={'/livreur'}>livreur</Link>
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder"  to={'/profile'}>Profile</Link>
                </li>
                </li>
                </>
              :role=="client" ?
                <>
                
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to={'/client'}>clinet</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder"  to={'/profile'}>Profile</Link>
                </li>
                </>
                :
                <>
                <li className="nav-item">
                {/* <Link className="nav-link" to={'/client'}>clinet</Link> */}
                </li>
                </>
                }
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar