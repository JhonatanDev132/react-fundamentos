import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Produtos() {
    /* O state "produtos" é iniciado como um array vazio.
    Posteriormente (após o carregamento dos dados da API),
    ele será preenchido com os objetos/produtos. */


    const [produtos, setProdutos] = useState([]);

    // State de loading (por padrão, inicia ativado/true)
    const [loading, setLoading] = useState(true)

    /* Gerenciando o efeito colateral
    do componente para o carregamento
    dos dados da API. 
    
    Fluxo geral de funcionamento do código abaixo: 

    1) useEffect é carregado UMA VEZ a montagem da page (Produtos)
    OBS.:o [] indica que o useEffect não tem dependências
    adicionais e que será executado somente UMA VEZ.

    2) Em seguida, ele executa a função carregarDados.
    3) Ao término dela, atualiza o state (produtos)
    */
    useEffect( () => {
        const carregarDados = async () => {
        try{
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
            console.log(dados);
            setProdutos(dados);
            setLoading(false)
        } catch (error) {
            console.error("Houve um erro: "+error);
        }
    };
    
    carregarDados();
}, [] );

    


    return (
        <article>
            <h2>Produtos</h2>

            { loading ? ( <Loading /> ) : (produtos.map( produto => {
                return (<section key={produto.id}>
                    <h3>{produto.title}</h3>
                    <p>{produto.price}</p>
                    <p>{produto.description}</p>
                    <p> <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link> </p>
                </section>)
            })) }

        </article>
    );
}

export default Produtos