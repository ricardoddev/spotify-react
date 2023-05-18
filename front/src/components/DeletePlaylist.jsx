import React, { useState } from "react";
import axios from "axios";
import ButtonBack from "./ButtonBack";
import ButtonCreate from "./ButtonCreate";

const DeletePlaylist = () => {
    const [id, setId] = useState("")
    const [confirmacao, setConfirmacao] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === confirmacao) {
          const url = `http://localhost:3001/playlists/${id}`;
          axios.delete(url)
            .then(() => {
              alert("Playlist deletada com sucesso!");
            })
            .catch((error) => {
              console.log("Ocorreu um erro ao deletar a playlist: ", error);
              alert("Ocorreu um erro. Consulte o console para mais informações")
            });
        } else {
          alert("Os ID's não coincidem!");
        }
      };

    return(
        <div className="bgPadrao">
        <h1>Deletar playlist</h1>
        <form id="formAddPlaylist" onSubmit={handleSubmit}>
          <label htmlFor="id">ID da playlist</label>
          <input
            id="id"
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            
          />
        
          <label htmlFor="banda">Confirmar ID</label>
          <input
            id="confirmacao"
            type="text"
            name="confirmacao"
            value={confirmacao}
            onChange={(e) => setConfirmacao(e.target.value)}
          />
          <div className="centralizar">
            <ButtonBack />
            <ButtonCreate>Deletar</ButtonCreate>
          </div>
        </form>
      </div>
    )
}

export default DeletePlaylist