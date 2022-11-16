
import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import Notaccess from "./Notaccess";


const RequireAuth = ({Roles}) => {
    // const { auth } = useAuth();
    const role = localStorage.getItem("role")
    const email = localStorage.getItem('email')
    // console.log(Roles);
    const location = useLocation();
    // console.log(auth.myRole+"aaaaaaa")


    if (!(role && email)) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (Roles.indexOf(role) < 0) {
        return <Notaccess />;
    }

    return <Outlet />;
}
export default RequireAuth;  