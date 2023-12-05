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

function Artigos(props) {
  return (
    <>
      <StyledArtigos>
        <h3>{props.categoria}</h3>
        <p>Curso: {props.titulo}</p>
        <p>Custa: {props.preco}</p>
      </StyledArtigos>
    </>
  );
}

export default Artigos;
