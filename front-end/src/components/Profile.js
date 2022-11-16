import React from 'react'

function Profile() {
  const name = localStorage.getItem('name')
  const role = localStorage.getItem('role')
  // console.log("nammmmme"+name)
  return (
    <div>
      <div className="auth-inner">
        <h1>hello mr {name}  </h1>
        <h1>you {role}</h1>
      </div>
    </div>
  )
}

export default Profile