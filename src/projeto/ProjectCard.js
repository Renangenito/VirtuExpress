import React from 'react';
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { CgDetailsMore } from 'react-icons/cg';
import { Li, Secao, DivButons, P } from './ProjectCardStyles';
function ProjectCard({ id, nome, descricao, preco, handleRemove }) {

    function remove(e) {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <Li>
            <h2>{nome}</h2>
            <p> <span>Valor: </span>R$ {preco}</p>
            <Secao>
            <div>
                <p><span> Descrição:</span></p>
                <P>{descricao}</P>
            </div>
               <DivButons>
               <Link to={`/produto/${id}`} >
                    <BsPencil />
                    Editar
                </Link>
                <Link to={`/produto/${id}`} >
                    <CgDetailsMore />
                    Detalhes
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
               </DivButons>
            </Secao>

        </Li>
    )
}
export default ProjectCard;