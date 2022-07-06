import React from 'react';
import Formulario from '../projeto/Formulario'
import { DivNovoProduto } from './NovoProdutoStyles';
function NovoProduto(){
    return(
       <DivNovoProduto>
            
           <h1>Novo Produto</h1>
           <Formulario />
       </DivNovoProduto>
    )
}
export default NovoProduto;