import React, { useContext } from 'react';

import { useState } from "react"
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contecxts/Auth/AuthContext';
import { DivLogin } from './LoginStyles';

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () =>{
        if(email && password){
            const isLogged = await auth.sigin(email, password);
            if(isLogged){
                navigate('/')
            }else{
                alert("Não deu certo");
            }
        }
    }

    return (
        <DivLogin>
            <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" name="email" id="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Digite o seu email" required/>
            <input type="password" name="password" id="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Digite a sua senha" required/>
            <button type='submit'>Logar</button>
            </form>
        </DivLogin>
    )
}