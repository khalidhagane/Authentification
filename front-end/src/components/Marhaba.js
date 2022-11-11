import React from 'react'
import { Link } from 'react-router-dom';
// import Nav from './Nav';


function Marhaba() {
  return (
    <div>
      {}
    <article className="auth-inner">

      
            <h1>Bienvenido a Invbox </h1>
               <div className="d-grid">
                 <Link to="/login"  className="forgot-password text-right btn btn-primary ">Login</Link>
                 <Link to="/register" className="forgot-password text-right btn btn-primary ">Registr</Link>
               </div>
          
      </article>
      </div>
  )
  
}

export default Marhaba