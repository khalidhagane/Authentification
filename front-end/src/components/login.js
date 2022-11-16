import { useContext, useState  } from 'react'
import axios from 'axios'
import { useNavigate,Link, useLocation} from 'react-router-dom';
import Submit from './Submit';

function Login() {

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage] = useState(false);

  async function registerUser(event) {
    event.preventDefault()
    const API_URL = "http://localhost:8081/api/auth/login"
    const user = {
      
      email,
      password
    } 

    await axios.post(API_URL, user,{withCredentials:true})
      .then(res => {
          console.log(" page profile")
          const  roles = res.data.role.role
          const email = res.data.email
          const name = res.data.name
          localStorage.setItem("role", roles)
          localStorage.setItem("email", email)
          localStorage.setItem("name", name)
          // console.log(myRole)
          
          window.location.href = "/";
          // navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      })

  }
  
    return (
      
      <form className="auth-inner" onSubmit={registerUser}>
        <h3>Sign In</h3>
        {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" autoComplete="on"/>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1"> Remember me </label>
          </div>
        </div>
        <Submit/>
        <p className="forgot-password text-right">
          Forgot <Link  to={'/forgot'}>password?</Link>
        </p>
      </form>
      
    )
  }
  export default Login 