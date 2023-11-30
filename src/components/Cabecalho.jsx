import Menu from "./Menu";

/* Importação do módulo CSS como um objeto chamado estilos (o nome é do critério o programador) */
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}>Olá</span>{" "}
        <span className={estilos.sombra}>React!</span>
      </h1>
      <hr />
      <p>Classes combinadas</p>

      {/* nav */}
      <Menu />
    </header>
  );
}

export default Cabecalho;
