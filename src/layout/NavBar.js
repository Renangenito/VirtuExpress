import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contecxts/Auth/AuthContext';
import { Div } from './NavBarStyles';

function NavBar(){
  const auth = useContext(AuthContext)

  const handleLogout = async () =>{
    await auth.signout();
    window.location.href = window.location.href;
  }
    return(
        <Div>
            <Link to='/'>
            </Link>
            <div>
            <h1>Loja virtual <span>VirtuExpress</span> </h1>

            </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Produtos'>Produtos</Link>
            </li>
            <li>
              <Link to='/sobre'>Sobre</Link>
            </li>
            <li>
              {auth.user && <button onClick={handleLogout}>Sair</button>}
            </li>
            
          </ul>
        </Div>
    )
}
export default NavBar;