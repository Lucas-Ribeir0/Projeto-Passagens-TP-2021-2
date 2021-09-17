import React from "react"
import "./voos.css"

const Voo = props => {
    let estilo = {
        backgroundColor: props.color || '#DDD',
        borderRadius: props.bradius || '4px',
        boxShadow: props.bshadow || '-3px 3px 0 0 rgba(0, 0, 0, 0.2)',
    }
    return(
        <div className="numVoo" style = {estilo}>
            <div className="idVoo"><h2>{props.idVoo}</h2></div>
            <div className="infoVoo">{props.children}</div>
        </div>
    )
}

export default Voo