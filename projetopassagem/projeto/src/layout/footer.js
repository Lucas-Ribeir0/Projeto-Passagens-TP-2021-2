import React from "react";
import "./footer.css";
import github from "../img/github_PNG15.png" 

const Footer = _ => {
    return(
        <>
            <div className="Footer">
                <a href="https://github.com/Lucas-Ribeir0/Projeto-Passagens-TP-2021-2" rel="noreferrer" target="_blank"><img alt="github" src={github}/></a>
            </div>
        </>
    )
}

export default Footer