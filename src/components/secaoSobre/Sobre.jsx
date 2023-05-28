import "./Sobre.css";

export default function Sobre (props) {
    return (
        <div className="SecaoSobre">
            <h2 className="titulo">{(props.titulo)}</h2>
            <div className="secaoSobreConteudo">
                <p>{props.textoSimples}</p> <br />
                <p><b>{props.textoDestaque}</b></p>
            </div>
          
        </div>
    )
}