import React, {useState} from "react"
import "./voos.css"
import Botao from "../components/button"


const Voo = props => {
    const [Assentos, setAssentos] = useState(props.assentos);
    
    let estilo = {
        backgroundColor: props.color || '#DDD',
        borderRadius: props.bradius || '4px',
        boxShadow: props.bshadow || '-3px 4px 9px 0 rgba(24, 52, 64, 0.6)',
        fontSize: props.fSize || '20px'
    }

    let estilo2 = {
        color: props.fcolor || '#111',
        fontWeight: props.fWeight || 'bolder',
        textDecoration: props.tDecor || 'underline'
    }
    
    function Reservar() {
        if(Assentos > 0) {
            setAssentos(Assentos - 1)}
    }
/*     function Cancelar() {
        if (Assentos < props.assentos){
            setAssentos(Assentos + 1)}
    } */
    return(
        <div className="numVoo" style = {estilo}>
            <div className="idVoo"><h2>{props.idVoo}</h2></div>
            <div className="info">
                <p><b>Partida:</b> {props.partida} </p>
                <p><b>Destino:</b> {props.destino}</p>
                <p><b>Horário de partida:</b> {props.horario}</p>
                <p>{Assentos > 0 ? (<div><span><b>Assentos Disponiveis:</b> {Assentos}</span></div>):
                     (<div><span style={estilo2}>Não há assentos Disponiveis</span></div>)}</p>
            </div>
            <Botao label="Reservar" click={(Reservar)}/>
            {/* <Botao label="Cancelar Reserva" click={(Cancelar)}/> */}
        </div>
    )
}

export default Voo