import React from "react";
import axios from "axios";
import ButtonBack from "./ButtonBack";
import ButtonCreate from "./ButtonCreate";

const AddPlaylist = () => {
    
    return (
        <div class="bgPadrao">
            <h1>Criar playlist</h1>
            <form id='formAddPlaylist'>
                <label for="titulo">Título</label><input type="text" name="titulo" value=""/>
                <label for="capa">Foto da capa</label><input type="text" name="capa" value="../arqvsMock/"/>
                <label for="arq">Arquivo MP4</label><input type="text" name="arq" value="../arqvsMock/"/>
            </form>
            <div class="centralizar">
                <ButtonBack />
                <ButtonCreate />
            </div>
        </div>
    )
}

export default AddPlaylist