import { useState } from "react";
import Menu from "./Menu";
/* Importação da lib Styled components */
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: #4d4dff;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  /* Usando gerenciamento de states Aqui definimos a chamada de uma função especial do
  React: 'useState'. Esta e outras funções iniciadas com o prefixo
  'use' são conhecidas como React Hooks.
  
  No caso do useState, usando desestruturação, criamos
  uma variável que representa o valor do state (titulo)
  e uma função responsável por atualizar o state (setTitulo)*/
  const [titulo, setTitulo] = useState("Olá React!😍");

  const mudarTitulo = () => {
    setTitulo("Oie! 😒");
  };

  return (
    <StyledCabecalho>
      <h1 onClick={mudarTitulo}>{titulo}</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
