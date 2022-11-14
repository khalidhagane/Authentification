
import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({Roles}) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.roles)
    if(!(auth.roles && auth.email)){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return (

        auth.roles.find(role => Roles.includes(role))
            ? <Outlet />
            : auth?.email
                ? <Navigate to="Notaccess" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}
export default RequireAuth;  