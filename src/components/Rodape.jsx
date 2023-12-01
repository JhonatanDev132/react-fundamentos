import styled from "styled-components";

const StyledRodape = styled.footer`
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #020024 0%, #302c9b 43%, #00d4ff 100%);
  color: aliceblue;
  height: 8rem;
  position: relative;
  top: 12.3rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  );
}

export default Rodape;
