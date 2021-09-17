import React from "react"

const Info = props => {
    return(
        <>
            <div className="origem">
                <p>Origem: {props.origem} </p>
            </div>
            <div className="origem">
                <p>Destino: {props.destino}</p>
            </div>
        </>
    )
}

export default Info