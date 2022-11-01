import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// 
function Register() {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  // const [message,setMessage] = useState(false);

  async function registerUser(event) {
    event.preventDefault()
    const API_URL = "http://localhost:8081/api/auth/regester"
    const user = {
      name,
      email,
      password,
      role
    }
    await axios.post(API_URL, user)
      .then(res => {
        if (res.status === 201) {
          return navigate("/sign-in");
          // console.log(res)
        }
        // console.log(res);
        // setMessage(Resporesnse.data.message);
      })
      .catch(err => {
        console.log(err.response.data);
        // setMessage(err.response.data.message);
      })

  }

  return (
    <form onSubmit={registerUser}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Username" required />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
      </div>
      <div className="mb-3">
        <label>Role</label>
        <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} placeholder="enter Your role" required />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" > Sign Up </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )
}

export default Register 