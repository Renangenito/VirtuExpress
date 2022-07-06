import React, { useEffect, useState } from "react";
import ProjectCard from "../projeto/ProjectCard";
import { Section } from "./ProdutosStyled";
function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/produtos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProdutos(data)
      })
    console.log("Aqui é o log dos projetos" + produtos)
    // eslint-disable-next-line 
  }, [])

  function removeProjeto(id) {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProdutos(produtos.filter((produto) => produto.id !== id))
      })
  }

  return (
    <Section>

      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <ProjectCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            id={produto.id}
            handleRemove={removeProjeto}
          />
        ))}

      </ul>
    </Section>
  );
}

export default Produtos;

