import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const API_URL = "http://localhost:8081/api/auth/login"
    const user = {
      
      email,
      password
    } 

    await axios.post(API_URL, user)
      .then(res => {
       
        // if (res.status === 201) {
          
          console.log(" page profile")
          return navigate("/profile");

        // //   // console.log(res)
        // }
        // console.log(res);
        // console.log("hhhhh")
        // setMessage(Resporesnse.data.message);
      })
      .catch(err => {
        console.log(err.response.data.message);
        // setMessage(err.response.data.message);
        // console.log("gggggggggggggg")
      })

  }

    return (
      <form onSubmit={registerUser}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1"> Remember me </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"> Submit </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
  export default Login 