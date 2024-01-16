import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetalhesProduto(){
    const { id } = useParams();
    const [produto , setProduto] = useState([]);
    console.log(id);

    useEffect( () => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
                const dados = await resposta.json();
                setProduto(dados);
            } catch (error) {
                console.log("Erro ao carregar produto: "+error);
            }
        }

        carregarDados();
    }, [id] );

    

    return <article>
        <h2>{produto.title}</h2>
        <p><b>Categoria: </b> {produto.category}</p>
        <p><b>Preço: </b> {produto.price}</p>
        <p>{produto.description}</p>
        <img src="" alt="" />
    </article>
}



export default DetalhesProduto