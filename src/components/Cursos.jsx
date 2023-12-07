/* Conteudo.jsx */
import Artigo from "./Artigos.jsx";
import styled from "styled-components";
import cursos from "../api/cursos.js";
import { useState } from "react";

function Cursos() {
  /* Criando um gerenciador de state para mudança/filtro
    de categorias. Inicialmente, como começa como null pois ainda não
    temos uma escolha/seleção de categoria (aparece tudo). */
  const [categoria, setCategoria] = useState(null)

  const aplicarFiltro = (event) => {
    // Capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  }

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
     /* Se o state categoria for igual a uma 
    das categorias dos cursos, então será retornada
    a lista de cursos daquela categoria. Senão, será 
    retornada lista completa devido ao state ser null (ou seja,
    não há uma categoria para filtrar) */
    return curso.categoria === categoria || categoria === null;
  })
  
  const limpaFiltro = () => {
    return setCategoria(null)
  }

  const quantidade = cursosFiltrados.length;
  return (
    <StyledCursos>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <br />

      <div className="filtros">
        <p><b>Filtrar por: </b> <br /> 
         <button onClick={aplicarFiltro}>Front-End</button> 
         <button onClick={aplicarFiltro}>Back-End</button> 
         <button onClick={aplicarFiltro}>Mobile</button>
         <button onClick={aplicarFiltro}>Música</button>
         <button onClick={aplicarFiltro}>Gastronomia</button>

         { categoria && (
         <button onClick={limpaFiltro}>Limpar Filtro 🧹</button>)}
         </p>
         <p>Quantidade de cursos: <b>{quantidade}</b></p>

         {/* Renderização Condicional
         o texto/tag/componente somente será renderizado/exibido 
         se o state categoria existir (ou seja, não é null, undefined, false) */}
         { categoria && <p> Você escolheu: <b>{categoria}</b> </p> }

         {quantidade === 0 && (
          <p style={{color: "red", textAlign: "center"}}>
            Não há cursos desta categoria!
          </p>
         )}
      </div>

      <br />

      <div className="artigos">
        {
          cursosFiltrados.map( curso => <Artigo
            key={curso.id}
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
          })} 
          /> )
        }
        
      </div>
    </StyledCursos>
  );
}

const StyledCursos = styled.section`

  .filtros {
    margin: auto;
    text-align: center;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }
  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      margin: auto;
      flex-wrap: wrap;
      width: 80%; 
      justify-content: space-between;

      & article {
        width: 48%;
      }
    }
  }
`;

export default Cursos;