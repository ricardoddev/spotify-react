import React from "react";
import { Link } from "react-router-dom";
import "../style.css"

const ButtonBack = () => {
    return (
        <div style={{ backgroundColor: "#696969"}}>
            <Link to='/playlists'><button id="button-back"  style={{ marginLeft: "15vw", marginBottom: "5%"}}>Voltar</button></Link>
        </div>
    )
}

export default ButtonBack