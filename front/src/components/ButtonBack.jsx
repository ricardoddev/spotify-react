import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css"

const ButtonBack = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1); // volta uma página
    }

    return (
        <div style={{ backgroundColor: "#696969"}}>
            <Link to='/playlists'><button id="button-back"  style={{ marginLeft: "15vw", marginBottom: "5%"}} onClick={handleBackClick}>Voltar</button></Link>
        </div>
    )
}

export default ButtonBack