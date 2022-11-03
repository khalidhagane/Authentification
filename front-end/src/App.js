import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Marhaba from './components/Marhaba'
import Layout from './components/Layout'
import Forgot from './components/Forgot';



export default function App() {
  return (
    <Router>
    
      {/* <div className="App"> */}
              
              <Routes>
                <Route  path="/" element={<Layout />}>
                <Route path="/marhaba" element={<Marhaba />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/*" element={<NotFound />} />
                </Route>
              </Routes>
           
      {/* </div> */}
   
    </Router>
  )
}
// export default App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);