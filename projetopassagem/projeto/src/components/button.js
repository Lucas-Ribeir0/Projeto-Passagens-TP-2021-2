import React from "react";
import './botao.css';

const Botao = props => {
    return (
        
        <button onClick = {e => props.click && props.click(props.Reservar)}
        className={`
            botao
        `}>{
            props.label}
        </button>
    )
}

export default Botao