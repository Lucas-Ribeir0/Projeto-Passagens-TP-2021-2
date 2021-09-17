import React from "react"
import "./voos.css"

const Voo = props => {
    let estilo = {
        backgroundColor: props.color || '#DDD',
        borderColor: props.bcolor || '#DDD',
        borderRadius: props.bradius || '4px',
        boxShadow: props.bshadow || '-2px 2px 0 0 rgba(0, 0, 0, 0.4)',
    }
    return(
        <div className="numVoo" style = {estilo}>
            <div className="idVoo"><h2>{props.idVoo}</h2></div>
            <div className="infoVoo">{props.children}</div>
        </div>
    )
}

export default Voo