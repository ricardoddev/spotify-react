import React from "react";
import "../style.css"

const ButtonCreate = ({ onClick }) => {
    return (
        <div style={{ backgroundColor: "#696969" }}>
            <button id="button-create" type="submit" onClick={onClick}>Criar</button>
        </div>
    )
}

export default ButtonCreate