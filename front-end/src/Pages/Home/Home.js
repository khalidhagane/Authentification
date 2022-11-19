import React from 'react'

function Home() {
  return (
    < >
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
      <div>
        <img className='notfound' src={window.location.origin + '/img/home1.png'} alt="photodilivry" />
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

export default Home