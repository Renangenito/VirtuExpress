import React from 'react';
import { useContext } from "react";
import { Login } from '../../pages/login/Login';
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({children}) => {

    const auth = useContext(AuthContext);

    if(!auth.user){
        return <Login />
    }

    return children;
}