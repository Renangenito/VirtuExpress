import React from 'react';
import carrinhoCompra from '../img/carrinho-compra.png'
import LinkButton from '../layout/LinkButton';
import { DivHome } from './HomeStyles';
function Home(){
    return(
        <DivHome>
            <p>Adicionar novo produto</p>
            <img src={carrinhoCompra} alt='carrinho de compras - logo' />
            <LinkButton to='/novo-produto' text="Novo Produto"/>
        </DivHome>
    )
}
export default Home;