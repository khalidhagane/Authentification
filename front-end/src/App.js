import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

import RequireAuth from './components/Auth/RequireAuth'

import Login from './Pages/Form/login'
import Register from './Pages/Form/Register'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import Home from './Pages/Home/Home'
import Layout from './Pages/Home/Layout'
import Forgot from './Pages/Form/ForgotPassword';
import Reset from './Pages/Form/ResetPassword';
import Manager from './components/Manager';
import Livreur from './components/Livreur';
import Client from './components/Client';
import Notaccess from './Pages/Notaccess';
import Logout from './components/Utils/Logout';

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
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
