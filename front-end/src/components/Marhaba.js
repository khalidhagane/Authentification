import React from 'react'
import { Link } from 'react-router-dom';

function Marhaba() {
  return (
    < >
    <div className='d-flex justify-content-around align-items-center'>
      <div>
        <img className='notfound' src={window.location.origin + '/img/home.png'} alt="logoMarhaba" />
      </div>

        <div className=" text-center p-4 ">
          <div className='px-2 py-3'>
              <h1 className=''>Bienvenue Sur Application  </h1>
              <span className='h1'>Marhaba!!</span>
              </div>
        </div>
    </div>
    
    </>
  )

}

export default Marhaba