import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonLayout from "../layout/ButtonLayout";
import Input from "../ComponentsDoForm/Input";
import TextArea from "../ComponentsDoForm/TextArea";
import Button from "../ComponentsDoForm/Button"
import { Section, Form } from "./ProdutoStyles";

function Produto() {
  const [showForm, setShowForm] = useState(false);
  const [produto, setProduto] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduto(data);
      });
  }, [id]);

  function alternarForm() {
    setShowForm(!showForm);
  }

  function handleChange(e) {
    
    setProduto({ ...produto, [e.target.name]: e.target.value })
      console.log(produto)
  }

 function editarProjeto(){
   fetch(`http://localhost:5000/produtos/${produto.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduto(data);
      });

   setShowForm(false)
 }

  return (
    <Section>
      <section>
        <div>
          <h3>
            <span>Produto: </span> {produto.nome}
          </h3>
          <ButtonLayout click={alternarForm} text="Editar Produto" />
        </div>
        {!showForm ? (
          <>
             <p>
              <span >Valor: R$</span> {produto.preco}
            </p>
            <p>
              <span>Descrição: </span>
            </p>
            <p>{produto.descricao}</p>
          </>
        ) : (
          <>
            <Form>
            <Input
              name="nome"
              placeholder="Digite o nome do produto"
              type="text"
              text="nome"
              id="nome"
              value={produto.nome || ""}
              handleOnChange={handleChange}
            />
            <Input
              name="preco"
              placeholder="Qual o valor do produto"
              type="number"
              text="preco"
              id="preco"
              value={produto.preco || ""}
              handleOnChange={handleChange}
            />
           
            <TextArea
              name="descricao"
              placeholder="Descrição sobre o produto"
              type="text"
              text="Sobre o produto"
              id="descricao"
              value={produto.descricao || ""}
              handleOnChange={handleChange}
            />
            <Button handleClick={editarProjeto} text="Concluir Edição"/>
            </Form>
          </>
        )}
      </section>
    </Section>
  );
}
export default Produto;
