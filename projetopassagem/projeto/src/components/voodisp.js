import voos from "../data/voos";
import React, { Component } from "react";

class VoosDisp extends Component  {    
    main() {
        this.rng = (Math.floor(Math.random() * 10))

        this.item = voos.find(item => item.id ===  this.rng)

        return (<p>O voo <b>{this.item.voo}</b>, partindo de <b>{this.item.partida}</b> com destino a <b>{this.item.destino}</b> está disponível para embarque</p>)
    }

    render() {
    return(
        <div>
            <div className="display">
                {this.main()}
            </div>
        </div>
    )}
}

export default VoosDisp