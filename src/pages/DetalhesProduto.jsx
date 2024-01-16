import { useParams } from "react-router-dom"

function DetalhesProduto(){
    const { id } = useParams();
    console.log(id);

    return <article>
        <h2>Título...</h2>
        <p><b>Categoria: </b> categoria...</p>
        <p><b>Preço: </b> preço...</p>
        <p>Descrição...</p>
        <img src="" alt="" />
    </article>
}

export default DetalhesProduto