function Rodape() {
  const exemploEstilo = {
    backgroundColor: "gray",
    padding: "2%",
    color: "white",
    border: "solid 4px gray",
  };

  return (
    <footer style={exemploEstilo}>
      <h2 style={{ textAlign: "center" }}>Rodapé da aplicação</h2>
      <p>Fundamentos de React</p>
      <p>
        <label htmlFor=""></label>
        Experimentando <b className="sombra">classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
