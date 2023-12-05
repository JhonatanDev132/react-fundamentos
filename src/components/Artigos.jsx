import styled from "styled-components";

const StyledArtigos = styled.article`
  padding: 15px;
  margin: 0.5rem 0 0.5rem 0;
  background-color: #cde7fd;
  box-shadow: darkblue 0 0 1px inset;

  h3 {
    color: #43a7ff;
    padding-bottom: 5px;
    border-bottom: 1px solid #43a7ff;
  }

  p {
    padding-top: 5px;
    font-size: 1.1rem;
  }
`;

function Artigos({ imagem, icone, titulo, descricao, dataLivro, children }) {
  return (
    <>
      <StyledArtigos>
        <img src={imagem} alt="" />
        <h3>
          <span>{icone}</span>
          {titulo}
        </h3>
        <time>{dataLivro}</time>
        <p> {descricao} </p>

        {children}
      </StyledArtigos>
    </>
  );
}

export default Artigos;
