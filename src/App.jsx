import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos";
import Container from "./components/Container";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route Component={Home} exact path="/"/>
          <Route Component={Produtos} path="/produtos"/>
          <Route Component={Contato} path="/contato"/>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
    </>
  );
}

export default App;