import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <Link to={"/"}>go back</Link>
    
    <div style={{width:'100%'}}>
     <img className='notfound' src={window.location.origin + '/img/error404.jpg'}  alt="logoMarhaba" style={{width:'100vw', height: '100vh'}}/>
     
    </div>
    </div>
  )
}

export default NotFound