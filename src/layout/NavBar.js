import React from 'react';
import { Link } from 'react-router-dom'
import { Div } from './NavBarStyles';

function NavBar(){
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
            
          </ul>
        </Div>
    )
}
export default NavBar;