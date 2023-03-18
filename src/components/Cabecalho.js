import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./assets/logo.png"
import "../style.css"

const Cabecalho = () =>{
    return (
        <header>
            <div>
                <Link to="/"><img src={Logo} alt="Logotipo Spotify" /></Link>
                <span>
                    <Link to="/faq">Dúvidas Frequentes</Link>            
                </span>
            </div>
        </header>
    )
}

export default Cabecalho