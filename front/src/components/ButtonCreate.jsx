import React from "react";
import "../style.css"

const ButtonCreate = ({ children, onClick }) => {
    return (
        <div style={{ backgroundColor: "#696969" }}>
            <button id="button-create" type="submit" onClick={onClick}>{children}</button>
        </div>
    )
}

export default ButtonCreate