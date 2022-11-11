import React from 'react'

function NotFound() {
  return (
    // <div className="auth-wrapper">
    // <div className="auth-inner">NotFound 404</div>
    // </div>
    <div style={{width:'100%'}}>
     <img className='notfound' src={window.location.origin + '/img/404.jpg'} alt="logoMarhaba" style={{width:'100vw', height: '100vh'}}/>
    </div>
  )
}

export default NotFound