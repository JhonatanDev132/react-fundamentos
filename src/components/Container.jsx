import styled from "styled-components";

function Container({children}) {
    return <StyledContainer>{children}</StyledContainer>        
}

const StyledContainer = styled.main`

  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  button {
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    margin: 0.5rem 0.5rem;
  }

  h2,
  p {
    padding: 0.2rem 0;
  }

`;

export default Container;