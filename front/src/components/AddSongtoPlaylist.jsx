import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import ButtonCreate from "./ButtonCreate";

const AddSongToPlaylist = () => {
    const [musica, setMusica] = useState("");
    const [banda, setBanda] = useState("");
    const [arquivo, setArquivo] = useState("../arqvsMock/");
    const { id } = useParams();
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const novaMusica = {
          nome: musica,
          cantor: banda,
          arq: arquivo
        };
      
        const url = `http://localhost:3001/playlists/${id}`;
        axios.get(url).then((res) => {
          const play = res.data
          play.musicas.push(novaMusica)
          
          axios.patch(url, play).then(() => {
            setMusica("")
            setBanda("")
            setArquivo("")
          })
        })
      };
  
    return (
      <div className="bgPadrao">
        <h1>Criar playlist</h1>
        <form id="formAddPlaylist" onSubmit={handleSubmit}>
          <label htmlFor="musica">Nome da música</label>
          <input
            id="musica"
            type="text"
            name="musica"
            value={musica}
            onChange={(e) => setMusica(e.target.value)}
          />
          <label htmlFor="banda">Músico/Banda</label>
          <input
            id="banda"
            type="text"
            name="banda"
            value={banda}
            onChange={(e) => setBanda(e.target.value)}
          />
          <label htmlFor="arquivo">Arquivo</label>
          <input
            id="arquivo"
            type="text"
            name="arquivo"
            value={arquivo}
            onChange={(e) => setArquivo(e.target.value)}
          />
          <div className="centralizar">
            <ButtonBack />
            <ButtonCreate>Adicionar</ButtonCreate>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddSongToPlaylist;