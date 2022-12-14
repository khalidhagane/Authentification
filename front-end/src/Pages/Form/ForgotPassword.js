import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Submit from '../../components/Utils/Submit';

function Forgot() {
    const [email, setEmail] = useState('')
    
    const [message,setMessage] = useState(false);
  
    async function registerUser(event) {
      event.preventDefault()
      const API_URL = "http://localhost:8081/api/auth/Forgetpassword"
      const user = email
    await axios.post(API_URL, user)

        .then(res => {
            console.log("virefier email")
        })
        .catch(err => {
          console.log(err.response.data);
          setMessage(err.response.data.message);
        })
  
    }
    
      return (
        <form className="auth-inner" onSubmit={registerUser}>
          <h3>Forget password</h3>
          {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </div>
          <Submit/>
          
        </form>
      )
}

export default Forgot