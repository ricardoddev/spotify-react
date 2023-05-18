import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3001/musicas?_q=${busca}`)
      .then((response) => {
        setResultados(response.data);
      });
  };

  return (
    <div  style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pesquisar" style={{ color: "white", fontWeight: "bold", fontSize: "32px", marginRight: "10px"}}>Pesquisar</label>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {resultados && (
        <ul>
          {resultados.map((musica) => (
            <li key={musica.id}>
              {musica.nome} - {musica.cantor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;