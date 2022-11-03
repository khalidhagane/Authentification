import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    
    const [message,setMessage] = useState(false);
  
    async function registerUser(event) {
      event.preventDefault()
      const API_URL = "http://localhost:8081/api/auth/Forgetpassword"
      const user = {
        
        email
      } 
  
    //   await axios.post(API_URL, user,{withCredentials:true})
    await axios.post(API_URL, user)

        .then(res => {
            console.log(" page profile")
            return navigate("/profile");
          
        })
        .catch(err => {
          console.log(err.response.data);
          setMessage(err.response.data.message);
        })
  
    }
    
      return (
        <form onSubmit={registerUser}>
          <h3>Forget password</h3>
          {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </div>
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary"> Submit </button>
          </div>
          
        </form>
      )
}

export default Forgot