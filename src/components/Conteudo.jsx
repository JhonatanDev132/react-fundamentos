import styled from "styled-components";
import Artigos from "./Artigos";

const StyledConteudo = styled.main`
  width: 90vw;
  position: relative;
  top: 5rem;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  @media screen and (min-width: 650px) {
    div {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Teste</h2>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure
          aliquid doloribus eveniet ipsam, debitis a, eligendi deserunt,
          voluptatum qui explicabo officiis corrupti cupiditate voluptas.
          Voluptates expedita ea quo dolorem? Nemo non voluptatem doloribus
          quod, labore libero quo nesciunt sapiente iure illum tempore eum eius
          nulla nihil possimus, perferendis aliquid magnam dignissimos voluptate
          pariatur dolorem ex hic? Debitis, suscipit sapiente! Sit porro rerum
          facere eos doloremque quia nemo facilis illo repellendus! Nobis iure
          saepe deserunt quos, placeat beatae! Vitae mollitia molestiae enim
          culpa quisquam dolores, sequi ab doloremque blanditiis eum! Cum
          inventore magni suscipit id ipsa ad quae impedit minima, tempore
          pariatur nihil! Neque ex quos est a ipsum porro at, voluptatum nam ut
          fuga nihil atque, facere, vitae tenetur. Fugit voluptate officia rem?
          In, vitae labore numquam earum officia amet cum facere placeat magni
          porro esse iste, voluptatem hic. Aspernatur facilis sed tempore, ullam
          voluptate modi sint quas iure.
        </p>

        <div>
          <Artigos />
          <Artigos />
          <Artigos />
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
