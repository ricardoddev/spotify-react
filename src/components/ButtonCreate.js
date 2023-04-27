import React from "react";
import { Link } from "react-router-dom";
import "../style.css"

const ButtonCreate = () => {
    return (
        <div style={{ backgroundColor: "#696969" }}>
            <Link to='/playlists'><button id="button-create">Criar</button></Link>
        </div>
    )
}

export default ButtonCreate