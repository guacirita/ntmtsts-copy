import "./CardIniciativa.css";

export default function  CardIniciativa(props) {
    return (
        <div className="container-card-modal">
            <img src={props.imagem} />
            <h4 className="titulo-card">{props.nome}</h4>
        </div>
    )
}