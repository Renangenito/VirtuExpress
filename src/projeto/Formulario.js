import React, { useState } from "react";
import Input from "../ComponentsDoForm/Input";
import Button from "../ComponentsDoForm/Button";
import { useNavigate } from 'react-router-dom';
import TextArea from "../ComponentsDoForm/TextArea";
import { Form } from "./FormularioStyles";

function Formulario() {
  const [campos, setCampos] = useState({})
  const [produtos, setProdutos] = useState({})

  const navigate = useNavigate()
  
  function adicionarProjetos() {

    
    fetch('http://localhost:5000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produtos),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        navigate('/produtos', { state: {message: 'Produto adicionado com sucesso!'} })
        
      })
  }


  
  function handleChange(e) {
    
    setCampos({ ...campos, [e.target.name]: e.target.value })
    console.log(campos)
    setProdutos({
        nome: campos.nome,
        preco: campos.preco,
        descricao: campos.descricao
      
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log('DAta informada: '+campos.data)
    adicionarProjetos()
    setCampos('')
  }


  return (
    <Form
    onSubmit={handleSubmit}
    >
      <Input
        name="nome"
        placeholder="Digite o nome do produto"
        type="text"
        text="Produto"
        id="nome"
        value={campos.nome || ""}
        handleOnChange={handleChange}
      />
      
       <Input
        name="preco"
        placeholder="Informe o valor do produto"
        type="number"
        text="Valor"
        id="preco"
        value={campos.preco || ""}
        handleOnChange={handleChange}
      />
      
      <TextArea 
      name="descricao"
      placeholder="Informação sobre o produto"
      type="text"
      text="Descrição"
      id="sobre"
      value={campos.descricao || ""}
      handleOnChange={handleChange}
      />
      <Button  text='Adicionar Produto' />
    </Form>
  );
}
export default Formulario;