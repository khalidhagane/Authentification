import React from 'react'
import { Link } from 'react-router-dom';
// import Nav from './Nav';


function Marhaba() {
  return (
    
    // <div className='d-flex justify-content-around align-items-center'>
    //   <div>
    //     <img className='notfound' src={window.location.origin + '/img/home.png'} alt="logoMarhaba" />
    //   </div>

    //     <div className="card text-center p-4 ">
    //       <div className='px-2 py-3'>
    //           <h1 className=''>Bienvenue Sur Application  </h1>
    //           <span className='h1'>Marhaba</span>
    //           </div>
    //             <div className="d-flex justify-content-around flex-wrap d-grid gap-3">

    //               <Link to="/login"  className="forgot-password text-right btn btn-primary px-5">Login</Link>
    //               <Link to="/register" className="forgot-password text-right btn btn-primary px-5 ">Registr</Link>
    //             </div>

    //     </div>
    // </div>
    < >
    <div className=''>
          <div className="custom-shape-divider-bottom-1668269310 ">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>

      <div className= 'd-flex justify-content-around align-items-center flex-wrap '>
            <div style={{ zIndex: '23' }}>
              <img className='notfound' style={{ width: '680px' }} src={window.location.origin + '/img/10188-removebg.png'} alt="logoMarhaba" />
            </div>
          <div className="card text-center p-4"  style={{heigth : '230px', background : '#ffffffbf' }}>
                <div className='px-2 py-3'>
                  <h1 className=''>Bienvenue Sur Application  </h1>
                  <span className='h1'>Marhaba</span>
                </div>
              <div className="d-flex justify-content-around flex-wrap d-grid gap-3">
                  <Link to="/login" className="forgot-password text-right btn btn-primary px-5">Login</Link>
                  <Link to="/register" className="forgot-password text-right btn btn-primary px-5 ">Registr</Link>
              </div>
          </div>
      </div> 
    </div> 
    </>
  )

}

export default Marhaba