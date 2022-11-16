import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

import RequireAuth from './components/RequireAuth'

import Login from './components/login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Marhaba from './components/Marhaba'
import Layout from './components/Layout'
import Forgot from './components/ForgotPassword';
import Reset from './components/ResetPassword';
import Manager from './components/Manager';
import Livreur from './components/Livreur';
import Client from './components/Client';
import Notaccess from './components/Notaccess';
import Logout from './components/Logout';

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Marhaba />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notaccess" element={< Notaccess />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path='/reset/:token' element={<Reset />} />
      </Route>

      <Route element={<RequireAuth Roles={["client","manager","livreur"]} />} >
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<RequireAuth Roles={"client"}/>} >
        <Route path="/client" element={<Client />} />
      </Route>

      <Route element={<RequireAuth Roles={"livreur"}/>} >
        <Route path="/livreur" element={<Livreur />} />
      </Route>

      <Route element={<RequireAuth Roles={"manager"}/>} >
        <Route path="/manager" element={<Manager />} />
      </Route>

      <Route path="/*" element={<NotFound />} />

    </Routes>





  )
}
