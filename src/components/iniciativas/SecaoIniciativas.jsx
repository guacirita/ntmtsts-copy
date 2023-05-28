import CardIniciativa from "./CardIniciativa";
import "./SecaoIniciativas.css"

export default function SecaoIniciativas() {
    return (
        <div className="container-conteudo">
            <h2 className="titulo_principal">Iniciativas</h2>
            <div className="container-cards">
                <CardIniciativa
                    nome="Curso de Programação"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/programacao.png"
                />
                <CardIniciativa
                    nome="Contrate quem luta"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/contrate.png"
                />
                <CardIniciativa
                    nome="App da Vitória"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/app-vitoria.png"
                />
            </div>
            <div className="container-cards">
            <   CardIniciativa
                    nome="Metodologia de Ensino"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/metodologia-ensino.png"
                />
                <CardIniciativa
                    nome="Núcleo de Produção"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/prod.png"
                />
                <CardIniciativa
                    nome="Projetos Futuros"
                    imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/futuro.png"
                />
            </div>
        </div>
    )
}
