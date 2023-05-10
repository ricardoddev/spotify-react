import React from "react";
import axios from "axios";
import ButtonBack from "./ButtonBack";
import { useState } from "react";
import ButtonCreate from "./ButtonCreate";

const AddPlaylist = () => {
    const [titulo, setTitulo] = useState('')
    const [capa, setCapa] = useState('../arqvsMock/')
    const [musicas, setMusicas] = useState([])
    //axios.post

    function handleSubmit(e) {
        e.preventDefault();
    
        const newPlaylist = { titulo, capa, musicas};

        axios.post('http://localhost:3001/playlists', newPlaylist).then( (res) => {
        setTitulo('');
        setCapa("");
        setMusicas([])
        })
    }

    return (
        <div class="bgPadrao">
            <h1>Criar playlist</h1>
            <form id='formAddPlaylist' onSubmit={handleSubmit}>
                <label for="titulo">Título</label><input id='titulo' type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <label for="capa">Foto da capa</label><input id='capa' type="text" name="capa" value={capa} onChange={(e) => setCapa(e.target.value)}/>
                <div class="centralizar">
                    <ButtonBack />
                    <ButtonCreate>Criar</ButtonCreate>
                </div>            
            </form>
        </div>
    )
}

export default AddPlaylist