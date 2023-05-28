import "./Contribua.css";

export default function Contribua(props) {
    return(
        <div className="secaoContribua">
            <h2 className="titulo">{(props.titulo)}</h2>
            <div className="secaoContribuaConteudo">
                <p>{props.textoSimples1}</p> 
                <p><b>{props.textoDestaque1}</b></p> 
                <p className="textoDestaque"><b>{props.textoDestaque2}</b></p> 
                <p>{props.textoSimples2}</p> <br />
            </div>
            
        </div>
        
    )
}