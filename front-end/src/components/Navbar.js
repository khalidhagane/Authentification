import React from 'react'
import { Link } from 'react-router-dom';
// import RequireAuth from './RequireAuth';


function Navbar() {
  const role = localStorage.getItem("role")
    const email = localStorage.getItem('email')
    console.log(role);
    console.log(email);


  return (
    
    <nav className="navbar navbar-expand-lg fixed-top  ">
    <div className="container  ">
          <Link className="navbar-brand" to={'/'}>Marhaba</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02" >
            <ul className="navbar-nav ml-auto">
            { 
            email?
              <li className="nav-item">
                <Link className="nav-link" to={'/logout'}>logout</Link>
                </li>
              :
                <>
                <li className="nav-item">
                <Link className="nav-link" to={'/login'}>Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Sign up</Link>
                </li> 
                </>
               }
              
                
                  {/* {
                    role==("manager"||"liverur"||"client" )?
                  <>
                <li className="nav-item">
                <Link className="nav-link"  to={'/profile'}>Profile</Link>
                </li>
                </>
                :<>
                <li className="nav-item">
                
                </li>
                </>
                } */}
                {
                
                role=="manager" ?
                <>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/manager'}>manager</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link"  to={'/profile'}>Profile</Link>
                </li>
                </>
                :role=="livreur" ?
                <>
                <li className="nav-item">
                <Link className="nav-link" to={'/livreur'}>livreur</Link>
                <li className="nav-item">
                <Link className="nav-link"  to={'/profile'}>Profile</Link>
                </li>
                </li>
                </>
              :role=="client" ?
                <>
                
                <li className="nav-item">
                <Link className="nav-link" to={'/client'}>clinet</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to={'/profile'}>Profile</Link>
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