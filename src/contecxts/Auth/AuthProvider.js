import React, { useEffect } from 'react';
import { useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const api = useApi();

    useEffect(() => {
        const ValidateToken = async () =>{
            const storageData = localStorage.getItem('authToken')
            if(storageData){
                const data= await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user);
                }
            }
        }
        ValidateToken();
    }, [api])

    const sigin = async (email, password) =>{
        const data = await api.signin(email, password);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () =>{
        setUser(null);
        setToken('')
        await api.logout();
    }

    const setToken = (token)=>{
        localStorage.setItem('authToken', token)
    }

    return(
        <AuthContext.Provider value={{user, sigin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}