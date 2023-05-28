import Sobre from "./Sobre";
import "./SecaoSobre.css";

export default function SecaoSobre() {
    return (

       <div className="secaoSobreContainer">
        <div className="SecaoSobre">
            <Sobre 
                titulo="Sobre o Núcleo"
            />
            <div className="secaoSobreConteudo">
                <Sobre
                     textoSimples="Somos um coletivo de militantes sociais que
                    calharam de também trabalhar com tecnologia."
            
                    textoDestaque="Contribuimos com soluções que ajudem a impulsionar a luta cotidiana, fazê-la mais forte e o
                        futuro cada vez mais promissor de quem trabalha."
                />
              
                    <button className="botao">
                        <a className="botao_ancora" target='_blank'
                        href="https://www.instagram.com/tecnologia.mtst/" rel="noreferrer" >
                        Siga nosso Instagram!!
                        </a>
                    </button>
            </div>
            
        </div>
        </div>
    )
}