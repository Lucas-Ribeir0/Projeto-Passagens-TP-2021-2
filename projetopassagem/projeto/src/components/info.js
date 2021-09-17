import React from "react"

const Info = props => {
    return(
        <>
            <div className="origem">
                <p>Partida: {props.partida} </p>
                <p>Destino: {props.destino}</p>
                <p>Assentos Disponíveis: {props.assentos}</p>
            </div>
        </>
    )
}

export default Info