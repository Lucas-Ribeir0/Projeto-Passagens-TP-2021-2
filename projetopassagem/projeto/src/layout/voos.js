import React from "react"
import "./voos.css"

const Voo = props => {
    let estilo = {
        backgroundColor: props.color || '#DDD',
        borderColor: props.bcolor || '#DDD',
        borderRadius: props.bradius || '4px',
        
    }
    return(
        <div className="numVoo" style = {estilo}>
            <div className="idVoo"><h2>{props.idVoo}</h2></div>
            <div className="infoVoo">{props.children}</div>
        </div>
    )
}

export default Voo