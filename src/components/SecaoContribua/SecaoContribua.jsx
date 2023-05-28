import Contribua from "./Contribua";
import "./SecaoContribua.css";

export default function SecaoContribua () {
    return (
        <div  className="secaoContribua">
            <Contribua
            titulo="Contribua com o Núcleo"
            />
            <div className="secaoContribuaConteudo">
                <Contribua
                textoSimples1="Todos os nossos cursos são gratuitos e 
                funcionamos a partir de doaçoes e trabalho voluntário."
                />
                <Contribua
                textoDestaque1="Sua ajuda pode garantir acesso a materiais, 
                kits didáticos, computadores e até a refeição que é 
                fornecida aos nossos alunos nos cursos presenciais."
                />
                <Contribua
                textoDestaque2="Chave Pix: mtst@nucleodetecnologia.com.br - 
                Associação Cidade para Todos" 
                />
                <Contribua
                textoSimples2="Ou aponte a câmera do seu celular para o nosso QR Code"
                />
            </div>
            <img src="https://nucleodetecnologia.com.br/assets/img/pix-mtst.jpg" alt="QR Code  para contribuição" />
        </div>
    )
}