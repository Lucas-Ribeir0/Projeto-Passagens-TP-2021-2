import React from "react"
import "./header.css"

const Header = props => {
    return(
        <div className="Header">
            <h1> {props.texto} </h1>
        </div>
    )
}

export default Header