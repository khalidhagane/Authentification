import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Profile from './components/Profile'


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/sign-in'}>Marhaba</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-in'}>Login</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/register'}>Sign up</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/profile'}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
        </div>
      </div>
    </Router>
  )
}
export default App