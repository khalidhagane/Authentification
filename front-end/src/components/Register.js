import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import Select from 'react-select'

function Register() {
  
  // const options = [
  //   { value: 'client', label: 'client' },
  //   { value: 'manager', label: 'manager' },
  //   { value: 'livreur', label: 'livreur' }
  // ]

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [role, setRole] = useState('')
  const [message,setMessage] = useState(false);

  // const [message,setMessage] = useState(false);

  async function registerUser(event) {
    event.preventDefault()
    const API_URL = "http://localhost:8081/api/auth/regester"
    const user = {
      name,
      email,
      password,
        
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
        setMessage(err.response.data.message);
      })

  }

  return (
    <form onSubmit={registerUser}>
      <h3>Sign Up</h3>
      {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}

      <div className="mb-3">
        <label>Username</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Username"  />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"  />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"  />
      </div>
      {/* <div className="mb-3">
      <Select options={options}  /> */}
        {/* <label>Role</label> */}
        {/* <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} placeholder="enter Your role"  /> */}
      {/* </div> */}
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